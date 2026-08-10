import { buffer } from "micro";
import { createOrder } from "../../lib/createOrder";
import { sendOrderConfirmationEmail } from "../../lib/sendOrderConfirmationEmail";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const fulfillOrder = async (sessionData) => {
  console.log(
    "Webhook: fulfillOrder started for order:",
    sessionData.order_number
  );

  try {
    const emailResult = await sendOrderConfirmationEmail(sessionData);
    console.log(
      "Webhook: email sent successfully, status:",
      emailResult.statusCode
    );
  } catch (err) {
    console.error("Webhook: email error occurred:", err.message);
    throw err;
  }

  try {
    const order = await createOrder(sessionData);
    console.log("Webhook: order stored successfully:", order?.order_number);
  } catch (err) {
    console.error("Webhook: database error occurred:", err.message);
    throw err;
  }

  console.log(
    "Webhook: fulfillOrder completed for order:",
    sessionData.order_number
  );
};

export default async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  if (!endpointSecret) {
    console.error("Webhook: STRIPE_WEBHOOK_SECRET is not configured");
    return res.status(500).json({ error: "Webhook not configured" });
  }

  const requestBuffer = await buffer(req);
  const payload = requestBuffer.toString();
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook: signature verification failed:", err.message);
    return res.status(400).json({
      error: "Webhook signature verification failed",
    });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const subtotal = session.amount_subtotal / 100;
    const total = session.amount_total / 100;

    const sessionData = {
      order_number: session.metadata.order_number,
      order_date: session.metadata.order_date,
      name:
        session.shipping_details?.name ||
        session.shipping?.name ||
        session.customer_details?.name ||
        "Unknown",
      email: session.customer_details?.email || "unknown@email.com",
      line1:
        session.shipping_details?.address?.line1 ||
        session.shipping?.address?.line1 ||
        "No address",
      line2:
        session.shipping_details?.address?.line2 ||
        session.shipping?.address?.line2 ||
        null,
      postal_code:
        session.shipping_details?.address?.postal_code ||
        session.shipping?.address?.postal_code ||
        "No postal code",
      city:
        session.shipping_details?.address?.city ||
        session.shipping?.address?.city ||
        "No city",
      country:
        session.shipping_details?.address?.country ||
        session.shipping?.address?.country ||
        "No country",
      products: JSON.parse(session.metadata.products),
      subtotal,
      total,
    };

    try {
      await fulfillOrder(sessionData);
      return res.status(200).end("success");
    } catch (err) {
      console.error("Webhook: order fulfillment failed:", err.message);
      // Return 500 so Stripe retries the webhook
      return res.status(500).send(`Webhook Error: ${err.message}`);
    }
  }

  return res.status(200).end("event received but not handled");
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
