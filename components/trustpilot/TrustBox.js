import { useEffect, useRef } from "react";
import {
  getTrustpilotBusinessUnitId,
  TRUSTBOX_TEMPLATES,
  TRUSTPILOT_URL,
} from "../../lib/trustpilot";

/**
 * Official Trustpilot TrustBox. Requires NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID.
 * Falls back to a simple link if the ID is not configured yet.
 */
function TrustBox({
  template = "mini",
  theme = "light",
  height = "120px",
  width = "100%",
  className = "",
}) {
  const ref = useRef(null);
  const businessUnitId = getTrustpilotBusinessUnitId();
  const templateId = TRUSTBOX_TEMPLATES[template] || template;

  useEffect(() => {
    if (!businessUnitId || !ref.current) return;

    const load = () => {
      if (typeof window !== "undefined" && window.Trustpilot) {
        window.Trustpilot.loadFromElement(ref.current, true);
      }
    };

    load();
    // Script may still be loading (lazyOnload)
    const id = window.setInterval(() => {
      if (window.Trustpilot) {
        load();
        window.clearInterval(id);
      }
    }, 400);
    const timeout = window.setTimeout(() => window.clearInterval(id), 8000);

    return () => {
      window.clearInterval(id);
      window.clearTimeout(timeout);
    };
  }, [businessUnitId, templateId, theme]);

  if (!businessUnitId) {
    return (
      <div className={`text-center ${className}`}>
        <a
          href={TRUSTPILOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center gap-2 text-inherit hover:opacity-90"
        >
          <span className="font-lexend font-bold text-lg">Excellent op Trustpilot</span>
          <span className="text-sm underline">Bekijk reviews van SoloSwim →</span>
        </a>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`trustpilot-widget ${className}`}
      data-locale="nl-BE"
      data-template-id={templateId}
      data-businessunit-id={businessUnitId}
      data-style-height={height}
      data-style-width={width}
      data-theme={theme}
      data-stars="1,2,3,4,5"
      data-review-languages="nl"
    >
      <a
        href={TRUSTPILOT_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Trustpilot
      </a>
    </div>
  );
}

export default TrustBox;
