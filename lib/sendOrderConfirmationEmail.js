import {
  getMailgunClient,
  getMailgunDomain,
  getMailgunFrom,
} from "./mailgunClient";

/**
 * Send the Stripe checkout order confirmation email via Mailgun template.
 * Buyer receives the template; SoloSwim gets a BCC copy.
 *
 * Mailgun template variables (Handlebars), same names as the old SendGrid template:
 * - subject, order_number, order_date, name
 * - line1, line2, postal_code, city, country
 * - subtotal, total, shipping (strings with 2 decimals)
 * - products (array of { id, name, price, type, editie })
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
    "bedankt-voor-je-bestelling";
  const bcc =
    process.env.MAILGUN_ORDER_BCC?.trim() || "kristof@soloswim.be";

  const shipping = Number(sessionData.total) - Number(sessionData.subtotal);
  const line2 =
    sessionData.line2 === null ||
    sessionData.line2 === undefined ||
    sessionData.line2 === "null" ||
    sessionData.line2 === "undefined"
      ? ""
      : String(sessionData.line2);

  const variables = {
    subject: `Bedankt voor je bestelling ${sessionData.name}`,
    order_number: String(sessionData.order_number || ""),
    order_date: String(sessionData.order_date || ""),
    name: String(sessionData.name || ""),
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
  };

  const mg = getMailgunClient();
  const domain = getMailgunDomain();

  try {
    const response = await mg.messages.create(domain, {
      from: getMailgunFrom(),
      to: [`${sessionData.name} <${sessionData.email}>`],
      bcc: [bcc],
      subject: variables.subject,
      template,
      "h:X-Mailgun-Variables": JSON.stringify(variables),
    });

    console.log("Mailgun order confirmation accepted:", response?.id);
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
