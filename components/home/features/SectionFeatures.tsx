import FadeInFromBottom from "components/framer/FadeInFromBottom";
import WaveSvg from "components/svg/WaveSvg";
import SlideInFromSideSpring from "components/framer/SlideInFromSideSpring";
import Link from "next/link";
import WaveExtendedSvg from "../../svg/WaveExtendedSvg";
import FeaturesSlider from "./FeaturesSlider";
import { CheckIcon } from "@heroicons/react/solid";
import SlideInFromSide from "../../framer/SlideInFromSide";

const SectionFeatures = () => {
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
      <div className="mx-5 sm:mx-0 bg-white p-5 flex flex-col sm:flex-row lg:w-3/4 relative">
        <FeaturesSlider />
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
              </li>
            </SlideInFromSide>
          </div>
        </ul>
      </div>

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
};

export default SectionFeatures;
