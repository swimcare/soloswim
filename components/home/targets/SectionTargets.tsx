import FadeInFromBottom from "components/framer/FadeInFromBottom";
import SlideInFromSide from "components/framer/SlideInFromSide";
import React from "react";
import IconCard from "./IconCard";
import FullWidthImageCard from "./FullWidthImageCard";

type Props = {};

const SectionTargets = (props: Props) => {
  return (
    <section className="bg-grey-light4">
      <div className="px-5 max-w-screen-xl mx-auto pt-20 pb-6 lg:pt-32">
        <FadeInFromBottom>
          <h2 className="font-lexend font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-main">
            Waarom Soloswim
          </h2>
          <h2 className="font-lexend font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-navy-light1 my-2 lg:my-5">
            Een aantal voordelen op een rijtje
          </h2>
        </FadeInFromBottom>
      </div>
      <div className="flex flex-col px-5 sm:px-0 gap-7 sm:gap-10 lg:gap-14 lg:py-8 overflow-x-hidden">
        <SlideInFromSide initialX="-300px">
          <FullWidthImageCard
            img="/images/home/waarom-soloswim-1.png"
            number="01"
            title="Doelgericht banenzwemmen"
            text="Met onze gestructureerde zwemschema's hoef je niet meer zelf je zwemtraining te bedenken. Hierdoor kun jij je volledig
                  richten op het uitvoeren van een doelgerichte training zodat jij met een
                  voldaan gevoel het zwembad verlaat, wat je doel met zwemmen
                  ook is!"
          />
        </SlideInFromSide>
        <SlideInFromSide initialX="300px">
          <FullWidthImageCard
            img="/images/home/waarom-soloswim-2.png"
            number="02"
            title="Breed aanbod aan zwemschema’s"
            text="Op wat voor manier je ook zwemt, met ons brede aanbod hebben wij zwemschema’s voor iedere zwemmer. Of je nu een fanatieke triatleet bent, nog helemaal geen zwemervaring hebt maar graag borstcrawl wilt leren of gewoon lekker relaxed baantjes wilt trekken, er is voor ieder wat wils!"
            alignRight
          />
        </SlideInFromSide>
        <SlideInFromSide initialX="-300px">
          <FullWidthImageCard
            img="/images/home/waarom-soloswim-3.png"
            number="03"
            title="Waterproof en herbruikbaar"
            text="Onze zwemschema’s zijn gemaakt van sterk materiaal en volledig waterproof. Hierdoor zijn papieren zwemschema's die snel nat worden verleden tijd. Dus kies een bundel uit, stop hem in je zwemtas en gebruik hem keer op keer!"
          />{" "}
        </SlideInFromSide>

        <SlideInFromSide initialX="300px">
          <FullWidthImageCard
            img="/images/home/waarom-soloswim-4.png"
            number="04"
            title="En misschien wel het belangrijkste: meer plezier tijdens het zwemmen!"
            text="Elk schema bevat gevarieerde en uitdagende zwemoefeningen waardoor het banenzwemmen nooit saai wordt. Laat je verrassen want geen schema is hetzelfde! Het voltooien van een schema geeft een heerlijk gevoel, zo ervaar jij nog meer plezier tijdens het banenzwemmen."
            alignRight
          />{" "}
        </SlideInFromSide>
      </div>
      <div className="px-5 max-w-screen-xl mx-auto py-12 lg:py-32">
        <h2 className="mb-16 text-center font-lexend font-extrabold text-2xl sm:text-4xl text-navy-light1">
          Oké, nog een paar extra voordelen!
        </h2>
        <FadeInFromBottom>
          <div className="flex flex-col md:flex-row gap-20 md:gap-5 xl:gap-6 py-5 sm:py-10">
            <IconCard
              img="/images/home/no-app-needed.png"
              title="Geen app nodig"
              shadow
            />
            <IconCard
              img="/images/home/no-subscription.png"
              title="Geen abonnements kosten"
              shadow
            />
            <IconCard
              img="/images/home/no-printer.png"
              title="Geen printer nodig"
              shadow
            />
          </div>
        </FadeInFromBottom>
      </div>
    </section>
  );
};

export default SectionTargets;
