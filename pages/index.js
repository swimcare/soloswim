import { CheckIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FullWidthImageCard from "../components/home/FullWidthImageCard";
import HomeProductItemCard from "../components/home/HomeProductItemCard";
import IconCard from "../components/home/IconCard";
import WaveSvg from "../components/main/WaveSvg";
import MultiColorBg from "../components/home/MultiColorBg";
import WaveExtendedSvg from "../components/main/WaveExtendedSvg";
import SimpleIconCard from "../components/home/SimpleIconCard";
import SectionReviewsMain from "../components/home/SectionReviewsMain";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { NextSeo } from "next-seo";

export default function Home() {
  const [productSlide, setCurrentSlide] = useState(0);
  const [introSlide, setIntroSlide] = useState(0);

  useEffect(() => {
    const slideID = setTimeout(
      () => nextSlide(5, productSlide, setCurrentSlide),
      2000
    );
    return () => {
      clearTimeout(slideID);
    };
  }, [productSlide]);

  useEffect(() => {
    const slideID = setTimeout(
      () => nextSlide(3, introSlide, setIntroSlide),
      4000
    );
    return () => {
      clearTimeout(slideID);
    };
  }, [introSlide]);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = (slides, target, targetSetter) => {
    if (target < slides - 1) {
      targetSetter(target + 1);
    } else {
      targetSetter(0);
    }
  };

  // react multi carousel
  const responsive = {
    xl3: {
      breakpoint: { max: 3000, min: 2000 },
      items: 5,
      // partialVisibilityGutter: 10, // this is needed to tell the amount of px that should be visible.
    },
    xl2: {
      breakpoint: { max: 2000, min: 1400 },
      items: 4,
      partialVisibilityGutter: 10, // this is needed to tell the amount of px that should be visible.
    },
    xl: {
      breakpoint: { max: 1400, min: 960 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    lg: {
      breakpoint: { max: 960, min: 700 },
      items: 2,
      partialVisibilityGutter: 70, // this is needed to tell the amount of px that should be visible.
    },
    md: {
      breakpoint: { max: 700, min: 568 },
      items: 2,
    },
    sm: {
      breakpoint: { max: 568, min: 430 },
      items: 1,
      partialVisibilityGutter: 135, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 430, min: 0 },
      items: 1,
      // partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <Fragment>
      <NextSeo
        title="Soloswim | Waterproof zwemschema's"
        description="Waterproof zwemschema's om zelf te volgen vanuit het zwembad. ✓ Borstcrawl zwemschema's ✓ Techniek-, kracht- en duurtrainingen ✓ Alle niveau's ✓ Snelle levering"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/images/favicons/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "/images/favicons/apple-touch-icon.png",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://www.soloswim.nl",
          title: "Soloswim | Waterproof zwemschema's",
          description:
            "Waterproof zwemschema's om zelf te volgen vanuit het zwembad. ✓ Borstcrawl zwemschema's ✓ Techniek-, kracht- en duurtrainingen ✓ Alle niveau's ✓ Snelle levering",
          locale: "nl_NL",
          site_name: "Soloswim | Waterproof zwemschema's",
          images: [
            {
              url: "/images/home/header-OG.jpg",
              width: 1200,
              height: 630,
              alt: "Soloswim",
            },
          ],
        }}
      />
      <main>
        {/* HERO */}
        <section className="h-screen-navbar transform translate-y-0">
          <div className="relative h-full overflow-hidden">
            <div className="hidden xl:block">
              <Image
                src="/images/home/header-desktop.jpg"
                alt="soloswim"
                layout="fill"
                objectFit="cover"
                priority
                quality={100}
              />
            </div>
            <div className="hidden sm:block xl:hidden">
              <Image
                src="/images/home/header-tablet.jpg"
                alt="soloswim"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="sm:hidden">
              <Image
                src="/images/home/header-small.jpg"
                alt="soloswim"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            <div className="grid grid-cols-6 w-full sm:w-5/6 md:w-5/6 lg:w-4/6 h-full absolute transform -translate-x-56 md:-translate-x-48 lg:-translate-x-64 xl:-translate-x-48">
              <div className="bg-soloswim-orange skew-x-20"></div>
              <div className="bg-soloswim-yellow skew-x-20 transform -translate-x-1"></div>
              <div className="bg-soloswim-green skew-x-20 transform -translate-x-2"></div>
              <div className="bg-soloswim-purple skew-x-20 transform -translate-x-3"></div>
              <div className="bg-soloswim-blue skew-x-20 transform -translate-x-4"></div>
              <div className="bg-soloswim-pink skew-x-20 transform -translate-x-5"></div>
            </div>
            <div className="absolute w-full px-3 pt-16 sm:pt-32 md:top-[calc(40%)] md:pt-0 md:px-0 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:top-1/2 md:transform md:-translate-y-1/2">
              <div className="md:ml-7 xl:ml-[calc((10%)+1rem)] 2xl:ml-[calc((20%)+1rem)]">
                <h3 className="font-lexend font-bold lg:font-extrabold text-2xl md:text-4xl xl:text-5xl text-navy-light1">
                  Soloswim introduceert:
                </h3>
              </div>
              <div className="bg-white shadow-custom3 px-4 py-6 lg:py-10 my-6 lg:my-10 rounded-3xl md:rounded-r-3xl md:rounded-l-none">
                <Slide left>
                  <h1 className="md:ml-4 xl:ml-[calc(10%)] 2xl:ml-[calc(20%)] max-w-md lg:max-w-2xl text-main font-lexend font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight">
                    Waterproof Zwemschema's
                  </h1>
                  <h2 className="md:ml-4 xl:ml-[calc(10%)] 2xl:ml-[calc(20%)] font-lexend font-bold lg:font-extrabold text-navy-light1 text-lg md:text-xl lg:text-3xl my-4">
                    Om zelf te volgen vanuit het zwembad
                  </h2>
                </Slide>
              </div>
              <div className="md:ml-7 xl:ml-[calc((10%)+1rem)] 2xl:ml-[calc((20%)+1rem)]">
                <Bounce left>
                  <Link href="/producten">
                    <a>
                      <button
                        role="button"
                        className="text-white text-tiny lg:text-lg font-bold uppercase px-10 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
                      >
                        Shop nu
                      </button>
                    </a>
                  </Link>
                </Bounce>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: */}
        <section className="bg-grey-light4">
          <div className="px-5 sm:px-8 max-w-screen-xl mx-auto pt-20 lg:pt-32 pb-32 sm:pb-10">
            <Fade bottom>
              <div>
                <h2 className="text-main font-lexend font-extrabold text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Herbruikbare zwemschema's
                </h2>
                <h3 className="text-navy-light1 font-lexend font-bold md:font-extrabold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl my-2 md:my-5">
                  Voor iedere banenzwemmer
                </h3>
              </div>
            </Fade>
          </div>
          <div className="mx-5 sm:mx-0 lg:w-3/4">
            <WaveSvg fill="#fff" />
          </div>
          <div className="mx-5 sm:mx-0 bg-white p-5 flex flex-col sm:flex-row lg:w-3/4 relative">
            <div className="transform -translate-y-40 w-full sm:order-2 sm:absolute sm:transform sm:top-1/2 sm:-translate-y-1/2 sm:right-0 lg:translate-x-1/2 sm:w-52 md:w-72 md:mr-10 lg:mr-0 lg:w-auto">
              <div
                className={`${
                  introSlide === 0 ? "block" : "hidden"
                } h-[30rem] max-w-screen-xs md:max-w-none lg:w-96`}
              >
                <Image
                  src="/images/home/intro1.png"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  alt="Soloswim zwemschema's"
                  priority
                />
              </div>
              <div
                className={`${
                  introSlide === 1 ? "block" : "hidden"
                } h-[30rem] max-w-screen-xs md:max-w-none lg:w-96`}
              >
                <Image
                  src="/images/home/intro2.png"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  alt="Soloswim zwemschema's"
                  priority
                />
              </div>
              <div
                className={`${
                  introSlide === 2 ? "block" : "hidden"
                } h-[30rem] max-w-screen-xs md:max-w-none lg:w-96`}
              >
                <Image
                  src="/images/home/intro3.png"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  alt="Soloswim zwemschema's"
                  priority
                />
              </div>
            </div>

            <ul className=" transform -translate-y-36 sm:translate-y-0 -mb-36 sm:mb-0 sm:w-full xl:ml-[calc((((133%)-1280px)/2)+20px+1rem)]">
              <Slide left cascade>
                <div>
                  <li className="py-4 flex flex-row gap-4 sm:max-w-sm lg:max-w-lg">
                    <CheckIcon className="w-8 h-8 text-main stroke-current stroke-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold font-lexend text-navy-light1 tracking-wide md:text-lg lg:text-xl">
                        Zorgvuldig samengestelde bundels voor alle niveau’s
                      </h4>
                      <p className="text-navy-light1 text-tiny my-2 lg:text-base">
                        Bestaande uit 10 uitdagende trainingen
                      </p>
                    </div>
                  </li>
                  <li className="py-4 flex flex-row gap-4 sm:max-w-sm lg:max-w-lg">
                    <CheckIcon className="w-8 h-8 text-main stroke-current stroke-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold font-lexend text-navy-light1 tracking-wide md:text-lg lg:text-xl">
                        Verschillende thema’s
                      </h4>
                      <p className="text-navy-light1 text-tiny my-2 lg:text-base">
                        Van techniek-, kracht- tot duur trainingen.
                      </p>
                    </div>
                  </li>
                  <li className="py-4 flex flex-row gap-4 sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <CheckIcon className="w-8 h-8 text-main stroke-current stroke-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold font-lexend text-navy-light1 tracking-wide md:text-lg lg:text-xl">
                        Gevarieerde oefeningen
                      </h4>
                      <p className="text-navy-light1 text-tiny my-2 lg:text-base">
                        Die het zwemmen leuker maken en je vooruit helpen
                      </p>
                    </div>
                  </li>
                </div>
              </Slide>
            </ul>
          </div>
          <div className="mx-5 sm:mx-0 lg:w-3/4">
            <WaveExtendedSvg fill="#fff" />
          </div>
          {/* <div className="px-5 sm:px-8 max-w-screen-xl mx-auto pt-20 lg:pt-32 pb-10"> */}

          <div className="px-5 sm:px-8 max-w-screen-xl mx-auto text-center sm:text-left mt-10 mb-20 lg:mb-32 overflow-x-hidden">
            <Bounce left>
              <Link href="/producten">
                <a>
                  <button
                    role="button"
                    className="text-white text-tiny lg:text-lg font-bold uppercase px-10 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
                  >
                    Bekijk ons aanbod
                  </button>
                </a>
              </Link>
            </Bounce>
          </div>
          <WaveSvg fill="#fff" />
        </section>

        {/* SECTION 2: zo ziet een zwemschema eruit */}
        <section>
          <div className="px-5 sm:px-3 max-w-screen-xl mx-auto py-20 lg:py-32">
            <Fade bottom>
              <h2 className="font-lexend text-slateblue-dark1 font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mx-10">
                Zo ziet een zwemschema eruit
              </h2>
              <h3 className="font-lexend my-2 text-main font-extrabold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mx-10">
                Lekker duidelijk
              </h3>
            </Fade>
            <div className="sm:flex sm:flex-row my-10 max-w-5xl mx-auto">
              <div className="hidden sm:block my-auto transform translate-x-5 z-20 w-1/2 md:w-5/12 h-[500px]">
                <div className={`${productSlide === 0 ? "block" : "hidden"}`}>
                  <Image
                    src="/images/home/schema1.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    alt="zwemschema"
                    priority
                  />
                </div>
                <div className={`${productSlide === 1 ? "block" : "hidden"}`}>
                  <Image
                    src="/images/home/schema2.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    alt="zwemschema"
                    priority
                  />
                </div>
                <div className={`${productSlide === 2 ? "block" : "hidden"}`}>
                  <Image
                    src="/images/home/schema3.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    alt="zwemschema"
                    priority
                  />
                </div>
                <div className={`${productSlide === 3 ? "block" : "hidden"}`}>
                  <Image
                    src="/images/home/schema4.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    alt="zwemschema"
                    priority
                  />
                </div>
                <div className={`${productSlide === 4 ? "block" : "hidden"}`}>
                  <Image
                    src="/images/home/schema5.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    alt="zwemschema"
                    priority
                  />
                </div>
              </div>
              <div className="flex-grow my-auto transform sm:-translate-x-5">
                <div className="bg-grey-light4 rounded-2xl sm:rounded-l-none p-7 sm:py-2 lg:pr-24 flex flex-col">
                  <div className="text-center sm:hidden w-full max-w-xs">
                    <div
                      className={`${productSlide === 0 ? "block" : "hidden"}`}
                    >
                      <Image
                        src="/images/home/schema1.png"
                        width={350}
                        height={476}
                        alt="zwemschema"
                      />
                    </div>

                    <div
                      className={`${productSlide === 1 ? "block" : "hidden"}`}
                    >
                      <Image
                        src="/images/home/schema2.png"
                        width={350}
                        height={476}
                        alt="zwemschema"
                      />
                    </div>
                    <div
                      className={`${productSlide === 2 ? "block" : "hidden"}`}
                    >
                      <Image
                        src="/images/home/schema3.png"
                        width={350}
                        height={476}
                        alt="zwemschema"
                      />
                    </div>
                    <div
                      className={`${productSlide === 3 ? "block" : "hidden"}`}
                    >
                      <Image
                        src="/images/home/schema4.png"
                        width={350}
                        height={476}
                        alt="zwemschema"
                      />
                    </div>
                    <div
                      className={`${productSlide === 4 ? "block" : "hidden"}`}
                    >
                      <Image
                        src="/images/home/schema5.png"
                        width={350}
                        height={476}
                        alt="zwemschema"
                      />
                    </div>
                  </div>

                  <ul className="my-3 lg:my-6 flex flex-col gap-4 sm:gap-3 md:gap-5 lg:gap-6 max-w-sm sm:pl-10 md:pl-0 sm:ml-auto md:mx-auto">
                    <li
                      className={`font-bold hover:cursor-pointer ${
                        productSlide === 0 ? "opacity-100" : "opacity-50"
                      }`}
                      onMouseOver={() => changeSlide(0)}
                    >
                      <h4 className="text-main text-sm leading-relaxed">
                        Info
                      </h4>
                      <p className="text-md text-navy-light1 leading-relaxed">
                        Informatie over de zwemtraining
                      </p>
                    </li>
                    <li
                      className={`font-bold hover:cursor-pointer ${
                        productSlide === 1 ? "opacity-100" : "opacity-50"
                      }`}
                      onMouseOver={() => changeSlide(1)}
                    >
                      <h4 className="text-main text-sm leading-relaxed">
                        Titel
                      </h4>
                      <p className="text-md text-navy-light1 leading-relaxed">
                        Een pakkende titel met focuspunten
                      </p>
                    </li>
                    <li
                      className={`font-bold hover:cursor-pointer ${
                        productSlide === 2 ? "opacity-100" : "opacity-50"
                      }`}
                      onMouseOver={() => changeSlide(2)}
                    >
                      <h4 className="text-main text-sm leading-relaxed">
                        Inzwemmen
                      </h4>
                      <p className="text-md text-navy-light1 leading-relaxed">
                        Een goede warming-up
                      </p>
                    </li>
                    <li
                      className={`font-bold hover:cursor-pointer ${
                        productSlide === 3 ? "opacity-100" : "opacity-50"
                      }`}
                      onMouseOver={() => changeSlide(3)}
                    >
                      <h4 className="text-main text-sm leading-relaxed">
                        Kern
                      </h4>
                      <p className="text-md text-navy-light1 leading-relaxed">
                        Verschillende opdrachten
                      </p>
                    </li>
                    <li
                      className={`font-bold hover:cursor-pointer ${
                        productSlide === 4 ? "opacity-100" : "opacity-50"
                      }`}
                      onMouseOver={() => changeSlide(4)}
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

        {/* SECTION 3: COACHES */}
        {/* <SectionCoaches color="multicolor" /> */}

        {/* SECTION 5: WAAROM SOLOSWIM */}
        <section className="bg-grey-light4">
          <div className="px-5 max-w-screen-xl mx-auto pt-20 pb-6 lg:pt-32">
            <Fade bottom>
              <h2 className="font-lexend font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-main">
                Waarom Soloswim
              </h2>
              <h2 className="font-lexend font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-navy-light1 my-2 lg:my-5">
                Een aantal voordelen op een rijtje
              </h2>
            </Fade>
          </div>
          <div className="flex flex-col px-5 sm:px-0 gap-7 sm:gap-10 lg:gap-14 lg:py-8 overflow-x-hidden">
            <Slide left>
              <FullWidthImageCard
                img="/images/home/waarom-soloswim-1.png"
                number="01"
                title="Doelgericht banenzwemmen"
                text="Met onze gestructureerde zwemschema's hoef je niet meer zelf je zwemtraining te bedenken. Hierdoor kun jij je volledig
                  richten op het uitvoeren van een doelgerichte training zodat jij met een
                  voldaan gevoel het zwembad verlaat, wat je doel met zwemmen
                  ook is!"
              />
            </Slide>
            <Slide right>
              <FullWidthImageCard
                img="/images/home/waarom-soloswim-2.png"
                number="02"
                title="Breed aanbod aan zwemschema’s"
                text="Op wat voor manier je ook zwemt, met ons brede aanbod hebben wij zwemschema’s voor iedere zwemmer. Of je nu een fanatieke triatleet bent, nog helemaal geen zwemervaring hebt maar graag borstcrawl wilt leren of gewoon lekker relaxed baantjes wilt trekken, er is voor ieder wat wils!"
                alignRight
              />
            </Slide>
            <Slide left>
              <FullWidthImageCard
                img="/images/home/waarom-soloswim-3.png"
                number="03"
                title="Waterproof en herbruikbaar"
                text="Onze zwemschema’s zijn gemaakt van sterk materiaal en volledig waterproof. Hierdoor zijn papieren zwemschema's die snel nat worden verleden tijd. Dus kies een bundel uit, stop hem in je zwemtas en gebruik hem keer op keer!"
              />
            </Slide>
            <Slide right>
              <FullWidthImageCard
                img="/images/home/waarom-soloswim-4.png"
                number="04"
                title="En misschien wel het belangrijkste: meer plezier tijdens het zwemmen!"
                text="Elk schema bevat gevarieerde en uitdagende zwemoefeningen waardoor het banenzwemmen nooit saai wordt. Laat je verrassen want geen schema is hetzelfde! Het voltooien van een schema geeft een heerlijk gevoel, zo ervaar jij nog meer plezier tijdens het banenzwemmen."
                alignRight
              />
            </Slide>
          </div>
          <div className="px-5 max-w-screen-xl mx-auto py-12 lg:py-32">
            <h2 className="mb-16 text-center font-lexend font-extrabold text-2xl sm:text-4xl text-navy-light1">
              Oké, nog een paar extra voordelen!
            </h2>
            <Fade bottom>
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
            </Fade>
          </div>
        </section>

        <div className="bg-grey-light4">
          <WaveSvg fill="#2528D5" />
        </div>

        {/* SECTION 6: REVIEWS */}
        <SectionReviewsMain />

        <div className="bg-main">
          <WaveSvg fill="#FFF" />
        </div>

        {/* SECTION 7: STAPPEN BESTELLEN + KIES JOUW BUNDEL UIT */}
        <section className="py-12 lg:py-32">
          {/* STAPPEN BESTELLEN */}
          <div className="px-5 max-w-screen-xl mx-auto">
            <Fade bottom>
              <h2 className="mb-16 text-center font-lexend font-extrabold text-2xl sm:text-4xl text-navy-light1">
                Doe mij maar zo'n schema!
              </h2>
            </Fade>
            <div className="flex flex-col md:flex-row gap-20 md:gap-5 xl:gap-6 py-5 sm:py-10">
              {/* Custom icon card */}
              <Fade bottom>
                <div className="bg-grey-light4 rounded-2xl w-full max-w-sm mx-auto h-56">
                  <div className="flex flex-col text-center">
                    <div className="relative transform -translate-y-16 w-52 h-48 mx-auto">
                      <Image
                        src="/images/home/stap1.png"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="bottom"
                        alt="Selecteer een trainingsbundel die bij jou past"
                      />
                    </div>
                    <h3 className="text-navy-light1 font-semibold mx-4 transform -translate-y-10">
                      Selecteer een trainingsbundel die bij jou past
                    </h3>
                  </div>
                </div>
              </Fade>

              {/* End custom icon card */}
              <IconCard
                color="bg-grey-light4"
                img="/images/home/stap2.png"
                title="Ontvang de bundel bij jou thuis"
              />
              <IconCard
                color="bg-grey-light4"
                img="/images/home/stap3.png"
                title="Stop hem in je zwemtas en volg het schema vanuit het bad"
              />
            </div>

            <div className="flex flex-row max-w-xl md:max-w-full mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="94"
                height="94"
                viewBox="0 0 133.108 133.598"
              >
                <path
                  id="Arrow-right_3"
                  d="M89.122,91.516A173.036,173.036,0,0,1,61.2,96.265q-8.729.406-17.47.014a3.048,3.048,0,0,1-2.988-2.269,2.774,2.774,0,0,1,1.789-3.143,45.473,45.473,0,0,1,8.371-.584,117.439,117.439,0,0,0,22.434-2c-4.865-1.427-9.64-3.115-14.4-4.789C46.794,79.2,34.8,74,24.943,66.146A74.831,74.831,0,0,1,2.573,32.889,66.112,66.112,0,0,1,1.027,2.88,2.95,2.95,0,0,1,3.019.23,3.474,3.474,0,0,1,6.49.824c1.545,1.33.671,3.308.577,4.983a77.313,77.313,0,0,0-.449,13.176,64.338,64.338,0,0,0,20.31,40.135C38.82,69.782,54.582,75.341,70.889,80.786c3.508,1.206,7.075,2.258,10.6,3.414a11.447,11.447,0,0,1,1.967.693C74.92,77.024,65.395,70.065,57.564,61.571a2.935,2.935,0,0,1-.374-3.943,3.671,3.671,0,0,1,4.164-1.165c4.924,3.772,9.486,9.6,15.3,13.722,5.52,4.475,10.79,9.208,15.852,14.107C95.517,87.667,93.6,90.86,89.122,91.516Z"
                  transform="matrix(0.799, 0.602, -0.602, 0.799, 58.07, 0.004)"
                  fill="#143f5f"
                />
              </svg>
              <p className="md:hidden my-auto font-semibold text-tiny text-navy-light1 transform -translate-x-6">
                Nu nog eentje uitzoeken!
              </p>
            </div>
          </div>

          {/* KIES JOUW BUNDEL UIT*/}
          <div className="flex flex-col my-8">
            <h2 className="font-lexend font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-main max-w-screen-xl mx-auto px-5">
              Er is een Soloswim bundel die bij jou past
            </h2>
            <div className="max-w-screen-xl w-full px-5 mx-auto">
              <div className="flex flex-row justify-between my-4">
                <h3 className="font-lexend font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy-light1 my-auto">
                  Wat jouw niveau ook is
                </h3>
                <div className="hidden md:block my-auto flex-shrink-0">
                  <Link href="/producten">
                    <a>
                      <button
                        role="button"
                        className="text-white text-tiny lg:text-lg font-bold uppercase px-12 py-4 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
                      >
                        Bekijk alle producten
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="ml-5 xl:w-[calc(1280px+((100%-1280px)/2)-20px)] xl:ml-auto my-5 md:my-10">
              <MultiCarousel
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                infinite={false}
                keyBoardControl={true}
                partialVisible={true}
                centerMode={false}
              >
                {/* todo: update href links to actual products */}
                <HomeProductItemCard
                  title="Borstcrawl 100m leren zwemmen"
                  img="/images/zwemschemas/bcl100/1.png"
                  price="12,99"
                  borderColor="border-soloswim2-blue"
                  href="/producten/borstcrawl-100m-leren-zwemmen"
                />
                <HomeProductItemCard
                  title="Borstcrawl complete zwemtraining"
                  img="/images/zwemschemas/bcc1/1.png"
                  price="29,99"
                  borderColor="border-t-soloswim2-orange border-b-soloswim2-green border-l-soloswim2-yellow border-r-soloswim2-yellow"
                  href="/producten/borstcrawl-complete-zwemtraining"
                />
                <HomeProductItemCard
                  title="Borstcrawl techniek zwemtraining"
                  img="/images/zwemschemas/bct1/1.png"
                  price="12,99"
                  borderColor="border-soloswim2-green"
                  href="/producten/borstcrawl-techniek-zwemtraining"
                />
                <HomeProductItemCard
                  title="Borstcrawl kracht zwemtraining"
                  img="/images/zwemschemas/bck1/1.png"
                  price="12,99"
                  borderColor="border-soloswim2-orange"
                  href="/producten/borstcrawl-kracht-zwemtraining"
                />
                <HomeProductItemCard
                  title="Borstcrawl duur zwemtraining"
                  img="/images/zwemschemas/bcd1/1.png"
                  price="12,99"
                  borderColor="border-soloswim2-yellow"
                  href="/producten/borstcrawl-duur-zwemtraining"
                />
              </MultiCarousel>
            </div>
            <Link href="/producten">
              <a>
                <button
                  role="button"
                  className="md:hidden text-white text-tiny lg:text-lg font-bold uppercase px-12 py-4 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
                >
                  Bekijk alle producten
                </button>
              </a>
            </Link>
          </div>
        </section>

        {/* SECTION 8: OVER ONS */}
        <section className="relative overflow-x-hidden">
          <MultiColorBg />
          <div className="relative h-full flex flex-col justify-between">
            <WaveExtendedSvg fill="#fff" />
            <div className="px-5 max-w-screen-xl mx-auto pt-20 lg:pt-32">
              <Fade bottom>
                <h2 className="font-lexend text-3xl md:text-5xl lg:text-6xl text-main font-extrabold">
                  Cijfers waar we trots op zijn!
                </h2>
              </Fade>
              <div className="my-5 md:my-10 lg:my-20 flex flex-col gap-4 md:flex-row md:justify-evenly md:text-center">
                <Fade bottom>
                  <div>
                    <p className="font-lexend mb-2 md:mb-0 font-extrabold text-5xl md:text-6xl lg:text-7xl text-navy-light1">
                      100
                    </p>
                    <p className="font-lexend font-extrabold text-xl md:text-2xl text-navy-light1">
                      Unieke zwemschema's
                    </p>
                  </div>
                </Fade>
                <Fade bottom>
                  <div>
                    <p className="font-lexend mb-2 md:mb-0 font-extrabold text-5xl md:text-6xl lg:text-7xl text-navy-light1">
                      &gt;250 km
                    </p>
                    <p className="font-lexend font-extrabold text-xl md:text-2xl text-navy-light1">
                      aan zwemkilometers
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
            {/* Over ons card */}
            <Slide left>
              <div className="my-5 mx-auto lg:mx-0 lg:mr-10 pb-20 lg:pb-32 flex flex-col lg:flex-row max-w-4xl lg:max-w-7xl 2xl:max-w-7xl">
                <div className="lg:hidden mx-5 leading-none text-zero">
                  <Image
                    className="rounded-t-xl lg:rounded-none"
                    src="/images/home/oprichters-soloswim.png"
                    width={996}
                    height={772}
                    alt="Oprichters soloswim"
                  />
                </div>
                <div className="hidden lg:flex relative leading-none flex-none items-stretch w-5/12 xl:w-7/12">
                  <Image
                    className="rounded-t-xl sm:rounded-none"
                    src="/images/home/oprichters-soloswim.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Oprichters soloswim"
                  />
                </div>
                <div className="bg-white mx-5 lg:mx-0 shadow-custom3 rounded-b-xl lg:rounded-b-none lg:rounded-r-xl p-6 sm:px-7 lg:p-9 flex flex-col gap-2">
                  <div>
                    <h3 className="text-navy-light1 font-lexend font-bold lg:font-extrabold text-lg md:text-2xl leading-tight">
                      Handgemaakt in Nederland door zwemmers
                    </h3>
                  </div>
                  <div className="text-base leading-relaxed text-navy-light1 my-1 lg:leading-normal">
                    <p className="">
                      Papier en water gaan niet zo goed samen, niet gek dat onze
                      handgeschreven zwemtrainingen in de prullenbak terecht
                      kwamen. Zonde vonden we! Met een duidelijke missie gingen
                      we aan de slag en ruim een halfjaar later was Soloswim
                      geboren!
                    </p>
                    <p className="mt-4">
                      We maken al onze bundels zelf met veel zorg; van het
                      ontwikkelen van de trainingen tot het bundelen van de
                      individuele waterdichte zwemschema's. Made in the
                      Netherlands, daar zijn we trots op! Houd ons in de gaten
                      want we zijn continu bezig met het uitbreiden van onze
                      zwemschema’s. Zo komt er binnenkort een bundel voor
                      recreanten (swimfit) en een bundel met verschillende
                      slagen uit. Voor ieder wat wils, dat vinden we belangrijk!
                    </p>
                  </div>
                  <div className="lg:inline-block hidden my-6">
                    <Link href="/over-ons">
                      <a>
                        <button
                          role="button"
                          className="text-white text-tiny font-bold uppercase px-10 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
                        >
                          Meer over ons
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="inline-block lg:hidden mx-auto my-6">
                  <Link href="/producten">
                    <a>
                      <button
                        role="button"
                        className="text-white text-tiny lg:text-lg font-bold uppercase px-10 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
                      >
                        Meer over ons
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </Slide>
            {/* Einde over on card */}
            <div className="transform rotate-180">
              <WaveExtendedSvg fill="#fff" />
            </div>
          </div>
        </section>

        <section>
          <div className="px-5 max-w-screen-xl mx-auto py-20 lg:py-32">
            <Fade bottom>
              <h2 className="mx-auto max-w-5xl font-lexend text-3xl md:text-5xl lg:text-6xl text-main font-extrabold text-center">
                Waarom wij zo van zwemmen houden!
              </h2>
            </Fade>
            <div className="my-5 md:my-10 lg:my-20 flex flex-row flex-wrap justify-around gap-5 lg:gap-10 text-slateblue-dark1 text-center">
              <SimpleIconCard
                icon="/images/home/waarom-zwemmen1.png"
                title="Blessurevrij sporten"
                text="In het water weeg je 90% minder dan op het land, je lichaam overbelasten wordt vrijwel onmogelijk. Zo is de kans op een blessure veel kleiner!"
              />
              <SimpleIconCard
                icon="/images/home/waarom-zwemmen2.png"
                title="Voor alle leeftijden"
                text="Je ziet het meteen als je het zwembad inloopt: zwemmen is voor jong en oud! Je bepaalt zelf namelijk hoe zwaar (of licht) je het maakt."
              />
              <SimpleIconCard
                icon="/images/home/waarom-zwemmen3.png"
                title="Goed voor je lichaam"
                text='Longproblemen, hart- en vaatziekten of revalideren? "Ga zwemmen." Is wat artsen met goede reden zeggen!'
              />
              <SimpleIconCard
                icon="/images/home/waarom-zwemmen4.png"
                title="Toegankelijk"
                text="Iedereen heeft badkleding in de kast liggen en zwembaden zijn er in overvloed, dus niets houdt je tegen om een duik te nemen!"
              />
              <SimpleIconCard
                icon="/images/home/waarom-zwemmen5.png"
                title="Full body workout"
                text="Bij zwemmen worden vrijwel alle spieren aan het werk gezet! Tegelijkertijd is het ook nog eens één van de beste manieren om je conditie te verbeteren."
              />
              <SimpleIconCard
                icon="/images/home/waarom-zwemmen6.png"
                title="Goed voor je geest"
                text="Rustig zwemmen is ontspannend en stressverlagend. Lever je meer inspanning dan wordt zwemmen meditatief omdat er geen ruimte is voor overbodige gedachten."
              />
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
    </Fragment>
  );
}
