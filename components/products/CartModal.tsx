// todo: dont use UseState for storing the type (e.g. beginners), maar gebruik een query param
// bijv. ?type=beginners, en gebruik dit in de modal en ook voor het aanmaken van het cart object.

"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { XIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams?.get("inCart");
  const pathname = usePathname();

  const addedItem = useSelector(selectItems).slice(-1);
  console.log(addedItem);

  const typeNumber = () => {
    if (!addedItem[0].type) {
      return 0;
    }
    if (
      addedItem[0].type === "Beginners" ||
      addedItem[0].type === "25 meter zwembad"
    ) {
      return 0;
    } else if (
      addedItem[0].type === "Semi-gevorderden" ||
      addedItem[0].type === "50 meter zwembad"
    ) {
      return 1;
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
                          alt={addedItem[0].title}
                          // src={addedItem[0].winkelwagen_images[typeNumber()]}
                          src={
                            addedItem[0].winkelwagen_images
                              ? addedItem[0].winkelwagen_images[
                                  typeNumber() || 0
                                ]
                              : addedItem[0].images[0]
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
                          <p>{addedItem[0].title}</p>
                        </h2>
                        <h3 className="text-xs md:text-sm my-1">
                          <p>{addedItem[0].type}</p>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center p-3 xs:gap-5 border-t border-gray-300">
                    {addedItem[0].type ? (
                      <Link
                        scroll={false}
                        href={
                          {
                            pathname: pathname,
                            query: { niveau: addedItem[0].type?.toLowerCase() },
                          } || ""
                        }
                      >
                        <button
                          type="button"
                          className="text-black font-medium hover:cursor-pointer hover:underline"
                        >
                          Verder Winkelen
                        </button>
                      </Link>
                    ) : (
                      <Link
                        scroll={false}
                        href={
                          {
                            pathname: pathname,
                          } || ""
                        }
                      >
                        <button
                          type="button"
                          className="text-black font-medium hover:cursor-pointer hover:underline"
                        >
                          Verder Winkelen
                        </button>
                      </Link>
                    )}

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
