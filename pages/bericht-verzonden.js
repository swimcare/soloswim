import Image from "next/legacy/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { Fragment } from "react";


function berichtVerzonden() {
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
              Bericht verzonden!
            </h1>

            <p className="my-5 md:my-10 text-sm md:text-base">
              Bedankt voor je bericht! We nemen zo snel mogelijk contact met je
              op.
            </p>

            <div className="my-5 sm:my-10">
              <Link href="/">

                <button
                  role="button"
                  className="text-white text-tiny lg:text-lg font-bold uppercase px-10 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
                >
                  Terug naar home
                </button>

              </Link>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default berichtVerzonden;
