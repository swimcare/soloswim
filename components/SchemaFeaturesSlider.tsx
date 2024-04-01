"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const SchemaFeaturesSlider = () => {
  const [productSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideID = setTimeout(
      () => nextSlide(5, productSlide, setCurrentSlide),
      2000
    );
    return () => {
      clearTimeout(slideID);
    };
  }, [productSlide]);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = (slides, target, targetSetter) => {
    if (target < slides - 1) {
      targetSetter(target + 1);
    } else {
      targetSetter(0);
    }
  };
  return (
    <div className="sm:flex sm:flex-row my-10 max-w-5xl mx-auto">
      <div className="hidden sm:block my-auto transform translate-x-5 z-20 w-1/2 md:w-5/12 h-[500px]">
        <div className={`${productSlide === 0 ? "block" : "hidden"}`}>
          <Image
            src="/images/home/schema1.png"
            alt="zwemschema"
            priority
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
        <div className={`${productSlide === 1 ? "block" : "hidden"}`}>
          <Image
            src="/images/home/schema2.png"
            alt="zwemschema"
            priority
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
        <div className={`${productSlide === 2 ? "block" : "hidden"}`}>
          <Image
            src="/images/home/schema3.png"
            alt="zwemschema"
            priority
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
        <div className={`${productSlide === 3 ? "block" : "hidden"}`}>
          <Image
            src="/images/home/schema4.png"
            alt="zwemschema"
            priority
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
        <div className={`${productSlide === 4 ? "block" : "hidden"}`}>
          <Image
            src="/images/home/schema5.png"
            alt="zwemschema"
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
      <div className="flex-grow my-auto transform sm:-translate-x-5">
        <div className="bg-grey-light4 rounded-2xl sm:rounded-l-none p-7 sm:py-2 lg:pr-24 flex flex-col">
          <div className="text-center sm:hidden w-full max-w-xs">
            <div className={`${productSlide === 0 ? "block" : "hidden"}`}>
              <Image
                src="/images/home/schema1.png"
                width={350}
                height={476}
                alt="zwemschema"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>

            <div className={`${productSlide === 1 ? "block" : "hidden"}`}>
              <Image
                src="/images/home/schema2.png"
                width={350}
                height={476}
                alt="zwemschema"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className={`${productSlide === 2 ? "block" : "hidden"}`}>
              <Image
                src="/images/home/schema3.png"
                width={350}
                height={476}
                alt="zwemschema"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className={`${productSlide === 3 ? "block" : "hidden"}`}>
              <Image
                src="/images/home/schema4.png"
                width={350}
                height={476}
                alt="zwemschema"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className={`${productSlide === 4 ? "block" : "hidden"}`}>
              <Image
                src="/images/home/schema5.png"
                width={350}
                height={476}
                alt="zwemschema"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>

          <ul className="my-3 lg:my-6 flex flex-col gap-4 sm:gap-3 md:gap-5 lg:gap-6 max-w-sm sm:pl-10 md:pl-0 sm:ml-auto md:mx-auto">
            <li
              className={`font-bold hover:cursor-pointer ${
                productSlide === 0 ? "opacity-100" : "opacity-50"
              }`}
              onMouseOver={() => changeSlide(0)}
            >
              <h4 className="text-main text-sm leading-relaxed">Info</h4>
              <p className="text-md text-navy-light1 leading-relaxed">
                Informatie over de zwemtraining
              </p>
            </li>
            <li
              className={`font-bold hover:cursor-pointer ${
                productSlide === 1 ? "opacity-100" : "opacity-50"
              }`}
              onMouseOver={() => changeSlide(1)}
            >
              <h4 className="text-main text-sm leading-relaxed">Titel</h4>
              <p className="text-md text-navy-light1 leading-relaxed">
                Een pakkende titel met focuspunten
              </p>
            </li>
            <li
              className={`font-bold hover:cursor-pointer ${
                productSlide === 2 ? "opacity-100" : "opacity-50"
              }`}
              onMouseOver={() => changeSlide(2)}
            >
              <h4 className="text-main text-sm leading-relaxed">Inzwemmen</h4>
              <p className="text-md text-navy-light1 leading-relaxed">
                Een goede warming-up
              </p>
            </li>
            <li
              className={`font-bold hover:cursor-pointer ${
                productSlide === 3 ? "opacity-100" : "opacity-50"
              }`}
              onMouseOver={() => changeSlide(3)}
            >
              <h4 className="text-main text-sm leading-relaxed">Kern</h4>
              <p className="text-md text-navy-light1 leading-relaxed">
                Verschillende opdrachten
              </p>
            </li>
            <li
              className={`font-bold hover:cursor-pointer ${
                productSlide === 4 ? "opacity-100" : "opacity-50"
              }`}
              onMouseOver={() => changeSlide(4)}
            >
              <h4 className="text-main text-sm leading-relaxed">Uitzwemmen</h4>
              <p className="text-md text-navy-light1 leading-relaxed">
                Een cooling-down
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SchemaFeaturesSlider;
