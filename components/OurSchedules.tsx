"use client";

import Image from "next/image";
import FadeInFromBottom from "components/framer/FadeInFromBottom";
import WaveSvg from "components/svg/WaveSvg";
import SlideInFromSide from "components/framer/SlideInFromSide";
import { CheckIcon } from "@heroicons/react/solid";
import SlideInFromSideSpring from "components/framer/SlideInFromSideSpring";
import Link from "next/link";
import WaveExtendedSvg from "./svg/WaveExtendedSvg";
import { useEffect, useState } from "react";

export default function OurSchedules() {
  const [introSlide, setIntroSlide] = useState(0);

  useEffect(() => {
    const slideID = setTimeout(
      () => nextSlide(3, introSlide, setIntroSlide),
      4000
    );
    return () => {
      clearTimeout(slideID);
    };
  }, [introSlide]);

  const nextSlide = (slides, target, targetSetter) => {
    if (target < slides - 1) {
      targetSetter(target + 1);
    } else {
      targetSetter(0);
    }
  };

  return (
    <section className="bg-grey-light4">
      <div className="px-5 sm:px-8 max-w-screen-xl mx-auto pt-20 lg:pt-32 pb-32 sm:pb-10">
        <FadeInFromBottom>
          <div>
            <h2 className="text-main font-lexend font-extrabold text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Herbruikbare zwemschema's
            </h2>
            <h3 className="text-navy-light1 font-lexend font-bold md:font-extrabold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl my-2 md:my-5">
              Voor iedere banenzwemmer
            </h3>
          </div>
        </FadeInFromBottom>
      </div>
      <div className="mx-5 sm:mx-0 lg:w-3/4">
        <WaveSvg fill="#fff" />
      </div>

      {/* client component */}
      <div className="mx-5 sm:mx-0 bg-white p-5 flex flex-col sm:flex-row lg:w-3/4 relative">
        <div className="transform -translate-y-40 w-full sm:order-2 sm:absolute sm:transform sm:top-1/2 sm:-translate-y-1/2 sm:right-0 lg:translate-x-1/2 sm:w-52 md:w-72 md:mr-10 lg:mr-0 lg:w-auto">
          <div
            className={`${
              introSlide === 0 ? "block" : "hidden"
            } h-[30rem] max-w-screen-xs md:max-w-none lg:w-96`}
          >
            <Image
              src="/images/home/intro1.png"
              alt="Soloswim zwemschema's"
              priority
              fill
              sizes="100vw"
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </div>
          <div
            className={`${
              introSlide === 1 ? "block" : "hidden"
            } h-[30rem] max-w-screen-xs md:max-w-none lg:w-96`}
          >
            <Image
              src="/images/home/intro2.png"
              alt="Soloswim zwemschema's"
              priority
              fill
              sizes="100vw"
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </div>
          <div
            className={`${
              introSlide === 2 ? "block" : "hidden"
            } h-[30rem] max-w-screen-xs md:max-w-none lg:w-96`}
          >
            <Image
              src="/images/home/intro3.png"
              alt="Soloswim zwemschema's"
              priority
              fill
              sizes="100vw"
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </div>
        </div>

        <ul className=" transform -translate-y-36 sm:translate-y-0 -mb-36 sm:mb-0 sm:w-full xl:ml-[calc((((133%)-1280px)/2)+20px+1rem)]">
          <div>
            <SlideInFromSide duration={1.3}>
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
            </SlideInFromSide>
            <SlideInFromSide duration={1.3}>
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
            </SlideInFromSide>
            <SlideInFromSide duration={1.3}>
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
              </li>{" "}
            </SlideInFromSide>
          </div>
        </ul>
      </div>
      {/* end client component */}

      <div className="mx-5 sm:mx-0 lg:w-3/4">
        <WaveExtendedSvg fill="#fff" />
      </div>

      <div className="px-5 sm:px-8 max-w-screen-xl mx-auto text-center sm:text-left mt-10 mb-20 lg:mb-32">
        <Link href="/producten">
          <SlideInFromSideSpring>
            <button
              role="button"
              className="text-white text-tiny lg:text-lg font-bold uppercase px-10 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
            >
              Bekijk ons aanbod
            </button>
          </SlideInFromSideSpring>
        </Link>
      </div>
      <WaveSvg fill="#fff" />
    </section>
  );
}
