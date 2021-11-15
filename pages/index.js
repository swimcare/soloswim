import Image from "next/image";

export default function Home() {
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

      {/* SECTION 1 */}
      <section className="bg-grey-light4">
        <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-10 lg:py-20">
          <div>
            <h2 className="text-main font-lexend font-extrabold text-2xl">
              Herbruikbare zwemschema's
            </h2>
            <h3 className="text-navy-light1 font-lexend font-bold text-lg my-2">
              Voor tijdens het banenzwemmen
            </h3>
          </div>
          <div className="bg-white p-5 mt-16 rounded-2xl relative">
            <div className="absolute top-0 -translate-x-5 -translate-y-20 w-full">
              <Image
                src="/images/home/bundels2.png"
                width={543}
                height={433}
                alt="bundels"
              />
            </div>
            <ul className="mt-36">
              <li className="py-4">
                <h4 className="font-bold text-navy-light1 tracking-wide">
                  Zorgvuldig samengestelde bundels voor alle niveau’s
                </h4>
                <p className="text-navy-light1 text-tiny my-2">
                  Bestaande uit 10 uitdagende trainingen
                </p>
              </li>
              <li className="py-4">
                <h4 className="font-bold text-navy-light1 tracking-wide">
                  Verschillende thema’s
                </h4>
                <p className="text-navy-light1 text-tiny my-2">
                  Van techniek-, kracht- of duur trainingen tot swimfit voor
                  ontspanning
                </p>
              </li>
              <li className="py-4">
                <h4 className="font-bold text-navy-light1 tracking-wide">
                  Gevarieerde oefeningen
                </h4>
                <p className="text-navy-light1 text-tiny my-2">
                  Die het zwemmen leuker maken en je vooruit helpen
                </p>
              </li>
            </ul>
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
