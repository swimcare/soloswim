import Image from "next/image";
import { CheckIcon } from "@heroicons/react/solid";

function WinkelwagenItem(props) {
  return (
    <li key={props.i} className="border-grey-light5 border-b-2 pb-5 pt-6">
      <div className="flex flex-row flex-wrap justify-between mx-4">
        <div className="w-full">
          <h2 className="font-semibold font-lexend md:text-lg text-base leading-5">
            {props.title}
          </h2>
          <h3 className="text-xs md:text-sm my-1">{props.level}</h3>
        </div>
        <div className="w-32 my-2">
          <Image src={props.images[0]} width={300} height={300} />
        </div>
        <div className="my-2">
          <p className="font-lexend text-tiny md:text-lg font-semibold">
            €{props.price}
          </p>
          <div className="flex flex-row justify-between text-2xl">
            {/* todo add onclick event to buttons */}
            <button role="button" className="hover:font-bold">
              +
            </button>
            <button role="button" className="hover:font-bold">
              -
            </button>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between md:text-sm text-xs">
          <div>
            <p>
              <span>
                <CheckIcon className="w-4 h-4 mr-1 text-green-500 float-left stroke-current stroke-2" />
              </span>
              Op voorraad
            </p>
          </div>
          <button
            role="button"
            className="text-main hover:underline font-semibold"
          >
            Verwijder
          </button>
        </div>
      </div>
    </li>
  );
}

export default WinkelwagenItem;
