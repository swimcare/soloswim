import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  name: String,
  line1: String,
  line2: String,
  postal_code: String,
  city: String,
  country: String,
  email: String,
});

module.exports = mongoose.models.Order || mongoose.model("Order", OrderSchema);
