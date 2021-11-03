import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import WinkelwagenItem from "../components/winkelwagen/WinkelwagenItem";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

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
    <div>
      <h1 className="text-3xl">
        {items.length === 0 ? "Je Winkelwagen is leeg." : "Winkelwagen"}
      </h1>
      <p>
        Totaal: {total}
      </p>
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
    </div>
  );
}

export default winkelwagen;
