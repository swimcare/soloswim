import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { Fragment } from "react";


function bestellingVoltooid() {
  return (
    <Fragment>
      <NextSeo noindex={true} />
      <main>
        <section className="bg-grey-light4">
          <div className="px-5 max-w-3xl mx-auto text-center py-10">
            <div className="px-20 max-w-sm mx-auto">
              <Image
                src="/images/bestelling-voltooid/confetti.png"
                width={425}
                height={399}
                alt="confetti"
              />
            </div>
            <h1 className="my-5 sm:my-10 font-lexend text-main text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              Bedankt voor je bestelling!
            </h1>

            <p className="my-5 md:my-10 text-sm md:text-base">
              Wij gaan de bestelling zo snel mogelijk verzenden, zodat jij snel
              aan de slag kunt! Via de mail ontvang je binnen enkele minuten een
              orderbevestiging, check eventueel je spam-folder.
            </p>

            <div className="my-5 sm:my-10">
              <Link href="/">
                <a>
                  <button
                    role="button"
                    className="text-white text-tiny lg:text-lg font-bold uppercase px-10 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
                  >
                    Terug naar home
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default bestellingVoltooid;
