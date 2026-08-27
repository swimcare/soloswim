/**
 * Public, non-secret runtime config for the browser.
 * Reads container env on each request (works with docker-compose env_file).
 */
export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const gaId = (
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ||
    process.env.GOOGLE_ANALYTICS_ID ||
    ""
  ).trim();

  res.setHeader("Cache-Control", "no-store");
  return res.status(200).json({ gaId });
}
