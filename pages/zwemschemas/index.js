import Link from "next/link";
import { products } from "../../products";
import Image from "next/image";
import ProductCards from "../../components/zwemschemas/ProductCards";

function index() {
  return (
    <div>
      <h1 className="text-5xl mb-10">Zwemschema's</h1>
      <Link href="/" passHref>
        <a className="underline">Home</a>
      </Link>
      {/* {productList} */}
      <ul className="grid grid-cols-3">
        <ProductCards />
      </ul>
    </div>
  );
}

export default index;
