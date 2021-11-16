import Image from "next/image";
import { useEffect, useState } from "react";
import WaveSvg from "../components/main/WaveSvg";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideID = setTimeout(() => nextSlide(), 3000)
    return () => {
      clearTimeout(slideID)
    };
  }, [currentSlide]);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (currentSlide <= 3){
      setCurrentSlide(currentSlide+1);
    } else {
      setCurrentSlide(0);

    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="h-screen-navbar translate-y-0">
        <div className="relative h-full">
          <div className="hidden xl:block">
            <Image
              src="/images/home/header.png"
              alt="soloswim"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="xl:hidden">
            <Image
              src="/images/home/header-small.png"
              alt="soloswim"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="grid grid-cols-5 w-full md:w-5/6 lg:w-4/6 h-full absolute -translate-x-36 md:-translate-x-48 lg:-translate-x-64 xl:-translate-x-48">
            <div className="bg-soloswim-pink skew-x-20"></div>
            <div className="bg-soloswim-orange skew-x-20 -translate-x-1"></div>
            <div className="bg-soloswim-yellow skew-x-20 -translate-x-2"></div>
            <div className="bg-soloswim-green skew-x-20 -translate-x-3"></div>
            <div className="bg-soloswim-blue skew-x-20 -translate-x-4"></div>
          </div>
          <div className="absolute w-full px-3 pt-16 md:pt-0 md:px-0 lg:w-7/12 md:w-9/12 md:top-1/2 md:transform md:-translate-y-1/2">
            <div className="md:ml-7 xl:ml-24">
              <h3 className="font-lexend font-bold lg:font-extrabold text-2xl md:text-4xl xl:text-5xl text-navy-light1">
                Soloswim introduceert:
              </h3>
            </div>
            <div className="bg-white px-4 py-6 lg:py-10 my-6 lg:my-10 rounded-3xl md:rounded-r-3xl md:rounded-l-none">
              <h1 className="md:ml-4 xl:ml-20 max-w-md lg:max-w-2xl text-main font-lexend font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight">
                Waterproof Zwemschema's
              </h1>
              <h2 className="md:ml-4 xl:ml-20 font-lexend font-bold lg:font-extrabold text-navy-light1 text-lg md:text-xl lg:text-3xl my-4">
                Om zelf te volgen vanuit het zwembad
              </h2>
            </div>
            <div className="md:ml-7 xl:ml-24">
              <button
                role="button"
                className="text-white text-tiny lg:text-lg font-bold uppercase px-10 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
              >
                Shop nu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Herbruikbare zwemschema's TODO: consider building this like section 2 is setup */}
      <section className="bg-grey-light4">
        <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-20 lg:py-32">
          <div>
            <h2 className="text-main font-lexend font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Herbruikbare zwemschema's
            </h2>
            <h3 className="text-navy-light1 font-lexend font-bold md:font-extrabold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl my-2 md:my-5">
              Voor tijdens het banenzwemmen
            </h3>
          </div>
          <div className="bg-white shadow-custom3 p-5 mt-16 rounded-2xl flex flex-col sm:flex-row sm:w-5/6 lg:w-3/4 relative">
            <div className="-translate-y-20 w-full sm:order-2 sm:absolute sm:transform sm:top-1/2 sm:-translate-y-1/2 sm:right-0 sm:translate-x-1/2 sm:w-60 md:w-72 lg:w-auto">
              <Image
                src="/images/home/bundels2.png"
                width={543}
                height={433}
                alt="bundels"
              />
            </div>
            <ul className="-translate-y-20 sm:translate-y-0 -mb-20 sm:mb-0 sm:w-3/4 md:max-w-md">
              <li className="py-4">
                <h4 className="font-bold text-navy-light1 tracking-wide md:text-lg lg:text-xl">
                  Zorgvuldig samengestelde bundels voor alle niveau’s
                </h4>
                <p className="text-navy-light1 text-tiny my-2 lg:text-base">
                  Bestaande uit 10 uitdagende trainingen
                </p>
              </li>
              <li className="py-4">
                <h4 className="font-bold text-navy-light1 tracking-wide md:text-lg lg:text-xl">
                  Verschillende thema’s
                </h4>
                <p className="text-navy-light1 text-tiny my-2 lg:text-base">
                  Van techniek-, kracht- of duur trainingen tot swimfit voor
                  ontspanning
                </p>
              </li>
              <li className="py-4">
                <h4 className="font-bold text-navy-light1 tracking-wide md:text-lg lg:text-xl">
                  Gevarieerde oefeningen
                </h4>
                <p className="text-navy-light1 text-tiny my-2 lg:text-base">
                  Die het zwemmen leuker maken en je vooruit helpen
                </p>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left my-10 lg:mt-20">
            <button
              role="button"
              className="text-white text-tiny lg:text-lg font-bold uppercase px-10 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
            >
              Bekijk ons aanbod
            </button>
          </div>
        </div>
        <WaveSvg fill="#fff" />
      </section>

      {/* SECTION 2: zo ziet een zwemschema eruit */}
      <section>
        <div className="px-5 sm:px-3 max-w-screen-xl mx-auto py-20 lg:py-32">
          <h2 className="font-lexend text-slateblue-dark1 font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mx-10">
            Zo ziet een zwemschema eruit
          </h2>
          <h3 className="font-lexend my-2 text-main font-extrabold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mx-10">
            Lekker duidelijk
          </h3>
          <div className="sm:flex sm:flex-row my-10 max-w-5xl mx-auto">
            <div className="hidden sm:block my-auto sm:translate-x-5 z-20">
              <Image
                src="/images/home/bundel-front.png"
                width={350}
                height={476}
                alt="zwemschema"
              />
            </div>
            <div className="flex-grow my-auto sm:-translate-x-5">
              <div className="bg-grey-light4 rounded-2xl sm:rounded-l-none p-7 sm:py-2 lg:pr-24 flex flex-col">
                <div className="text-center sm:hidden mx-16">
                  {currentSlide === 0 && (
                    <Image
                      src="/images/home/bundel-front.png"
                      width={350}
                      height={476}
                      alt="zwemschema"
                    />
                  )}

                  {currentSlide === 1 && (
                    <Image
                      src="/images/home/bundel-front2.png"
                      width={350}
                      height={476}
                      alt="zwemschema"
                    />
                  )}
                  {currentSlide === 2 && (
                    <Image
                      src="/images/home/bundel-front3.png"
                      width={350}
                      height={476}
                      alt="zwemschema"
                    />
                  )}
                  {currentSlide === 3 && (
                    <Image
                      src="/images/home/bundel-front4.png"
                      width={350}
                      height={476}
                      alt="zwemschema"
                    />
                  )}
                  {currentSlide === 4 && (
                    <Image
                      src="/images/home/bundel-front5.png"
                      width={350}
                      height={476}
                      alt="zwemschema"
                    />
                  )}
                </div>
                <ul className="my-3 lg:my-6 flex flex-col gap-4 sm:gap-3 md:gap-5 lg:gap-6 max-w-sm sm:pl-10 md:pl-0 sm:ml-auto md:mx-auto">
                  <li className="font-bold" onClick={() => changeSlide(0)}>
                    <h4 className="text-main text-sm leading-relaxed">Titel</h4>
                    <p className="text-md text-navy-light1 leading-relaxed">
                      Een pakkende titel met focuspunten
                    </p>
                  </li>
                  <li
                    className="font-bold opacity-50"
                    onClick={() => changeSlide(1)}
                  >
                    <h4 className="text-main text-sm leading-relaxed">Info</h4>
                    <p className="text-md text-navy-light1 leading-relaxed">
                      De duur, afstand en benodigdheden
                    </p>
                  </li>
                  <li
                    className="font-bold opacity-50"
                    onClick={() => changeSlide(2)}
                  >
                    <h4 className="text-main text-sm leading-relaxed">
                      Inzwemmen
                    </h4>
                    <p className="text-md text-navy-light1 leading-relaxed">
                      Een goede warming-up
                    </p>
                  </li>
                  <li
                    className="font-bold opacity-50"
                    onClick={() => changeSlide(3)}
                  >
                    <h4 className="text-main text-sm leading-relaxed">Kern</h4>
                    <p className="text-md text-navy-light1 leading-relaxed">
                      Verschillende opdrachten
                    </p>
                  </li>
                  <li
                    className="font-bold opacity-50"
                    onClick={() => changeSlide(4)}
                  >
                    <h4 className="text-main text-sm leading-relaxed">
                      Uitzwemmen
                    </h4>
                    <p className="text-md text-navy-light1 leading-relaxed">
                      Een cooling-down
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM SECTION todo: add to homepage, not product pages*/}
      {/* <section className="lg:pb-20">
          <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-20 lg:py-32">
            <div className="text-center">
              <h2 className="text-main font-lexend font-extrabold lg:text-6xl text-3xl leading-10">
                Volg ons op Instagram!
              </h2>
            </div>
          </div>
        </section> */}
    </main>
  );
}
