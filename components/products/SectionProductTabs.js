import { Fragment, useState } from "react";
import Image from "next/image";
import SubSectionInhoudsopgave from "./inhoudsopgave/SubSectionInhoudsopgave";
import SubSectionBenodigdhedenNiveaus from "./benodigdheden/SubSectionBenodigdhedenNiveaus";
import SubSectionBenodigdheden from "./benodigdheden/SubSectionBenodigheden";
import WaveSvg from "../main/WaveSvg";
import WaveExtendedSvg from "../main/WaveExtendedSvg";

function SectionProductTabs({ productData }) {
  // Bepalen van actieve tabjes (voor desktop enkel)
  const [activeTab, setActiveTab] = useState(1);

  // bulletpoint features

  const mappedBulletpoints = () => {
    return productData.features.map((feature, index) => (
      <li key={index}>{feature}</li>
    ));
  };

  return (
    <Fragment>
      <div className="hidden md:block">
        <WaveSvg fill="#f5f4ef" />
      </div>

      <section className="bg-grey-light4">
        <div className="px-5 sm:px-8 max-w-screen-xl mx-auto md:py-5 lg:py-20">
          {/* Desktop tab systeem */}
          <div className="hidden md:block w-full border-b border-grey-warm border-opacity-25">
            <ul className="flex flex-row transform translate-y-0.5">
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
                  } border-b-3 pb-3 px-9 font-lexend font-semibold text-lg hover:cursor-pointer hover:text-main`}
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
                  } border-b-3 pb-3 px-9 font-lexend font-semibold text-lg hover:cursor-pointer hover:text-main`}
                >
                  Wat heb je nodig
                </li>
              )}
              {/* <li
                onClick={() => setActiveTab(4)}
                className={`${
                  activeTab === 4
                    ? "border-main text-main "
                    : "border-none text-navy-light1"
                } border-b-3 pb-3 pr-6 font-lexend font-semibold text-lg hover:cursor-pointer hover:text-main`}
              >
                Reviews
              </li> */}
            </ul>
          </div>
          <div>
            {/* Tab 1: Wat krijg je */}
            {(activeTab === 1 || productData.isAccessoire) && (
              <div
                id="wat-krijg-je"
                className="md:my-14 flex-col md:flex-row md:space-x-14 gap-5 md:gap-0 hidden md:flex"
              >
                <div className="-mx-5 sm:-mx-8 md:mx-auto lg:mx-auto md:max-w-lg md:min-h-[600px] w-screen h-96 lg:h-auto md:w-8/12 lg:w-full">
                  <div className="md:shadow-custom4 md:rounded-xl md:text-zero w-full h-full relative mx-auto">
                    <Image
                      className="md:rounded-xl"
                      src={productData.tab1_image}
                      alt={productData.title}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    ></Image>
                    <div className="md:hidden relative">
                      <WaveExtendedSvg fill="#fff" />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <h2 className="hidden md:block text-main text-2xl font-lexend font-extrabold">
                    {productData.title}
                  </h2>
                  <div className="md:hidden my-4 border-b-3 border-grey-warm border-opacity-25">
                    <h2 className="my-1 text-main text-2xl font-lexend font-extrabold">
                      Wat krijg je
                    </h2>
                  </div>
                  <h2 className="hidden md:block text-navy-light1 text-2xl font-lexend font-extrabold my-2">
                    {productData.subtitle ? productData.subtitle : ""}
                  </h2>
                  <div
                    className="text-navy-light1 text-tiny leading-6 my-3 md:my-5"
                    dangerouslySetInnerHTML={{
                      __html: productData.contentHtml,
                    }}
                  />
                  {productData.features && (
                    <div>
                      <ul className="list-disc list-outside ml-5 text-tiny text-navy-light1 leading-8">
                        {mappedBulletpoints()}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* TAB 2: INHOUDSOPGAVE */}
            {activeTab === 2 && !productData.isAccessoire && (
              <div className="hidden md:block">
                <SubSectionInhoudsopgave productData={productData} />
              </div>
            )}
            {/* TAB 3: BENODIGDHEDEN */}
            {activeTab === 3 && !productData.isAccessoire && (
              <div className="py-14 lg:py-10 hidden md:block">
                <div className="md:hidden my-4 border-b-3 border-grey-warm border-opacity-25">
                  <h2 className="my-1 text-main text-2xl font-lexend font-extrabold">
                    Wat heb je nodig
                  </h2>
                </div>
                {productData.niveaus ? (
                  <SubSectionBenodigdhedenNiveaus color={productData.color} />
                ) : (
                  <SubSectionBenodigdheden />
                )}
              </div>
            )}
            {/* Tab 4: reviews */}
            {/* {(activeTab === 4) && <p>Reviews here</p>} */}
          </div>
          <div>
            {/* Tab 1: Wat krijg je */}
            <div
              id="wat-krijg-je"
              className="md:my-14 flex-col md:flex-row md:space-x-14 gap-5 md:gap-0 flex md:hidden"
            >
              <div className="-mx-5 sm:-mx-8 md:mx-auto lg:mx-auto md:max-w-lg md:min-h-[600px] w-screen h-96 lg:h-auto md:w-8/12 lg:w-full">
                <div className="md:shadow-custom4 md:rounded-xl md:text-zero w-full h-full relative mx-auto">
                  <Image
                    className="md:rounded-xl"
                    src={productData.tab1_image}
                    alt={productData.title}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  ></Image>
                  <div className="md:hidden relative">
                    <WaveExtendedSvg fill="#fff" />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <h2 className="hidden md:block text-main text-2xl font-lexend font-extrabold">
                  {productData.title}
                </h2>
                <div className="md:hidden my-4 border-b-3 border-grey-warm border-opacity-25">
                  <h2 className="my-1 text-main text-2xl font-lexend font-extrabold">
                    Wat krijg je
                  </h2>
                </div>
                <h2 className="hidden md:block text-navy-light1 text-2xl font-lexend font-extrabold my-2">
                  {productData.subtitle ? productData.subtitle : ""}
                </h2>
                <div
                  className="text-navy-light1 text-tiny leading-6 my-3 md:my-5"
                  dangerouslySetInnerHTML={{
                    __html: productData.contentHtml,
                  }}
                />
                {productData.features && (
                  <div>
                    <ul className="list-disc list-outside ml-5 text-tiny text-navy-light1 leading-8">
                      {mappedBulletpoints()}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {/* TAB 2: INHOUDSOPGAVE */}
            {!productData.isAccessoire && (
              <div className="md:hidden">
                <SubSectionInhoudsopgave productData={productData} />
              </div>
            )}
            {/* TAB 3: BENODIGDHEDEN */}
            {!productData.isAccessoire && (
              <div className="py-14 lg:py-10 md:hidden">
                <div className="md:hidden my-4 border-b-3 border-grey-warm border-opacity-25">
                  <h2 className="my-1 text-main text-2xl font-lexend font-extrabold">
                    Wat heb je nodig
                  </h2>
                </div>
                {productData.niveaus ? (
                  <SubSectionBenodigdhedenNiveaus color={productData.color} />
                ) : (
                  <SubSectionBenodigdheden />
                )}
              </div>
            )}
            {/* Tab 4: reviews */}
            {/* {(activeTab === 4) && <p>Reviews here</p>} */}
          </div>
        </div>
      </section>
      {/* Wave: has to be white on desktop */}
      <div className="bg-grey-light4 hidden lg:block">
        <WaveSvg fill="#ffffff" />
      </div>
      {/* Wave: has to be blue on mobile if "niveaus info section" isn't there */}
      <div className="bg-grey-light4 lg:hidden">
        {productData.niveaus ? (
          <WaveSvg fill="#ffffff" />
        ) : (
          <WaveSvg fill="#2528D5" />
        )}
      </div>
    </Fragment>
  );
}

export default SectionProductTabs;
