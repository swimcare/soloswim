import { useEffect, useState } from "react";
import Script from "next/script";
import { fetchPublicConfig } from "../lib/publicConfigClient";

const MCJS_PREFIX = "https://chimpstatic.com/mcjs-connected/js/users/";

/**
 * Mailchimp Connected Sites (mcjs) — site script URL from runtime env.
 * Enables Connected Site features (pop-ups, website retargeting, etc.).
 * Newsletter signup itself uses the Marketing API; this script is optional.
 */
function MailchimpConnectedSite() {
  const [scriptUrl, setScriptUrl] = useState("");

  useEffect(() => {
    let cancelled = false;

    fetchPublicConfig().then((data) => {
      if (cancelled) return;
      const url = String(data?.mailchimpConnectedSiteUrl || "").trim();
      if (!url.startsWith(MCJS_PREFIX)) return;
      setScriptUrl(url);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!scriptUrl) return null;

  return (
    <Script id="mcjs" src={scriptUrl} strategy="lazyOnload" />
  );
}

export default MailchimpConnectedSite;
