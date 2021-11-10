import Image from "next/image";
import { CheckIcon } from "@heroicons/react/solid";
import Link from "next/link";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../slices/basketSlice";


function WinkelwagenItem({ i, id, title, price, level, description, images }) {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    // remove the item from redux
    dispatch(removeFromBasket({ id }));
  };

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      level,
      editie,
      price,
      description,
      images,
    };

    //push item into redux
    dispatch(addToBasket(product));
  };

  return (
    <li key={i} className="border-grey-light5 border-b-2 pb-5 pt-6">
      <div className="flex flex-row flex-wrap justify-between mx-4">
        <div className="w-full">
          <h2 className="font-semibold font-lexend md:text-lg text-base leading-5">
            <Link href={`/producten/${id}`}>
              <a>{title}</a>
            </Link>
          </h2>
          <h3 className="text-xs md:text-sm my-1">
            <Link href={`/producten/${id}`}>
              <a>{level}</a>
            </Link>
          </h3>
        </div>
        <div className="w-32 my-2">
          <div className="hover:cursor-pointer">
            <Link href={`/producten/${id}`}>
              <a>
                <Image src={images[0]} width={300} height={300} />
              </a>
            </Link>
          </div>
        </div>
        <div className="my-2">
          <p className="font-lexend text-tiny md:text-lg font-semibold">
            <NumberFormat
              value={price}
              decimalSeparator=","
              displayType="text"
              prefix={"€ "}
              decimalScale={2}
              fixedDecimalScale={true}
            />
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
