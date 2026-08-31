import { useEffect } from "react";

const BASE_URL = "https://chat.swimcare.be";
const WEBSITE_TOKEN = "WWg5SwD9hCS2z34iBYGzziwv";

function injectChatwoot() {
  if (typeof window === "undefined" || window.__SOLOSWIM_CHATWOOT_LOADED__) {
    return;
  }
  window.__SOLOSWIM_CHATWOOT_LOADED__ = true;

  (function (d, t) {
    var g = d.createElement(t);
    var s = d.getElementsByTagName(t)[0];
    g.src = BASE_URL + "/packs/js/sdk.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g, s);
    g.onload = function () {
      window.chatwootSDK.run({
        websiteToken: WEBSITE_TOKEN,
        baseUrl: BASE_URL,
      });
    };
  })(document, "script");
}

/**
 * Loads Chatwoot after first user interaction or a short idle delay,
 * so the chat widget does not compete with LCP / main-thread work.
 */
function Chatwoot() {
  useEffect(() => {
    let loaded = false;

    const load = () => {
      if (loaded) return;
      loaded = true;
      injectChatwoot();
      cleanup();
    };

    const events = ["pointerdown", "keydown", "touchstart", "scroll"];
    events.forEach((event) => {
      window.addEventListener(event, load, { once: true, passive: true });
    });

    const timeoutId = window.setTimeout(load, 4500);
    const idleId =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(load, { timeout: 7000 })
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
        window.removeEventListener(event, load);
      });
    }

    return cleanup;
  }, []);

  return null;
}

export default Chatwoot;
