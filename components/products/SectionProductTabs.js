import { Fragment, useState } from "react";
import Wave from "../svg/Wave";
import Image from "next/image";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Accordion } from "../hooks/Accordion";
import AccordionItem from "../general/AccordionItem";
import AccordionPanel from "../general/AccordionPanel";
import DubbelAttribuut from "./benodigdheden/DubbelAttribuut";
import Attribuut from "./benodigdheden/Attribuut";
import Inhoudsopgave from "../products/inhoudsopgave/Inhoudsopgave";
import SubSectionInhoudsopgaveNiveaus from "./inhoudsopgave/SubSectionInhoudsopgaveNiveaus";
import SubSectionInhoudsopgave from "./inhoudsopgave/SubSectionInhoudsopgave";

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
                  <div className="md:hidden border-b-3 border-grey-warm border-opacity-25">
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
            {/* Met niveaus: */}
            {(activeTab === 2 || width <= 768) && (productData.niveaus) && (
              <SubSectionInhoudsopgaveNiveaus productData={productData} />
            )}
            {/* Indien product geen niveaus bevat: */}
            {(activeTab === 2 || width <= 768) && (!productData.niveaus) && (
              <SubSectionInhoudsopgave productData={productData} />
            )}
            {/* Tab 3: benodigdheden */}
            {(activeTab === 3 || width <= 768) && (
              <div className="my-14">
                <div className="md:hidden border-b-3 border-grey-warm border-opacity-25">
                  <h2 className="my-1 text-main text-2xl font-lexend font-extrabold">
                    Wat heb je nodig
                  </h2>
                </div>
                {/* accordion system*/}
                <div className="">
                  <Accordion defaultPanel="benodigdheden-ieder-niveau">
                    <AccordionItem
                      toggle="benodigdheden-ieder-niveau"
                      itemClass="inline-block focus:outline-none font-lexend font-semibold text-base xs:text-lg text-navy-light1 my-3"
                      iconClass="ml-5 h-5 w-5 text-navy-light1 stroke-1 stroke-current mt-1"
                    >
                      Ieder niveau
                    </AccordionItem>
                    <AccordionPanel
                      id="benodigdheden-ieder-niveau"
                      panelClass="overflow-hidden md:overflow-x-hidden transition-height ease duration-300"
                    >
                      <p className="text-navy-light1">
                        Om het zwemmen comfortabel te maken.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 p-5">
                        <DubbelAttribuut
                          icon1="/images/zwemschemas/benodigdheden/badpak.png"
                          alt1="badpak"
                          icon2="/images/zwemschemas/benodigdheden/zwembril.png"
                          alt2="zwembril"
                          name="Sportieve zwemkleding"
                        />
                        <Attribuut
                          icon="/images/zwemschemas/benodigdheden/zwembril.png"
                          alt="zwembril"
                          name="Zwembril"
                        />
                        <Attribuut
                          icon="/images/zwemschemas/benodigdheden/zwembril.png"
                          alt="zwembril"
                          name="Badmuts (bij lang haar)"
                        />
                      </div>
                    </AccordionPanel>
                    <AccordionItem
                      toggle="benodigdheden-beginners"
                      itemClass="inline-block focus:outline-none font-lexend font-semibold text-base xs:text-lg text-navy-light1 my-3"
                      iconClass="mt-1 ml-5 h-5 w-5 text-navy-light1 stroke-1 stroke-current"
                    >
                      Beginners
                    </AccordionItem>
                    <AccordionPanel
                      id="benodigdheden-beginners"
                      panelClass="overflow-hidden md:overflow-x-hidden transition-height ease duration-300"
                    >
                      <p className="text-navy-light1">
                        Deze attributen komen voor in deze trainingsbundel, maar
                        om meeste uit je training te halen (kan ook zonder
                        gebruikt worden maar even aandikken dat je het nodig
                        hebt)
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 p-5">
                        <Attribuut
                          icon="/images/zwemschemas/benodigdheden/zwembril.png"
                          alt="zwembril"
                          name="Plankje"
                        />
                        <Attribuut
                          icon="/images/zwemschemas/benodigdheden/zwembril.png"
                          alt="zwembril"
                          name="Pullbuoy"
                        />
                      </div>
                    </AccordionPanel>
                    <AccordionItem
                      toggle="benodigdheden-gevorderden"
                      itemClass="inline-block focus:outline-none font-lexend font-semibold text-base xs:text-lg text-navy-light1 my-3"
                      iconClass="mt-1 ml-5 h-5 w-5 text-navy-light1 stroke-1 stroke-current"
                    >
                      Semi-gevorderden &amp; gevorderden
                    </AccordionItem>
                    <AccordionPanel
                      id="benodigdheden-gevorderden"
                      panelClass="overflow-hidden md:overflow-x-hidden transition-height ease duration-300"
                    >
                      <p className="text-navy-light1">
                        Deze attributen komen voor in deze trainingsbundel, maar
                        om meeste uit je training te halen (kan ook zonder
                        gebruikt worden maar even aandikken dat je het nodig
                        hebt)
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 p-5">
                        <Attribuut
                          icon="/images/zwemschemas/benodigdheden/zwembril.png"
                          alt="zwembril"
                          name="Plankje"
                        />
                        <Attribuut
                          icon="/images/zwemschemas/benodigdheden/zwembril.png"
                          alt="zwembril"
                          name="Pullbuoy"
                        />
                        <Attribuut
                          icon="/images/zwemschemas/benodigdheden/zwembril.png"
                          alt="zwembril"
                          name="Peddels"
                        />
                        <Attribuut
                          icon="/images/zwemschemas/benodigdheden/zwembril.png"
                          alt="zwembril"
                          name="Zoomers"
                        />
                        <Attribuut
                          icon="/images/zwemschemas/benodigdheden/zwembril.png"
                          alt="zwembril"
                          name="Frontale snorkel (optioneel)"
                        />
                      </div>
                    </AccordionPanel>
                  </Accordion>
                </div>
              </div>
            )}
            {/* Tab 4: reviews */}
            {(activeTab === 4 || width <= 768) && <p>Reviews here</p>}
          </div>
        </div>
      </section>
      <div className="bg-grey-light4">
        <Wave fill="#ffffff" />
      </div>
    </Fragment>
  );
}

export default SectionProductTabs;
