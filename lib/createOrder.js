import dbConnect from "./dbConnect";
import Order from "../models/Order";

/**
 * Persist a fulfilled checkout session as an order in MongoDB.
 * Retries from Stripe are idempotent on order_number.
 * @param {object} sessionData
 * @returns {Promise<object>} created or existing order document
 */
export async function createOrder(sessionData) {
  if (!sessionData || typeof sessionData !== "object") {
    throw new Error("sessionData is required");
  }

  if (!sessionData.order_number) {
    throw new Error("sessionData.order_number is required");
  }

  await dbConnect();

  const existing = await Order.findOne({
    order_number: sessionData.order_number,
  });
  if (existing) {
    return existing;
  }

  return Order.create(sessionData);
}
