import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  address: String,
  email: String
})

module.exports = mongoose.models.Order || mongoose.model('Order', OrderSchema)