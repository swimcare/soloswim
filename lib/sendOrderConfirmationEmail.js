import {
  getMailgunClient,
  getMailgunDomain,
  getMailgunFrom,
  getMailgunReplyTo,
} from "./mailgunClient";

/**
 * Split a full name into first / last name.
 * First word → voornaam, remaining words → familienaam.
 */
function splitName(fullName) {
  const parts = String(fullName || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) {
    return { voornaam: "", familienaam: "" };
  }

  if (parts.length === 1) {
    return { voornaam: parts[0], familienaam: "" };
  }

  return {
    voornaam: parts[0],
    familienaam: parts.slice(1).join(" "),
  };
}

function parseEmailList(value) {
  return String(value || "")
    .replace(/^["']|["']$/g, "")
    .split(",")
    .map((part) => part.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

/**
 * SoloSwim inbox copy + optional Trustpilot Automatic Feedback Service BCC.
 */
function getOrderBccRecipients() {
  const soloSwimBcc = parseEmailList(
    process.env.MAILGUN_ORDER_BCC || "kristof@soloswim.be"
  );
  const trustpilotAfsBcc = parseEmailList(process.env.TRUSTPILOT_AFS_BCC);
  return [...new Set([...soloSwimBcc, ...trustpilotAfsBcc])];
}

/**
 * Send the Stripe checkout order confirmation email via Mailgun template.
 * Buyer receives the template; SoloSwim gets a BCC copy.
 * Optional TRUSTPILOT_AFS_BCC triggers Trustpilot Automatic Feedback Service.
 *
 * Mailgun template variables (Handlebars):
 * - subject, order_number, order_date, name, voornaam, familienaam
 * - line1, line2, postal_code, city, country
 * - subtotal, total, shipping (strings with 2 decimals)
 * - products (array of { id, name, price, type, editie })
 * - trustpilot_url, trustpilot_review_url (Trustpilot profile / leave a review)
 *
 * @param {object} sessionData
 * @returns {Promise<{ statusCode: number, id?: string }>}
 */
export async function sendOrderConfirmationEmail(sessionData) {
  if (!sessionData || typeof sessionData !== "object") {
    throw new Error("sessionData is required");
  }

  if (!sessionData.email) {
    throw new Error("sessionData.email is required");
  }

  const template =
    process.env.MAILGUN_ORDER_TEMPLATE?.trim() ||
    "soloswim bedankt voor je bestelling";
  const bcc = getOrderBccRecipients();

  const shipping = Number(sessionData.total) - Number(sessionData.subtotal);
  const line2 =
    sessionData.line2 === null ||
    sessionData.line2 === undefined ||
    sessionData.line2 === "null" ||
    sessionData.line2 === "undefined"
      ? ""
      : String(sessionData.line2);

  const fullName = String(sessionData.name || "");
  const { voornaam, familienaam } = splitName(fullName);

  console.log("Order email name split:", {
    order_number: sessionData.order_number,
    fullName,
    voornaam,
    familienaam,
  });

  const variables = {
    subject: `Bedankt voor je bestelling ${fullName}`.trim(),
    order_number: String(sessionData.order_number || ""),
    order_date: String(sessionData.order_date || ""),
    name: fullName,
    voornaam,
    familienaam,
    line1: String(sessionData.line1 || ""),
    line2,
    postal_code: String(sessionData.postal_code || ""),
    city: String(sessionData.city || ""),
    country: String(sessionData.country || ""),
    subtotal: Number(sessionData.subtotal).toFixed(2),
    total: Number(sessionData.total).toFixed(2),
    shipping: Number(shipping).toFixed(2),
    products: Array.isArray(sessionData.products)
      ? sessionData.products
      : [],
    trustpilot_url: "https://nl-be.trustpilot.com/review/soloswim.be",
    trustpilot_review_url: "https://nl-be.trustpilot.com/review/soloswim.be",
  };

  const mg = getMailgunClient();
  const domain = getMailgunDomain();

  try {
    const response = await mg.messages.create(domain, {
      from: getMailgunFrom(),
      to: [`${fullName || sessionData.email} <${sessionData.email}>`],
      ...(bcc.length ? { bcc } : {}),
      "h:Reply-To": getMailgunReplyTo(),
      subject: variables.subject,
      template,
      "h:X-Mailgun-Variables": JSON.stringify(variables),
    });

    console.log("Mailgun order confirmation accepted:", {
      id: response?.id,
      bccCount: bcc.length,
      trustpilotAfs: Boolean(process.env.TRUSTPILOT_AFS_BCC?.trim()),
    });
    return { statusCode: 200, id: response?.id };
  } catch (error) {
    const details =
      error?.details ||
      error?.message ||
      error?.status ||
      error;
    console.error("Mailgun order confirmation failed:", details);
    throw new Error(
      typeof details === "string" ? details : JSON.stringify(details)
    );
  }
}
