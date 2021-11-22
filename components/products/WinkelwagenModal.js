import Modal from "../general/Modal";
import Image from "next/image";
import Link from "next/link";
import { XIcon } from "@heroicons/react/solid";

function WinkelwagenModal({ productData, modalIsOpen, toggleModal }) {


  const typeNumber = () => {
    if (productData.type==="Beginners"){
      return 0;
    } else if (productData.type==="Semi-gevorderden") {
      return 1;
    } else {
      return 2;
    }
  }

  return (
    <Modal isOpen={modalIsOpen} toggle={toggleModal}>
      <div className="flex justify-between border-b border-gray-300 bg-main rounded-t-2xl">
        <div className="p-4 text-xl font-lexend font-semibold text-white">
          <h1>Het product is toegevoegd aan je winkelwagen</h1>
        </div>
        <button type="button" className="self-start m-3" onClick={toggleModal}>
          <XIcon className="h-6 w-6 text-white" />
        </button>
      </div>
      <div className="flex-shrink flex-grow p-4">
        <div className="flex flex-row gap-5 my-5">
          <div className="w-16">
            <Image src={productData.type && productData.winkelwagen_images ? productData.winkelwagen_images[typeNumber()] : productData.images[0]} width={300} height={300} />
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
        <Link href="/winkelwagen">
          <a
            // add move to winkelwagen redirect here
            onClick={toggleModal}
            className="text-white focus:outline-none m-1.5 rounded-full px-6 py-2 bg-main hover:bg-white hover:text-main border-2 border-main"
          >
            Naar winkelwagen
          </a>
        </Link>
      </div>
    </Modal>
  );
}

export default WinkelwagenModal;
