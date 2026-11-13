/**
 * Public, non-secret runtime config for the browser.
 *
 * Important: do NOT use process.env.NEXT_PUBLIC_* with dot access here.
 * Next.js inlines NEXT_PUBLIC_* at build time (often as ""), which breaks
 * docker-compose env_file updates. Bracket access + a non-public name stay runtime.
 */
function env(name) {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const gaId =
    env("GOOGLE_ANALYTICS_ID") || env("NEXT_PUBLIC_GOOGLE_ANALYTICS");
  const clarityId =
    env("CLARITY_PROJECT_ID") || env("NEXT_PUBLIC_CLARITY_PROJECT_ID");
  // Full mcjs URL from Mailchimp → Integrations → Connected sites → Install
  // e.g. https://chimpstatic.com/mcjs-connected/js/users/<user>/<site>.js
  const mailchimpConnectedSiteUrl =
    env("MAILCHIMP_CONNECTED_SITE_URL") ||
    env("NEXT_PUBLIC_MAILCHIMP_CONNECTED_SITE_URL");

  res.setHeader("Cache-Control", "no-store");
  return res.status(200).json({
    gaId,
    clarityId,
    mailchimpConnectedSiteUrl,
    // Helps verify deploy without exposing secrets
    configured: {
      analytics: Boolean(gaId),
      clarity: Boolean(clarityId),
      mailchimpConnectedSite: Boolean(mailchimpConnectedSiteUrl),
    },
  });
}
