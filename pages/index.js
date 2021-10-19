import Link from "next/link";
import { Fragment } from "react";
import { products } from "../products";

const productList = products.map((product) => <li key={product.title}>{product.title}</li>);


export default function Home() {
  return (
    <Fragment>
      <h1 className="text-7xl">Hoofdpagina</h1>
      <Link href="/products">Producten</Link>
      {productList}
      {/* <p>{products[0].title}</p> */}
    </Fragment>
  );
}
