import Head from "next/head";
import { Fragment } from "react";
import { getAllProductIds, getproductData } from "../../lib/products";

export async function getStaticProps({ params }) {
  const productData = await getproductData(params.id);
  return {
    props: {
      productData,
    },
  };
}

export default function Zwemschema({ productData }) {
  return (
    <Fragment>
      <Head>
        <title>{productData.title}</title>
      </Head>
      {productData.title}
      <br />
      {productData.id}
      <br />
      {productData.date}
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
