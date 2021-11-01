import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";
import { useRouter } from "next/router";
import Image from "next/image";
import { Fragment } from "react";
import { ShoppingCartIcon, MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";

function Header() {
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <Fragment>
      <div className="grid grid-cols-10 w-full">
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
      <div className="bg-white h-14 w-full drop-shadow-md">
        <div className="flex flex-row justify-between max-w-screen-2xl mx-auto h-full items-center px-3 sm:px-8">
        <div className="sm:hidden self-center hover:underline hover:cursor-pointer">
            <Link href="/">
              <a>
                <MenuIcon className="w-8 h-8 text-main" />
              </a>
            </Link>
          </div>
          <div className="w-32 sm:w-40">
            <Link href="/">
              <a>
                <Image
                  src="/images/logo/alt-logo-black-500x171.png"
                  alt="Soloswim logo"
                  width={500}
                  height={171}
                />
              </a>
            </Link>
          </div>
          <div className="sm:hidden self-center hover:underline hover:cursor-pointer">
            <Link href="/winkelwagen">
              <a>
                <ShoppingCartIcon className="w-8 h-8 text-main" />
              </a>
            </Link>
          </div>

          {/* Navigation items Desktop */}
          <ul className="hidden sm:flex flex-row space-x-10 font-lexend font-semibold text-navy-light1 h-10">
            <li className="self-center hover:underline">
              <Link href="/zwemschemas">Zwemschema's</Link>
            </li>
            <li className="self-center hover:underline">
              <Link href="/">Over Soloswim</Link>
            </li>
            <li className="self-center hover:underline">
              <Link href="/">Contact</Link>
            </li>
            {/* Todo: Add href to winkelwagen, make it a link */}
            <li className="self-center hover:underline hover:cursor-pointer">
              <Link href="/winkelwagen">
                <a>
                  <span className="inline-block mr-2 translate-y-1">
                    <ShoppingCartIcon className="w-5 h-5 text-main" />
                  </span>
                  Winkelwagen ({items.length})
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
