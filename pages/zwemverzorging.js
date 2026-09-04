import Link from "next/link";
import Image from "next/image";

import { getZwemverzorgingData } from "../lib/products";
import PriceDisplay from "../components/general/PriceDisplay";
import JsonLd from "../components/seo/JsonLd";
import { Fragment } from "react";
import { NextSeo } from "next-seo";
import { pageSeo } from "../lib/site";
import { breadcrumbJsonLd } from "../lib/seo";

function Zwemverzorging({ zwemverzorgingData }) {
  return (
    <Fragment>
      <NextSeo
        {...pageSeo({
          title: "SoloSwim | Zwemverzorging",
          description:
            "TRIHARD zwemverzorging voor haar en huid. ✓ Basic Care ✓ Hair Combo ✓ Kids ✓ Body wash & lotion ✓ Eye gel ✓ Snelle levering",
          path: "/zwemverzorging",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Zwemverzorging", path: "/zwemverzorging" },
        ])}
      />
      <main>
        <section>
          <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-8 lg:pt-20">
            <div>
              <h1 className="text-main font-lexend font-extrabold text-3xl md:text-4xl lg:text-6xl my-2 lg:my-6">
                Zwemverzorging van SoloSwim
              </h1>
              <h2 className="text-navy-light1 font-lexend font-extrabold text-xl lg:text-4xl my-2 lg:my-4">
                TRIHARD haar- en huidverzorging voor zwemmers
              </h2>
              <p className="text-navy-light1 text-tiny leading-6">
                Bescherm en herstel huid en haar na chloor en zoutwater met de
                TRIHARD verzorgingslijn. Van complete kits tot body wash, lotion
                en eye gel — alles wat je nodig hebt voor frisse huid en gezond
                haar na het zwemmen.
              </p>
            </div>
            <div>
              <ul className="flex flex-col gap-5 my-10 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3">
                {zwemverzorgingData.map(
                  ({
                    id,
                    title,
                    images,
                    price,
                    oldPrice,
                    discountPercent,
                    card_info,
                  }) => (
                    <li
                      key={id}
                      className="bg-grey-light4 rounded-2xl hover:cursor-pointer hover:ring-4 hover:ring-main py-5"
                    >
                      <Link
                        href={{
                          pathname: "/producten/[id]",
                          query: {
                            id: id,
                          },
                        }}
                      >
                        <div>
                          <div className="inline-block bg-white mb-6 rounded-r-md px-3 py-1">
                            <p className="text-navy-light1 text-tiny">
                              {card_info ? card_info : "Zwemverzorging"}
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
                                  height: "auto",
                                }}
                              ></Image>
                            </div>
                            <div className="text-grey-dark1 px-8 mx-auto mt-10">
                              <p className="font-bold uppercase">{title}</p>
                              <div className="flex mx-auto justify-center mt-1">
                                <PriceDisplay
                                  size="sm"
                                  price={price}
                                  oldPrice={oldPrice}
                                  discountPercent={discountPercent}
                                />
                              </div>
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
      </main>
    </Fragment>
  );
}

export default Zwemverzorging;

export async function getStaticProps() {
  const zwemverzorgingData = getZwemverzorgingData();
  return {
    props: {
      zwemverzorgingData,
    },
  };
}
