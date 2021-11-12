import Modal from "../general/Modal";
import Image from "next/image";
import Link from "next/link";


function WinkelwagenModal({productData, modalIsOpen, toggleModal}) {
  return (
    <Modal isOpen={modalIsOpen} toggle={toggleModal}>
      <div className="items-start justify-between p-4 border-b border-gray-300 bg-main">
        <div className="text-xl font-lexend font-semibold text-white">
          <h1>Het product is toegevoegd aan je winkelwagen</h1>
        </div>
      </div>
      <div className="flex-shrink flex-grow p-4">
        <div className="flex flex-row gap-5 my-5">
          <div className="w-16">
            <Image src={productData.images[0]} width={300} height={300} />
          </div>
          <div>
            <h2 className="font-semibold font-lexend md:text-lg text-base leading-5">
              <p>{productData.title}</p>
            </h2>
            <h3 className="text-xs md:text-sm my-1">
              <p>{productData.level}</p>
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
