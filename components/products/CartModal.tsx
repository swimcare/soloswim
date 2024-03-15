"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { XIcon } from "@heroicons/react/solid";

function Modal({ productData, selectedOption }) {
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");
  const pathname = usePathname();

  console.log("selectedoption = " + selectedOption);

  const typeNumber = () => {
    if (
      selectedOption === "Beginners" ||
      selectedOption === "25 meter zwembad"
    ) {
      return 0;
    } else if (
      selectedOption === "Semi-gevorderden" ||
      selectedOption === "50 meter zwembad"
    ) {
      return 1;
    } else if (!selectedOption) {
      return 0;
    } else {
      return 2;
    }
  };

  return (
    <>
      {modal && (
        <>
          {/* <div className="fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50" /> */}
          <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
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
                <div className="animate-modal relative flex flex-col bg-white pointer-events-auto rounded-2xl h-full max-w-2xl mx-auto">
                  <div className="flex justify-between border-b border-gray-300 bg-main rounded-t-2xl">
                    <div className="p-4 text-xl font-lexend font-semibold text-white">
                      <h1>Het product is toegevoegd aan je winkelwagen</h1>
                    </div>
                    <Link href={pathname || ""}>
                      <button type="button" className="self-start m-3">
                        <XIcon className="h-6 w-6 text-white" />
                      </button>
                    </Link>
                  </div>
                  <div className="flex-shrink flex-grow p-4">
                    <div className="flex flex-row gap-5 my-5">
                      <div className="w-44">
                        <Image
                          alt={productData.title}
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
                    <Link href={pathname || ""}>
                      <button
                        type="button"
                        className="text-black font-medium hover:cursor-pointer hover:underline"
                      >
                        Verder Winkelen
                      </button>
                    </Link>
                    <Link href={"/winkelwagen" || ""}>
                      <button
                        type="button"
                        className="text-white focus:outline-none m-1.5 rounded-full px-6 py-2 bg-main hover:bg-white hover:text-main border-2 border-main"
                      >
                        Naar winkelwagen
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        </>

        // <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
        //   <div className="bg-white m-auto p-8">
        //     <div className="flex flex-col items-center">
        //       <p>Modal content</p>
        //       <br />
        //       <Link href={pathname || ""}>
        //         <button type="button" className="bg-red-500 text-white p-2">
        //           Close Modal
        //         </button>
        //       </Link>
        //     </div>
        //   </div>
        // </dialog>
      )}
    </>
  );
}

export default Modal;
