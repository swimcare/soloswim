import { EyeIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";
import Modal from "../../general/Modal";
import Image from "next/image";

function ZwemschemaInhoud(props) {
  const [previewModalIsOpen, setpreviewModalIsOpen] = useState(false);

  const toggleModal = () => {
    setpreviewModalIsOpen(!previewModalIsOpen);
  };

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
            {props.previewItem === 1 ? (
              <button
                onClick={toggleModal}
                className="text-xs font-normal text-main float-right transform translate-y-0.5"
              >
                Preview
                <span className="float-left mr-1">
                  <EyeIcon className="h-4 w-4 text-main" />
                </span>
                <span className="ml-4 text-xs transform translate-y-0.5 float-right text-navy-light1">
                  {props.distance} m
                </span>
              </button>
            ) : (
              <span className="font-normal ml-4 text-xs transform translate-y-0.5 float-right text-navy-light1">
                {props.distance} m
              </span>
            )}
          </p>
          <p className="text-xs md:hidden">{props.tags}</p>
        </div>
      </div>
      <Modal isOpen={previewModalIsOpen} toggle={toggleModal}>
        <div className="flex justify-between border-b border-gray-300 bg-main rounded-t-2xl">
          <div className="p-4 text-xl font-lexend font-semibold text-white">
            <h1>
              Preview: {props.number} {props.name}
            </h1>
          </div>
          <button
            type="button"
            className="self-start m-3"
            onClick={toggleModal}
          >
            <XIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="h-[400px] p-4">
          <div className="w-full h-full relative">
            <Image
              src="/images/home/bundel-front.png"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              alt={props.title}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center p-3 xs:gap-5 border-t border-gray-300">
          <button
            onClick={toggleModal}
            className="text-black font-medium hover:cursor-pointer hover:underline"
          >
            Sluiten
          </button>
        </div>
      </Modal>
    </Fragment>
  );
}

export default ZwemschemaInhoud;
