import AccordionItem from "../../general/AccordionItem";
import AccordionPanel from "../../general/AccordionPanel";
import { Accordion } from "../../hooks/Accordion";
import Attribuut from "./Attribuut";
import DubbelAttribuut from "./DubbelAttribuut";

function SubSectionBenodigdhedenNiveaus({ color }) {
  return (
    <Accordion defaultPanel="benodigdheden-ieder-niveau">
      <AccordionItem
        toggle="benodigdheden-ieder-niveau"
        itemClass="inline-block focus:outline-none font-lexend font-semibold text-base xs:text-lg text-navy-light1 my-3"
        iconClass="ml-5 h-5 w-5 text-navy-light1 stroke-1 stroke-current mt-1"
      >
        Ieder niveau
      </AccordionItem>
      <AccordionPanel
        id="benodigdheden-ieder-niveau"
        panelClass="overflow-hidden md:overflow-x-hidden transition-height ease duration-300"
      >
        <p className="text-navy-light1 min-h-[3rem]">
          Dit zijn de basisbenodigdheden voor iedere zwemmer.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 p-5 items-stretch">
          <DubbelAttribuut
            icon1="/images/zwemschemas/benodigdheden/badpak.png"
            alt1="badpak"
            icon2="/images/zwemschemas/benodigdheden/zwembroek.png"
            alt2="zwembroek"
            name="Sportieve zwemkleding"
            tooltipText="Draag zwemkleding geschikt voor banenzwemmen."
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/zwembril.png"
            name="Zwembril"
            tooltipText="Voorkom water in je ogen tijdens het zwemmen."
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/badmuts.png"
            name="Badmuts"
            tooltipText="Praktisch voor als je lang haar hebt."
            bestelButton="/producten/soloswim-badmuts"
          />
        </div>
      </AccordionPanel>
      <AccordionItem
        toggle="benodigdheden-beginners"
        itemClass="inline-block focus:outline-none font-lexend font-semibold text-base xs:text-lg text-navy-light1 my-3"
        iconClass="mt-1 ml-5 h-5 w-5 text-navy-light1 stroke-1 stroke-current"
      >
        Beginners
      </AccordionItem>
      <AccordionPanel
        id="benodigdheden-beginners"
        panelClass="overflow-hidden md:overflow-x-hidden transition-height ease duration-300"
      >
        <p className="text-navy-light1 min-h-[4rem]">
          Misschien ben je nog niet zo bekend met het plankje en de pullbuoy,
          maar deze attributen helpen je enorm voorruit als je de borstcrawl
          wilt leren zwemmen. Je kunt ze voor een paar tientjes al kopen of je
          vraagt aan de badmeester of je ze kunt lenen.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 p-5">
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/plankje.png"
            name="Zwemplankje"
            tooltipText="Geeft je extra drijfvermogen om specifiek je benen te trainen."
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/pullbuoy.png"
            name="Pullbuoy"
            tooltipText="Geeft je extra drijfvermogen om specifiek je armen te trainen."
          />
          {(color === "green" || color === "green-orange-yellow") && (
            <Attribuut
              icon="/images/zwemschemas/benodigdheden/zoomers.png"
              name="Zoomers (optioneel)"
              tooltipText="Optioneel hulpmiddel om minder snel uitgeput te raken."
            />
          )}
        </div>
      </AccordionPanel>
      <AccordionItem
        toggle="benodigdheden-gevorderden"
        itemClass="inline-block focus:outline-none font-lexend font-semibold text-base xs:text-lg text-navy-light1 my-3"
        iconClass="mt-1 ml-5 h-5 w-5 text-navy-light1 stroke-1 stroke-current"
      >
        Semi-gevorderden &amp; gevorderden
      </AccordionItem>
      <AccordionPanel
        id="benodigdheden-gevorderden"
        panelClass="overflow-hidden md:overflow-x-hidden transition-height ease duration-300"
      >
        <p className="text-navy-light1 min-h-[6rem]">
          Onderstaande attributen helpen je bij het uitvoeren van de
          zwemoefeningen. Je kunt ze voor een paar tientjes al kopen, een
          plankje en pullbuoy kun je in de meeste zwembaden ook lenen als je
          hier naar vraagt.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 p-5">
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/plankje.png"
            name="Zwemplankje"
            tooltipText="Geeft je extra drijfvermogen om specifiek je benen te trainen."
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/pullbuoy.png"
            name="Pullbuoy"
            tooltipText="Geeft je extra drijfvermogen om specifiek je armen te trainen."
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/handpeddels.png"
            name="Handpeddels"
            tooltipText="Helpt je sneller te zwemmen door opbouwen van kracht en ondersteunen van de techniek."
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/zoomers.png"
            name="Zoomers"
            tooltipText="Helpt je met de beenslag techniek en geeft je extra snelheid waardoor het zwemmen makkelijker wordt."
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/snorkel.png"
            name="Frontale snorkel (optioneel)"
            tooltipText="Houd je niet bezig met de ademhaling, maar focus je 100% op de rest van de techniek."
          />
        </div>
      </AccordionPanel>
    </Accordion>
  );
}

export default SubSectionBenodigdhedenNiveaus;
