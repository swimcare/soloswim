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

  return (
    <Fragment>
      <Head>
        <title>{productData.title}</title>
      </Head>

      <main>
        {/* SECTION 1 */}
        <section className="bg-white">
          <div className="px-3 sm:px-8 max-w-screen-xl mx-auto py-5 lg:py-20">
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
          <div className="px-3 sm:px-8 max-w-screen-xl mx-auto py-5 lg:py-20">
            {/* Desktop tab systeem */}
            <div className="w-full border-b border-grey-warm border-opacity-25">
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
            <div className="my-14">
              {activeTab === 1 && (
                <div className="flex flex-row space-x-14">
                  <div className="max-w-xl">
                    <Image
                      src={productData.images[0]}
                      width={800}
                      height={800}
                      alt={productData.title}
                    ></Image>
                  </div>
                  <div className="max-w-xl">
                    <h2 className="text-main text-2xl font-lexend font-extrabold">
                      Borstcrawl kracht zwemtraining
                    </h2>
                    <h2 className="text-navy-light1 text-2xl font-lexend font-extrabold my-2">
                      Word sterker, word sneller
                    </h2>
                    <div
                      className="text-navy-light1 text-sm leading-6 my-5"
                      dangerouslySetInnerHTML={{
                        __html: productData.contentHtml,

                      }}
                    />
                    <div>
                      <ul className="list-disc ml-4 text-sm text-navy-light1 leading-8">
                        <li>10 kracht zwemschema’s van 60 min</li>
                        <li>Inhoudsopgave en begrippenlijst inbegrepen</li>
                        <li>Volledig waterproof en van sterke kwaliteit</li>
                        <li>Duidelijk omschreven oefeningen</li>
                        <li>Hersluitbare roestvrijstalen ring</li>
                        <li>Verkrijgbaar voor beginners, semi-gevorderden of gevorderden</li>
                        <li>Geschikt voor zowel een 25 als 50 meter bad</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 2 && <p>Tabje 2</p>}
              {activeTab === 3 && <p>Tabje 3</p>}
              {activeTab === 4 && <p>Tabje 4</p>}
            </div>
          </div>
        </section>
        <div className="bg-grey-light4">
          <Wave fill="#ffffff" />
        </div>

        <h1 className="text-xl py-28">Welk niveau past bij jou?</h1>

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
