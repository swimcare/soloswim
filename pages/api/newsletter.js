import { subscribeWithSoloSwimTag } from "../../lib/mailchimpClient";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ status: "NOT OK", error: "Method not allowed" });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};

    // Honeypot — bots fill this; real users leave it empty
    if (body.website) {
      return res.status(200).json({ status: "OK" });
    }

    const email = String(body.email || "").trim();
    const name = String(body.name || "").trim();
    const consent = Boolean(body.consent);

    if (!email || !EMAIL_RE.test(email)) {
      return res.status(400).json({
        status: "NOT OK",
        error: "Geef een geldig e-mailadres op.",
      });
    }

    if (!consent) {
      return res.status(400).json({
        status: "NOT OK",
        error: "Bevestig dat je je wilt inschrijven op de mailinglijst.",
      });
    }

    const result = await subscribeWithSoloSwimTag({
      email,
      firstName: name,
    });

    return res.status(200).json({
      status: "OK",
      subscriptionStatus: result.status,
    });
  } catch (error) {
    console.error("Newsletter subscribe error:", {
      message: error?.message,
      code: error?.code,
      status: error?.status,
      details: error?.details,
    });

    if (error?.code === "NOT_CONFIGURED") {
      return res.status(503).json({
        status: "NOT OK",
        error: "Inschrijving is tijdelijk niet beschikbaar.",
      });
    }

    return res.status(500).json({
      status: "NOT OK",
      error: "Inschrijving mislukt. Probeer het later opnieuw.",
    });
  }
}

export default handler;
