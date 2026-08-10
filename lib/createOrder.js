import dbConnect from "./dbConnect";
import Order from "../models/Order";

/**
 * Persist a fulfilled checkout session as an order in MongoDB.
 * @param {object} sessionData
 * @returns {Promise<object>} created order document
 */
export async function createOrder(sessionData) {
  if (!sessionData || typeof sessionData !== "object") {
    throw new Error("sessionData is required");
  }

  await dbConnect();
  return Order.create(sessionData);
}
