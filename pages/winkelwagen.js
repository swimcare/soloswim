import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import WinkelwagenItem from "../components/winkelwagen/WinkelwagenItem";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Link from "next/link";
import NumberFormat from "react-number-format";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function winkelwagen() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const createCheckoutSession = async () => {
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
                    title={item.title}
                    images={item.images}
                    price={item.price}
                    level={item.level}
                  />
                ))}
              </ul>
              <div className="py-4">
                <div className="flex flex-row justify-between my-3 font-semibold font-lexend text-tiny md:text-lg">
                  <p>
                    Subtotaal
                    <span className="text-xs font-normal"> (incl. BTW)</span>
                  </p>
                  <p>€11,99</p>
                </div>
                <div className="flex flex-row justify-between my-3 font-semibold font-lexend text-tiny md:text-lg">
                  <p>
                    Verzendkosten
                    <span className="text-xs font-normal"> (incl. BTW)</span>
                  </p>
                  <p>
                    <NumberFormat
                      value="3,95"
                      decimalSeparator=","
                      displayType="text"
                      prefix={"€"}
                    />
                  </p>
                </div>
                <div className="flex flex-row justify-between my-3 font-semibold font-lexend text-tiny md:text-lg">
                  <p>
                    Totaal
                    <span className="text-xs font-normal"> (incl. BTW)</span>
                  </p>
                  <p>€{(total + 3.95).toFixed(2)}</p>
                </div>
              </div>
              <div className="pb-12 pt-4">
                <button
                  role="link"
                  onClick={createCheckoutSession}
                  className="text-white lg:text-lg font-bold uppercase w-full px-3 py-4 rounded-full bg-main tracking-wider shadow-xl hover:bg-white hover:text-main border-4 border-main"
                >
                  Afrekenen
                </button>
                <div className="text-center py-2">
                  <Link href="/producten">
                    <a className="hover:underline">Verder winkelen</a>
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
                  Voeg snel iets toe aan je winkelwagen om af te kunnen rekenen.
                </h3>
              </div>
              <div className="pb-12 pt-4 max-w-lg mx-auto">
                <Link href="/producten" passHref>
                  {/* todo: add Link element */}
                  <a>
                    <button
                      role="link"
                      className="text-white lg:text-lg font-bold uppercase w-full px-3 py-4 rounded-full bg-main tracking-wider shadow-xl hover:bg-white hover:text-main border-4 border-main"
                    >
                      Bekijk producten
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default winkelwagen;
