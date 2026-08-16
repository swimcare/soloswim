import {
  getMailgunClient,
  getMailgunContactTo,
  getMailgunDomain,
  getMailgunFrom,
  getMailgunReplyTo,
} from "../../lib/mailgunClient";

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

    const replyTo = getMailgunReplyTo();
    const internalTo = getMailgunContactTo();

    const internalText = `
Nieuw bericht via het SoloSwim-contactformulier

Naam: ${name}
Email: ${email}
Tel: ${tel || "-"}
Onderwerp: ${onderwerp}

Bericht:
${userMessage}

—
Antwoord rechtstreeks op deze mail om te reageren naar ${email}.
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
${replyTo}
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
<a href="mailto:${escapeHtml(replyTo)}">${escapeHtml(replyTo)}</a></p>
    `.trim();

    const mg = getMailgunClient();
    const domain = getMailgunDomain();
    // From must stay on the Mailgun sending domain (SPF/DKIM). Replies use Reply-To.
    const from = getMailgunFrom();

    const internal = await mg.messages.create(domain, {
      from,
      to: internalTo,
      "h:Reply-To": email,
      subject: `Contactformulier SoloSwim: ${onderwerp}`,
      text: internalText,
      html: internalText.replace(/\n/g, "<br />"),
    });

    console.log("Contact notify accepted:", {
      id: internal?.id,
      to: internalTo,
      message: internal?.message,
    });

    try {
      const confirmation = await mg.messages.create(domain, {
        from,
        to: [`${name} <${email}>`],
        "h:Reply-To": replyTo,
        subject: "We hebben je bericht ontvangen — SoloSwim",
        text: confirmationText,
        html: confirmationHtml,
      });

      console.log("Contact confirmation accepted:", {
        id: confirmation?.id,
        to: email,
        replyTo,
      });
    } catch (confirmError) {
      // SoloSwim notify already accepted; don't fail the form for the auto-reply.
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
