import NiveauCard from "./niveau/NiveauCard";

function SectionNiveauInfo() {
  return (
    <section id="welk-niveau-past-bij-mij">
      <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-5 pt-16 lg:pt-20 pb-24 lg:pb-0">
        <div className="text-center lg:text-left text-navy-light1">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-lexend font-extrabold py-3 lg:py-6">
            Welk <span className="text-main">niveau</span> past bij mij?
          </h1>
          <p className="text-tiny leading-6">
            Het is geen ramp als je een iets te hoog of laag niveau kiest, je
            bent dan iets langer of korter bezig met de training dan de
            aangegeven tijd. Onderstaande indicaties kunnen je wel een richtlijn
            geven over welk niveau het beste bij je zou passen/helpen met kiezen
          </p>
        </div>
        <div className="flex flex-col lg:flex-row my-5 lg:my-14 gap-5 lg:gap-10">
          <NiveauCard
            title="Beginners"
            text1="Je zwemt nog niet lang maar basis BC techniek onder knie"
            text2="Je kunt 100m binnen …. min zwemmen"
            text3="4 x 50m op hoog tempo met 40 sec rust is geen probleem"
            text4="Een afstand van …m kun jij wel zwemmen"
          />
          <NiveauCard
            title="Semi-gevorderden"
            text1="Je zwemt nog niet lang maar basis BC techniek onder knie"
            text2="Je kunt 100m binnen …. min zwemmen"
            text3="4 x 50m op hoog tempo met 40 sec rust is geen probleem"
            text4="Een afstand van …m kun jij wel zwemmen"
          />
          <NiveauCard
            title="Gevorderden"
            text1="Je zwemt nog niet lang maar basis BC techniek onder knie"
            text2="Je kunt 100m binnen …. min zwemmen"
            text3="4 x 50m op hoog tempo met 40 sec rust is geen probleem"
            text4="Een afstand van …m kun jij wel zwemmen"
          />
        </div>
        <div className="text-center text-navy-light1">
          <p className="text-tiny leading-6">
            Kom je er niet uit? Wij helpen je graag met het vaststellen van jouw
            niveau, neem contact op en we helpen je snel aan jouw eigen soloswim
            zwemtraining!
          </p>
          {/* Todo: link button to contact page */}
          <button className="my-4 lg:my-6 text-white max-w-xs lg:text-lg font-bold uppercase w-full px-3 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-white hover:text-main border-4 border-main">
            Neem contact op
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionNiveauInfo;
