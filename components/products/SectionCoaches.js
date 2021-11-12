import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function SectionCoaches() {
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
    <section className="bg-soloswim-orange lg:pb-20">
      <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-20 lg:py-32">
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
              infiniteLoop
              autoPlay
              interval={8000}
              renderArrowNext={ArrowRight}
              renderArrowPrev={ArrowLeft}
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
                  ></Image>
                </div>
                <div className="px-4">
                  <p className="text-navy-light1 text-tiny leading-7 mx-5">
                    "Wij zijn continu bezig met nieuwe bundels maken en huidige
                    verbeteren. Help ons product verbeteren en wordt Soloswim
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
                  ></Image>
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
