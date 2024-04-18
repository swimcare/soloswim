import { Fragment } from "react";
import Attribuut from "./Attribuut";
import DubbelAttribuut from "./DubbelAttribuut";

function SubSectionBenodigdheden({ id }) {
  return (
    <Fragment>
      <div className="my-2">
        <h3 className="text-navy-light1 font-lexend font-semibold text-base xs:text-lg mb-2">
          Voor iedere banenzwemmer
        </h3>
        <p className="text-navy-light1">
          Misschien ben je nog niet zo bekend met het plankje en de pullbuoy,
          maar deze attributen helpen je enorm voorruit als je de borstcrawl
          wilt leren zwemmen. Je koopt ze online voor een paar tientjes of je
          vraagt aan de badmeester of je ze kunt lenen.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 p-5">
          <DubbelAttribuut
            icon1="/images/zwemschemas/benodigdheden/badpak.png"
            alt1="badpak"
            icon2="/images/zwemschemas/benodigdheden/zwembroek.png"
            alt2="zwembroek"
            name="Sportieve zwemkleding"
            tooltipText="Draag zwemkleding geschikt voor banenzwemmen."
          />
          {id !== "swimfit" && (
            <Attribuut
              icon="/images/zwemschemas/benodigdheden/zwembril.png"
              name="Zwembril"
              tooltipText="Voorkom water in je ogen tijdens het zwemmen."
            />
          )}
          {id !== "swimfit" && (
            <Attribuut
              icon="/images/zwemschemas/benodigdheden/badmuts.png"
              name="Badmuts"
              tooltipText="Praktisch voor als je lang haar hebt."
              bestelButton="/producten/soloswim-badmuts"
            />
          )}
          <Attribuut
            icon="/images/zwemschemas/benodigdheden/plankje.png"
            name="Zwemplankje"
            tooltipText="Geeft je extra drijfvermogen om specifiek je benen te trainen."
          />
          {id !== "swimfit" && (
            <Attribuut
              icon="/images/zwemschemas/benodigdheden/pullbuoy.png"
              name="Pullbuoy"
              tooltipText="Geeft je extra drijfvermogen om specifiek je armen te trainen."
            />
          )}
          {id !== "swimfit" && (
            <Attribuut
              icon="/images/zwemschemas/benodigdheden/zoomers.png"
              name="Zoomers (optioneel)"
              tooltipText="Optioneel hulpmiddel om minder snel uitgeput te raken."
            />
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default SubSectionBenodigdheden;
