import { NextSeo } from "next-seo";
import { Fragment } from "react";

function algemeneVoorwaarden() {



  return (
    <Fragment>
      <NextSeo noindex={true} />
      <main>
        <section className="bg-grey-light4">
          <div className="px-5 sm:px-8 mx-auto max-w-3xl py-20 lg:py-32">
            {/* <div
              className="text-navy-light1 text-tiny leading-6 my-3 md:my-5"
              dangerouslySetInnerHTML={{
                __html: markdown,
              }}
            /> */}
            {/* <h1 className="text-main text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-lexend font-extrabold my-5">
              Algemene Voorwaarden
            </h1>
            <h2 className="text-2xl font-lexend font-extrabold my-5 text-navy-light1">
              Inhoudsopgave
            </h2>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 1 - Definities
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 2 - Identiteit van de ondernemer
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 3 - Toepasselijkheid
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 4 - Het aanbod
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 5 - De overeenkomst
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 6 - Herroepingsrecht
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 7 - Kosten in geval van herroeping
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 2 - Identiteit van de ondernemer
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 8 - Uitsluiting herroepingsrecht
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 9 - De prijs
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 10 - Conformiteit en garantie
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 11 - Levering en uitvoering
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 12 - Duurtransacties: duur, opzegging en verlenging
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 13 - Betaling
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 14 - Klachtenregeling
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 15 - Geschillen
            </h3>
            <h3 className="text-main text-lg font-lexend font-bold">
              Artikel 16 - Aanvullende of afwijkende bepalingen
            </h3>
            <h2 className="text-2xl font-lexend font-extrabold my-5 text-navy-light1">
              Artikel 1 - Definities
            </h2>
            <p className="text-navy-light1 mb-5">
              In deze voorwaarden wordt verstaan onder:
            </p>
            <p className="float-left mr-5 text-navy-light1">1.</p>
            <p className="text-navy-light1 my-5">
              <strong>Bedenktijd</strong>: de termijn waarbinnen de consument
              gebruik kan maken van zijn herroepingsrecht.
            </p>
            <p className="float-left mr-5 text-navy-light1">2.</p>
            <p className="text-navy-light1 my-5">
              <strong>Consument</strong>: de natuurlijke persoon die niet
              handelt in de uitoefening van beroep of bedrijf en een
              overeenkomst op afstand aangaat met de ondernemer;
            </p>
            <p className="float-left mr-5 text-navy-light1">3.</p>
            <p className="text-navy-light1 my-5">
              <strong>Dag:</strong> kalenderdag;
            </p>
            <p className="float-left mr-5 text-navy-light1">4.</p>
            <p className="text-navy-light1 my-5">
              <strong>Duurtransactie:</strong> een overeenkomst op afstand met
              betrekking tot een reeks van producten en/of diensten, waarvan de
              leverings- en/of afnameverplichting in de tijd is gespreid;
            </p>
            <p className="float-left mr-5 text-navy-light1">5.</p>
            <p className="text-navy-light1 my-5">
              <strong>Duurzame gegevensdrager:</strong> elk middel dat de
              consument of ondernemer in staat stelt om informatie die aan hem
              persoonlijk is gericht, op te slaan op een manier die toekomstige
              raadpleging en ongewijzigde reproductie van de opgeslagen
              informatie mogelijk maakt.
            </p>
            <p className="float-left mr-5 text-navy-light1">6.</p>
            <p className="text-navy-light1 my-5">
              <strong>Herroepingsrecht:</strong> de mogelijkheid voor de
              consument om binnen de bedenktijd af te zien van de overeenkomst
              op afstand;
            </p>
            <p className="float-left mr-5 text-navy-light1">7.</p>
            <p className="text-navy-light1 my-5">
              <strong>Modelformulier:</strong> t modelformulier voor herroeping
              die de ondernemer ter beschikking stelt die een consument kan
              invullen wanneer hij gebruik wil maken van zijn herroepingsrecht.
            </p>
            <p className="float-left mr-5 text-navy-light1">8.</p>
            <p className="text-navy-light1 my-5">
              <strong>Ondernemer:</strong> de natuurlijke of rechtspersoon die
              producten en/of diensten op afstand aan consumenten aanbiedt;
            </p>
            <p className="float-left mr-5 text-navy-light1">9.</p>
            <p className="text-navy-light1 my-5">
              <strong>Overeenkomst op afstand:</strong> een overeenkomst waarbij
              in het kader van een door de ondernemer georganiseerd systeem voor
              verkoop op afstand van producten en/of diensten, tot en met het
              sluiten van de overeenkomst uitsluitend gebruik gemaakt wordt van
              één of meer technieken voor communicatie op afstand;
            </p>
            <p className="float-left mr-5 text-navy-light1">10.</p>
            <p className="text-navy-light1 my-5">
              <strong>Techniek voor communicatie op afstand:</strong> middel dat
              kan worden gebruikt voor het sluiten van een overeenkomst, zonder
              dat consument en ondernemer gelijktijdig in dezelfde ruimte zijn
              samengekomen.
            </p>
            <p className="float-left mr-5 text-navy-light1">11.</p>
            <p className="text-navy-light1 my-5">
              <strong>Algemene Voorwaarden:</strong> de onderhavige Algemene
              Voorwaarden van de ondernemer.
            </p>
            <h2 className="text-2xl font-lexend font-extrabold my-5 text-navy-light1">
              Artikel 2 - Identiteit van de ondernemer
            </h2>
            <p className="text-navy-light1">Media Modes</p> */}
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default algemeneVoorwaarden;
