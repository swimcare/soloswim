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
import Wave from "../../components/svg/wave";
import useWindowDimensions from "../../components/hooks/useWindowDimensions";
import Inhoudsopgave from "../../components/products/inhoudsopgave/Inhoudsopgave";
import Attribuut from "../../components/products/benodigdheden/Attribuut";
import DubbelAttribuut from "../../components/products/benodigdheden/DubbelAttribuut";
import NiveauCard from "../../components/products/niveau/NiveauCard";
import { Accordion } from "../../components/hooks/Accordion";
import AccordionItem from "../../components/general/AccordionItem";
import AccordionPanel from "../../components/general/AccordionPanel";
import Faq from "../../components/products/Faq";
import NumberFormat from "react-number-format";
import Modal from "../../components/general/Modal";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
    const filteredProductData = {
      product_id: product.product_id,
      id: product.id,
      title: product.title,
      level: product.level,
      editie: product.editie,
      price: product.price,
      description: product.description,
      images: product.images,
    };
    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(filteredProductData));
    // opening the winkelwagen modal
    toggleModal();
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

  // Winkelwagen modal functionality
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  // React responsive carousel (images slider)
  // Return an array with all the images, rendered as normal img tag.
  const renderCustomThumbs = () => {
    const thumbList = productData.images.map((image) => {
      return <img key={image} src={image} alt="hoi" />;
    });
    return thumbList;
  };

  return (
    <Fragment>
      <Head>
        <title>{productData.title}</title>
      </Head>

      <main>
        {/* WINKELWAGEN MODAL --> make winkelwagenModal component for this */}
        <Modal isOpen={modalIsOpen} toggle={toggleModal}>
          <div className="items-start justify-between p-4 border-b border-gray-300 bg-main">
            <div className="text-xl font-lexend font-semibold text-white">
              <h1>Het product is toegevoegd aan je winkelwagen</h1>
            </div>
          </div>
          <div className="flex-shrink flex-grow p-4">
            <div className="flex flex-row gap-5 my-5">
              <div className="w-16">
                <Image src={productData.images[0]} width={300} height={300} />
              </div>
              <div>
                <h2 className="font-semibold font-lexend md:text-lg text-base leading-5">
                  <p>{productData.title}</p>
                </h2>
                <h3 className="text-xs md:text-sm my-1">
                  <p>{productData.level}</p>
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center p-3 xs:gap-5 border-t border-gray-300">
            <button
              onClick={toggleModal}
              className="text-black font-medium hover:cursor-pointer hover:underline"
            >
              Verder winkelen
            </button>
            <Link href="/winkelwagen">
              <a
                // add move to winkelwagen redirect here
                onClick={toggleModal}
                className="text-white focus:outline-none m-1.5 rounded-full px-6 py-2 bg-main hover:bg-white hover:text-main border-2 border-main"
              >
                Naar winkelwagen
              </a>
            </Link>
          </div>
        </Modal>
        {/* SECTION 1 */}

        <section className="bg-white">
          <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-5 lg:py-20">
            <div className="flex flex-col lg:flex-row">
              <div className="p-10 text-center w-full">
                <Carousel showThumbs={true} renderThumbs={renderCustomThumbs}>
                  {/* todo: use map function for this below: */}
                  <div>
                    <Image
                      src={productData.images[0]}
                      width={400}
                      height={400}
                      alt={productData.title}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src={productData.images[1]}
                      width={400}
                      height={400}
                      alt={productData.title}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src={productData.images[2]}
                      width={400}
                      height={400}
                      alt={productData.title}
                    ></Image>
                  </div>
                </Carousel>
                {/* <Image
                  src={productData.images[0]}
                  width={400}
                  height={400}
                  alt={productData.title}
                ></Image> */}
              </div>
              <div className="lg:max-w-xl">
                <div className="mb-8">
                  <h1 className="font-lexend font-extrabold text-navy-light1 text-3xl lg:text-5xl my-2 lg:leading-13">
                    {productData.title}
                  </h1>
                  <p className="font-bold text-navy-light1 text-lg lg:text-2xl my-2 lg:my-5">
                    <NumberFormat
                      value={productData.price}
                      decimalSeparator=","
                      displayType="text"
                      prefix={"€ "}
                      decimalScale={2}
                      fixedDecimalScale={true}
                    />
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
                <div className="text-center my-6">
                  <button
                    role="button"
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
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-lexend font-extrabold py-3 lg:py-6">
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
        <Faq />

        {/* TESTERS EN COACHES SECTION */}
        <section className="bg-soloswim-orange lg:pb-20">
          <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-20 lg:py-32">
            <div className="bg-white rounded-2xl p-5 py-8 text-center">
              <div className="font-lexend font-extrabold text-3xl lg:text-4xl tracking-wide">
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
                  <p className="font-lexend text-grey-warm text-7xl absolute left-0 top-0 -translate-y-2 lg:-translate-y-0">
                    "
                  </p>
                  <p className="font-lexend text-grey-warm text-7xl absolute right-0 top-0 -translate-y-2 lg:-translate-y-0">
                    "{" "}
                  </p>
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

export async function getStaticPaths() {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}
