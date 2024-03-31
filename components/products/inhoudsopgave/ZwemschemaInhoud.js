import { EyeIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

function ZwemschemaInhoud(props) {
  const [previewModalIsOpen, setpreviewModalIsOpen] = useState(false);

  const toggleModal = () => {
    setpreviewModalIsOpen(!previewModalIsOpen);
  };

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const niveau = searchParams.get("niveau");

  // console.log(pathname);
  return (
    <Fragment>
      <div className="flex flex-row gap-4 py-2">
        <div className="flex-none w-3 md:w-5">
          <p className="font-semibold text-tiny">{props.number}</p>
        </div>
        <div className="flex-grow text-tiny md:border-b-2 md:mb-2">
          <p className="font-semibold mb-1">
            {props.name}
            <span className="hidden md:inline-block ml-2 font-normal text-xs">
              {props.tags}
            </span>
            {props.preview ? (
              <span className=" float-right text-xs font-normal">
                {niveau ? (
                  <Link
                    scroll={false}
                    href={{
                      pathname: pathname,
                      query: {
                        niveau: niveau,
                        preview: "true",
                      },
                    }}
                  >
                    <button
                      onClick={toggleModal}
                      className="text-main transform translate-y-0.5 hover:underline"
                    >
                      Preview
                      <span className="float-left mr-1">
                        <EyeIcon className="h-4 w-4 text-main" />
                      </span>{" "}
                    </button>
                  </Link>
                ) : (
                  <Link
                    scroll={false}
                    href={{
                      pathname: pathname,
                      query: {
                        preview: "true",
                      },
                    }}
                  >
                    <button
                      onClick={toggleModal}
                      className="text-main transform translate-y-0.5 hover:underline"
                    >
                      Preview
                      <span className="float-left mr-1">
                        <EyeIcon className="h-4 w-4 text-main" />
                      </span>{" "}
                    </button>
                  </Link>
                )}
                <span className="ml-4 text-xs transform translate-y-0.5 float-right text-navy-light1">
                  {props.distance} m
                </span>
              </span>
            ) : (
              <span className="font-normal ml-4 text-xs transform translate-y-0.5 float-right text-navy-light1">
                {props.distance} m
              </span>
            )}
          </p>
          <p className="text-xs md:hidden">{props.tags}</p>
        </div>
      </div>
      {/* <div
        isOpen={previewModalIsOpen}
        toggle={toggleModal}
        fullHeight
        extraClasses="max-w-5xl h-full"
      > */}
      {/* <div className="flex justify-between border-b border-gray-300 bg-main rounded-t-2xl">
        <div className="p-4 text-xl font-lexend font-semibold text-white">
          <h1>
            Preview: {props.number} {props.name}
          </h1>
        </div>
        <button type="button" className="self-start m-3" onClick={toggleModal}>
          <XIcon className="h-6 w-6 text-white" />
        </button>
      </div>

      <div className="h-full p-4">
        <div className="w-full h-full relative">
          <Image
            src={props.preview}
            alt={props.title}
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
      </div> */}
      {/* <div className="flex flex-wrap items-center justify-center p-3 xs:gap-5 border-t border-gray-300">
        <button
          onClick={toggleModal}
          className="text-black font-medium hover:cursor-pointer hover:underline"
        >
          Sluiten
        </button>
      </div> */}
    </Fragment>
  );
}

export default ZwemschemaInhoud;
