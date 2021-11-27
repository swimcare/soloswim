import AccordionItem from "../general/AccordionItem";
import AccordionPanel from "../general/AccordionPanel";
import { Accordion } from "../hooks/Accordion";

function SectionFaq() {
  return (
    <section className="bg-main lg:bg-white pt-5 lg:pt-10 pb-12 lg:pb-32">
      <div className="px-8 max-w-screen-xl mx-auto py-5">
        <div className="lg:bg-main lg:rounded-2xl lg:p-10">
          <div className="text-white border-b border-opacity-40 pt-2 lg:pt-0 pb-6">
            <h3 className="w-40 font-lexend text-2xl font-extrabold lg:w-full lg:text-4xl">
              Veelgestelde vragen
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-10">
            <Accordion defaultPanel="faq1">
              <div className="lg:flex-1">
                <AccordionItem
                  toggle="faq1"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Wat is het verschil tussen techniek-, kracht- en
                  duurtrainingen?
                </AccordionItem>
                <AccordionPanel
                  id="faq1"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3 text-tiny">
                    Met techniektraining werk je aan het verbeteren van je slag
                    waardoor je netter en efficiënter leert zwemmen. De
                    zwemoefeningen worden hier veelal op een rustig tempo
                    uitgevoerd zodat je je helemaal kunt focussen op je
                    techniek. Bij de krachttrainingen wordt er gewerkt aan je
                    explosiviteit, snelheid en spieropbouw. Deze zwemschema’s
                    bestaan vooral uit setjes met korte afstanden die op een
                    hoger tempo worden uitgevoerd. Bij de duurtrainingen ligt de
                    focus op het verbeteren van je conditie en opbouwen van je
                    duurvermogen. Vanzelfsprekend zijn hier de afstanden die je
                    zwemt wat langer. Verder kun je het type training herkennen
                    aan de kleur: groen staat voor techniek, oranje voor kracht
                    en geel voor duurtraining.
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq2"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Wat houdt de "borstcrawl complete zwemtraining" bundel in?
                </AccordionItem>
                <AccordionPanel
                  id="faq2"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3 text-tiny">
                    De complete bundel is een samenvoeging van de techniek-,
                    kracht- en duurtrainingen van een specifiek niveau. Dit is
                    dan ook een grotere bundel bestaande uit maar liefst 30
                    zwemschema’s. Ideaal als je van afwisseling houdt en alle
                    drie aspecten aan bod wilt laten komen tijdens het zwemmen!
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq3"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Zit er een volgorde in de zwemschema’s?
                </AccordionItem>
                <AccordionPanel
                  id="faq3"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3 text-tiny">
                    Bijna alle zwembundels die we aanbieden hebben geen
                    specifieke volgorde, je kunt gewoon een training uitzoeken
                    waar je op dat moment zin in hebt. De “borstcrawl leren
                    zwemmen” is een uitzondering hierop, deze bundel heeft een
                    duidelijke volgorde. Begin bij training 1 en ga door naar de
                    volgende training als je alle oefeningen onder de knie hebt
                    of als je ruim binnen de aangegeven tijd de training kunt
                    voltooien.
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq4"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Uit welk niveau kan ik kiezen?
                </AccordionItem>
                <AccordionPanel
                  id="faq4"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3 text-tiny">
                    We bieden zwemschema’s aan voor alle niveaus (van mensen met
                    nul zwemervaring, beginners, semi-gevorderden tot
                    gevorderden). Op de productpagina kun je vinden voor welk
                    niveau de bundel geschikt is en geven we handvaten welk
                    niveau je moet kiezen. Heb je geen ambitie om de borstcrawl
                    te leren zwemmen, zwem je baantjes puur om te bewegen en
                    voor je plezier? Houd ons in de gaten want binnenkort
                    verschijnt de nieuwe bundel genaamd “Swimfit” in ons
                    assortiment, met heel veel leuke zwemoefeningen voor
                    recreatieve zwemmers!
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq5"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Hoeveel zwemschema’s zitten er 1 bundel?
                </AccordionItem>
                <AccordionPanel
                  id="faq5"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3 text-tiny">
                    Elke bundel bestaat uit 10 zwemschema’s, met uitzondering
                    van de complete bundel. Deze bevat 30 zwemschema’s omdat dit
                    een samenvoeging is van de 3 bundels: techniek, kracht en
                    duur.
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq6"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Kan ik de zwemschema’s zelfstandig uitvoeren?
                </AccordionItem>
                <AccordionPanel
                  id="faq6"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3 text-tiny">
                    Ja dat kan! Vandaar de naam Soloswim. Onze bundels zijn zo
                    gemaakt dat je zelfstandig een zwemschema kunt volgen zonder
                    dat je een trainer op kant nodig hebt. Zwem je graag met een
                    vriend of vriendin? Je kunt natuurlijk altijd samen een
                    trainingen volgen, wel zo gezellig!
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq7"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Hoe vaak moet ik zwemmen?
                </AccordionItem>
                <AccordionPanel
                  id="faq7"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3 text-tiny">
                    Dit ligt een beetje aan je doel met zwemmen. Zwem je voor je
                    plezier, dan ga je zo vaak als je leuk vindt! Wil je graag
                    beter en sneller leren zwemmen, dan raden we aan om minimaal
                    2 keer in de week te zwemmen. Zwemmen is namelijk een
                    technische sport wat veel oefening vereist.
                  </p>
                </AccordionPanel>
              </div>
              <div className="lg:flex-1">
                <AccordionItem
                  toggle="faq8"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Hoe houd ik de bundels schoon?
                </AccordionItem>
                <AccordionPanel
                  id="faq8"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3 text-tiny">
                    Je kunt de pagina’s drogen met een handdoek na gebruik, zo
                    blijft je bundel mooi en fris!
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq9"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Is er korting mogelijk bij grote afname?
                </AccordionItem>
                <AccordionPanel
                  id="faq9"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3 text-tiny">
                    Ja dit is mogelijk. Neem contact met ons op via
                    info@soloswim.nl voor het plaatsen van een grote bestelling.
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq10"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Welke betaal mogelijkheden zijn er?
                </AccordionItem>
                <AccordionPanel
                  id="faq10"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3 text-tiny">
                    Betalen kan met iDeal of credit card. Liever een andere
                    betaalmethode? Neem contact met ons op via info@soloswim.nl
                    voor het plaatsen van een bestelling.
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq11"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Wanneer kan ik mijn bestelling verwachten?
                </AccordionItem>
                <AccordionPanel
                  id="faq11"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3 text-tiny">
                    Na het plaatsen van je bestelling kun je binnen 1 tot 2
                    werkdagen je bestelling thuis verwachten.
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq12"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Wat zijn de verzendkosten?
                </AccordionItem>
                <AccordionPanel
                  id="faq12"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3 text-tiny">
                  Wij rekenen € 3,95 verzendkosten voor elke bestelling (ook bij grotere bestellingen die als pakket verstuurt moeten worden).
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq13"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Wat is het retourbeleid?
                </AccordionItem>
                <AccordionPanel
                  id="faq13"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3 text-tiny">
                  Je hebt tot 14 dagen na ontvangst van je bestelling de mogelijkheid om deze als retour aan te melden. Nadat de bestelling geretourneerd is wordt het volledige aankoopbedrag teruggestort. Bekijk voor meer informatie de pagina over verzending &amp; retourneren.
                  </p>
                </AccordionPanel>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFaq;
