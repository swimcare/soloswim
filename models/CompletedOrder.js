// models/User.js

import mongoose from 'mongoose'

const CompletedOrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  line1: String,
  line2: String,
  postal_code: String,
  city: String,
  country: String,
}, {strict: false})

module.exports = mongoose.models.Completed_Order || mongoose.model('Completed_Order', CompletedOrderSchema)