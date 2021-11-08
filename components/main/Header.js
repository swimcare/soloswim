import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";
import Image from "next/image";
import { useEffect } from "react";
import { ShoppingCartIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";

function Header() {
  const items = useSelector(selectItems);
  const [mobileMenuExtended, setMobileMenuExtended] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuExtended(!mobileMenuExtended);
  };

  // Close mobile menu on change of route
  const router = useRouter();
  useEffect(() => {
    setMobileMenuExtended(false);
    return () => {
    }
  }, [router]);

  return (
    <div className="sticky z-50">
      <div className="grid grid-cols-10 w-full bg-soloswim-green">
        <div className="bg-soloswim-pink h-2 -skew-x-12"></div>
        <div className="bg-soloswim-orange h-2 -skew-x-12"></div>
        <div className="bg-soloswim-yellow h-2 -skew-x-12"></div>
        <div className="bg-soloswim-green h-2 -skew-x-12"></div>
        <div className="bg-soloswim-purple h-2 -skew-x-12"></div>
        <div className="bg-soloswim-blue h-2 -skew-x-12"></div>
        <div className="bg-soloswim-pink h-2 -skew-x-12"></div>
        <div className="bg-soloswim-orange h-2 -skew-x-12"></div>
        <div className="bg-soloswim-yellow h-2 -skew-x-12"></div>
        <div className="bg-soloswim-green h-2"></div>
      </div>
      <div
        className={`h-14 w-full drop-shadow-md ${
          mobileMenuExtended ? "bg-main" : "bg-white"
        }`}
      >
        <div className="flex flex-row justify-between max-w-screen-xl mx-auto h-full items-center px-3 sm:px-8">
          {/* Mobile hamburger menu icon */}
          <div
            className="sm:hidden self-center hover:underline hover:cursor-pointer"
            onClick={() => toggleMobileMenu()}
          >
            {mobileMenuExtended ? (
              <XIcon className="w-8 h-8 text-white" />
            ) : (
              <MenuIcon className="w-8 h-8 text-main" />
            )}
          </div>
          {/* Soloswim logo */}
          <div className="w-32 lg:w-40">
            <Link href="/">
              <a>
                {!mobileMenuExtended ? (
                  <Image
                    src="/images/logo/alt-logo-black-500x171.png"
                    alt="Soloswim logo black"
                    width={500}
                    height={171}
                  />
                ) : (
                  <Image
                    src="/images/logo/alt-logo-white-500x171.png"
                    alt="Soloswim logo white"
                    width={500}
                    height={171}
                  />
                )}
              </a>
            </Link>
          </div>
          {/* Mobile shopping cart icon TODO: add numbering, zie amazon */}
          <div className="sm:hidden relative self-center hover:underline hover:cursor-pointer">
            <Link href="/winkelwagen">
              <a>
                <ShoppingCartIcon
                  className={`w-8 h-8 ${
                    mobileMenuExtended ? "text-white" : "text-main"
                  }`}
                />
                {items.length > 0 && (
                  <span className="absolute top-0 right-0 translate-x-1 -translate-y-1 h-5 w-5 bg-soloswim-orange text-center rounded-full text-black text-sm font-semibold">
                    {items.length}
                  </span>
                )}
              </a>
            </Link>
          </div>

          {/* Navigation items Desktop */}
          <ul className="hidden sm:flex flex-row space-x-8 lg:space-x-10 font-lexend font-semibold text-navy-light1 h-10">
            <li className="self-center hover:underline">
              <Link href="/zwemschemas">Zwemschema's</Link>
            </li>
            <li className="self-center hover:underline">
              <Link href="/">Over Soloswim</Link>
            </li>
            <li className="self-center hover:underline">
              <Link href="/">Contact</Link>
            </li>
            <li className="hidden md:block self-center hover:underline hover:cursor-pointer">
              <Link href="/winkelwagen">
                <a>
                  <span className="inline-block mr-2 translate-y-1">
                    <ShoppingCartIcon className="w-5 h-5 text-main" />
                  </span>
                  <span>Winkelwagen ({items.length})</span>
                </a>
              </Link>
            </li>
            <li className="md:hidden sm:relative self-center hover:underline hover:cursor-pointer">
              <Link href="/winkelwagen">
                <a>
                  <ShoppingCartIcon
                    className={`w-8 h-8 ${
                      mobileMenuExtended ? "text-white" : "text-main"
                    }`}
                  />
                </a>
              </Link>
              {items.length > 0 && (
                <span className="absolute top-0 right-0 translate-x-1 -translate-y-1 h-5 w-5 bg-soloswim-orange text-center rounded-full text-black text-sm font-semibold">
                  {items.length}
                </span>
              )}
            </li>
          </ul>
        </div>
        {/* Mobile navigation menu extended */}
        {mobileMenuExtended && (
          <div className="sm:hidden bg-main text-white font-lexend font-bold text-xl pt-6 -translate-y-1">
            <ul>
              <Link href="/">
                <a>
                  <li className="py-3 border-b border-opacity-25">
                    <span className="ml-3">Home</span>
                  </li>
                </a>
              </Link>
              <Link href="/zwemschemas">
                <a>
                  <li className="py-3 border-b border-opacity-25">
                    <span className="ml-3">Zwemschema's</span>
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li className="py-3 border-b border-opacity-25">
                    <span className="ml-3">Over Soloswim</span>
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li className="py-3 border-b border-opacity-25">
                    <span className="ml-3">Contact</span>
                  </li>
                </a>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
