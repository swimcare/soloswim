import { buffer } from "micro";
import axios from "axios";

// Establish connection to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

console.log("established connection to stripe");

const fulfillOrder = async (session) => {
  console.log("start fulfillment");

  try {
    await axios.post(`${process.env.HOST}/api/orders`, {
      shipping: {
        address: {
          line1: session.shipping.address.line1,
          line2: session.shipping.address.line2,
          postal_code: session.shipping.address.postal_code,
          city: session.shipping.address.city,
          country: session.shipping.address.country,
        },
        name: session.shipping.name,
      },
      email: session.customer_details.email,
    });
    // await axios.get(`${process.env.HOST}/api/orders`);
  } catch (err) {
    console.log("an error occurred");
    console.log(err);
  } finally {
    // return console.log("Fulfilling order");
    return console.log("Fulfilling order", session);
  }
};

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    console.log(req.headers);

    let event;

    // Verify that the EVENT posted came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log("ERROR", err.message);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    // Handle the checkout.session.completed event

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Fulfill the order...
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
