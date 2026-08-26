// log the pageview with their URL
export const pageview = (url) => {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  if (!gaId || typeof window === "undefined" || typeof window.gtag !== "function") {
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
