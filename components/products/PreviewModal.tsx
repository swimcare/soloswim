"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { XIcon } from "@heroicons/react/solid";

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams?.get("preview");
  const pathname = usePathname();
  const niveau = searchParams?.get("niveau");

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
                      <h1>Preview: props.number props.name</h1>
                    </div>
                    {niveau ? (
                      <Link
                        scroll={false}
                        href={{
                          pathname: pathname,
                          query: { niveau: niveau },
                        }}
                      >
                        <button type="button" className="self-start m-3">
                          <XIcon className="h-6 w-6 text-white" />
                        </button>
                      </Link>
                    ) : (
                      <Link href={pathname || ""}>
                        <button type="button" className="self-start m-3">
                          <XIcon className="h-6 w-6 text-white" />
                        </button>
                      </Link>
                    )}
                  </div>

                  <div className="h-60 p-4">
                    <div className="w-full h-full relative">
                      <Image
                        src={"/images/zwemschemas/bcl100/preview.png"}
                        alt={"props.title"}
                        fill
                        sizes="100vw"
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center p-3 xs:gap-5 border-t border-gray-300">
                    {niveau ? (
                      <Link
                        scroll={false}
                        href={{
                          pathname: pathname,
                          query: { niveau: niveau },
                        }}
                      >
                        <button className="text-black font-medium hover:cursor-pointer hover:underline">
                          Sluiten
                        </button>
                      </Link>
                    ) : (
                      <Link href={pathname || ""}>
                        <button className="text-black font-medium hover:cursor-pointer hover:underline">
                          Sluiten
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        </>
      )}
    </>
  );
}

export default Modal;
