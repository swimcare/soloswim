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
          <div className="bg-green-400 w-4/6 h-full absolute"></div>
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
