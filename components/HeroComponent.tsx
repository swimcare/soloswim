"use client";

import Image from "next/image";
import React from "react";
import SlideInFromSide from "../components2/framer/SlideInFromSide";
import SlideInFromSideSpring from "../components2/framer/SlideInFromSideSpring";
import Link from "next/link";

export default function HeroComponent() {
  return (
    <section className="h-screen-navbar transform translate-y-0">
      <div className="relative h-full overflow-hidden">
        <div className="hidden xl:block">
          <Image
            src="/images/home/header-desktop.jpg"
            alt="soloswim"
            priority
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="hidden sm:block xl:hidden">
          <Image
            src="/images/home/header-tablet.jpg"
            alt="soloswim"
            priority
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="sm:hidden">
          <Image
            src="/images/home/header-small.jpg"
            alt="soloswim"
            priority
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="grid grid-cols-6 w-full sm:w-5/6 md:w-5/6 lg:w-4/6 h-full absolute transform -translate-x-56 md:-translate-x-48 lg:-translate-x-64 xl:-translate-x-48">
          <div className="bg-soloswim-orange skew-x-20"></div>
          <div className="bg-soloswim-yellow skew-x-20 transform -translate-x-1"></div>
          <div className="bg-soloswim-green skew-x-20 transform -translate-x-2"></div>
          <div className="bg-soloswim-purple skew-x-20 transform -translate-x-3"></div>
          <div className="bg-soloswim-blue skew-x-20 transform -translate-x-4"></div>
          <div className="bg-soloswim-pink skew-x-20 transform -translate-x-5"></div>
        </div>
        <div className="absolute w-full px-3 pt-16 sm:pt-32 md:top-[calc(40%)] md:pt-0 md:px-0 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:top-1/2 md:transform md:-translate-y-1/2">
          <div className="md:ml-7 xl:ml-[calc((10%)+1rem)] 2xl:ml-[calc((20%)+1rem)]">
            <h3 className="font-lexend font-bold lg:font-extrabold text-2xl md:text-4xl xl:text-5xl text-navy-light1">
              Soloswim introduceert:
            </h3>
          </div>
          <div className="bg-white shadow-custom3 px-4 py-6 lg:py-10 my-6 lg:my-10 rounded-3xl md:rounded-r-3xl md:rounded-l-none">
            <SlideInFromSide>
              <h1 className="md:ml-4 xl:ml-[calc(10%)] 2xl:ml-[calc(20%)] max-w-md lg:max-w-2xl text-main font-lexend font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight">
                Waterproof Zwemschema's
              </h1>
              <h2 className="md:ml-4 xl:ml-[calc(10%)] 2xl:ml-[calc(20%)] font-lexend font-bold lg:font-extrabold text-navy-light1 text-lg md:text-xl lg:text-3xl my-4">
                Om zelf te volgen vanuit het zwembad
              </h2>
            </SlideInFromSide>
          </div>
          <SlideInFromSideSpring>
            <div className="md:ml-7 xl:ml-[calc((10%)+1rem)] 2xl:ml-[calc((20%)+1rem)]">
              <Link href="/producten">
                <button
                  role="button"
                  className="text-white text-tiny lg:text-lg font-bold uppercase px-10 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
                >
                  Shop nu
                </button>
              </Link>
            </div>
          </SlideInFromSideSpring>
        </div>
      </div>
    </section>
  );
}
