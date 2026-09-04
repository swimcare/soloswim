import Link from "next/link";
import { useState } from "react";
import * as ga from "../../lib/ga/index";

function NewsletterSignup({ variant = "footer" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const isCompact = variant === "footer";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, consent, website }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.status !== "OK") {
        setError(data.error || "Inschrijving mislukt. Probeer het later opnieuw.");
        return;
      }

      ga.event({
        action: "newsletter_signup",
        params: { source: variant },
      });

      setDone(true);
      setName("");
      setEmail("");
      setConsent(false);
    } catch (err) {
      console.error(err);
      setError("Inschrijving mislukt. Probeer het later opnieuw.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={isCompact ? "w-full max-w-3xl mx-auto text-center" : ""}>
      <h4 className="text-main font-semibold font-lexend text-xl mb-2 md:mb-3">
        Blijf op de hoogte
      </h4>
      <p className="text-tiny text-navy-light1 mb-4 max-w-xl mx-auto">
        Schrijf je in op de SwimCare-mailinglijst en ontvang SoloSwim-nieuws,
        tips en acties. Je wordt getagd als SoloSwim-abonnee.
      </p>

      {done ? (
        <p className="text-navy-light1 text-tiny font-semibold">
          Bedankt! Check je inbox om je inschrijving te bevestigen (als dat
          gevraagd wordt).
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              name="name"
              autoComplete="given-name"
              placeholder="Voornaam (optioneel)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 rounded-full border border-grey-light5 bg-white px-4 py-2.5 text-tiny text-navy-light1 focus:outline-none focus:border-main"
            />
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="E-mailadres"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-grey-light5 bg-white px-4 py-2.5 text-tiny text-navy-light1 focus:outline-none focus:border-main"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-main text-white text-tiny font-bold uppercase px-6 py-2.5 tracking-wider border-2 border-main hover:bg-transparent hover:text-main disabled:opacity-60"
            >
              {loading ? "Bezig…" : "Inschrijven"}
            </button>
          </div>

          {/* Honeypot — visually hidden */}
          <label className="absolute left-[-10000px] top-auto w-px h-px overflow-hidden">
            Website
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>

          <label className="flex items-start gap-2 text-left max-w-xl mx-auto text-xs text-navy-light1/80">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              className="mt-0.5 flex-shrink-0"
            />
            <span>
              Ik wil updates van SoloSwim ontvangen via de SwimCare-mailinglijst.
              Meer info in onze{" "}
              <Link href="/privacy-policy" className="underline hover:text-main">
                privacy policy
              </Link>
              .
            </span>
          </label>

          {error && (
            <p className="text-xs text-red-600" role="alert">
              {error}
            </p>
          )}
        </form>
      )}
    </div>
  );
}

export default NewsletterSignup;
