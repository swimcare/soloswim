import { useEffect, useState } from "react";
import Script from "next/script";

const BASE_URL = "https://chat.swimcare.be";
const WEBSITE_TOKEN = "WWg5SwD9hCS2z34iBYGzziwv";

/**
 * Loads Chatwoot after first user interaction or a short idle delay,
 * so the chat widget does not compete with LCP / main-thread work.
 */
function Chatwoot() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return undefined;

    let armed = false;

    const arm = () => {
      if (armed) return;
      armed = true;
      setShouldLoad(true);
      cleanup();
    };

    const events = ["pointerdown", "keydown", "touchstart", "scroll"];
    events.forEach((event) => {
      window.addEventListener(event, arm, { once: true, passive: true });
    });

    const timeoutId = window.setTimeout(arm, 4500);
    const idleId =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(arm, { timeout: 7000 })
        : null;

    function cleanup() {
      window.clearTimeout(timeoutId);
      if (
        idleId != null &&
        typeof window.cancelIdleCallback === "function"
      ) {
        window.cancelIdleCallback(idleId);
      }
      events.forEach((event) => {
        window.removeEventListener(event, arm);
      });
    }

    return cleanup;
  }, [shouldLoad]);

  if (!shouldLoad) return null;

  return (
    <Script
      id="chatwoot-sdk"
      src={`${BASE_URL}/packs/js/sdk.js`}
      strategy="lazyOnload"
      onLoad={() => {
        if (typeof window === "undefined" || !window.chatwootSDK) return;
        if (window.__SOLOSWIM_CHATWOOT_LOADED__) return;
        window.__SOLOSWIM_CHATWOOT_LOADED__ = true;
        window.chatwootSDK.run({
          websiteToken: WEBSITE_TOKEN,
          baseUrl: BASE_URL,
        });
      }}
    />
  );
}

export default Chatwoot;
