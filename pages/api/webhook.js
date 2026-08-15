import { buffer } from "micro";
import { createOrder } from "../../lib/createOrder";
import { sendOrderConfirmationEmail } from "../../lib/sendOrderConfirmationEmail";

const Stripe = require("stripe");

/**
 * Persist the order (required for Stripe retry safety), then send email
 * without blocking the webhook HTTP response.
 */
async function persistOrder(sessionData) {
  console.log(
    "Webhook: persistOrder started for order:",
    sessionData.order_number
  );

  const order = await createOrder(sessionData);
  console.log("Webhook: order stored successfully:", order?.order_number);
  return order;
}

function sendConfirmationEmailInBackground(sessionData) {
  // Fire-and-forget: Stripe only waits ~20s; Mailgun must not block the response.
  sendOrderConfirmationEmail(sessionData)
    .then((emailResult) => {
      console.log(
        "Webhook: email sent successfully, status:",
        emailResult.statusCode,
        "order:",
        sessionData.order_number
      );
    })
    .catch((err) => {
      console.error(
        "Webhook: email error occurred for order",
        sessionData.order_number,
        err.message
      );
    });
}

function buildSessionData(session) {
  if (!session?.metadata?.products) {
    throw new Error("checkout session metadata.products is missing");
  }

  if (!session?.metadata?.order_number) {
    throw new Error("checkout session metadata.order_number is missing");
  }

  const subtotal = (session.amount_subtotal || 0) / 100;
  const total = (session.amount_total || 0) / 100;

  // Newer Stripe API versions put shipping under collected_information
  const shipping =
    session.collected_information?.shipping_details ||
    session.shipping_details ||
    session.shipping ||
    null;

  return {
    order_number: session.metadata.order_number,
    order_date: session.metadata.order_date,
    name: shipping?.name || session.customer_details?.name || "Unknown",
    email: session.customer_details?.email || "unknown@email.com",
    line1: shipping?.address?.line1 || "No address",
    line2: shipping?.address?.line2 || null,
    postal_code: shipping?.address?.postal_code || "No postal code",
    city: shipping?.address?.city || "No city",
    country: shipping?.address?.country || "No country",
    products: JSON.parse(session.metadata.products),
    subtotal,
    total,
  };
}

export default async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  // Read at request time (runtime Docker .env), not at module load
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY?.trim();
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim();

  if (!stripeSecretKey) {
    console.error("Webhook: STRIPE_SECRET_KEY is not configured");
    return res.status(500).json({ error: "Webhook not configured" });
  }

  if (!endpointSecret) {
    console.error("Webhook: STRIPE_WEBHOOK_SECRET is not configured");
    return res.status(500).json({
      error: "Webhook not configured",
      detail: "Missing STRIPE_WEBHOOK_SECRET in runtime environment",
    });
  }

  const stripe = new Stripe(stripeSecretKey);
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

  console.log("Webhook: received event:", event.type, event.id);

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    let sessionData;
    try {
      sessionData = buildSessionData(session);
    } catch (err) {
      console.error("Webhook: invalid session payload:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {
      // Only block on Mongo so Stripe gets a fast 200 and retries if DB fails.
      await persistOrder(sessionData);
      res.status(200).end("success");
      sendConfirmationEmailInBackground(sessionData);
      return;
    } catch (err) {
      console.error("Webhook: order persistence failed:", err.message);
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
