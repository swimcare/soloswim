import Link from "next/link";

import { getSortedProductsData } from "../../lib/products";

function index({ allProductsData }) {
  return (
    <main>
      <section>
        <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-8 lg:py-20">
          <div>
            <h1 className="text-main font-lexend font-extrabold text-3xl lg:text-6xl my-2 lg:my-6">
              De zwembundels van Soloswim
            </h1>
            <h2 className="text-navy-light1 font-lexend font-extrabold text-xl lg:text-4xl my-2 lg:my-4">
              Ondertitel
            </h2>
            <p className="text-navy-light1 text-tiny leading-6">
              Bij Soloswim vind je zwemtrainingen waarmee jij nog meer uit je
              zwemmoment kunt halen. Zwem je graag lange afstanden, of hou je
              meer van explosiviteit? Bekijk ons diverse aanbod en ga gauw aan
              de slag met jouw eigen Soloswim bundel! Moeite met kiezen? Ga voor
              de combo
            </p>
          </div>
        </div>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <ul>
          {allProductsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/zwemschemas/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default index;

export async function getStaticProps() {
  const allProductsData = getSortedProductsData();
  return {
    props: {
      allProductsData,
    },
  };
}
