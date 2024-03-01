import Image from "next/legacy/image";
import Link from "next/link";
import { Fragment } from "react";
import { NextSeo } from "next-seo";

function Custom404() {
  return (
    <Fragment>
      <NextSeo noindex={true} />
      <main>
        <section className="bg-grey-light4">
          <div className="px-5 max-w-4xl mx-auto text-center py-10">
            <div className="max-w-3xl mx-auto">
              <Image
                src="/images/404.png"
                width={1024}
                height={512}
                alt="404"
              />
            </div>

            <div className="my-5 sm:my-10">
              <h1 className="font-lexend my-2 text-main text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                Pagina niet gevonden
              </h1>
              <p className="">
                Het lijkt erop dat de pagina een valse start heeft gemaakt en er
                vandoor is gezwommen.
              </p>
            </div>

            <div className="my-5 sm:my-10">
              <div className="mb-2">
                <Link href="/producten">
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
              <Link href="/contact">
                <a className="hover:underline">Neem contact op</a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default Custom404;
