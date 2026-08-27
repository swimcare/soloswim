import { useEffect, useState } from "react";
import Script from "next/script";

/**
 * Loads GA4 using the measurement ID from runtime container env
 * (/api/public-config), so SSG pages still get Analytics without a rebuild.
 */
function GoogleAnalytics() {
  const [gaId, setGaId] = useState("");

  useEffect(() => {
    let cancelled = false;

    fetch("/api/public-config")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled) return;
        const id = String(data?.gaId || "").trim();
        if (!id) return;
        window.__SOLOSWIM_GA_ID__ = id;
        setGaId(id);
      })
      .catch((err) => {
        console.error("Google Analytics config error:", err);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!gaId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.__SOLOSWIM_GA_ID__ = '${gaId}';
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

export default GoogleAnalytics;
