import AccordionItem from "../../general/AccordionItem";
import AccordionPanel from "../../general/AccordionPanel";
import { Accordion } from "../../hooks/Accordion";
import Attribuut from "./Attribuut";
import DubbelAttribuut from "./DubbelAttribuut";

function SubSectionBenodigdhedenNiveaus() {
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
          Deze dingen heb je zeker nodig.
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
        <p className="text-navy-light1">
        Een plankje en pullbuoy komt veel voor tijdens de oefeningen in deze bundel voor beginners. Je kunt het zonder deze attributen doen, maar wij raden het sterk aan deze wel te gebruiken. Het helpt je enorm bij het uitvoeren van de oefeningen en je haalt meer uit de training. Je koopt ze online voor een paar tientjes of je vraagt aan de badmeester of je ze kunt lenen.
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
        <p className="text-navy-light1">
          Onderstaande attributen komen voor tijdens de oefeningen in deze bundel, voor de niveaus semi-gevorderden en
          gevorderden. Ze helpen je bij het uitvoeren van bepaalde oefeningen en
          helpen je te focussen op bepaalde onderdelen van het zwemmen. We raden
          je aan om in ieder geval een plankje en pullbuoy te gebruiken, omdat
          deze attributen vaak voorkomen in de zwemschema’s. Je kunt het ook
          proberen te lenen in het zwembad. Handpeddels en zoomers (korte zwemvliezen) raden wij ook aan om te hebben, maar je zou het ook zonder kunnen uitvoeren. 
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
