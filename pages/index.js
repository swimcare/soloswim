import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <h1 className="text-3xl mb-10 bg-gray-50">Hoofdpagina</h1>
      <Link href="/producten" passHref>
        <a className="underline">Zwemschema's</a>
      </Link>

      {/* INSTAGRAM SECTION todo: add to homepage, not product pages*/}
      {/* <section className="lg:pb-20">
          <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-20 lg:py-32">
            <div className="text-center">
              <h2 className="text-main font-lexend font-extrabold lg:text-6xl text-3xl leading-10">
                Volg ons op Instagram!
              </h2>
            </div>
          </div>
        </section> */}
    </Fragment>
  );
}
