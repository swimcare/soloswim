const FormData = require("form-data");
const Mailgun = require("mailgun.js");

/**
 * Shared Mailgun client for SoloSwim transactional email.
 * Uses EU endpoint by default (override with MAILGUN_API_URL if needed).
 */
export function getMailgunClient() {
  const apiKey = process.env.MAILGUN_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("MAILGUN_API_KEY is not configured");
  }

  const mailgun = new Mailgun(FormData);
  return mailgun.client({
    username: "api",
    key: apiKey,
    url: process.env.MAILGUN_API_URL?.trim() || "https://api.eu.mailgun.net",
  });
}

export function getMailgunDomain() {
  const domain = process.env.MAILGUN_DOMAIN?.trim();
  if (!domain) {
    throw new Error("MAILGUN_DOMAIN is not configured");
  }
  return domain;
}

export function getMailgunFrom() {
  return (
    process.env.MAILGUN_FROM?.trim() ||
    "SoloSwim <postmaster@mg.swimcare.be>"
  );
}
