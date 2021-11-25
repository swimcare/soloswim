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
        <p className="text-navy-light1">Deze dingen heb je zeker nodig.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 p-5">
          <DubbelAttribuut
            icon1="/images/zwemschemas/benodigdheden/badpak.png"
            alt1="badpak"
            icon2="/images/zwemschemas/benodigdheden/zwembroek.png"
            alt2="zwembroek"
            name="Sportieve zwemkleding"
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/zwembril.png"
            name="Zwembril"
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/badmuts.png"
            name="Badmuts (bij lang haar)"
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
          Deze attributen komen voor in deze trainingsbundel, maar om meeste uit
          je training te halen (kan ook zonder gebruikt worden maar even
          aandikken dat je het nodig hebt)
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 p-5">
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/plankje.png"
            alt="plankje"
            name="Plankje"
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/pullbuoy.png"
            name="Pullbuoy"
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
          Deze attributen komen voor in deze trainingsbundel, maar om meeste uit
          je training te halen (kan ook zonder gebruikt worden maar even
          aandikken dat je het nodig hebt)
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 p-5">
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/plankje.png"
            name="Plankje"
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/pullbuoy.png"
            name="Pullbuoy"
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/handpeddels.png"
            name="Peddels"
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/zoomers.png"
            name="Zoomers"
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/snorkel.png"
            name="Frontale snorkel (optioneel)"
          />
        </div>
      </AccordionPanel>
    </Accordion>
  );
}

export default SubSectionBenodigdhedenNiveaus;
