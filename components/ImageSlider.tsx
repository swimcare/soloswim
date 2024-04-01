"use client";

import Image from "next/image";
import Slider from "./Slider";

const ImageSlider = () => {
  return (
    <Slider totalSlides={3} initialSlide={0} slideDuration={4000}>
      {(currentSlide) => (
        <div className="transform -translate-y-40 w-full sm:order-2 sm:absolute sm:transform sm:top-1/2 sm:-translate-y-1/2 sm:right-0 lg:translate-x-1/2 sm:w-52 md:w-72 md:mr-10 lg:mr-0 lg:w-auto">
          <div
            className={`${
              currentSlide === 0 ? "block" : "hidden"
            } h-[30rem] max-w-screen-xs md:max-w-none lg:w-96`}
          >
            <Image
              src={`/images/home/intro${currentSlide + 1}.png`}
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
              currentSlide === 1 ? "block" : "hidden"
            } h-[30rem] max-w-screen-xs md:max-w-none lg:w-96`}
          >
            <Image
              src={`/images/home/intro${currentSlide + 1}.png`}
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
              currentSlide === 2 ? "block" : "hidden"
            } h-[30rem] max-w-screen-xs md:max-w-none lg:w-96`}
          >
            <Image
              src={`/images/home/intro${currentSlide + 1}.png`}
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
      )}
    </Slider>
  );
};

export default ImageSlider;
