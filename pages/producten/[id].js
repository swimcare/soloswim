import React from "react";
import Head from "next/head";
import { Fragment, useState } from "react";
import { getAllProductIds, getproductData } from "../../lib/products";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";
import Image from "next/image";
import SectionFaq from "../../components/products/SectionFaq";
import Modal from "../../components/general/Modal";
import Link from "next/link";
import SectionProductDescription from "../../components/products/SectionProductDescription";
import SectionProductTabs from "../../components/products/SectionProductTabs";
import SectionNiveauInfo from "../../components/products/SectionNiveauInfo";
import SectionCoaches from "../../components/products/SectionCoaches";

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

  // Winkelwagen modal functionality
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  // React responsive carousel (images slider)
  // Return an array with all the images, rendered as normal img tag.
  const renderCustomThumbs = () => {
    const thumbList = productData.images.map((image) => {
      return <img key={image} src={image} alt={productData.title} />;
    });
    return thumbList;
  };

  const formattedProductImages = productData.images.map((image) => {
    return (
      <div key={image}>
        <Image
          src={image}
          width={400}
          height={400}
          alt={productData.title}
        ></Image>
      </div>
    );
  });

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

        <SectionProductDescription
          renderCustomThumbs={renderCustomThumbs}
          selectedOption={selectedOption}
          setLevel={setLevel}
          productData={productData}
          addItemToBasket={addItemToBasket}
          formattedProductImages={formattedProductImages}
        />

        <SectionProductTabs productData={productData} />

        <SectionNiveauInfo />

        <SectionFaq />

        <SectionCoaches />
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
