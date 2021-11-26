import React from "react";
import Head from "next/head";
import { Fragment, useState } from "react";
import { getAllProductIds, getproductData } from "../../lib/products";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";
import SectionFaq from "../../components/products/SectionFaq";
import SectionProductDescription from "../../components/products/SectionProductDescription";
import SectionProductTabs from "../../components/products/SectionProductTabs";
import SectionNiveauInfo from "../../components/products/SectionNiveauInfo";
import WinkelwagenModal from "../../components/products/WinkelwagenModal";

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
    // opening the winkelwagen modal
    toggleModal();
  };

  //   Bepalen van het niveau (alleen als type property wordt meegegeven aan de productData!)
  const [selectedOption, setSelectedOption] = useState();

  // Winkelwagen modal functionality
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <Fragment>
      <Head>
        <title>{productData.title}</title>
      </Head>

      <main>
        {/* WINKELWAGEN MODAL --> make winkelwagenModal component for this */}
        <WinkelwagenModal
          productData={productData}
          toggleModal={toggleModal}
          modalIsOpen={modalIsOpen}
        />

        <SectionProductDescription
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          productData={productData}
          addItemToBasket={addItemToBasket}
        />

        <SectionProductTabs productData={productData} />

        {productData.niveaus ? (
          <SectionNiveauInfo title={productData.title} />
        ) : (
          <div className="lg:h-20"></div>
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
