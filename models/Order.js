import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  id : Number,
  name : String,
  price : Number, 
  level : String,
  editie: Number,
});

const OrderSchema = new mongoose.Schema({
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

module.exports = mongoose.models.Order || mongoose.model('Order', OrderSchema)