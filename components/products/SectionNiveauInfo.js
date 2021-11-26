import NiveauCard from "./niveau/NiveauCard";

function SectionNiveauInfo({title}) {
  return (
    <section id="welk-niveau-past-bij-mij">
      <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-5 pt-16 lg:pt-20 pb-24 lg:pb-0">
        <div className="text-center lg:text-left text-navy-light1">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-lexend font-extrabold py-3 lg:py-6">
            Welk <span className="text-main">niveau</span> past bij mij?
          </h1>
          <p className="text-tiny leading-6">
          Voor de bundel "{title}" kun je kiezen uit de onderstaande niveaus. Kies een niveau dat het beste bij je past. Bij twijfel is het verstandig een niveau lager te kiezen, je kunt altijd later nog een niveau opschuiven als je toe bent aan meer uitdaging.

          </p>
        </div>
        <div className="flex flex-col lg:flex-row my-5 lg:my-14 gap-5 lg:gap-10">
          <NiveauCard
            title="Beginners"
            text1="Je zwemt nog niet zo lang borstcrawl maar hebt de basis techniek aardig onder de knie."
            text2={`Je kunt ${title === "Borstcrawl Kracht Zwemtraining" ? "200" : "100"}m borstcrawl achter elkaar zwemmen en dit gaat je goed af`}
            text3="Je kunt een zwemtraining van 60 minuten volhouden waarbij je alleen maar borstcrawl zwemt (met veel rust tussen de afstanden door)"
          />
          <NiveauCard
            title="Semi-gevorderden"
            text1="Je zwemt al aardig lang regelmatig borstcrawl (>1 jaar) en dit gaat je over het algemeen goed af."
            text2={`Je kunt 100m borstcrawl binnen een tijd van 1 minuut en ${title === "Borstcrawl Kracht Zwemtraining" ? "20" : "30"} seconden zwemmen`} 
            text3={`Je kunt een afstand van ${title === "Borstcrawl Kracht Zwemtraining" ? "200" : "100"}m achter elkaar borstcrawl zwemmen`}
          />
          <NiveauCard
            title="Gevorderden"
            text1="Je zwemt al jaren borstcrawl en dit gaat je zeer goed af."
            text2={`Je kunt 100m borstcrawl binnen een tijd van 1 minuut en ${title === "Borstcrawl Kracht Zwemtraining" ? "20" : "30"} seconden zwemmen`} 
            text3={`Je kunt een afstand van ${title === "Borstcrawl Kracht Zwemtraining" ? "200" : "100"}m achter elkaar borstcrawl zwemmen`}
          />
        </div>
        <div className="text-center text-navy-light1 max-w-2xl mx-auto">
          <p className="text-tiny leading-6">
          Het is geen ramp als je kiest voor een iets te hoog of laag niveau, je bent dan iets langer of korter bezig met een schema dan de aangegeven tijd. Kom je er helemaal niet uit met kiezen? Wij helpen je graag met het vaststellen van jouw niveau, neem contact met ons op en we helpen je snel aan een Soloswim bundel die bij je past!
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
