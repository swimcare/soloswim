function getGaId() {
  if (typeof window === "undefined") {
    return (
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ||
      process.env.GOOGLE_ANALYTICS_ID ||
      ""
    );
  }
  return window.__SOLOSWIM_GA_ID__ || "";
}

// log the pageview with their URL
export const pageview = (url) => {
  const gaId = getGaId();
  if (
    !gaId ||
    typeof window === "undefined" ||
    typeof window.gtag !== "function"
  ) {
    return;
  }
  window.gtag("config", gaId, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", action, params);
};
