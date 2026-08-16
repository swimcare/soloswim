import {
  getMailgunClient,
  getMailgunDomain,
  getMailgunFrom,
} from "../../lib/mailgunClient";

function envList(name, fallback) {
  const raw = process.env[name]?.trim().replace(/^["']|["']$/g, "");
  const value = raw || fallback;
  return value
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ status: "NOT OK", error: "Method not allowed" });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};

    if (!body.name || !body.email || !body.onderwerp || !body.message) {
      return res.status(400).json({
        status: "NOT OK",
        error: "Missing required fields",
      });
    }

    const name = String(body.name).trim();
    const email = String(body.email).trim();
    const tel = String(body.tel || "").trim();
    const onderwerp = String(body.onderwerp).trim();
    const userMessage = String(body.message).trim();

    const internalText = `
Naam: ${name}
Email: ${email}
Tel: ${tel}
Onderwerp: ${onderwerp}
Message: ${userMessage}
    `.trim();

    const confirmationText = `
Beste ${name},

Bedankt voor je bericht via het contactformulier van SoloSwim.

We hebben het goed ontvangen en nemen zo snel mogelijk contact met je op.

Samenvatting:
Onderwerp: ${onderwerp}
Bericht:
${userMessage}

Met sportieve groet,
SoloSwim
info@soloswim.be
    `.trim();

    const confirmationHtml = `
<p>Beste ${escapeHtml(name)},</p>
<p>Bedankt voor je bericht via het contactformulier van SoloSwim.</p>
<p>We hebben het goed ontvangen en nemen zo snel mogelijk contact met je op.</p>
<p><strong>Samenvatting</strong><br/>
Onderwerp: ${escapeHtml(onderwerp)}<br/>
Bericht:<br/>
${escapeHtml(userMessage).replace(/\n/g, "<br />")}
</p>
<p>Met sportieve groet,<br/>SoloSwim<br/>
<a href="mailto:info@soloswim.be">info@soloswim.be</a></p>
    `.trim();

    const mg = getMailgunClient();
    const domain = getMailgunDomain();
    const from = getMailgunFrom();
    const internalTo = envList("MAILGUN_CONTACT_TO", "info@soloswim.be");

    const internal = await mg.messages.create(domain, {
      from,
      to: internalTo,
      "h:Reply-To": email,
      subject: `[Contact] ${onderwerp}`,
      text: internalText,
      html: internalText.replace(/\n/g, "<br />"),
    });

    console.log("Contact notify accepted:", {
      id: internal?.id,
      to: internalTo,
    });

    try {
      const confirmation = await mg.messages.create(domain, {
        from,
        to: [`${name} <${email}>`],
        subject: "We hebben je bericht ontvangen — SoloSwim",
        text: confirmationText,
        html: confirmationHtml,
      });

      console.log("Contact confirmation accepted:", {
        id: confirmation?.id,
        to: email,
      });
    } catch (confirmError) {
      // SoloSwim already received the message; don't fail the form for the auto-reply.
      console.error("Contact confirmation failed:", {
        message: confirmError?.message,
        status: confirmError?.status,
        details: confirmError?.details,
      });
    }

    return res.status(200).json({ status: "OK" });
  } catch (error) {
    const details = {
      message: error?.message,
      status: error?.status,
      details: error?.details,
      type: error?.type,
    };
    console.error("Contact email error:", details);

    const isUnauthorized =
      /unauthorized/i.test(error?.message || "") || error?.status === 401;

    return res.status(500).json({
      status: "NOT OK",
      error: isUnauthorized
        ? "Mailgun Unauthorized — check MAILGUN_API_KEY and MAILGUN_API_URL on the server"
        : error?.message || "Mailgun error",
    });
  }
}

export default handler;
