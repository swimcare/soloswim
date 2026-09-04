import { Fragment } from "react";
import { getAllProductIds, getproductData } from "../../lib/products";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";
import SectionFaq from "../../components/products/SectionFaq";
import SectionProductDescription from "../../components/products/SectionProductDescription";
import SectionProductTabs from "../../components/products/SectionProductTabs";
import SectionNiveauInfo from "../../components/products/SectionNiveauInfo";
import * as ga from "../../lib/ga/index";
import { NextSeo } from "next-seo";
import CartModal from "../../components/products/CartModal";
import PreviewModal from "../../components/products/PreviewModal";
import JsonLd from "../../components/seo/JsonLd";
import { pageSeo } from "../../lib/site";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  productJsonLd,
} from "../../lib/seo";

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
  const productPath = `/producten/${productData.id}`;
  const productImage =
    Array.isArray(productData.images) && productData.images[0]
      ? productData.images[0]
      : undefined;

  const addItemToBasket = (product) => {
    const cartObject = {
      product_id: product.product_id,
      id: product.id,
      title: product.title,
      type: product.type,
      editie: product.editie,
      price: product.price,
      listPrice: product.listPrice ?? product.oldPrice ?? product.price,
      discountPercent: product.discountPercent || 0,
      description: product.description,
      images: product.images,
      winkelwagen_images: product.winkelwagen_images,
    };
    console.log(cartObject);
    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(cartObject));
    // Google analytics event
    addToCartGA(product);
  };

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

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      {
        name: productData.isVerzorging
          ? "Zwemverzorging"
          : productData.isAccessoire
            ? "Zwemmateriaal"
            : "Zwemschema's",
        path: productData.isVerzorging
          ? "/zwemverzorging"
          : productData.isAccessoire
            ? "/zwemmateriaal"
            : "/producten",
      },
      { name: productData.title, path: productPath },
    ]),
    productJsonLd(productData),
  ];

  if (!productData.hideFaq) {
    jsonLd.push(faqPageJsonLd());
  }

  return (
    <Fragment>
      <NextSeo
        {...pageSeo({
          title: `SoloSwim | ${productData.title}`,
          description: productData.description,
          path: productPath,
          image: productImage,
          type: "product",
        })}
      />
      <JsonLd data={jsonLd} />

      <main>
        <CartModal />
        <PreviewModal inhoud={productData.inhoud} />
        <SectionProductDescription
          productData={productData}
          addItemToBasket={addItemToBasket}
        />

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
        {/* FAQ SECTION */}
        {!productData.hideFaq && <SectionFaq />}

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
