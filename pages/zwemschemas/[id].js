import Head from "next/head";
import { Fragment, useState } from "react";
import { getAllProductIds, getproductData } from "../../lib/products";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";
import Image from "next/image";
import { ClockIcon } from "@heroicons/react/outline";

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

  return (
    <Fragment>
      <Head>
        <title>{productData.title}</title>
      </Head>

      <main>
        {/* First section, with image, description and button */}
        <section className="bg-white">
          <div className="px-3 sm:px-8 max-w-screen-2xl mx-auto md:my-20">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="p-10 text-center w-full">
                <Image
                  src={productData.images[0]}
                  width={400}
                  height={400}
                  alt={productData.title}
                ></Image>
              </div>
              <div className="md:max-w-xl">
                <div className="mb-8">
                  <h1 className="font-lexend font-bold text-navy-light1 text-3xl my-2">
                    {productData.title}
                  </h1>
                  <p className="font-bold text-navy-light1 text-lg my-2">
                    € {productData.price}
                  </p>
                  <p className="text-navy-light1 leading-7 my-2">
                    {productData.description}{" "}
                    <a
                      className="uppercase font-bold hover:underline"
                      href="#watkrijgje"
                    >
                      Meer lezen
                    </a>
                  </p>
                </div>
                <div className="my-8">
                  <div className="flex flex-row justify-between items-center my-2">
                    <p className="font-bold text-navy-light1 uppercase mr-8">
                      Niveau
                    </p>
                    <select
                      className="border-gray-300 border-2 rounded-full p-2 px-4 w-full"
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
                    className="underline text-navy-light1 text-sm"
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
                    className="text-white font-bold uppercase w-full px-3 py-6 rounded-full bg-main tracking-wider shadow-2xl hover:bg-white hover:text-main border-4 border-main"
                  >
                    Toevoegen aan winkelwagen
                  </button>
                  <div className="flex flex-row items-center justify-center space-x-2 my-2">
                    <ClockIcon className="h-8 w-8 text-slateblue-dark1" />
                    <p className="text-navy-light1 text-xs">
                      1 - 2 werkdagen levertijd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of First section, with image, description and button */}

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
