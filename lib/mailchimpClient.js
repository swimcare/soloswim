import crypto from "crypto";

/**
 * Mailchimp Marketing API helpers for the SwimCare audience.
 * Env: MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID,
 * optional MAILCHIMP_SERVER_PREFIX (else taken from API key suffix),
 * optional MAILCHIMP_TAG (default SoloSwim),
 * optional MAILCHIMP_STATUS_IF_NEW (pending|subscribed, default pending).
 */
export function getMailchimpConfig() {
  const apiKey = String(process.env.MAILCHIMP_API_KEY || "").trim();
  const audienceId = String(process.env.MAILCHIMP_AUDIENCE_ID || "").trim();
  const serverPrefix = String(
    process.env.MAILCHIMP_SERVER_PREFIX || apiKey.split("-").pop() || ""
  ).trim();
  const tag = String(process.env.MAILCHIMP_TAG || "SoloSwim").trim();
  const statusIfNew = String(
    process.env.MAILCHIMP_STATUS_IF_NEW || "pending"
  )
    .trim()
    .toLowerCase();

  return {
    apiKey,
    audienceId,
    serverPrefix,
    tag,
    statusIfNew:
      statusIfNew === "subscribed" ? "subscribed" : "pending",
    configured: Boolean(apiKey && audienceId && serverPrefix),
  };
}

export function subscriberHash(email) {
  return crypto
    .createHash("md5")
    .update(String(email).toLowerCase().trim())
    .digest("hex");
}

async function mailchimpFetch(path, { method = "GET", body } = {}) {
  const { apiKey, serverPrefix } = getMailchimpConfig();
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0${path}`;

  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { detail: text };
  }

  return { ok: res.ok, status: res.status, data };
}

/**
 * Upsert subscriber on the SwimCare list and ensure the SoloSwim tag.
 */
export async function subscribeWithSoloSwimTag({ email, firstName }) {
  const config = getMailchimpConfig();
  if (!config.configured) {
    const err = new Error("Mailchimp is not configured");
    err.code = "NOT_CONFIGURED";
    throw err;
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const hash = subscriberHash(normalizedEmail);
  const mergeFields = {};
  if (firstName) mergeFields.FNAME = String(firstName).trim();

  const member = await mailchimpFetch(
    `/lists/${config.audienceId}/members/${hash}`,
    {
      method: "PUT",
      body: {
        email_address: normalizedEmail,
        status_if_new: config.statusIfNew,
        ...(Object.keys(mergeFields).length
          ? { merge_fields: mergeFields }
          : {}),
      },
    }
  );

  if (!member.ok) {
    const err = new Error(
      member.data?.detail || member.data?.title || "Mailchimp member error"
    );
    err.code = "MEMBER_ERROR";
    err.status = member.status;
    err.details = member.data;
    throw err;
  }

  const tags = await mailchimpFetch(
    `/lists/${config.audienceId}/members/${hash}/tags`,
    {
      method: "POST",
      body: {
        tags: [{ name: config.tag, status: "active" }],
      },
    }
  );

  if (!tags.ok) {
    const err = new Error(
      tags.data?.detail || tags.data?.title || "Mailchimp tag error"
    );
    err.code = "TAG_ERROR";
    err.status = tags.status;
    err.details = tags.data;
    throw err;
  }

  return {
    status: member.data?.status || config.statusIfNew,
    tag: config.tag,
  };
}
