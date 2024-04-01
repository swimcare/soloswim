"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {};

function ImageSlider({}: Props) {
  const [introSlide, setIntroSlide] = useState(0);

  useEffect(() => {
    const slideID = setTimeout(
      () => nextSlide(3, introSlide, setIntroSlide),
      4000
    );
    return () => {
      clearTimeout(slideID);
    };
  }, [introSlide]);

  const nextSlide = (slides, target, targetSetter) => {
    if (target < slides - 1) {
      targetSetter(target + 1);
    } else {
      targetSetter(0);
    }
  };

  return (
    <div className="transform -translate-y-40 w-full sm:order-2 sm:absolute sm:transform sm:top-1/2 sm:-translate-y-1/2 sm:right-0 lg:translate-x-1/2 sm:w-52 md:w-72 md:mr-10 lg:mr-0 lg:w-auto">
      <div
        className={`${
          introSlide === 0 ? "block" : "hidden"
        } h-[30rem] max-w-screen-xs md:max-w-none lg:w-96`}
      >
        <Image
          src="/images/home/intro1.png"
          alt="Soloswim zwemschema's"
          priority
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      <div
        className={`${
          introSlide === 1 ? "block" : "hidden"
        } h-[30rem] max-w-screen-xs md:max-w-none lg:w-96`}
      >
        <Image
          src="/images/home/intro2.png"
          alt="Soloswim zwemschema's"
          priority
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      <div
        className={`${
          introSlide === 2 ? "block" : "hidden"
        } h-[30rem] max-w-screen-xs md:max-w-none lg:w-96`}
      >
        <Image
          src="/images/home/intro3.png"
          alt="Soloswim zwemschema's"
          priority
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
}

export default ImageSlider;
