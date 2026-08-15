import {
  getMailgunClient,
  getMailgunDomain,
  getMailgunFrom,
} from "../../lib/mailgunClient";

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

    const message = `
Naam: ${body.name || ""}
Email: ${body.email || ""}
Tel: ${body.tel || ""}
Onderwerp: ${body.onderwerp || ""}
Message: ${body.message || ""}
    `.trim();

    const mg = getMailgunClient();
    const domain = getMailgunDomain();
    const to =
      process.env.MAILGUN_CONTACT_TO?.trim() || "kristof@soloswim.be";

    await mg.messages.create(domain, {
      from: getMailgunFrom(),
      to: [to],
      "h:Reply-To": body.email || to,
      subject: body.onderwerp || "Contactformulier SoloSwim",
      text: message,
      html: message.replace(/\n/g, "<br />"),
    });

    return res.status(200).json({ status: "OK" });
  } catch (error) {
    const details = {
      message: error?.message,
      status: error?.status,
      details: error?.details,
      type: error?.type,
    };
    console.error("Contact email error:", details);

    // Mailgun "Unauthorized" almost always means wrong API key or wrong API URL (EU vs US)
    return res.status(500).json({
      status: "NOT OK",
      error: error?.message || "Mailgun error",
    });
  }
}

export default handler;
