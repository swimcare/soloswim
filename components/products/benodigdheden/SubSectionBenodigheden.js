import { Fragment } from "react";
import AccordionItem from "../../general/AccordionItem";
import AccordionPanel from "../../general/AccordionPanel";
import { Accordion } from "../../hooks/Accordion";
import Attribuut from "./Attribuut";
import DubbelAttribuut from "./DubbelAttribuut";

function SubSectionBenodigdheden() {
  return (
    <Fragment>
      <div className="my-2">
        <p className="text-navy-light1">Om het zwemmen comfortabel te maken.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 p-5">
          <DubbelAttribuut
            icon1="/images/zwemschemas/benodigdheden/badpak.png"
            alt1="badpak"
            icon2="/images/zwemschemas/benodigdheden/zwembril.png"
            alt2="zwembril"
            name="Sportieve zwemkleding"
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/zwembril.png"
            alt="zwembril"
            name="Zwembril"
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/zwembril.png"
            alt="zwembril"
            name="Badmuts (bij lang haar)"
          />
        </div>
      </div>

      <div className="my-2">
        <p className="text-navy-light1">Handig om zelf te hebben, evt in zwembad lenen.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 p-5">
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/zwembril.png"
            alt="zwembril"
            name="Plankje"
          />
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/zwembril.png"
            alt="zwembril"
            name="Pullbuoy"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default SubSectionBenodigdheden;
