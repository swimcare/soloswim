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
            <div className="lg:w-1/2">
              <Accordion defaultPanel="faq1">
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
                  <p className="mb-3">
                    Bij de techniektrainingen werk je aan het netjes uitvoeren
                    van je slag. Door middel van speciale techniekoefeningen
                    tijdens het zwemmen ga je technisch beter zwemmen. Bij de
                    krachttrainingen wordt er gewerkt aan je explosiviteit,
                    snelheid en spieropbouw. Deze zwemschema’s bestaan vooral
                    uit setjes met korte afstanden. Bij de duurtrainingen ligt
                    de focus op het verbeteren van je conditie en opbouwen van
                    je duurvermogen. Vanzelfsprekend zijn hier de afstanden die
                    je zwemt in een training wat langer. Het type training kun
                    je herkennen aan de kleur: groen staat voor techniek, oranje
                    voor kracht en geel voor duurtraining.
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
                  <p className="mb-3">
                    De complete bundel is een grotere bundel met maar liefst 30
                    zwemschema’s. Het is een samenvoeging van de techniek,
                    kracht en duurtrainingen van een bepaald niveau. Ideaal als
                    je van afwisseling houd en alle drie aspecten aan bod wilt
                    laten komen tijdens het zwemmen!
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
                  <p className="mb-3">
                    Bijna alle zwembundels die we aanbieden hebben geen
                    specifieke volgorde, je kunt gewoon een training uitzoeken
                    waar je op dat moment zin in hebt. De borstcrawl leren
                    zwemmen is een uitzondering hierop, deze bundel heeft een
                    duidelijke volgorde. Begin bij training 1 en ga door naar de
                    volgende training als je alle oefeningen onder de knie hebt
                    of als je ruim binnen de aangegeven tijd de training kunt
                    voltooien.
                  </p>
                </AccordionPanel>
              </Accordion>
            </div>
            <div className="lg:w-1/2">
              <Accordion>
                <AccordionItem
                  toggle="faq4"
                  itemClass="flex flex-row justify-between align-start inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Hoe houd ik de bundels schoon?
                </AccordionItem>
                <AccordionPanel
                  id="faq4"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3">
                    Maak de pagina’s na iedere zwemsessie schoon door deze af te
                    nemen met je handdoek.
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq5"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Is er korting mogelijk bij grote afname?
                </AccordionItem>
                <AccordionPanel
                  id="faq5"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3">
                    Ja dit is mogelijk. Neem contact met ons op via
                    info@soloswim.nl voor het plaatsen van een grote bestelling.
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq6"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
                >
                  Welke betaal mogelijkheden zijn er?
                </AccordionItem>
                <AccordionPanel
                  id="faq6"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3">
                    Betalen kan met iDeal of credit card. Liever een andere
                    betaalmethode? Neem contact met ons op via info@soloswim.nl
                    voor het plaatsen van een bestelling.
                  </p>
                </AccordionPanel>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFaq;
