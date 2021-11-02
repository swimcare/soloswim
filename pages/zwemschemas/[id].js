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
      {productData.title}
      <br />
      {productData.level}
      <br />

      <div className="">
        <Image
          src={productData.images[0]}
          width={200}
          height={200}
          alt={productData.title}
        ></Image>
        <button
          onClick={() => {
            addItemToBasket(productData);
          }}
          className="text-white mx-auto p-3 rounded-full bg-blue-500"
        >
          Add to cart
        </button>
      </div>

      <br />
      <div dangerouslySetInnerHTML={{ __html: productData.contentHtml }} />
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
