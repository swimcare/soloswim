"use client";

import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { XIcon } from "@heroicons/react/solid";

function Modal(inhoud) {
  const searchParams = useSearchParams();
  const previewQuery = searchParams?.get("preview");
  const pathname = usePathname();
  const niveau = searchParams?.get("niveau");
  const typeQuery = searchParams?.get("type");

  const data = inhoud.inhoud;

  return (
    <>
      {previewQuery && (
        <>
          <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
            <div
              className={`fixed top-0 overflow-y-auto mx-auto inset-x-0 z-40 w-full px-5 h-screen"
          }`}
            >
              <div
                aria-modal={true}
                className={`py-10 m-auto focus:outline-none h-screen`}
                role="dialogue"
                tabIndex={-1}
              >
                <div className="animate-modal relative flex flex-col bg-white pointer-events-auto rounded-2xl h-full max-w-2xl mx-auto">
                  <div className="flex justify-between border-b border-gray-300 bg-main rounded-t-2xl">
                    <div className="p-4 text-xl font-lexend font-semibold text-white">
                      <h1>
                        Preview:{" "}
                        {data[previewQuery!][typeQuery!]
                          ? data[previewQuery!][typeQuery!][0]?.title
                          : data[previewQuery!][0]?.title}
                      </h1>
                    </div>
                    <Link
                      scroll={false}
                      href={{
                        pathname: pathname,
                        query: niveau ? { niveau: niveau } : {},
                      }}
                    >
                      <button type="button" className="self-start m-3">
                        <XIcon className="h-8 w-8 text-white" />
                      </button>
                    </Link>
                  </div>

                  <div className="h-4/5 p-4">
                    <div className="w-full h-full relative">
                      <Image
                        src={
                          data[previewQuery!][typeQuery!]
                            ? data[previewQuery!][typeQuery!][0]?.preview
                            : data[previewQuery!][0]?.preview
                        }
                        alt={
                          data[previewQuery!][typeQuery!]
                            ? data[previewQuery!][typeQuery!][0]?.title
                            : data[previewQuery!][0]?.title
                        }
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
                    <Link
                      scroll={false}
                      href={{
                        pathname: pathname,
                        query: niveau ? { niveau: niveau } : {},
                      }}
                    >
                      <button className="text-black font-medium hover:cursor-pointer hover:underline">
                        Sluiten
                      </button>
                    </Link>
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
