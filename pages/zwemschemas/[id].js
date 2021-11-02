import Head from "next/head";
import { Fragment } from "react";
import { getAllProductIds, getproductData } from "../../lib/products";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";
import Image from "next/image";

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

  return (
    <Fragment>
      <Head>
        <title>{productData.title}</title>
      </Head>

      <main>
        {/* First section, with image, description and button */}
        <section className="bg-white">
          <div className="px-3 sm:px-8">
            <div className="flex flex-col">
              <div className="p-10 text-center">
                <Image
                  src={productData.images[0]}
                  width={200}
                  height={200}
                  alt={productData.title}
                ></Image>
              </div>
              <div>
                <h1 className="font-lexend font-bold text-navy-light1 text-3xl">
                  {productData.title}
                </h1>
                <p className="font-bold text-navy-light1 text-lg">
                  € {productData.price}
                </p>
                <p className="text-navy-light1 leading-7">
                  {productData.description}{" "}
                  <a className="uppercase font-bold" href="#watkrijgje">
                    Meer lezen
                  </a>
                </p>
              </div>
              <div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold text-navy-light1 uppercase">Niveau</p>
                  <select className="border-gray-300 border-2 rounded-full p-2 px-4" name="level" id="level">
                    <option value="volvo">Beginners</option>
                    <option value="saab">Semi-gevorderden</option>
                    <option value="mercedes">Gevorderden</option>
                  </select>
                </div>
              </div>
            </div>

            {productData.level}

            <div>
              <button
                onClick={() => {
                  addItemToBasket(productData);
                }}
                className="text-white mx-auto p-3 rounded-full bg-blue-500"
              >
                Add to cart
              </button>
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
