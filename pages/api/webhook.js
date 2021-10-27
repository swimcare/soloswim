import { buffer } from "micro";
import axios from "axios";

// Establish connection to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

console.log("established connection to stripe");

const fulfillOrder = async (sessionData) => {
  console.log("start fulfillment");

  try {
    console.log("posting request to sendgrid api");
    await axios.post(`${process.env.HOST}/api/order-confirmation-email`, {
      sessionData,
    });
  } catch (err) {
    console.log("an error occurred");
    console.log(err);
  }

  console.log("moving on to storing order in database");

  try {
    await axios.post(`${process.env.HOST}/api/orders`, {
      order_number: sessionData.order_number,
      name: sessionData.name,
      email: sessionData.email,
      line1: sessionData.line1,
      line2: sessionData.line2,
      postal_code: sessionData.postal_code,
      city: sessionData.city,
      country: sessionData.country,
      products: sessionData.products,
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

      const sessionData = {
        order_number: null,
        name: session.shipping.name,
        email: session.customer_details.email,
        line1: session.shipping.address.line1,
        line2: session.shipping.address.line2,
        postal_code: session.shipping.address.postal_code,
        city: session.shipping.address.city,
        country: session.shipping.address.country,
        products: JSON.parse(session.metadata.products),
      };

      //generating the order number:
      const orderid = require('order-id')('mysecret');
      const id = orderid.generate();  
      //adding the order number
      sessionData.order_number = id;

      // Fulfill the order...
      return fulfillOrder(sessionData)
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
