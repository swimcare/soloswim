import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import WinkelwagenItem from "../components/winkelwagen/WinkelwagenItem";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/solid";
import Link from "next/link";

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
          <h1 className="font-lexend text-2xl text-center font-extrabold text-main">
            Winkelwagen
          </h1>
        </div>
        <div className="bg-white w-full rounded-3xl px-4 my-8">
          {items.length ? (
            <div>
              <ul>
                <li className="border-grey-light5 border-b-2 pb-5 pt-6">
                  <div className="flex flex-row flex-wrap justify-between mx-4">
                    <div className="w-full">
                      <h2 className="font-semibold font-lexend text-lg leading-5">
                        Borstcrawl kracht zwemtraining
                      </h2>
                      <h3 className="text-xs my-1">Beginners</h3>
                    </div>
                    <div className="w-32 my-2">
                      <Image
                        src="/images/zwemschemas/1-1.jpg"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="my-2">
                      <p className="font-lexend text-tiny font-semibold">
                        €11,99
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
                    <div className="w-full flex flex-row justify-between text-xs">
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
                <li className="border-grey-light5 border-b-2 pb-5 pt-6">
                  <div className="flex flex-row flex-wrap justify-between mx-4">
                    <div className="w-full">
                      <h2 className="font-semibold font-lexend text-lg leading-5">
                        Borstcrawl kracht zwemtraining
                      </h2>
                      <h3 className="text-xs my-1">Beginners</h3>
                    </div>
                    <div className="w-32 my-2">
                      <Image
                        src="/images/zwemschemas/1-1.jpg"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="my-2">
                      <p className="font-lexend text-tiny font-semibold">
                        €11,99
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
                    <div className="w-full flex flex-row justify-between text-xs">
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
              </ul>
              <div className="py-4">
                <div className="flex flex-row justify-between my-3 font-semibold font-lexend text-tiny">
                  <p>
                    Subtotaal
                    <span className="text-xs font-normal"> (incl. BTW)</span>
                  </p>
                  <p>€11,99</p>
                </div>
                <div className="flex flex-row justify-between my-3 font-semibold font-lexend text-tiny">
                  <p>
                    Verzendkosten
                    <span className="text-xs font-normal"> (incl. BTW)</span>
                  </p>
                  <p>€3,95</p>
                </div>
                <div className="flex flex-row justify-between my-3 font-semibold font-lexend text-tiny">
                  <p>
                    Totaal
                    <span className="text-xs font-normal"> (incl. BTW)</span>
                  </p>
                  <p>€{total + 3.95}</p>
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

      <h1 className="text-3xl">
        {items.length === 0 ? "Je Winkelwagen is leeg." : "Winkelwagen"}
      </h1>
      <p>Totaal: {total}</p>
      {items.length ? (
        <div>
          <ul>
            {items.map((item, i) => (
              <WinkelwagenItem
                key={i}
                title={item.title}
                images={item.images}
                price={item.price}
                level={item.level}
              />
            ))}
          </ul>
          <button
            role="link"
            onClick={createCheckoutSession}
            className="bg-blue-500"
          >
            Afrekenen
          </button>
        </div>
      ) : (
        <p>Geen producten</p>
      )}

      {/* {items.map((item, i) => (
        <WinkelwagenItem
          key={i}
          id={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          category={item.category}
          image={item.image}
          slug={item.slug}
        />
      ))} */}
    </main>
  );
}

export default winkelwagen;
