import Image from "next/image";
import { Fragment } from "react";
import { products } from "../../products";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";

function ProductCards() {
  const dispatch = useDispatch();

  const addItemToBasket = (product) => {
    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product));
  };

  const productList = products.map((product) => (
    <li key={product.id} className="flex flex-col text-center z-0">
      <Image
        src={product.images[0]}
        width={800}
        height={800}
        alt={product.title}
        style={{
          maxWidth: "100%",
          height: "auto"
        }}></Image>
      <h2>{product.title}</h2>
      <button
        onClick={() => {
          addItemToBasket(product);
        }}
        className="text-white mx-auto p-3 rounded-full bg-blue-500"
      >
        Add to cart
      </button>
    </li>
  ));

  return <Fragment>{productList}</Fragment>;
}

export default ProductCards;
