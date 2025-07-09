import Link from "next/link";
import {} from "@heroicons/react/solid";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-7 lg:grid-cols-10 w-full bg-soloswim2-pink">
        <div className="bg-soloswim2-pink h-9 skew-x-25"></div>
        <div className="bg-soloswim2-orange h-9 skew-x-25"></div>
        <div className="bg-soloswim2-yellow h-9 skew-x-25"></div>
        <div className="bg-soloswim2-green h-9 skew-x-25"></div>
        <div className="bg-soloswim2-purple h-9 skew-x-25"></div>
        <div className="bg-soloswim2-blue h-9 skew-x-25"></div>
        <div className="hidden lg:block bg-soloswim2-pink h-9 skew-x-25"></div>
        <div className="hidden lg:block bg-soloswim2-orange h-9 skew-x-25"></div>
        <div className="hidden lg:block bg-soloswim2-yellow h-9 skew-x-25"></div>
        <div className="bg-soloswim2-pink h-9"></div>
      </div>
      <div className="bg-grey-light4">
        <div className="flex flex-col md:flex-row md:justify-between md:px-5 max-w-6xl mx-auto gap-6 py-8 lg:py-20">
          <div className="text-center">
            <h4 className="text-main font-semibold font-lexend text-xl mb-3 md:mb-5">
              Info
            </h4>
            <ul className="text-tiny text-navy-light1 flex flex-col gap-1">
              <li>
                <Link href="/producten/#faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/algemene-voorwaarden" className="hover:underline">
                  Algemene voorwaarden
                </Link>
              </li>
              <li>
                <Link
                  href="/verzending-en-retourneren"
                  className="hover:underline"
                >
                  Verzending &amp; retourneren
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h4 className="text-main font-semibold font-lexend text-xl mb-3 md:mb-5">
              Contact
            </h4>
            <ul className="text-tiny text-navy-light1 flex flex-col gap-1">
              <li>
                <Link
                  href="mailto:info@soloswim.be"
                  className="hover:underline"
                >
                  info@soloswim.be
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h4 className="text-main font-semibold font-lexend text-xl mb-3 md:mb-5">
              Volg ons
            </h4>
            <ul className="text-tiny text-navy-light1 flex flex-row gap-3 justify-center">
              <li>
                <a
                  className="text-navy-light1 text-xl hover:text-main"
                  target="_blank"
                  href="https://www.instagram.com/soloswim.nl/"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  className="text-navy-light1 text-xl hover:text-main"
                  target="_blank"
                  href="https://www.facebook.com/soloswim.be"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mb-8">
          <h4 className="text-main font-semibold font-lexend text-xl mb-3 md:mb-5">
            Onze partners
          </h4>
          <div className="flex flex-col gap-6 items-center sm:flex-row sm:justify-center sm:gap-10">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/partners/partner1.png"
                alt="Partner 1"
                style={{ height: 48, width: "auto", objectFit: "contain" }}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/partners/partner2.png"
                alt="Partner 2"
                style={{ height: 48, width: "auto", objectFit: "contain" }}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/partners/partner3.png"
                alt="Partner 3"
                style={{ height: 48, width: "auto", objectFit: "contain" }}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/partners/partner4.png"
                alt="Partner 4"
                style={{ height: 48, width: "auto", objectFit: "contain" }}
              />
            </a>
          </div>
        </div>
        <div className="text-center mx-5">
          <p className="text-xs text-navy-light1 italic">
            <i>
              Alle foto's zijn gemaakt in Zwembad Brandenburg in Bilthoven en
              Zwembad De Krommerijn in Utrecht
            </i>
          </p>
        </div>
        <div className="text-center py-5 mx-5">
          <p className="text-tiny text-navy-light1">
            © 2025 SoloSwim |{" "}
            <a href="https://www.swimcare.be" target="_blank">
              SwimCare
            </a>{" "}
            | <a href="mailto:info@solosim.be">info@soloswim.be</a> | BTW:
            BE0827906183
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
