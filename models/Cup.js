// models/User.js

import mongoose from 'mongoose'

const CupSchema = new mongoose.Schema({
  name: String,
  email: String,
  type: String,
  gender: String
}, {strict: false})

module.exports = mongoose.models.Cup || mongoose.model('Cup', CupSchema)