import Image from "next/image";
import Link from "next/link";
import { XIcon } from "@heroicons/react/solid";

function WinkelwagenModal({ productData, modalIsOpen, toggleModal }) {
  const typeNumber = () => {
    if (
      productData.type === "Beginners" ||
      productData.type === "25 meter zwembad"
    ) {
      return 0;
    } else if (
      productData.type === "Semi-gevorderden" ||
      productData.type === "50 meter zwembad"
    ) {
      return 1;
    } else {
      return 2;
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50" />
      <div
        className={`fixed top-0 overflow-y-auto mx-auto inset-x-0 z-40 w-full px-5 py-5 h-screen"
        }`}
      >
        <div
          aria-modal={true}
          className={`py-7 m-auto focus:outline-none`}
          // ref={ref}
          role="dialogue"
          tabIndex={-1}
        >
          <div className="animate-modal relative flex flex-col bg-white pointer-events-auto rounded-2xl h-full">
            <div extraClasses="max-w-2xl">
              <div className="flex justify-between border-b border-gray-300 bg-main rounded-t-2xl">
                <div className="p-4 text-xl font-lexend font-semibold text-white">
                  <h1>Het product is toegevoegd aan je winkelwagen</h1>
                </div>
                <button
                  type="button"
                  className="self-start m-3"
                  onClick={toggleModal}
                >
                  <XIcon className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="flex-shrink flex-grow p-4">
                <div className="flex flex-row gap-5 my-5">
                  <div className="w-44">
                    <Image
                      src={
                        productData.type && productData.winkelwagen_images
                          ? productData.winkelwagen_images[typeNumber()]
                          : productData.images[0]
                      }
                      width={300}
                      height={300}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold font-lexend md:text-lg text-base leading-5">
                      <p>{productData.title}</p>
                    </h2>
                    <h3 className="text-xs md:text-sm my-1">
                      <p>{productData.type}</p>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center p-3 xs:gap-5 border-t border-gray-300">
                <button
                  onClick={toggleModal}
                  className="text-black font-medium hover:cursor-pointer hover:underline"
                >
                  Verder winkelen
                </button>
                <Link
                  href="/winkelwagen"
                  // add move to winkelwagen redirect here
                  onClick={toggleModal}
                  className="text-white focus:outline-none m-1.5 rounded-full px-6 py-2 bg-main hover:bg-white hover:text-main border-2 border-main"
                >
                  Naar winkelwagen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WinkelwagenModal;
