import React from "react";
import Head from "next/head";
import { Fragment, useState } from "react";
import { getAllProductIds, getproductData } from "../../lib/products";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";
import Image from "next/image";
import NiveauCard from "../../components/products/niveau/NiveauCard";
import Faq from "../../components/products/Faq";
import Modal from "../../components/general/Modal";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import SectionProductDescription from "../../components/products/SectionProductDescription";
import SectionProductTabs from "../../components/products/SectionProductTabs";

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

  // Render custom arrows for Carousel
  const ArrowRight = (onClick) => {
    return (
      <button
        className="z-30 right-0 top-0 bottom-0 absolute box-border float-right opacity-75 hover:opacity-100 text-main"
        onClick={onClick}
      >
        <ChevronRightIcon className="h-8 w-8" />
      </button>
    );
  };

  const ArrowLeft = (onClick) => {
    return (
      <button
        className="z-30 left-0 top-0 bottom-0 absolute box-border float-left opacity-75 hover:opacity-100 text-main"
        onClick={onClick}
      >
        <ChevronLeftIcon className="h-8 w-8" />
      </button>
    );
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
        <SectionProductDescription
          renderCustomThumbs={renderCustomThumbs}
          selectedOption={selectedOption}
          setLevel={setLevel}
          productData={productData}
          addItemToBasket={addItemToBasket}
          formattedProductImages={formattedProductImages}
        />

        {/* SECTION 2, TODO: consider tab system by https://kimia-ui.vercel.app/ if using different numers of tabs */}
        <SectionProductTabs productData={productData} />

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
            <div className="bg-white rounded-2xl py-8 text-center">
              <div className="px-5 font-lexend font-extrabold text-3xl lg:text-4xl tracking-wide">
                <h3 className="text-main lg:my-4">
                  Gevalideerd door ervaren zwemcoaches
                </h3>
                <h3 className="text-slateblue-dark1 lg:my-4">
                  &amp; getest door zwemmers van alle niveau’s
                </h3>
              </div>
              <div className="py-6 lg:py-10 px-2 max-w-2xl mx-auto">
                <Carousel
                  showStatus={false}
                  showIndicators={false}
                  showThumbs={false}
                  infiniteLoop
                  autoPlay
                  interval={8000}
                  renderArrowNext={ArrowRight}
                  renderArrowPrev={ArrowLeft}
                >
                  {/* coach item */}
                  <div className="md:px-10 px-4">
                    <div className="w-32 mx-auto my-5 lg:mt-2 lg:mb-0">
                      <Image
                        className="rounded-full"
                        src="/images/zwemschemas/coaches/grandpa.jpg"
                        width={900}
                        height={900}
                        alt="coach"
                      ></Image>
                    </div>
                    <div className="px-4">
                      <p className="text-navy-light1 text-tiny leading-7 mx-5">
                        "Wij zijn continu bezig met nieuwe bundels maken en
                        huidige verbeteren. Help ons product verbeteren en wordt
                        Soloswim testers"
                      </p>
                      <p className="text-main font-semibold text-tiny mt-4">
                        G.K. van der Vaart
                      </p>
                      <p className="text-navy-light1 font-semibold text-xs italic">
                        Trainer LZPC de Haaien
                      </p>
                    </div>
                  </div>
                  {/* coach item */}
                  <div className="px-10">
                    <div className="w-32 mx-auto my-5 lg:mt-2 lg:mb-0">
                      <Image
                        className="rounded-full"
                        src="/images/zwemschemas/coaches/grandpa.jpg"
                        width={900}
                        height={900}
                        alt="coach"
                      ></Image>
                    </div>
                    <div className="px-4">
                      <p className="text-navy-light1 text-tiny leading-7 mx-5">
                        "Wij zijn continu bezig met nieuwe bundels maken en
                        huidige verbeteren. Help ons"
                      </p>
                      <p className="text-main font-semibold text-tiny mt-4">
                        G.K. van der Vaart
                      </p>
                      <p className="text-navy-light1 font-semibold text-xs italic">
                        Trainer LZPC de Haaien
                      </p>
                    </div>
                  </div>
                </Carousel>
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
