import { Fragment, useState } from "react";
import { getAllProductIds, getproductData } from "../../lib/products";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";
import SectionFaq from "../../components/products/SectionFaq";
import SectionProductDescription from "../../components/products/SectionProductDescription";
import SectionProductTabs from "../../components/products/SectionProductTabs";
import SectionNiveauInfo from "../../components/products/SectionNiveauInfo";
import WinkelwagenModal from "../../components/products/WinkelwagenModal";
import * as ga from "../../lib/ga/index";
import { NextSeo } from "next-seo";
import CartModal from "../../components/products/CartModal";
import Link from "next/link";

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
      type: product.type,
      editie: product.editie,
      price: product.price,
      description: product.description,
      images: product.images,
      winkelwagen_images: product.winkelwagen_images,
    };
    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(filteredProductData));
    // Google analytics event
    addToCartGA(product);
  };

  //   Bepalen van het niveau (alleen als type property wordt meegegeven aan de productData!)
  const [selectedOption, setSelectedOption] = useState();
  console.log(selectedOption);

  const addToCartGA = (product) => {
    ga.event({
      action: "add_to_cart",
      params: {
        id: product.product_id,
        name: product.title,
        type: product.type,
        price: product.price,
      },
    });
  };

  return (
    <Fragment>
      <NextSeo
        title={`Soloswim | ${productData.title}`}
        description={productData.description}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/images/favicons/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "/images/favicons/apple-touch-icon.png",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://www.soloswim.nl",
          title: "Soloswim | " + productData.title,
          description: productData.description,
          locale: "nl_NL",
          site_name: "Soloswim | Waterproof zwemschema's",
          images: [
            {
              url: "/images/home/header-OG.jpg",
              width: 1200,
              height: 630,
              alt: "Soloswim",
            },
          ],
        }}
      />

      <main>
        {/* WINKELWAGEN MODAL */}
        {/* <WinkelwagenModal
          productData={productData}
          toggleModal={toggleModal}
          modalIsOpen={modalIsOpen}
        /> */}
        <CartModal productData={productData} selectedOption={selectedOption} />
        <SectionProductDescription
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          productData={productData}
          addItemToBasket={addItemToBasket}
        />

        <div className="p-4">
          <p>Homepage</p>
          <Link
            href={{
              pathname: "/producten/[id]",
              query: {
                modal: "true",
                id: productData.id,
                type: productData.type.toLowerCase(),
              },
            }}
          >
            <button type="button" className="bg-blue-500 text-white p-2">
              Open Modal
            </button>
          </Link>
        </div>

        <SectionProductTabs productData={productData} />

        {productData.niveaus ? (
          <SectionNiveauInfo
            title={productData.title}
            addItemToBasket={addItemToBasket}
            productData={productData}
          />
        ) : (
          <div className="lg:h-20 bg-grey-light4 lg:bg-white"></div>
        )}
        <SectionFaq />

        {/* SectionCoaches when ready */}
        {/* <SectionCoaches
          color={productData.color}
          isCombi={productData.isCombi}
        /> */}
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
