import { Fragment } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <Fragment>
      <section className="h-screen translate-y-0">
        <div className="relative h-full">
          <Image
            src="/images/home/header.png"
            alt="soloswim"
            layout="fill"
            objectFit="cover"
          />
          <div className="grid grid-cols-6 w-4/6 h-full absolute -translate-x-48">
            <div className="bg-soloswim-orange skew-x-20"></div>
            <div className="bg-soloswim-yellow skew-x-20 -translate-x-1"></div>
            <div className="bg-soloswim-green skew-x-20 -translate-x-2"></div>
            <div className="bg-soloswim-purple skew-x-20 -translate-x-3"></div>
            <div className="bg-soloswim-blue skew-x-20 -translate-x-4"></div>
            <div className="bg-soloswim-pink skew-x-20 -translate-x-5"></div>
          </div>
          <div className="absolute w-4/6 top-1/2 transform -translate-y-1/2">
            <div className="xl:ml-24">
              <h3 className="font-lexend font-extrabold text-5xl text-navy-light1">
                Soloswim introduceert:
              </h3>
            </div>
            <div className="bg-white py-16 rounded-r-3xl">
              <h1 className="xl:ml-24 text-main font-lexend font-extrabold text-7xl leading-tight">
                Waterproof Zwemschema's
              </h1>
              <h2 className="xl:ml-24 font-lexend font-extrabold text-navy-light1 text-3xl my-4">
                Om zelf te volgen vanuit het zwembad
              </h2>
            </div>
            <div className="xl:ml-24">
              <button
                role="button"
                className="text-white text-tiny lg:text-lg font-bold uppercase px-10 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-white hover:text-main border-4 border-main"
              >
                Shop nu
              </button>
            </div>
          </div>
        </div>
      </section>

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
