import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { Carousel } from "react-responsive-carousel";
import ReviewCard from "./ReviewCard";
import Fade from "react-reveal/Fade";


function SectionReviewsMain() {
  return (
    <section className="bg-main">
      <div className="px-5 max-w-screen-xl mx-auto py-20 lg:py-32">
      <Fade bottom>

        <h2 className="-mx-2 font-lexend font-extrabold text-3xl md:text-4xl lg:text-6xl leading-normal text-center text-white">
          Reacties van Soloswim gebruikers
        </h2>
        </Fade>
        {/* MOBILE REVIEWS (TOT EN MET SM BREAKPOINT) */}
        <div className="-mx-2 my-12 md:hidden">
          <Carousel
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={10000}
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button
                  className="absolute right-0 top-0 transform h-full z-20"
                  type="button"
                  onClick={onClickHandler}
                >
                  <ArrowRightIcon className="w-7 h-7 text-white" />
                </button>
              )
            }
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  className="absolute left-0 top-0 transform h-full z-20"
                  type="button"
                  onClick={onClickHandler}
                >
                  <ArrowLeftIcon className="w-7 h-7 text-white" />
                </button>
              )
            }
          >
            <div className="h-full">
              <ReviewCard
                title="Ideaal om zelf mee te trainen!"
                text="Afgelopen weekend voor het eerst gebruik gemaakt van een gevorderden training van Soloswim. Trainingen hebben inhoudelijk een goede structuur en zijn ideaal om zelf mee te trainen!"
                name="Marek Spit"
              />
            </div>
            <div className="h-full">
              <ReviewCard
                title="Ik ben fan!"
                text="Als ervaren solo zwemmer is het altijd weer een gedoe om een leuke training te bedenken; je hebt alles al wel eens gehad. De trainingen van Soloswim zijn dan ook een uitkomst! Een uitdagend trainings pakket, afgestemd op je wensen. De trainingen zijn afwisselend en uitdagend. Er is veel keus, denk aan techniek, kracht en uithoudingsvermogen. Verschillende niveaus. Je kunt de trainingen ook combineren. Ik heb een pakket van 10 kracht traingen, semi gevorderd en zwem deze in 45 min (meeste staat uur voor). Het team is daarnaast mega toegankelijk en staat open voor vragen of input. Ik ben fan!"
                name="Anouk Bosma"
              />
            </div>
            <div className="h-full">
              <ReviewCard
                title="Goed te volgen voor een beginner."
                text="De soloswim trainingen zijn goed opgebouwd en ook voor een beginner goed te volgen. Ik merk dat het elke zwemtraining beter gaat! Zeker een aanrader!"
                name="Loes"
              />
            </div>
          </Carousel>
        </div>
        {/* DESKTOP REVIEWS (VANAF MD BREAKPOINT) */}
        <div className="hidden md:block my-24 max-w-6xl lg:mx-auto">
          <Carousel
            showStatus={false}
            autoPlay
            infiniteLoop
            interval={10000}
            showIndicators={false}
            showThumbs={false}
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button
                  className="absolute right-0 top-0 transform h-full z-20"
                  type="button"
                  onClick={onClickHandler}
                >
                  <ArrowRightIcon className="w-7 h-7 text-white" />
                </button>
              )
            }
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  className="absolute left-0 top-0 transform h-full z-20"
                  type="button"
                  onClick={onClickHandler}
                >
                  <ArrowLeftIcon className="w-7 h-7 text-white" />
                </button>
              )
            }
          >
            {/* Group of 3 reviews */}
            <div className="flex flex-row gap-4 lg:gap-8 items-stretch mx-12 lg:mx-16">
              <ReviewCard
                title="Ideaal om zelf mee te trainen!"
                text="Afgelopen weekend voor het eerst gebruik gemaakt van een gevorderden training van Soloswim. Trainingen hebben inhoudelijk een goede structuur en zijn ideaal om zelf mee te trainen!"
                name="Marek Spit"
              />
              <ReviewCard
                title="Ik ben fan!"
                text="Als ervaren solo zwemmer is het altijd weer een gedoe om een leuke training te bedenken; je hebt alles al wel eens gehad. De trainingen van Soloswim zijn dan ook een uitkomst! Een uitdagend trainingspakket, afgestemd op je wensen. De trainingen zijn afwisselend en uitdagend. Er is veel keus, denk aan techniek, kracht en uithoudingsvermogen. Verschillende niveaus. Je kunt de trainingen ook combineren. Ik heb een pakket van 10 kracht traingen, semi gevorderd en zwem deze in 45 min (meeste staat uur voor). Het team is daarnaast mega toegankelijk en staat open voor vragen of input. Ik ben fan!"
                name="Anouk Bosma"
              />
              <ReviewCard
                title="Goed te volgen voor een beginner."
                text="De soloswim trainingen zijn goed opgebouwd en ook voor een beginner goed te volgen. Ik merk dat het elke zwemtraining beter gaat! Zeker een aanrader!"
                name="Loes"
              />
            </div>
            {/* End group of 3 reviews */}
            {/* Group of 3 reviews */}
            <div className="flex flex-row gap-4 lg:gap-8 items-stretch mx-12 lg:mx-16">
            <ReviewCard
                title="Ideaal om zelf mee te trainen!"
                text="Afgelopen weekend voor het eerst gebruik gemaakt van een gevorderden training van Soloswim. Trainingen hebben inhoudelijk een goede structuur en zijn ideaal om zelf mee te trainen!"
                name="Marek Spit"
              />
              <ReviewCard
                title="Ik ben fan!"
                text="Als ervaren solo zwemmer is het altijd weer een gedoe om een leuke training te bedenken; je hebt alles al wel eens gehad. De trainingen van Soloswim zijn dan ook een uitkomst! Een uitdagend trainings pakket, afgestemd op je wensen. De trainingen zijn afwisselend en uitdagend. Er is veel keus, denk aan techniek, kracht en uithoudingsvermogen. Verschillende niveaus. Je kunt de trainingen ook combineren. Ik heb een pakket van 10 kracht traingen, semi gevorderd en zwem deze in 45 min (meeste staat uur voor). Het team is daarnaast mega toegankelijk en staat open voor vragen of input. Ik ben fan!"
                name="Anouk Bosma"
              />
              <ReviewCard
                title="Goed te volgen voor een beginner."
                text="De soloswim trainingen zijn goed opgebouwd en ook voor een beginner goed te volgen. Ik merk dat het elke zwemtraining beter gaat! Zeker een aanrader!"
                name="Loes"
              />
            </div>
            {/* End group of 3 reviews */}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default SectionReviewsMain;
