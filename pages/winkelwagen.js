import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import WinkelwagenItem from "../components/winkelwagen/WinkelwagenItem";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Link from "next/link";
import NumberFormat from "react-number-format";
import * as ga from "../lib/ga/index";
import { Fragment } from "react";
import { NextSeo } from "next-seo";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function winkelwagen() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const shipping = 5.99;

  // Google analytics event
  const checkoutGA = () => {
    ga.event({
      action: "begin_checkout",
      params: {
        price: total,
        shipping: shipping,
      },
    });
  };

  const createCheckoutSession = async () => {
    checkoutGA();
    const stripe = await stripePromise;

    // Call the backend to create a checkout session...
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items,
    });

    // Redirect user to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <Fragment>
      <NextSeo noindex={true} />
      <main className="bg-grey-light4">
        <section className="px-5 sm:px-8 max-w-screen-xl mx-auto py-8 lg:py-20 text-navy-light1">
          <div>
            <h1 className="font-lexend text-2xl md:text-4xl lg:text-6xl text-center font-extrabold text-main">
              Winkelwagen
            </h1>
          </div>
          <div className="bg-white w-full rounded-3xl px-4 my-8 lg:my-16">
            {items.length ? (
              <div className="max-w-4xl mx-auto">
                <ul>
                  {items.map((item, i) => (
                    <WinkelwagenItem
                      key={i}
                      id={item.id}
                      product_id={item.product_id}
                      title={item.title}
                      editie={item.editie}
                      images={item.images}
                      winkelwagen_images={item.winkelwagen_images}
                      price={item.price}
                      type={item.type}
                      description={item.description}
                    />
                  ))}
                </ul>
                <div className="py-4">
                  <div className="flex flex-row justify-between my-3 font-semibold font-lexend text-tiny md:text-lg">
                    <p>
                      Subtotaal
                      <span className="text-xs font-normal"> (incl. BTW)</span>
                    </p>
                    <NumberFormat
                      value={total}
                      decimalSeparator=","
                      displayType="text"
                      prefix={"€ "}
                      decimalScale={2}
                      fixedDecimalScale={true}
                    />
                  </div>
                  <div className="flex flex-row justify-between my-3 font-semibold font-lexend text-tiny md:text-lg">
                    <p>Verzendkosten*</p>
                    <p>
                      <NumberFormat
                        value={shipping}
                        decimalSeparator=","
                        displayType="text"
                        prefix={"€ "}
                        decimalScale={2}
                        fixedDecimalScale={true}
                      />
                    </p>
                  </div>
                  <div className="flex flex-row justify-between my-3 font-semibold font-lexend text-tiny md:text-lg">
                    <p>
                      Totaal
                      <span className="text-xs font-normal"> (incl. BTW)</span>
                    </p>
                    <p>
                      <NumberFormat
                        value={total + shipping}
                        decimalSeparator=","
                        displayType="text"
                        prefix={"€ "}
                        decimalScale={2}
                        fixedDecimalScale={true}
                      />
                    </p>
                  </div>
                  <p className="text-xs">
                    *Verzendkosten binnen België. Definitieve verzendkosten
                    worden berekend tijdens afrekenen in de volgende stap.
                  </p>
                </div>
                <div className="pb-12 pt-4">
                  <p className="text-xs text-center my-1">
                    Heb je een <b>kortingscode</b> of <b>cadeaubon</b>?
                    Verzilver deze in de volgende stap!
                  </p>
                  <button
                    role="link"
                    onClick={createCheckoutSession}
                    className="text-white lg:text-lg font-bold uppercase w-full px-3 py-4 rounded-full bg-main tracking-wider shadow-xl hover:bg-white hover:text-main border-4 border-main"
                  >
                    Afrekenen
                  </button>
                  <div className="text-center py-2">
                    <Link href="/producten" className="hover:underline">
                      Verder winkelen
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <h2 className="font-semibold font-lexend text-lg lg:text-2xl leading-5 text-center pt-12 my-4">
                    Je winkelwagen is nog leeg
                  </h2>
                  <h3 className="text-xs lg:text-base my-1 text-center">
                    Voeg snel iets toe aan je winkelwagen om af te kunnen
                    rekenen.
                  </h3>
                </div>
                <div className="pb-12 pt-8 max-w-lg mx-auto">
                  <Link href="/producten" passHref>
                    {/* todo: add Link element */}

                    <button
                      role="link"
                      className="text-white lg:text-lg font-bold uppercase w-full px-3 py-4 rounded-full bg-main tracking-wider shadow-xl hover:bg-white hover:text-main border-4 border-main"
                    >
                      Naar producten
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default winkelwagen;
