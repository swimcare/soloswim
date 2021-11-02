import Link from "next/link";
import ProductCards from "../../components/zwemschemas/ProductCards";

import { getSortedPostsData } from "../../lib/posts";

function index({ allPostsData }) {
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

      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <h2 className="text-xl">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default index;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
