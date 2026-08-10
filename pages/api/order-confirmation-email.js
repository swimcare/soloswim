import { sendOrderConfirmationEmail } from "../../lib/sendOrderConfirmationEmail";

function isAuthorized(req) {
  const secret = process.env.INTERNAL_API_SECRET;
  if (!secret) {
    return false;
  }

  const header = req.headers["x-internal-secret"];
  return typeof header === "string" && header === secret;
}

async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  if (!isAuthorized(req)) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }

  try {
    const result = await sendOrderConfirmationEmail(req.body.sessionData);

    if (result.statusCode === 202) {
      return res.status(200).json({ message: "ok" });
    }

    return res
      .status(result.statusCode)
      .json({ message: "error", statusCode: result.statusCode });
  } catch (error) {
    console.error("Email API error:", error.message);
    return res.status(500).json({ message: "error", error: error.message });
  }
}

export default handler;
