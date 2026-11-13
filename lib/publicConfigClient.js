/**
 * Browser helper: fetch /api/public-config once and reuse across tracking scripts.
 */
let cachedPromise = null;

export function fetchPublicConfig() {
  if (typeof window === "undefined") {
    return Promise.resolve(null);
  }

  if (!cachedPromise) {
    cachedPromise = fetch("/api/public-config")
      .then((res) => (res.ok ? res.json() : null))
      .catch((err) => {
        console.error("Public config error:", err);
        cachedPromise = null;
        return null;
      });
  }

  return cachedPromise;
}
