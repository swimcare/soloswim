import Link from "next/link";
import ProductCards from "../../components/zwemschemas/ProductCards";

function index() {
  return (
    <div>
      <h1 className="text-3xl mb-10">Zwemschema's</h1>
      <Link href="/" passHref>
        <a className="underline">Home</a>
      </Link>
      {/* {productList} */}
      <ul className="grid grid-cols-3 z-0">
        <ProductCards />
      </ul>
      <h1 className="text-3xl mb-10">Zwemschema's</h1>
      <h1 className="text-3xl mb-10">Zwemschema's</h1>
      <h1 className="text-3xl mb-10">Zwemschema's</h1>
      <h1 className="text-3xl mb-10">Zwemschema's</h1>
      <h1 className="text-3xl mb-10">Zwemschema's</h1>
      <h1 className="text-3xl mb-10">Zwemschema's</h1>
      <h1 className="text-3xl mb-10">Zwemschema's</h1>
      <h1 className="text-3xl mb-10">Zwemschema's</h1>

    </div>
  );
}

export default index;
