import { Fragment } from "react";
import Attribuut from "./Attribuut";
import DubbelAttribuut from "./DubbelAttribuut";

function SubSectionBenodigdheden() {
  return (
    <Fragment>
      <div className="my-2">
        <h3 className="text-navy-light1 font-lexend font-semibold text-base xs:text-lg">
          Voor iedere banenzwemmer
        </h3>
        <p className="text-navy-light1"> Deze dingen heb je zeker nodig.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 p-5">
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
            tooltipText="Bescherm je haar tegen chloor en verlaag weerstand."
            bestelButton="/producten/soloswim-badmuts"
          />
        </div>
      </div>

      <div className="my-2">
        <h3 className="text-navy-light1 font-lexend font-semibold text-base xs:text-lg">
          Extra benodigdheden
        </h3>
        <p className="text-navy-light1">
          Een plankje en pullbuoy komt veel voor tijdens de oefeningen in de
          [borstcrawl kracht zwemtraining] bundel voor beginners. Je kunt het
          zonder deze attributen doen, maar wij raden het sterk aan deze wel te
          gebruiken. Het helpt je enorm bij het uitvoeren van de oefeningen en
          je haalt meer uit de training. Je koopt ze online voor een paar
          tientjes of je vraagt aan de badmeester of je ze kunt lenen.
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
      </div>
    </Fragment>
  );
}

export default SubSectionBenodigdheden;
