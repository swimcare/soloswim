import Link from "next/link";
import Image from "next/image";

import { getSortedProductsData } from "../../lib/products";
import SectionFaq from "../../components/products/SectionFaq";
import NumberFormat from "react-number-format";
import { Fragment } from "react";
import { NextSeo } from "next-seo";

function index({ allProductsData }) {
  return (
    <Fragment>
      <NextSeo
        title="Soloswim | Waterproof zwemschema's"
        description="Waterproof zwemschema's om zelf te volgen vanuit het zwembad. ✓ Borstcrawl zwemschema's ✓ Techniek-, kracht- en duurtrainingen ✓ Alle niveau's ✓ Snelle levering"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/images/favicons/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "/images/favicons/apple-touch-icon.png",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://www.soloswim.nl",
          title: "Soloswim | Waterproof zwemschema's",
          description:
            "Waterproof zwemschema's om zelf te volgen vanuit het zwembad. ✓ Borstcrawl zwemschema's ✓ Techniek-, kracht- en duurtrainingen ✓ Alle niveau's ✓ Snelle levering",
          locale: "nl_NL",
          site_name: "Soloswim | Waterproof zwemschema's",
          images: [
            {
              url: "/images/home/header-OG.jpg",
              width: 1200,
              height: 630,
              alt: "Soloswim",
            },
          ],
        }}
      />
      <main>
        <section>
          <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-8 lg:pt-20">
            <div>
              <h1 className="text-main font-lexend font-extrabold text-3xl md:text-4xl lg:text-6xl my-2 lg:my-6">
                De zwemschema's van Soloswim
              </h1>
              <h2 className="text-navy-light1 font-lexend font-extrabold text-xl lg:text-4xl my-2 lg:my-4">
                Boost jouw zwemmoment
              </h2>
              <p className="text-navy-light1 text-tiny leading-6">
                Bij Soloswim vind je zwemtrainingen waarmee jij nog meer uit je
                zwemmoment kunt halen. Zwem je graag lange afstanden, hou je
                meer van explosiviteit of ben je nog maar net begonnen? Bekijk
                ons diverse aanbod en ga snel aan de slag met jouw eigen bundel!
              </p>
            </div>
            <div>
              <ul className="flex flex-col gap-5 my-10 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3">
                {allProductsData.map(
                  ({ id, title, images, price, card_info }) => (
                    <li
                      key={id}
                      className="bg-grey-light4 rounded-2xl hover:cursor-pointer hover:ring-4 hover:ring-main py-5"
                    >
                      <Link href={`/producten/${id}`}>

                        <div>
                          <div className="inline-block bg-white mb-6 rounded-r-md px-3 py-1">
                            <p className="text-navy-light1 text-tiny">
                              {card_info ? card_info : "Keuze uit 3 niveaus"}
                            </p>
                          </div>
                          <div className="text-center">
                            <div className="w-5/6 mx-auto">
                              <Image
                                src={images[0]}
                                width={400}
                                height={400}
                                alt={title}
                                style={{
                                  maxWidth: "100%",
                                  height: "auto"
                                }}></Image>
                            </div>
                            <div className="text-grey-dark1 px-8 mx-auto mt-10">
                              <p className="font-bold uppercase">{title}</p>
                              <p className="text-tiny mt-1">
                                <NumberFormat
                                  value={price}
                                  decimalSeparator=","
                                  displayType="text"
                                  prefix={"€ "}
                                  decimalScale={2}
                                  fixedDecimalScale={true}
                                />
                              </p>
                            </div>
                          </div>
                        </div>

                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <SectionFaq />
      </main>
    </Fragment>
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
