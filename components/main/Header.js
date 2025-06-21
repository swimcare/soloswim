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
    return () => {};
  }, [router]);

  return (
    <header className="sticky z-30">
      <div className="grid grid-cols-10 w-full bg-soloswim2-green">
        <div className="bg-soloswim2-pink h-2 -skew-x-12"></div>
        <div className="bg-soloswim2-orange h-2 -skew-x-12"></div>
        <div className="bg-soloswim2-yellow h-2 -skew-x-12"></div>
        <div className="bg-soloswim2-green h-2 -skew-x-12"></div>
        <div className="bg-soloswim2-purple h-2 -skew-x-12"></div>
        <div className="bg-soloswim2-blue h-2 -skew-x-12"></div>
        <div className="bg-soloswim2-pink h-2 -skew-x-12"></div>
        <div className="bg-soloswim2-orange h-2 -skew-x-12"></div>
        <div className="bg-soloswim2-yellow h-2 -skew-x-12"></div>
        <div className="bg-soloswim2-green h-2"></div>
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
          {/* SoloSwim logo */}
          <div className="w-32 lg:w-40">
            <Link href="/">

              {!mobileMenuExtended ? (
                <Image
                  src="/images/logo/alt-logo-black-500x171.png"
                  alt="SoloSwim logo black"
                  width={500}
                  height={171}
                  priority
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              ) : (
                <Image
                  src="/images/logo/alt-logo-white-500x171.png"
                  alt="SoloSwim logo white"
                  width={500}
                  height={171}
                  priority
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              )}

            </Link>
          </div>
          {/* Mobile shopping cart icon TODO: add numbering, zie amazon */}
          <div className="sm:hidden relative self-center hover:underline hover:cursor-pointer">
            <Link href="/winkelwagen">

              <ShoppingCartIcon
                className={`w-8 h-8 ${
                  mobileMenuExtended ? "text-white" : "text-main"
                }`}
              />
              {items.length > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 h-5 w-5 bg-soloswim2-orange text-center rounded-full text-black text-sm font-semibold">
                  {items.length}
                </span>
              )}

            </Link>
          </div>

          {/* Navigation items Desktop */}
          <ul className="hidden sm:flex flex-row space-x-8 lg:space-x-10 font-lexend font-semibold text-navy-light1 h-10">
            <li className="self-center hover:underline">
              <Link href="/producten">
                Zwemschema's
              </Link>
            </li>
            <li className="self-center hover:underline">
              <Link href="https://shop.swimcare.be" target="_blank">
                Zwemmateriaal
              </Link>
            </li>
            <li className="self-center hover:underline">
              <Link href="https://les.swimcare.be" target="_blank">
                Zwemlessen
              </Link>
            </li>
            <li className="self-center hover:underline">
              <Link href="https://blog.swimcare.be" target="_blank">
                Blog
              </Link>
            </li>
            <li className="self-center hover:underline">
              <Link href="/over-ons">
                Over SoloSwim
              </Link>
            </li>
            <li className="self-center hover:underline">
              <Link href="/contact">
                Contact
              </Link>
            </li>
            <li className="hidden md:block self-center hover:underline hover:cursor-pointer">
              <Link href="/winkelwagen">

                <span className="inline-block mr-2 transform translate-y-1">
                  <ShoppingCartIcon className="w-5 h-5 text-main" />
                </span>
                <span>Winkelwagen ({items.length})</span>

              </Link>
            </li>
            <li className="md:hidden sm:relative self-center hover:underline hover:cursor-pointer">
              <Link href="/winkelwagen">

                <ShoppingCartIcon
                  className={`w-8 h-8 ${
                    mobileMenuExtended ? "text-white" : "text-main"
                  }`}
                />

              </Link>
              {items.length > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 h-5 w-5 bg-soloswim2-orange text-center rounded-full text-black text-sm font-semibold">
                  {items.length}
                </span>
              )}
            </li>
          </ul>
        </div>
        {/* Mobile navigation menu extended */}
        {mobileMenuExtended && (
          <div className="sm:hidden bg-main text-white font-lexend font-bold text-xl pt-6 transform -translate-y-1">
            <ul>
              <Link href="/">

                <li className="py-3 border-b border-opacity-25">
                  <span className="ml-3">Home</span>
                </li>

              </Link>
              <Link href="/producten">

                <li className="py-3 border-b border-opacity-25">
                  <span className="ml-3">Zwemschema's</span>
                </li>

              </Link>
              <Link href="https://shop.swimcare.be">

                <li className="py-3 border-b border-opacity-25">
                  <span className="ml-3">Zwemmateriaal</span>
                </li>

              </Link>
              <Link href="https://les.swimcare.be">

                <li className="py-3 border-b border-opacity-25">
                  <span className="ml-3">Zwemlessen</span>
                </li>

              </Link>
              <Link href="https://blog.swimcare.be">

                <li className="py-3 border-b border-opacity-25">
                  <span className="ml-3">Blog</span>
                </li>

              </Link>
              <Link href="/over-ons">

                <li className="py-3 border-b border-opacity-25">
                  <span className="ml-3">Over SoloSwim</span>
                </li>

              </Link>
              <Link href="/contact">

                <li className="py-3 border-b border-opacity-25">
                  <span className="ml-3">Contact</span>
                </li>

              </Link>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
