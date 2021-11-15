import { Fragment, useState } from "react";
import Wave from "../svg/Wave"
import Image from "next/image";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SubSectionInhoudsopgave from "./inhoudsopgave/SubSectionInhoudsopgave";
import SubSectionBenodigdhedenNiveaus from "./benodigdheden/SubSectionBenodigdhedenNiveaus";
import SubSectionBenodigdheden from "./benodigdheden/SubSectionBenodigheden";

function SectionProductTabs({ productData }) {
  // Bepalen van actieve tabjes (voor desktop enkel)
  const [activeTab, setActiveTab] = useState(1);

  //bepalen window dimensies
  const { width } = useWindowDimensions();
  /* you can also use default values or alias to use only one prop: */
  // const { height: windowHeight = 480 } useWindowDimensions();

  return (
    <Fragment>
      <Wave fill="#f5f4ef" />
      <section className="bg-grey-light4">
        <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-5 lg:py-20">
          {/* Desktop tab systeem */}
          <div className="hidden md:block w-full border-b border-grey-warm border-opacity-25">
            <ul className="flex flex-row space-x-10 translate-y-0.5">
              <li
                onClick={() => setActiveTab(1)}
                className={`${
                  activeTab === 1
                    ? "border-main text-main "
                    : "border-none text-navy-light1"
                } border-b-3 pb-3 pr-6 font-lexend font-semibold text-lg hover:cursor-pointer hover:text-main`}
              >
                Wat krijg je
              </li>
              {!productData.isAccessoire && (
                <li
                  onClick={() => setActiveTab(2)}
                  className={`${
                    activeTab === 2
                      ? "border-main text-main "
                      : "border-none text-navy-light1"
                  } border-b-3 pb-3 pr-6 font-lexend font-semibold text-lg hover:cursor-pointer hover:text-main`}
                >
                  Bekijk inhoudsopgave
                </li>
              )}
              {!productData.isAccessoire && (
                <li
                  onClick={() => setActiveTab(3)}
                  className={`${
                    activeTab === 3
                      ? "border-main text-main "
                      : "border-none text-navy-light1"
                  } border-b-3 pb-3 pr-6 font-lexend font-semibold text-lg hover:cursor-pointer hover:text-main`}
                >
                  Wat heb je nodig
                </li>
              )}
              <li
                onClick={() => setActiveTab(4)}
                className={`${
                  activeTab === 4
                    ? "border-main text-main "
                    : "border-none text-navy-light1"
                } border-b-3 pb-3 pr-6 font-lexend font-semibold text-lg hover:cursor-pointer hover:text-main`}
              >
                Reviews
              </li>
            </ul>
          </div>
          <div>
            {/* Tab 1: Wat krijg je */}
            {(activeTab === 1 || width <= 768) && (
              <div className="my-14 flex flex-col md:flex-row md:space-x-14">
                <div className="max-w-xl shadow-custom2">
                  <Image
                    src={productData.images[0]}
                    width={800}
                    height={800}
                    alt={productData.title}
                  ></Image>
                </div>
                <div className="max-w-xl">
                  <h2 className="hidden md:block text-main text-2xl font-lexend font-extrabold">
                    Borstcrawl kracht zwemtraining
                  </h2>
                  <div className="md:hidden my-4 border-b-3 border-grey-warm border-opacity-25">
                    <h2 className="my-1 text-main text-2xl font-lexend font-extrabold">
                      Wat krijg je
                    </h2>
                  </div>
                  <h2 className="hidden md:block text-navy-light1 text-2xl font-lexend font-extrabold my-2">
                    Word sterker, word sneller
                  </h2>
                  <div
                    className="text-navy-light1 text-tiny leading-6 my-3 md:my-5"
                    dangerouslySetInnerHTML={{
                      __html: productData.contentHtml,
                    }}
                  />
                  <div>
                    <ul className="list-disc text-tiny text-navy-light1 leading-8 list-inside">
                      <li>10 kracht zwemschema’s van 60 min</li>
                      <li>Inhoudsopgave en begrippenlijst inbegrepen</li>
                      <li>Volledig waterproof en van sterke kwaliteit</li>
                      <li>Duidelijk omschreven oefeningen</li>
                      <li>Hersluitbare roestvrijstalen ring</li>
                      <li>
                        Verkrijgbaar voor beginners, semi-gevorderden of
                        gevorderden
                      </li>
                      <li>Geschikt voor zowel een 25 als 50 meter bad</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {/* TAB 2: INHOUDSOPGAVE */}
            {(activeTab === 2 || width <= 768) &&
              !productData.isAccessoire && (
                <SubSectionInhoudsopgave productData={productData} />
              )}
            {/* TAB 3: BENODIGDHEDEN */}
            {(activeTab === 3 || width <= 768) && !productData.isAccessoire && (
              <div className="my-14">
                <div className="md:hidden my-4 border-b-3 border-grey-warm border-opacity-25">
                  <h2 className="my-1 text-main text-2xl font-lexend font-extrabold">
                    Wat heb je nodig
                  </h2>
                </div>
                {productData.niveaus ? (
                  <SubSectionBenodigdhedenNiveaus />
                ) : (
                  <SubSectionBenodigdheden />
                )}
              </div>
            )}
            {/* Tab 4: reviews */}
            {(activeTab === 4 || width <= 768) && <p>Reviews here</p>}
          </div>
        </div>
      </section>
      {/* Wave: has to be white on desktop */}
      <div className="bg-grey-light4 hidden lg:block">
        <Wave fill="#ffffff" />
      </div>
      {/* Wave: has to be blue on mobile if "niveaus info section" isn't there */}
      <div className="bg-grey-light4 lg:hidden">
        {productData.niveaus ? (
          <Wave fill="#ffffff" />
        ) : (
          <Wave fill="#2628cd" />
        )}
      </div>
    </Fragment>
  );
}

export default SectionProductTabs;
