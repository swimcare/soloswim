import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name : String,
  price : Number, 
  type : String,
});

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
  products: [productSchema],
  subtotal: Number,
  total: Number,
}, {strict: false})

module.exports = mongoose.models.Completed_Order || mongoose.model('Completed_Order', CompletedOrderSchema)