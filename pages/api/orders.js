import { createOrder } from "../../lib/createOrder";

function isAuthorized(req) {
  const secret = process.env.INTERNAL_API_SECRET;
  if (!secret) {
    return false;
  }

  const header = req.headers["x-internal-secret"];
  return typeof header === "string" && header === secret;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  if (!isAuthorized(req)) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }

  try {
    const order = await createOrder(req.body.sessionData);
    return res.status(201).json({ success: true, data: order });
  } catch (error) {
    console.error("Orders API error:", error.message);
    return res.status(400).json({ success: false, error: error.message });
  }
}
