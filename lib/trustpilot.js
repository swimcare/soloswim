/** Trustpilot profile for SoloSwim */
export const TRUSTPILOT_URL =
  process.env.NEXT_PUBLIC_TRUSTPILOT_URL ||
  "https://nl-be.trustpilot.com/review/soloswim.be";

/** Direct “write a review” entry (same profile; Trustpilot shows the form). */
export const TRUSTPILOT_REVIEW_URL = TRUSTPILOT_URL;

/**
 * Business Unit ID from Trustpilot Business → Integrations → TrustBox.
 * Required for live TrustBox widgets (score + reviews).
 */
export function getTrustpilotBusinessUnitId() {
  return String(
    process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID ||
      process.env.TRUSTPILOT_BUSINESS_UNIT_ID ||
      ""
  ).trim();
}

export function isTrustpilotWidgetConfigured() {
  return Boolean(getTrustpilotBusinessUnitId());
}

/** Common TrustBox template IDs */
export const TRUSTBOX_TEMPLATES = {
  /** Micro Star — compact score */
  microStar: "5419b637fa0340045cd0c936",
  /** Mini — score + stars */
  mini: "53aa8807dec7e10d38f59f32",
  /** Horizontal — score + recent reviews strip */
  horizontal: "5406e65db0d04a09e042d5fc",
  /** Carousel — rotating reviews */
  carousel: "53aa8912dec7e10d38f59f48",
  /** Mini Combo */
  miniCombo: "5419b6ffb0d04a076446a9af",
};
