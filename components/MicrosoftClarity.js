import { useEffect, useState } from "react";
import Script from "next/script";
import { fetchPublicConfig } from "../lib/publicConfigClient";

/**
 * Microsoft Clarity — project ID from runtime env via /api/public-config.
 * lazyOnload keeps it off the LCP path.
 */
function MicrosoftClarity() {
  const [clarityId, setClarityId] = useState("");

  useEffect(() => {
    let cancelled = false;

    fetchPublicConfig().then((data) => {
      if (cancelled) return;
      const id = String(data?.clarityId || "").trim();
      if (!id) return;
      setClarityId(id);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!clarityId) return null;

  return (
    <Script
      id="microsoft-clarity"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `,
      }}
    />
  );
}

export default MicrosoftClarity;
