import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearBasket } from "../slices/basketSlice";
import { TRUSTPILOT_REVIEW_URL } from "../lib/trustpilot";
import TrustBox from "../components/trustpilot/TrustBox";

function bestellingVoltooid() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear cart after a successful Stripe redirect
    dispatch(clearBasket());
  }, [dispatch]);

  return (
    <Fragment>
      <NextSeo noindex={true} />
      <main>
        <section className="bg-grey-light4">
          <div className="px-5 max-w-3xl mx-auto text-center py-10">
            <div className="px-20 max-w-sm mx-auto">
              <Image
                src="/images/bestelling-voltooid/confetti.png"
                width={425}
                height={399}
                alt="confetti"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <h1 className="my-5 sm:my-10 font-lexend text-main text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              Bedankt voor je bestelling!
            </h1>

            <p className="my-5 md:my-10 text-sm md:text-base text-navy-light1">
              Wij gaan de bestelling zo snel mogelijk verzenden, zodat jij snel
              aan de slag kunt! Via de mail ontvang je binnen enkele minuten een
              orderbevestiging, check eventueel je spam-folder.
            </p>

            <div className="my-8 md:my-12 bg-white rounded-2xl shadow-custom3 px-5 py-8">
              <h2 className="font-lexend font-extrabold text-main text-xl md:text-2xl mb-3">
                Tevreden over SoloSwim?
              </h2>
              <p className="text-navy-light1 text-tiny mb-5 max-w-md mx-auto">
                Jouw review helpt andere zwemmers én ons. Laat in een minuut
                weten hoe je SoloSwim ervaart op Trustpilot.
              </p>
              <div className="max-w-sm mx-auto mb-5">
                <TrustBox template="mini" theme="light" height="100px" />
              </div>
              <a
                href={TRUSTPILOT_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white text-tiny lg:text-base font-bold uppercase px-8 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
              >
                Schrijf een Trustpilot-review
              </a>
            </div>

            <div className="my-5 sm:my-10">
              <Link href="/">
                <button
                  role="button"
                  className="text-white text-tiny lg:text-lg font-bold uppercase px-10 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
                >
                  Terug naar home
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default bestellingVoltooid;