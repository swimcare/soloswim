import NiveauCard from "./niveau/NiveauCard";
import parse from "html-react-parser";
import Link from "next/link";

function SectionNiveauInfo({ title }) {
  return (
    <section id="welk-niveau-past-bij-mij">
      <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-5 pt-16 lg:pt-20 pb-24 lg:pb-0">
        <div className="text-center lg:text-left text-navy-light1">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-lexend font-extrabold py-3 lg:py-6">
            Welk <span className="text-main">niveau</span> past bij mij?
          </h1>
          <p className="text-tiny leading-6">
            Voor de bundel "{title}" kun je kiezen uit de onderstaande niveaus.
            Kies een niveau dat het beste bij je past. Bij twijfel is het
            verstandig een niveau lager te kiezen, je kunt altijd later nog een
            niveau opschuiven als je toe bent aan meer uitdaging.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row my-5 lg:my-14 gap-5 lg:gap-10">
          <NiveauCard
            tooltip
            title="Beginners"
            text1={parse(
              `Je zwemt nog niet zo lang borstcrawl maar hebt de <span classname="font-semibold">basis techniek</span> aardig onder de knie en kunt dit een hele training vasthouden.`
            )}
            text2={parse(
              `Je kunt <span classname="font-semibold">100m</span> borstcrawl binnen een tijd van <span classname="font-semibold">2 minuten en 20 seconden</span> zwemmen.`
            )}
            text3={parse(
              `Je kunt <span classname="font-semibold">100m</span> borstcrawl achter elkaar zwemmen en dit gaat je af zonder problemen. Een afstand van <span classname="font-semibold">${
                (title === "Borstcrawl Kracht Zwemtraining" && "200") ||
                (title === "Borstcrawl Techniek Zwemtraining" && "200") ||
                (title === "Borstcrawl Duur Zwemtraining" && "500") ||
                (title === "Borstcrawl Complete Zwemtraining" && "800")
              }m</span> kun je ook volhouden (of zie je als een mooie uitdaging, dit is de langste afstand die je achter elkaar zwemt uit deze bundel).`
            )}
          />
          <NiveauCard
            title="Semi-gevorderden"
            text1={parse(
              `Je zwemt al een tijdje <span classname="font-semibold">regelmatig borstcrawl</span> (>1 jaar) en dit gaat je over het algemeen goed af.`
            )}
            text2={parse(
              `Je kunt <span classname="font-semibold">100m</span> borstcrawl binnen een tijd van <span classname="font-semibold">1 minuut en 50 seconden</span> zwemmen.`
            )}
            text3={parse(
              `Je kunt een afstand van <span classname="font-semibold">${
                (title === "Borstcrawl Kracht Zwemtraining" && "300") ||
                (title === "Borstcrawl Techniek Zwemtraining" && "400") ||
                (title === "Borstcrawl Duur Zwemtraining" && "800") ||
                (title === "Borstcrawl Complete Zwemtraining" && "800")
              }m</span> achter elkaar borstcrawl zwemmen (dit is de langste afstand die je achter elkaar zwemt uit deze bundel).`
            )}
          />
          <NiveauCard
            title="Gevorderden"
            text1={parse(
              `Je zwemt al jaren borstcrawl en dit gaat je <span classname="font-semibold">zeer goed</span> af.`
            )}
            text2={parse(
              `Je kunt 100m borstcrawl binnen een tijd van <span classname="font-semibold">1 minuut en 20 seconden</span> zwemmen.`
            )}
            text3={parse(
              `Je kunt een afstand van <span classname="font-semibold">${
                (title === "Borstcrawl Kracht Zwemtraining" && "300") ||
                (title === "Borstcrawl Techniek Zwemtraining" && "400") ||
                (title === "Borstcrawl Duur Zwemtraining" && "1500") ||
                (title === "Borstcrawl Complete Zwemtraining" && "1500")
              }m</span> achter elkaar borstcrawl zwemmen (dit is de langste afstand die je achter elkaar zwemt uit deze bundel).`
            )}
          />
        </div>
        <div className="text-center text-navy-light1 max-w-4xl mx-auto">
          <p className="text-tiny leading-6">
            Het is geen ramp als je kiest voor een iets te hoog of laag niveau,
            je bent dan iets langer of korter bezig met een schema dan de
            aangegeven tijd. Kom je er helemaal niet uit met kiezen? Wij helpen
            je graag met het vaststellen van jouw niveau, neem contact met ons
            op en we helpen je snel aan een Soloswim bundel die bij je past!
          </p>
          <Link href="/contact">
            <a>
              <button className="my-4 lg:my-6 text-white max-w-xs lg:text-lg font-bold uppercase w-full px-3 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-white hover:text-main border-4 border-main">
                Neem contact op
              </button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SectionNiveauInfo;
