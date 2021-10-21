import Image from "next/image";
import { Fragment } from "react";
import { products } from "../../products";

const productList = products.map((product) => (
  <li key={product.id} className="flex flex-col text-center">
    <Image
      src={product.images[0]}
      width={800}
      height={800}
      alt={product.title}
    ></Image>
    <h2>{product.title}</h2>
    <button className="text-white mx-auto p-3 rounded-full bg-blue-500">
      Add to cart
    </button>
  </li>
));

function ProductCards() {
  return <Fragment>{productList}</Fragment>;
}

export default ProductCards;
