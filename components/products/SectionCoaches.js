import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import MultiColorBg from "../home/MultiColorBg";

function SectionCoaches({ color, isCombi }) {
  // Render custom arrows for Carousel
  const ArrowRight = (onClick) => {
    return (
      <button
        className="z-30 right-0 top-0 bottom-0 absolute box-border float-right opacity-75 hover:opacity-100 text-main"
        onClick={onClick}
      >
        <ChevronRightIcon className="h-8 w-8" />
      </button>
    );
  };

  const ArrowLeft = (onClick) => {
    return (
      <button
        className="z-30 left-0 top-0 bottom-0 absolute box-border float-left opacity-75 hover:opacity-100 text-main"
        onClick={onClick}
      >
        <ChevronLeftIcon className="h-8 w-8" />
      </button>
    );
  };

  return (
    <section
      className={`${
        color &&
        !isCombi &&
        color !== "multicolor" &&
        color !== "green-orange-yellow"
          ? "bg-soloswim2-" + color
          : "bg-soloswim2-orange"
      } relative overflow-x-hidden`}
    >
      {color === "multicolor" && <MultiColorBg />}
      {color === "green-orange-yellow" && (
        <div className="grid lg:grid-cols-10 grid-cols-6 md:w-125 sm:w-140 w-200 h-full absolute lg:-translate-x-44 sm:-translate-x-32 -translate-x-44">
          <div className="bg-soloswim2-orange skew-x-20"></div>
          <div className="bg-soloswim2-yellow skew-x-20 transform -translate-x-1"></div>
          <div className="bg-soloswim2-green skew-x-20 transform -translate-x-2"></div>
          <div className="bg-soloswim2-orange skew-x-20 transform -translate-x-3"></div>
          <div className="bg-soloswim2-yellow skew-x-20 transform -translate-x-4"></div>
          <div className="bg-soloswim2-green skew-x-20 transform -translate-x-5"></div>
          <div className="hidden lg:block bg-soloswim2-orange skew-x-20 transform -translate-x-6"></div>
          <div className="hidden lg:block bg-soloswim2-yellow skew-x-20 transform -translate-x-7"></div>
          <div className="hidden lg:block bg-soloswim2-green skew-x-20 transform -translate-x-8"></div>
          <div className="hidden lg:block bg-soloswim2-orange skew-x-20 transform -translate-x-9"></div>
        </div>
      )}

      <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-20 lg:py-32 relative">
        <div className="bg-white rounded-2xl py-8 text-center">
          <div className="px-5 font-lexend font-extrabold text-3xl lg:text-4xl tracking-wide">
            <h3 className="text-main lg:my-4">
              Gevalideerd door ervaren zwemcoaches
            </h3>
            <h3 className="text-slateblue-dark1 lg:my-4">
              &amp; getest door zwemmers van alle niveau’s
            </h3>
          </div>
          <div className="py-6 lg:py-10 px-2 max-w-2xl mx-auto">
            <Carousel
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              renderArrowNext={ArrowRight}
              renderArrowPrev={ArrowLeft}
              swipeable={false}
              autoPlay
              infiniteLoop
              interval={10000}
            >
              {/* coach item */}
              <div className="md:px-10 px-4">
                <div className="w-32 mx-auto my-5 lg:mt-2 lg:mb-0">
                  <Image
                    className="rounded-full"
                    src="/images/zwemschemas/coaches/grandpa.jpg"
                    width={900}
                    height={900}
                    alt="coach"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }}></Image>
                </div>
                <div className="px-4">
                  <p className="text-navy-light1 text-tiny leading-7 mx-5">
                    "Wij zijn continu bezig met nieuwe bundels maken en huidige
                    verbeteren. Help ons product verbeteren en wordt SoloSwim
                    testers"
                  </p>
                  <p className="text-main font-semibold text-tiny mt-4">
                    G.K. van der Vaart
                  </p>
                  <p className="text-navy-light1 font-semibold text-xs italic">
                    Trainer LZPC de Haaien
                  </p>
                </div>
              </div>
              {/* coach item */}
              <div className="px-10">
                <div className="w-32 mx-auto my-5 lg:mt-2 lg:mb-0">
                  <Image
                    className="rounded-full"
                    src="/images/zwemschemas/coaches/grandpa.jpg"
                    width={900}
                    height={900}
                    alt="coach"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }}></Image>
                </div>
                <div className="px-4">
                  <p className="text-navy-light1 text-tiny leading-7 mx-5">
                    "Wij zijn continu bezig met nieuwe bundels maken en huidige
                    verbeteren. Help ons"
                  </p>
                  <p className="text-main font-semibold text-tiny mt-4">
                    G.K. van der Vaart
                  </p>
                  <p className="text-navy-light1 font-semibold text-xs italic">
                    Trainer LZPC de Haaien
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionCoaches;
