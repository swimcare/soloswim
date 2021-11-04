import React from "react";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
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

  const style = {
    item: `block focus:outline-none bg-green-800 text-white border-b my-2 p-3`,
    panel: `overflow-hidden md:overflow-x-hidden transition-height ease duration-300 text-gray-600`,
  };

  function AccordionItem({ toggle, children }) {
    const [selected, toggleItem] = useAccordion();
    return (
      <div role="button" onClick={toggleItem(toggle)} className={style.item}>
        {children}
        <span className="float-right">
          {selected === toggle ? <AngleUpIcon /> : <AngleDownIcon />}
        </span>
      </div>
    );
  }

  function AccordionPanel({ children, id }) {
    const [selected] = useAccordion();
    const ref = React.useRef();
    const inlineStyle =
      selected === id ? { height: ref.current?.scrollHeight } : { height: 0 };

    return (
      <div ref={ref} id={id} className={style.panel} style={inlineStyle}>
        {children}
      </div>
    );
  }

  const AngleUpIcon = () => (
    <svg
      fill="white"
      strokeWidth="0"
      viewBox="0 0 320 512"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-1 h-4"
    >
      <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
    </svg>
  );

  const AngleDownIcon = () => (
    <svg
      stroke="currentColor"
      fill="white"
      strokeWidth="0"
      viewBox="0 0 320 512"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-1 h-4"
    >
      <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
    </svg>
  );

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
                  <p className="text-navy-light1 leading-6 my-2 lg:my-5 text-sm">
                    {productData.description}{" "}
                    <a
                      className="uppercase font-bold hover:underline text-sm"
                      href="#watkrijgje"
                    >
                      Meer lezen
                    </a>
                  </p>
                </div>
                <div className="my-8 lg:my-10">
                  <div className="flex flex-row justify-between items-center my-2">
                    <p className="font-bold text-navy-light1 uppercase mr-8 text-sm">
                      Niveau
                    </p>
                    <select
                      className="border-gray-300 border-2 rounded-full p-2 px-4 w-full text-sm"
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
                    className="text-white lg:text-lg font-bold uppercase w-full px-3 py-5 rounded-full bg-main tracking-wider shadow-2xl hover:bg-white hover:text-main border-4 border-main"
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

        {/* SECTION 2 */}
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
                  Wat krijg ik?
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
                  <div className="max-w-xl">
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
                        Wat krijg ik?
                      </h2>
                    </div>
                    <h2 className="hidden md:block text-navy-light1 text-2xl font-lexend font-extrabold my-2">
                      Word sterker, word sneller
                    </h2>
                    <div
                      className="text-navy-light1 text-sm leading-6 my-3 md:my-5"
                      dangerouslySetInnerHTML={{
                        __html: productData.contentHtml,
                      }}
                    />
                    <div>
                      <ul className="list-disc text-sm text-navy-light1 leading-8 list-inside">
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
                <div>
                  <div className="md:hidden border-b-3 border-grey-warm border-opacity-25">
                    <h2 className="my-1 text-main text-2xl font-lexend font-extrabold">
                      Bekijk inhoudsopgave
                    </h2>
                  </div>
                  <div className="flex flex-row space-x-2 items-center">
                    <h3 className="font-lexend font-semibold text-lg text-navy-light1 my-3">
                      Beginnersbundel
                    </h3>
                    <ChevronDownIcon className="h-5 w-5 text-navy-light1 stroke-1 stroke-current" />
                    <ChevronUpIcon className="h-5 w-5 text-navy-light1 stroke-1 stroke-current" />
                  </div>

                  {/* accordion test */}
                  <Accordion defaultPanel="section-1">
                    <AccordionItem toggle="section-1">
                      Accordion Group Item #1
                    </AccordionItem>
                    <AccordionPanel id="section-1">
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </AccordionPanel>
                    <AccordionItem toggle="section-2">
                      Accordion Group Item #2
                    </AccordionItem>
                    <AccordionPanel id="section-2">
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                        imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
                        nec tellus sed augue semper porta.
                      </p>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi.
                      </p>
                    </AccordionPanel>
                    <AccordionItem toggle="section-3">
                      Accordion Group Item #3
                    </AccordionItem>
                    <AccordionPanel id="section-3">
                      <p className="mb-4">
                        dales ligula in libero. Sed dignissim lacinia nunc.
                        Curabitur tortor. Pellentesque nibh. Aenean quam. In
                        scelerisque sem at dolor. Maecenas mattis. Sed convallis
                        tristique sem. Proin ut ligula vel nunc egestas
                        porttitor. Morbi lectus risus, iaculis.
                      </p>
                      <p>
                        Nulla metus metus, ullamcorper vel, tincidunt sed,
                        euismod in, nibh. Quisque volutpat condimentum velit.
                        Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Nam nec ante.
                      </p>
                    </AccordionPanel>
                  </Accordion>
                </div>
              )}

              {activeTab === 3 && <p>Tabje 3</p>}
              {activeTab === 4 && <p>Tabje 4</p>}
            </div>
          </div>
        </section>
        <div className="bg-grey-light4">
          <Wave fill="#ffffff" />
        </div>

        <h1 className="text-xl py-28">Welk niveau past bij mij?</h1>

        {/* <div dangerouslySetInnerHTML={{ __html: productData.contentHtml }} /> */}
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
