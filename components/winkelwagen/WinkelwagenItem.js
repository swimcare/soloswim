import Image from "next/image";
import { CheckIcon, ExclamationIcon } from "@heroicons/react/solid";
import Link from "next/link";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../slices/basketSlice";

function WinkelwagenItem({
  i,
  id,
  title,
  price,
  editie,
  type,
  description,
  images,
  winkelwagen_images,
  product_id,
}) {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    // remove the item from redux
    dispatch(removeFromBasket({ id, type }));
  };

  const addItemToBasket = () => {
    const product = {
      id,
      product_id,
      title,
      type,
      editie,
      price,
      description,
      images,
      winkelwagen_images,
    };

    //push item into redux
    dispatch(addToBasket(product));
  };

  const typeNumber = () => {
    if (type === "Beginners" || type === "25 meter zwembad") {
      return 0;
    } else if (type === "Semi-gevorderden" || type === "50 meter zwembad") {
      return 1;
    } else {
      return 2;
    }
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
              <a>{type}</a>
            </Link>
          </h3>
        </div>
        <div className="w-52 my-2">
          <div className="hover:cursor-pointer">
            <Link href={`/producten/${id}`}>
              <a>
                <Image
                  src={
                    type && winkelwagen_images
                      ? winkelwagen_images[typeNumber()]
                      : images[0]
                  }
                  width={300}
                  height={300}
                />
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
            <button
              role="button"
              onClick={addItemToBasket}
              className="hover:font-bold"
            >
              +
            </button>
            <button
              role="button"
              onClick={removeItemFromBasket}
              className="hover:font-bold"
            >
              -
            </button>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between md:text-sm text-xs">
          {/* <div className="mr-2">
            <p>
              <span>
                <ExclamationIcon className="w-4 h-4 mr-1 mt-1 text-red-500 float-left" />
              </span>
              Vertraagde levertijd i.v.m. vakantie (17 maart bezorgd)
            </p>
          </div> */}
          <button
            role="button"
            onClick={removeItemFromBasket}
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
