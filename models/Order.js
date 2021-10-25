import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  shipping: {
    address: {
      line1: String,
      line2: String,
      postal_code: String,
      city: String,
      country: String,
    },
    name: String,
  },
  email: String,
});

module.exports = mongoose.models.Order || mongoose.model("Order", OrderSchema);
