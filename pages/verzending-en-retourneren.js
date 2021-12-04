import { NextSeo } from "next-seo";
import { Fragment } from "react";

function verzendingEnRetourneren() {
  return (
    <Fragment>
      <NextSeo noindex={true} />
      <main>
        <section className="bg-grey-light4">
          <div className="px-5 sm:px-8 mx-auto max-w-3xl py-20 lg:py-32">
          <h1 className="text-main text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-lexend font-extrabold my-5">
              Verzending &amp; retourneren
            </h1>
            <h3 className="text-main text-lg font-lexend font-bold">
              Verzending
            </h3>
            <p className="my-5">
              Verzendkosten: <strong>3,95 euro</strong>.
            </p>
            <p className="my-5">
              Standaard levertijd (tenzij anders aangegeven): <strong>1-2 werkdagen</strong>.
            </p>
            <h3 className="text-main text-lg font-lexend font-bold">
              Retourneren
            </h3>
            <p className="my-5">
              U heeft het recht uw bestelling tot 14 dagen na ontvangst zonder
              opgave van reden te annuleren. U heeft na annulering nogmaals 14
              dagen om uw product retour te sturen. U krijgt dan het volledige
              orderbedrag inclusief verzendkosten gecrediteerd. Enkel de kosten
              voor retour van u thuis naar Soloswim zijn voor eigen
              rekening. Deze kosten bedragen circa 4 euro per brievenbuszending,
              raadpleeg voor de exacte tarieven de website van uw vervoerder.
              Indien u gebruik maakt van uw herroepingsrecht, zal het product
              met alle geleverde toebehoren en – indien redelijkerwijze mogelijk
              – in de originele staat en verpakking aan Soloswim geretourneerd
              worden. Om gebruik te maken van dit recht kunt u contact met ons
              opnemen via <a href="mailto:info@soloswim.nl" className="hover:text-main underline"> info@soloswim.nl</a>. Vermeld hierbij uw ordernummer (deze kunt u terug vinden in de orderbevestiging welke u per mail heeft ontvangen). Wij zullen vervolgens het
              verschuldigde orderbedrag binnen 14 dagen na aanmelding van uw
              retour terugstorten mits het product reeds in goede orde retour
              ontvangen is.
            </p>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default verzendingEnRetourneren;
