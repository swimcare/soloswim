const FormData = require("form-data");
const Mailgun = require("mailgun.js");

/** Strip whitespace and accidental wrapping quotes from env values. */
function env(name) {
  const raw = process.env[name];
  if (raw == null) return "";
  return raw.trim().replace(/^["']|["']$/g, "");
}

/**
 * Shared Mailgun client for SoloSwim transactional email.
 * Uses EU endpoint by default (override with MAILGUN_API_URL if needed).
 */
export function getMailgunClient() {
  const apiKey = env("MAILGUN_API_KEY");
  if (!apiKey) {
    throw new Error("MAILGUN_API_KEY is not configured");
  }

  const mailgun = new Mailgun(FormData);
  return mailgun.client({
    username: "api",
    key: apiKey,
    url: env("MAILGUN_API_URL") || "https://api.eu.mailgun.net",
  });
}

export function getMailgunDomain() {
  const domain = env("MAILGUN_DOMAIN");
  if (!domain) {
    throw new Error("MAILGUN_DOMAIN is not configured");
  }
  return domain;
}

export function getMailgunFrom() {
  return env("MAILGUN_FROM") || "SoloSwim <postmaster@mg.swimcare.be>";
}

/** Where customer replies should go (contact confirmation, etc.). */
export function getMailgunReplyTo() {
  return env("MAILGUN_REPLY_TO") || "info@soloswim.be";
}

/** Comma-separated inbox(es) for contact-form notifications. */
export function getMailgunContactTo() {
  const raw = env("MAILGUN_CONTACT_TO");
  const value = raw || "info@soloswim.be,kristof@soloswim.be";
  return value
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
}
