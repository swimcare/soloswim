import { TRUSTPILOT_REVIEW_URL, TRUSTPILOT_URL } from "../../lib/trustpilot";
import TrustBox from "./TrustBox";

/**
 * Score widget + CTA to leave a Trustpilot review.
 */
function TrustpilotSection({
  theme = "dark",
  showWriteCta = true,
  className = "",
}) {
  const isDark = theme === "dark";

  return (
    <div className={className}>
      <TrustBox
        template="mini"
        theme={isDark ? "dark" : "light"}
        height="120px"
        className="mb-6"
      />
      {showWriteCta && (
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={TRUSTPILOT_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block text-tiny font-bold uppercase px-8 py-3 rounded-full tracking-wider border-4 ${
              isDark
                ? "bg-white text-main border-white hover:bg-transparent hover:text-white"
                : "bg-main text-white border-main hover:bg-transparent hover:text-main"
            }`}
          >
            Schrijf een review
          </a>
          <a
            href={TRUSTPILOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-tiny underline ${
              isDark ? "text-white/90 hover:text-white" : "text-navy-light1 hover:text-main"
            }`}
          >
            Alle reviews op Trustpilot
          </a>
        </div>
      )}
    </div>
  );
}

export default TrustpilotSection;
