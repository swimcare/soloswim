// models/User.js

import mongoose from 'mongoose'

const CompletedOrderSchema = new mongoose.Schema({
  order_date: String,
  order_number: String,
  name: String,
  email: String,
  line1: String,
  line2: String,
  postal_code: String,
  city: String,
  country: String,
  products: [String],
}, {strict: false})

module.exports = mongoose.models.Completed_Order || mongoose.model('Completed_Order', CompletedOrderSchema)