import {
  CalendarIcon,
  ClockIcon,
  CreditCardIcon,
} from "@heroicons/react/outline";
import NumberFormat from "react-number-format";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState } from "react";
import Link from "next/link";

function SectionProductDescription({
  productData,
  selectedOption,
  setSelectedOption,
  addItemToBasket,
}) {
  const formattedProductImages = productData.images.map((image) => {
    return (
      <div className="h-96 lg:h-[calc(32rem)] relative" key={image}>
        <Image
          src={image}
          alt={productData.title}
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        ></Image>
      </div>
    );
  });

  const [selectedPhoto, setSelectedPhoto] = useState(0);

  // React responsive carousel (images slider)
  // Return an array with all the images, rendered as normal img tag.
  const renderCustomThumbs = () => {
    const thumbList = productData.images.map((image) => {
      return (
        <img
          className="rounded-sm"
          key={image}
          src={image}
          alt={productData.title}
        />
      );
    });
    return thumbList;
  };

  const setType = (type, id) => {
    setSelectedOption(type);
    productData.type = type;
    setSelectedPhoto(+id);
    // Add query parameter to URL
    const url = new URL(window.location.href);
    url.searchParams.set("niveau", type.toLowerCase());
    window.history.pushState({}, "", url);
  };

  return (
    <section className="bg-white">
      <div className="md:px-8 max-w-screen-xl mx-auto pb-10 md:py-10">
        <div className="flex flex-row flex-wrap md:flex-nowrap justify-between gap-10">
          <div className="w-full md:max-w-sm lg:max-w-md xl:max-w-xl md:flex-grow md:w-32 md:mt-4 lg:-mt-6 xl:mt-6 hover:cursor-pointer">
            <Carousel
              showStatus={false}
              showIndicators={false}
              renderThumbs={renderCustomThumbs}
              thumbWidth={80}
              infiniteLoop
              showArrows={false}
              selectedItem={selectedPhoto}
              emulateTouch={true}
            >
              {formattedProductImages}
            </Carousel>
          </div>
          <div className="md:max-w-xl md:flex-1 px-5 sm:px-8 md:px-0 md:my-5">
            <div className="mb-8">
              <h1 className="font-lexend font-extrabold text-navy-light1 text-3xl lg:text-5xl my-2 lg:leading-13">
                {productData.title}
              </h1>
              <p className="font-bold text-navy-light1 text-lg lg:text-2xl my-2 lg:my-5">
                <NumberFormat
                  value={productData.price}
                  decimalSeparator=","
                  displayType="text"
                  prefix={"€ "}
                  decimalScale={2}
                  fixedDecimalScale={true}
                />
              </p>
              <p className="text-navy-light1 leading-6 my-2 lg:my-5 text-tiny">
                {productData.description}{" "}
                <a
                  className="uppercase font-bold hover:underline text-tiny"
                  href="#wat-krijg-je"
                >
                  Meer lezen
                </a>
              </p>
            </div>
            {productData.type && (
              <div className="my-8 lg:my-10">
                <p className="font-bold text-navy-light1 uppercase text-tiny">
                  {productData.niveaus ? "Niveau" : "Variant*"}
                </p>
                {productData.niveaus ? (
                  <div className="my-2 text-xs font-bold flex flex-row flex-wrap gap-2 md:gap-3 lg:gap-4">
                    <div>
                      <input
                        className="appearance-none fixed"
                        type="radio"
                        value="Beginners"
                        id="1"
                        name="type"
                        onChange={(e) => setType(e.target.value, e.target.id)}
                      />
                      <label
                        htmlFor="1"
                        className={`border-2 rounded-xl items-center hover:cursor-pointer inline-block p-3 ${
                          productData.type === "Beginners"
                            ? "border-main"
                            : "border-gray-200 hover:border-gray-500"
                        }`}
                      >
                        Beginners
                      </label>
                    </div>
                    <div>
                      <input
                        className="appearance-none fixed"
                        type="radio"
                        value="Semi-gevorderden"
                        id="2"
                        name="type"
                        onChange={(e) => setType(e.target.value, e.target.id)}
                      />
                      <label
                        htmlFor="2"
                        className={`border-2 rounded-xl items-center hover:cursor-pointer inline-block p-3 ${
                          productData.type === "Semi-gevorderden"
                            ? "border-main"
                            : "border-gray-200 hover:border-gray-500"
                        }`}
                      >
                        Semi-gevorderden
                      </label>
                    </div>
                    <div>
                      <input
                        className="appearance-none fixed"
                        type="radio"
                        value="Gevorderden"
                        id="3"
                        name="type"
                        onChange={(e) => setType(e.target.value, e.target.id)}
                      />
                      <label
                        htmlFor="3"
                        className={`border-2 rounded-xl items-center hover:cursor-pointer inline-block p-3 ${
                          productData.type === "Gevorderden"
                            ? "border-main"
                            : "border-gray-200 hover:border-gray-500"
                        }`}
                      >
                        Gevorderden
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="my-2 text-xs font-bold flex flex-row gap-2 md:gap-4">
                    <div>
                      <input
                        className="appearance-none fixed"
                        type="radio"
                        value="25 meter zwembad"
                        id="1"
                        name="type"
                        onChange={(e) => setType(e.target.value, e.target.id)}
                      />
                      <label
                        htmlFor="1"
                        className={`border-2 rounded-xl items-center hover:cursor-pointer inline-block p-3 ${
                          productData.type === "25 meter zwembad"
                            ? "border-main"
                            : "border-gray-200 hover:border-gray-500"
                        }`}
                      >
                        25 meter bad
                      </label>
                    </div>
                    <div>
                      <input
                        className="appearance-none fixed"
                        type="radio"
                        value="50 meter zwembad"
                        id="2"
                        name="type"
                        onChange={(e) => setType(e.target.value, e.target.id)}
                      />
                      <label
                        htmlFor="2"
                        className={`border-2 rounded-xl items-center hover:cursor-pointer inline-block p-3 ${
                          productData.type === "50 meter zwembad"
                            ? "border-main"
                            : "border-gray-200 hover:border-gray-500"
                        }`}
                      >
                        50 meter bad
                      </label>
                    </div>
                  </div>
                )}
                {productData.niveaus ? (
                  <a
                    className="underline text-navy-light1 text-xs"
                    href="#welk-niveau-past-bij-mij"
                  >
                    Welk niveau past bij mij?
                  </a>
                ) : (
                  <p className="text-navy-light1 text-xs">
                    *Bestel de bundel die past bij de lengte van het zwembad
                    waar jij in zwemt (25m of 50m). Zwem je in beide? Ga dan
                    voor de 50m bad variant.
                  </p>
                )}
              </div>
            )}

            <div className="text-center my-6">
              {productData.inStock ? (
                <Link
                  href={{
                    pathname: "/producten/[id]",
                    query: {
                      modal: "true",
                      id: productData.id,
                    },
                  }}
                >
                  <button
                    role="button"
                    onClick={() => {
                      addItemToBasket(productData);
                    }}
                    className="text-white text-tiny lg:text-lg font-bold uppercase w-full px-3 py-5 rounded-full bg-main tracking-wider shadow-xl hover:bg-white hover:text-main border-4 border-main"
                  >
                    Toevoegen aan winkelwagen
                  </button>
                </Link>
              ) : (
                <button
                  role="button"
                  disabled
                  className="text-white text-tiny lg:text-lg font-bold uppercase w-full px-3 py-5 rounded-full bg-main tracking-wider shadow-xl hover:bg-white hover:text-main border-4 border-main"
                >
                  Momenteel niet op voorraad
                </button>
              )}
              <div className="flex flex-row items-center justify-center space-x-2 my-4 lg:my-8">
                <ClockIcon className="h-8 w-8 text-slateblue-dark1" />
                <p className="text-navy-light1 text-xs pr-5">
                  1 - 2 werkdagen levertijd
                </p>
                <CreditCardIcon className="hidden sm:block h-8 w-8 text-slateblue-dark1" />
                <p className="hidden sm:block text-navy-light1 text-xs pr-5">
                  Veilig online betalen
                </p>
                <CalendarIcon className="hidden sm:block h-8 w-8 text-slateblue-dark1" />
                <p className="hidden sm:block text-navy-light1 text-xs">
                  14 dagen bedenktijd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionProductDescription;
