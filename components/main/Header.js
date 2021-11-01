import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";
import { useRouter } from "next/router";
import Image from "next/image";
import { Fragment } from "react";

function Header() {
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <Fragment>
      <div className="grid grid-cols-10">
        <div className="bg-soloswim-pink h-2"></div>
        <div className="bg-soloswim-orange h-2"></div>
        <div className="bg-soloswim-yellow h-2"></div>
        <div className="bg-soloswim-green h-2"></div>
        <div className="bg-soloswim-purple h-2"></div>
        <div className="bg-soloswim-blue h-2"></div>
        <div className="bg-soloswim-pink h-2"></div>
        <div className="bg-soloswim-orange h-2"></div>
        <div className="bg-soloswim-yellow h-2"></div>
        <div className="bg-soloswim-green h-2"></div>
      </div>
      <div className="bg-white h-16 w-full drop-shadow-md">
        <div className="flex flex-row justify-between max-w-7xl mx-auto h-full items-center">
          <div className="w-40">
            <Image
              src="/images/logo/alt-logo-black-500x171.png"
              alt="Soloswim logo"
              width={500}
              height={171}
            />
          </div>
          <div>
            <ul className="flex flex-row space-x-10 font-lexend font-semibold text-navy-light1">
              <li>Zwemschema's</li>
              <li>Over Soloswim</li>
              <li>Contact</li>
              <li onClick={() => router.push("/winkelwagen")}>
                Winkelwagen ({items.length})
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
