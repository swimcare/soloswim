import { buffer } from "micro";
import axios from "axios";

// Establish connection to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

console.log("Webhook: established connection to stripe");
console.log("Webhook: endpoint secret exists:", !!endpointSecret);
console.log("Webhook: HOST env var:", process.env.HOST);

const fulfillOrder = async (sessionData) => {
  console.log("Webhook: fulfillOrder called with data:", sessionData);

  console.log("Webhook: sending order confirmation email");
  try {
    // Use relative URL instead of absolute to avoid network issues
    const emailResponse = await axios.post(`/api/order-confirmation-email`, {
      sessionData,
    });
    console.log("Webhook: email sent successfully:", emailResponse.status);
  } catch (err) {
    console.log("Webhook: email error occurred:", err.message);
    console.log("Webhook: email error details:", err.response?.data);
  }

  console.log("Webhook: storing order in database");
  try {
    // Use relative URL instead of absolute to avoid network issues
    const dbResponse = await axios.post(`/api/orders`, {
      sessionData,
    });
    console.log("Webhook: order stored successfully:", dbResponse.status);
    console.log("Webhook: stored order data:", dbResponse.data);
  } catch (err) {
    console.log("Webhook: database error occurred:", err.message);
    console.log("Webhook: database error details:", err.response?.data);
  }

  console.log(
    "Webhook: fulfillOrder completed for order:",
    sessionData.order_number
  );
};

export default async (req, res) => {
  console.log("Webhook: received request, method:", req.method);

  if (req.method === "POST") {
    console.log("Webhook: processing POST request");

    // Debug webhook secret
    console.log(
      "Webhook: using endpoint secret:",
      endpointSecret ? `${endpointSecret.substring(0, 10)}...` : "NOT SET"
    );
    console.log(
      "Webhook: secret length:",
      endpointSecret ? endpointSecret.length : 0
    );

    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    console.log("Webhook: payload length:", payload.length);
    console.log("Webhook: signature exists:", !!sig);
    console.log(
      "Webhook: signature header:",
      sig ? `${sig.substring(0, 50)}...` : "NOT FOUND"
    );

    let event;

    // Verify that the EVENT posted came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
      console.log("Webhook: event verified successfully, type:", event.type);
    } catch (err) {
      console.log("Webhook: signature verification failed:", err.message);
      console.log("Webhook: error details:", {
        message: err.message,
        code: err.code,
        type: err.type,
      });

      // Return more detailed error for debugging
      return res.status(400).json({
        error: "Webhook signature verification failed",
        message: err.message,
        details: {
          secretConfigured: !!endpointSecret,
          secretLength: endpointSecret ? endpointSecret.length : 0,
          signatureHeader: !!sig,
          payloadLength: payload.length,
        },
      });
    }

    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      console.log("Webhook: processing checkout.session.completed event");

      const session = event.data.object;
      console.log("Webhook: session data received:", {
        id: session.id,
        amount_subtotal: session.amount_subtotal,
        amount_total: session.amount_total,
        metadata: session.metadata,
      });

      //convert total and subtotal to decimals
      const subtotal = session.amount_subtotal / 100;
      const total = session.amount_total / 100;

      const sessionData = {
        order_number: session.metadata.order_number,
        order_date: session.metadata.order_date,
        name:
          session.shipping?.name || session.customer_details?.name || "Unknown",
        email: session.customer_details?.email || "unknown@email.com",
        line1: session.shipping?.address?.line1 || "No address",
        line2: session.shipping?.address?.line2 || null,
        postal_code: session.shipping?.address?.postal_code || "No postal code",
        city: session.shipping?.address?.city || "No city",
        country: session.shipping?.address?.country || "No country",
        products: JSON.parse(session.metadata.products),
        subtotal: subtotal,
        total: total,
      };

      console.log("Webhook: processed sessionData:", sessionData);

      // Fulfill the order...
      try {
        await fulfillOrder(sessionData);
        console.log("Webhook: order fulfillment completed successfully");
        res.status(200).end("success");
      } catch (err) {
        console.log("Webhook: order fulfillment failed:", err.message);
        res.status(400).send(`Webhook Error: ${err.message}`);
      }
    } else {
      console.log(
        "Webhook: received event type:",
        event.type,
        "- not handling"
      );
      res.status(200).end("event received but not handled");
    }
  } else if (req.method === "GET") {
    console.log(
      "Webhook: GET request received - testing endpoint accessibility"
    );
    return res.status(200).json({
      message: "Webhook endpoint is reachable",
      stripe_configured: !!process.env.STRIPE_SECRET_KEY,
      webhook_secret_configured: !!endpointSecret,
      host_configured: !!process.env.HOST,
    });
  } else {
    console.log("Webhook: method not allowed:", req.method);
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
