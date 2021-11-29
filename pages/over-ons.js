import IconCard from "../components/home/IconCard";
import Image from "next/image";
import Link from "next/link";

function overOns() {
  return (
    <main>
      <section>
        <div className="px-5 sm:px-8 max-w-screen-xl mx-auto pt-12 lg:py-20">
          <div>
            <h1 className="text-navy-light1 font-lexend font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Over Soloswim
            </h1>
            <p className="text-navy-light1 font-lexend font-semibold text-lg lg:text-2xl my-1 md:my-3 italic">
              Lees hier onze missie, ons verhaal en over het onstaan van Soloswim.
            </p>
          </div>
          <div className="my-5 lg:mt-10">
            <h2 className="text-main font-lexend font-extrabold text-2xl sm:text-3xl md:text-4xl">
              Onze missie
            </h2>
            <div className="flex flex-col md:flex-row gap-10 md:gap-2 lg:gap-10 my-12 lg:mt-20">
              <IconCard
                title="Banenzwemmen leuker maken!"
                img="/images/over-ons/missie1.png"
                color="bg-grey-light4"
              />
              <IconCard
                title="Zwemschema's voor elk type zwemmer!"
                img="/images/over-ons/missie2.png"
                color="bg-grey-light4"
              />
              <IconCard
                title="Onze kennis over zwemmen delen!"
                img="/images/over-ons/missie3.png"
                color="bg-grey-light4"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mb-5 mt-24 lg:mt-0 mx-auto lg:mx-0 lg:mr-10 flex flex-col lg:flex-row lg:max-w-7xl 2xl:max-w-8/10">
          <div className="lg:hidden mx-5 leading-none text-zero">
            <Image
              className="rounded-t-xl lg:rounded-none"
              src="/images/over-ons/over-ons.png"
              width={1016}
              height={645}
              alt="Ons verhaal"
            />
          </div>
          <div className="hidden lg:flex relative leading-none flex-none items-stretch w-5/12 xl:w-7/12 lg:min-h-[600px]">
            <Image
              className="rounded-t-xl sm:rounded-none"
              src="/images/over-ons/over-ons.png"
              layout="fill"
              objectFit="cover"
              alt="Ons verhaal"
            />
          </div>
          <div className="bg-grey-light4 mx-5 lg:mx-0 shadow-custom3 rounded-b-xl lg:rounded-b-none lg:rounded-r-xl p-6 sm:px-7 lg:p-9 flex flex-col gap-2">
            <div>
              <h3 className="text-main font-lexend font-bold lg:font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Ons verhaal
              </h3>
            </div>
            <div className="text-base leading-relaxed text-navy-light1 my-1 lg:leading-normal">
              <p>
                Sinds de dag dat we elkaar ontmoet hebben is zwemmen een
                belangrijk onderdeel in ons leven. We hebben elkaar ontmoet ik
                het zwembad (ongeveer zoals op de foto) en zijn nu
                getrouwd met golven gegraveerd in onze trouwringen. En dat is
                niet voor niets, we zijn allebei gek op zwemmen!
              </p>
              <p className="mt-5">
                Wij houden van zwemmen omdat het ons hoofd leeg maakt, een
                full-body workout is zonder dat we ons lichaam overbelasten en het een
                heerlijk gevoel is om door het water te glijden. We doen het vooral omdat we er gelukkig
                van worden. En dat willen we graag delen met andere
                banenzwemmers door middel van onze leuke en uitdagende
                zwemschema’s!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="px-5 mx-auto max-w-5xl">
        <div className="transform -translate-y-10 translate-x-2 lg:translate-y-0 flex flex-row lg:justify-end">
          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="78.09"
              height="79.136"
              viewBox="0 0 78.09 79.136"
            >
              <path
                id="Arrow-right_3"
                d="M58.4,59.955a113.373,113.373,0,0,1-18.3,3.111q-5.719.266-11.446.009A2,2,0,0,1,26.7,61.589a1.818,1.818,0,0,1,1.172-2.059,29.794,29.794,0,0,1,5.484-.383,76.945,76.945,0,0,0,14.7-1.312C44.868,56.9,41.739,55.8,38.617,54.7c-7.948-2.813-15.808-6.217-22.265-11.365A49.027,49.027,0,0,1,1.7,21.544,43.316,43.316,0,0,1,.683,1.882,1.933,1.933,0,0,1,1.988.146,2.276,2.276,0,0,1,4.263.536C5.275,1.407,4.7,2.7,4.64,3.8a50.654,50.654,0,0,0-.294,8.633,42.153,42.153,0,0,0,13.307,26.3c7.792,6.987,18.119,10.63,28.8,14.2,2.3.79,4.635,1.479,6.946,2.237a7.5,7.5,0,0,1,1.289.454C49.1,50.461,42.856,45.9,37.725,40.336a1.923,1.923,0,0,1-.245-2.584,2.4,2.4,0,0,1,2.728-.764c3.226,2.472,6.215,6.289,10.027,8.991,3.616,2.932,7.07,6.033,10.386,9.243C62.592,57.434,61.335,59.526,58.4,59.955Z"
                transform="matrix(0.951, 0.309, -0.309, 0.951, 19.53, 0)"
                fill="#143f5f"
              />
            </svg>
          </div>
          <div className="hidden lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="119.188"
              height="120.784"
              viewBox="0 0 119.188 120.784"
            >
              <path
                id="Arrow-right_3"
                d="M89.138,4.955A173.037,173.037,0,0,0,61.211.207Q52.482-.2,43.741.193a3.048,3.048,0,0,0-2.988,2.269A2.774,2.774,0,0,0,42.541,5.6a45.474,45.474,0,0,0,8.371.584,117.439,117.439,0,0,1,22.434,2c-4.865,1.427-9.64,3.115-14.4,4.789C46.81,17.273,34.813,22.469,24.958,30.325A74.83,74.83,0,0,0,2.589,63.582a66.112,66.112,0,0,0-1.546,30.01,2.95,2.95,0,0,0,1.992,2.65,3.474,3.474,0,0,0,3.471-.594c1.545-1.33.671-3.308.577-4.983a77.313,77.313,0,0,1-.449-13.176,64.338,64.338,0,0,1,20.31-40.135C38.836,26.689,54.6,21.13,70.9,15.685c3.508-1.206,7.075-2.258,10.6-3.414a11.447,11.447,0,0,0,1.967-.693C74.935,19.447,65.41,26.406,57.579,34.9a2.935,2.935,0,0,0-.374,3.943,3.671,3.671,0,0,0,4.164,1.165c4.924-3.772,9.486-9.6,15.3-13.722,5.52-4.475,10.79-9.208,15.852-14.107C95.533,8.8,93.614,5.611,89.138,4.955Z"
                transform="translate(119.188 91.743) rotate(162)"
                fill="#143f5f"
              />
            </svg>
          </div>
        </div>
      </div>

      <section>
        <div className="px-5 sm:px-8 max-w-screen-xl mx-auto -mt-5 lg:pb-32">
          <div className="mx-5">
            <h2 className="text-main font-lexend font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Het ontstaan van Soloswim
            </h2>
            <h3 className="font-lexend font-bold sm:font-extrabold text-2xl md:text-3xl lg:text-4xl text-navy-light1 my-2 lg:my-5">
              Een droomproject
            </h3>
          </div>
          <div className="bg-grey-light4 rounded-2xl px-5 lg:px-10 text-base leading-relaxed text-navy-light1 lg:leading-normal">
            <div className="">
              <p className="py-5 lg:hidden">
              Sinds we niet meer bij een club zwemmen maken
                wij onze eigen zwemtrainingen om zelf te doen tijdens het
                banenzwemmen. We zijn een ondernemend stel en afgelopen voorjaar
                waren we op zoek naar een leuke nieuwe uitdaging om ons volledig op te
                storten. In mei 2021 gingen we een maand op pad (in onze
                zelfgebouwde camperbus) om de Cote d’Azur te verkennen. Het was er
                prachtig, we genoten van de natuur en zwommen veel in de zee.
                Maar we misten ook iets; een 25-meter zwembad waar we onze
                baantjes in konden zwemmen (ja, dat kan ook in de zee hoor ik je
                denken, maar ik, Emily, ben een beetje bang voor kwallen en haaien dus
                ik was al heel trots als ik kopje onder was geweest).
              </p>
              <div className="lg:float-right lg:pl-7 lg:pt-7">
                <Image
                  className="shadow-custom4"
                  src="/images/over-ons/soloswim-ontstaan.png"
                  width={604}
                  height={403}
                  alt="Ontstaan soloswim"
                />
              </div>
              <p className="hidden lg:block pt-7">
                Sinds we niet meer bij een club zwemmen maken
                wij onze eigen zwemtrainingen om zelf te doen tijdens het
                banenzwemmen. We zijn een ondernemend stel en afgelopen voorjaar
                waren we op zoek naar een leuke nieuwe uitdaging om ons volledig op te
                storten. In mei 2021 gingen we een maand op pad (in onze
                zelfgebouwde camperbus) om de Cote d’Azur te verkennen. Het was er
                prachtig, we genoten van de natuur en zwommen veel in de zee.
                Maar we misten ook iets; een 25-meter zwembad waar we onze
                baantjes in konden zwemmen (ja, dat kan ook in de zee hoor ik je
                denken, maar ik, Emily, ben een beetje bang voor kwallen en haaien dus
                ik was al heel trots als ik kopje onder was geweest).
              </p>
              <p className="py-5">
                Het leuke van een camper is dat je overal kunt gaan staan waar je maar wilt. Dus we zeiden de zee gedag en gingen op
                zoek naar een buitenzwembad, geschikt voor banenzwemmen. En die vonden we onder de voet
                van de Mont Ventoux (Laurens wilde die ook heel graag op fietsen
                dus dat kwam mooi uit). Oh wat waren we blij met
                dat zwembad, het voelde alsof we in het paradijs waren beland!
                We schreven snel onze eigen zwemschema's en sprongen direct het
                zwembad in toen het de volgende dag open ging. Dagen achter elkaar zwommen
                we wel 2 tot 3 keer per dag (en verloren dus ook aardig wat
                handgeschreven zwemschema's). Het is dus niet gek dat
                ons idee voor Soloswim is ontstaan bij het paradijsachtige
                zwembad onder de voet van de Mont Ventoux! Net op de valreep,
                want het was de allerlaatste dag van onze reis, ons geluk kon
                niet op! We hadden eindelijk het project gevonden waar we ons helemaal op
                konden storten: het werd onze missie om onze zwemschema's te
                digitaliseren, waterproof te maken en te delen met anderen!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-16 sm:px-8 max-w-screen-xl mx-auto py-12 lg:pb-32 text-center">
          <h3 className="text-navy-light1 font-lexend font-bold lg:font-extrabold text-2xl md:text-3xl lg:text-4xl">
            Heb je ideeën, wil je samenwerken of heb je een vraag?
          </h3>
          <div className="my-5">
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
    </main>
  );
}

export default overOns;
