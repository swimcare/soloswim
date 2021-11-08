import React from "react";
import Head from "next/head";
import { Fragment, useState } from "react";
import { getAllProductIds, getproductData } from "../../lib/products";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";
import Image from "next/image";
import {
  CalendarIcon,
  ClockIcon,
  CreditCardIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import Wave from "../../components/svg/wave";
import useWindowDimensions from "../../components/hooks/useWindowDimensions";
import Inhoudsopgave from "../../components/products/inhoudsopgave/Inhoudsopgave";
import Attribuut from "../../components/products/benodigdheden/Attribuut";
import DubbelAttribuut from "../../components/products/benodigdheden/DubbelAttribuut";
import NiveauCard from "../../components/products/niveau/NiveauCard";

export async function getStaticProps({ params }) {
  const productData = await getproductData(params.id);
  return {
    props: {
      productData,
    },
  };
}

export default function Zwemschema({ productData }) {
  const dispatch = useDispatch();

  const addItemToBasket = (product) => {
    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product));
  };

  //   Bepalen van het niveau (alleen als level property wordt meegegeven aan de productData!)
  const [selectedOption, setSelectedOption] = useState("Beginner");
  const setLevel = (level) => {
    setSelectedOption(level);
    productData.level = level;
  };

  // Bepalen van actieve tabjes (voor desktop enkel)
  const [activeTab, setActiveTab] = useState(1);

  //bepalen window dimensies
  const { height, width } = useWindowDimensions();
  /* you can also use default values or alias to use only one prop: */
  // const { height: windowHeight = 480 } useWindowDimensions();

  //accordion logic
  const Context = React.createContext({});

  function Accordion({ children, defaultPanel }) {
    const [selected, setSelected] = React.useState(defaultPanel || "");

    const toggleItem = React.useCallback(
      (id) => () => {
        setSelected((prevState) => (prevState !== id ? id : ""));
      },
      []
    );

    const values = React.useMemo(
      () => [selected, toggleItem],
      [selected, toggleItem]
    );
    return <Context.Provider value={values}>{children}</Context.Provider>;
  }

  //custom hook to consume all accordion values
  const useAccordion = () => React.useContext(Context);

  function AccordionItem({ toggle, children, itemClass, iconClass }) {
    const [selected, toggleItem] = useAccordion();
    return (
      <div role="button" onClick={toggleItem(toggle)} className={itemClass}>
        {children}
        <span className="float-right">
          {selected === toggle ? (
            <ChevronUpIcon className={iconClass} />
          ) : (
            <ChevronDownIcon className={iconClass} />
          )}
        </span>
      </div>
    );
  }

  function AccordionPanel({ children, id, panelClass }) {
    const [selected] = useAccordion();
    const ref = React.useRef();
    const inlineStyle =
      selected === id ? { height: ref.current?.scrollHeight } : { height: 0 };

    return (
      <div ref={ref} id={id} className={panelClass} style={inlineStyle}>
        {children}
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{productData.title}</title>
      </Head>

      <main>
        {/* SECTION 1 */}
        <section className="bg-white">
          <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-5 lg:py-20">
            <div className="flex flex-col lg:flex-row">
              <div className="p-10 text-center w-full">
                <Image
                  src={productData.images[0]}
                  width={400}
                  height={400}
                  alt={productData.title}
                ></Image>
              </div>
              <div className="lg:max-w-xl">
                <div className="mb-8">
                  <h1 className="font-lexend font-bold lg:font-extrabold text-navy-light1 text-3xl lg:text-5xl my-2 lg:leading-13">
                    {productData.title}
                  </h1>
                  <p className="font-bold text-navy-light1 text-lg lg:text-2xl my-2 lg:my-5">
                    € {productData.price}
                  </p>
                  <p className="text-navy-light1 leading-6 my-2 lg:my-5 text-tiny">
                    {productData.description}{" "}
                    <a
                      className="uppercase font-bold hover:underline text-tiny"
                      href="#watkrijgje"
                    >
                      Meer lezen
                    </a>
                  </p>
                </div>
                <div className="my-8 lg:my-10">
                  <div className="flex flex-row justify-between items-center my-2">
                    <p className="font-bold text-navy-light1 uppercase mr-8 text-tiny">
                      Niveau
                    </p>
                    <select
                      className="border-gray-300 border-2 rounded-full p-2 px-4 w-full text-tiny"
                      name="level"
                      id="level"
                      value={selectedOption}
                      onChange={(e) => setLevel(e.target.value)}
                    >
                      <option value="Beginners">Beginners</option>
                      <option value="Semi-gevorderden">Semi-gevorderden</option>
                      <option value="Gevorderden">Gevorderden</option>
                    </select>
                  </div>
                  <a
                    className="underline text-navy-light1 text-xs"
                    href="#niveau"
                  >
                    Hoe weet ik mijn niveau?
                  </a>
                </div>
                <div className="flex flex-col text-center my-6">
                  <button
                    onClick={() => {
                      addItemToBasket(productData);
                    }}
                    className="text-white lg:text-lg font-bold uppercase w-full px-3 py-5 rounded-full bg-main tracking-wider shadow-xl hover:bg-white hover:text-main border-4 border-main"
                  >
                    Toevoegen aan winkelwagen
                  </button>
                  <div className="flex flex-row items-center justify-center space-x-2 my-4 lg:my-8">
                    <ClockIcon className="h-8 w-8 text-slateblue-dark1" />
                    <p className="text-navy-light1 text-xs pr-5">
                      1 - 2 werkdagen levertijd
                    </p>
                    <CreditCardIcon className="hidden sm:block h-8 w-8 text-slateblue-dark1" />
                    <p className="hidden sm:block text-navy-light1 text-xs pr-5">
                      Veilig online betalen
                    </p>
                    <CalendarIcon className="hidden sm:block h-8 w-8 text-slateblue-dark1" />
                    <p className="hidden sm:block text-navy-light1 text-xs">
                      14 dagen bedenktijd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2, TODO: consider tab system by https://kimia-ui.vercel.app/ if using different numers of tabs */}
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
              {/* Tab 2: inhoudsopgave */}
              {(activeTab === 2 || width <= 768) && (
                <div className="my-14">
                  <div className="md:hidden border-b-3 border-grey-warm border-opacity-25">
                    <h2 className="my-1 text-main text-2xl font-lexend font-extrabold">
                      Inhoudsopgave
                    </h2>
                  </div>

                  {/* accordion system */}
                  <Accordion defaultPanel="inhoud-beginners">
                    <AccordionItem
                      toggle="inhoud-beginners"
                      itemClass="inline-block focus:outline-none font-lexend font-semibold text-base xs:text-lg text-navy-light1 my-3"
                      iconClass="mt-1 ml-5 h-5 w-5 text-navy-light1 stroke-1 stroke-current"
                    >
                      Beginners bundel
                    </AccordionItem>
                    <AccordionPanel
                      id="inhoud-beginners"
                      panelClass="overflow-hidden md:overflow-x-hidden transition-height ease duration-300"
                    >
                      <Inhoudsopgave
                        inhoud={productData.inhoud.beginners}
                        editie={productData.editie}
                      />
                    </AccordionPanel>
                    <AccordionItem
                      toggle="inhoud-semi-gevorderden"
                      itemClass="inline-block focus:outline-none font-lexend font-semibold text-base xs:text-lg text-navy-light1 my-3"
                      iconClass="mt-1 ml-5 h-5 w-5 text-navy-light1 stroke-1 stroke-current"
                    >
                      Semi-gevorderden bundel
                    </AccordionItem>
                    <AccordionPanel
                      id="inhoud-semi-gevorderden"
                      panelClass="overflow-hidden md:overflow-x-hidden transition-height ease duration-300"
                    >
                      <Inhoudsopgave
                        inhoud={productData.inhoud.semigevorderden}
                        editie={productData.editie}
                      />
                    </AccordionPanel>
                    <AccordionItem
                      toggle="inhoud-gevorderden"
                      itemClass="inline-block focus:outline-none font-lexend font-semibold text-base xs:text-lg text-navy-light1 my-3"
                      iconClass="mt-1 ml-5 h-5 w-5 text-navy-light1 stroke-1 stroke-current"
                    >
                      Gevorderden bundel
                    </AccordionItem>
                    <AccordionPanel
                      id="inhoud-gevorderden"
                      panelClass="overflow-hidden md:overflow-x-hidden transition-height ease duration-300"
                    >
                      <Inhoudsopgave
                        inhoud={productData.inhoud.gevorderden}
                        editie={productData.editie}
                      />
                    </AccordionPanel>
                  </Accordion>
                </div>
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
                          Deze attributen komen voor in deze trainingsbundel,
                          maar om meeste uit je training te halen (kan ook
                          zonder gebruikt worden maar even aandikken dat je het
                          nodig hebt)
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
                          Deze attributen komen voor in deze trainingsbundel,
                          maar om meeste uit je training te halen (kan ook
                          zonder gebruikt worden maar even aandikken dat je het
                          nodig hebt)
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

        {/* NIVEAU SECTION, todo: pull in information from .md files? */}
        <section>
          <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-5 lg:pt-20 lg:pb-10">
            <div className="text-center lg:text-left text-navy-light1">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-lexend font-bold lg:font-extrabold py-3 lg:py-6">
                Welk <span className="text-main">niveau</span> past bij mij?
              </h1>
              <p className="text-tiny leading-6">
                Het is geen ramp als je een iets te hoog of laag niveau kiest,
                je bent dan iets langer of korter bezig met de training dan de
                aangegeven tijd. Onderstaande indicaties kunnen je wel een
                richtlijn geven over welk niveau het beste bij je zou
                passen/helpen met kiezen
              </p>
            </div>
            <div className="flex flex-col lg:flex-row my-5 lg:my-14 gap-5 lg:gap-10">
              <NiveauCard
                title="Beginners"
                text1="Je zwemt nog niet lang maar basis BC techniek onder knie"
                text2="Je kunt 100m binnen …. min zwemmen"
                text3="4 x 50m op hoog tempo met 40 sec rust is geen probleem"
                text4="Een afstand van …m kun jij wel zwemmen"
              />
              <NiveauCard
                title="Semi-gevorderden"
                text1="Je zwemt nog niet lang maar basis BC techniek onder knie"
                text2="Je kunt 100m binnen …. min zwemmen"
                text3="4 x 50m op hoog tempo met 40 sec rust is geen probleem"
                text4="Een afstand van …m kun jij wel zwemmen"
              />
              <NiveauCard
                title="Gevorderden"
                text1="Je zwemt nog niet lang maar basis BC techniek onder knie"
                text2="Je kunt 100m binnen …. min zwemmen"
                text3="4 x 50m op hoog tempo met 40 sec rust is geen probleem"
                text4="Een afstand van …m kun jij wel zwemmen"
              />
            </div>
            <div className="text-center text-navy-light1">
              <p className="text-tiny leading-6">
                Kom je er niet uit? Wij helpen je graag met het vaststellen van
                jouw niveau, neem contact op en we helpen je snel aan jouw eigen
                soloswim zwemtraining!
              </p>
              {/* Todo: link button to contact page */}
              <button className="my-4 lg:my-6 text-white max-w-xs lg:text-lg font-bold uppercase w-full px-3 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-white hover:text-main border-4 border-main">
                Neem contact op
              </button>
            </div>
          </div>
        </section>

        {/* FAQ SECTION, todo: pull in information from .md files? */}
        <section className="bg-main lg:bg-white pb-12 lg:pb-20">
          <div className="px-8 max-w-screen-xl mx-auto py-5">
            <div className="lg:bg-main lg:rounded-2xl lg:p-10">
              <div className="text-white border-b border-opacity-40 pt-2 lg:pt-0 pb-6">
                <h3 className="w-40 font-lexend text-2xl font-bold lg:font-extrabold lg:w-full lg:text-4xl">
                  Veelgestelde vragen
                </h3>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-10">
                <div>
                  <Accordion defaultPanel="faq1">
                    <AccordionItem
                      toggle="faq1"
                      itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                      iconClass="ml-3 h-8 w-8 text-white -translate-y-1"
                    >
                      Lorem ipsum dolor sit a, conset d sadipscing elitr Lorem
                      ipsum dolor sit a, conset d sadipscing elitr?
                    </AccordionItem>
                    <AccordionPanel
                      id="faq1"
                      panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                    >
                      <p className="mb-3">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                      </p>
                    </AccordionPanel>
                    <AccordionItem
                      toggle="faq2"
                      itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                      iconClass="ml-3 h-8 w-8 text-white -translate-y-1"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr?
                    </AccordionItem>
                    <AccordionPanel
                      id="faq2"
                      panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                    >
                      <p className="mb-3">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                      </p>
                    </AccordionPanel>
                    <AccordionItem
                      toggle="faq3"
                      itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                      iconClass="ml-3 h-8 w-8 text-white -translate-y-1"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr?
                    </AccordionItem>
                    <AccordionPanel
                      id="faq3"
                      panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                    >
                      <p className="mb-3">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                      </p>
                    </AccordionPanel>
                  </Accordion>
                </div>
                <div>
                  <Accordion>
                    <AccordionItem
                      toggle="faq4"
                      itemClass="flex flex-row justify-between align-start inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                      iconClass="ml-3 h-8 w-8 text-white -translate-y-1"
                    >
                      Lorem ipsum dolor sit a, conset d sadipscing elitr?
                    </AccordionItem>
                    <AccordionPanel
                      id="faq4"
                      panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                    >
                      <p className="mb-3">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                      </p>
                    </AccordionPanel>
                    <AccordionItem
                      toggle="faq5"
                      itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                      iconClass="ml-3 h-8 w-8 text-white -translate-y-1"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr?
                    </AccordionItem>
                    <AccordionPanel
                      id="faq5"
                      panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                    >
                      <p className="mb-3">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                      </p>
                    </AccordionPanel>
                    <AccordionItem
                      toggle="faq6"
                      itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                      iconClass="ml-3 h-8 w-8 text-white -translate-y-1"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr?
                    </AccordionItem>
                    <AccordionPanel
                      id="faq6"
                      panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                    >
                      <p className="mb-3">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                      </p>
                    </AccordionPanel>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTERS EN COACHES SECTION */}
        <section className="bg-soloswim-orange lg:pb-20">
          <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-20 lg:py-32">
            <div className="bg-white rounded-2xl p-5 py-8 text-center">
              <div className="font-lexend font-bold lg:font-extrabold text-3xl lg:text-4xl tracking-wide">
                <h3 className="text-main lg:my-4">
                  Gevalideerd door ervaren zwemcoaches
                </h3>
                <h3 className="text-slateblue-dark1 lg:my-4">
                  &amp; getest door zwemmers van alle niveau’s
                </h3>
              </div>
              <div className="py-3 lg:py-5 max-w-2xl mx-auto">
                <div className="w-32 mx-auto my-5 lg:mt-2 lg:mb-0">
                  <Image
                    className="rounded-full"
                    src="/images/zwemschemas/coaches/grandpa.jpg"
                    width={900}
                    height={900}
                    alt="coach"
                  ></Image>
                </div>
                <div className="relative px-4 py-5 lg:py-3">
                  <p className="font-lexend text-grey-warm text-7xl absolute left-0 top-0 -translate-y-2 lg:-translate-y-0">"</p>
                  <p className="font-lexend text-grey-warm text-7xl absolute right-0 top-0 -translate-y-2 lg:-translate-y-0">" </p>
                  <p className="text-navy-light1 text-tiny leading-7 mx-5">
                    Wij zijn continu bezig met nieuwe bundels maken en huidige
                    verbeteren. Help ons product verbeteren en wordt Soloswim
                    testers
                  </p>
                  <p className="text-main font-semibold text-tiny mt-4">
                    G.K. van der Vaart
                  </p>
                  <p className="text-navy-light1 font-semibold text-xs italic">
                    Trainer LZPC de Haaien
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}
