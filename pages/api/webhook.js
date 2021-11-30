import { buffer } from "micro";
import axios from "axios";

// Establish connection to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

console.log("established connection to stripe");

const fulfillOrder = async (sessionData) => {
  // try {
  //   await axios.post(`${process.env.HOST}/api/order-confirmation-email`, {
  //     sessionData,
  //   });
  // } catch (err) {
  //   console.log("an error occurred");
  //   console.log(err);
  // }

  console.log("moving on to storing order in database");

  try {
    await axios.post(`${process.env.HOST}/api/orders`, {
      sessionData,
    });

    // await axios.get(`${process.env.HOST}/api/orders`);
  } catch (err) {
    console.log("an error occurred");
    console.log(err);
  } finally {
    // return console.log("Fulfilling order");
    return console.log("Fulfilling order", sessionData);
  }
};

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    // Verify that the EVENT posted came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log("ERROR", err.message);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    // Handle the checkout.session.completed event (todo: add other events like payment failed and log that somehow or something)

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      //convert total and subtotal to decimals
      const subtotal = session.amount_subtotal.toFixed(2) / 100;
      const total = session.amount_total.toFixed(2) / 100;

      const sessionData = {
        order_number: session.metadata.order_number,
        order_date: session.metadata.order_date,
        name: session.shipping.name,
        email: session.customer_details.email,
        line1: session.shipping.address.line1,
        line2: session.shipping.address.line2,
        postal_code: session.shipping.address.postal_code,
        city: session.shipping.address.city,
        country: session.shipping.address.country,
        products: JSON.parse(session.metadata.products),
        subtotal: subtotal,
        total: total,
      };

      // Fulfill the order...
      return fulfillOrder(sessionData)
        .then(() => res.status(200).end("success"))
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
