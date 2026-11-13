import { useEffect, useState } from "react";
import Script from "next/script";
import { fetchPublicConfig } from "../lib/publicConfigClient";

/**
 * Loads GA4 using the measurement ID from runtime container env
 * (/api/public-config), so SSG pages still get Analytics without a rebuild.
 * lazyOnload keeps gtag off the critical path for LCP.
 */
function GoogleAnalytics() {
  const [gaId, setGaId] = useState("");

  useEffect(() => {
    let cancelled = false;

    fetchPublicConfig().then((data) => {
      if (cancelled) return;
      const id = String(data?.gaId || "").trim();
      if (!id) return;
      window.__SOLOSWIM_GA_ID__ = id;
      setGaId(id);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!gaId) return null;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
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
