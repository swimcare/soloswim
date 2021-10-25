// models/User.js

import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  type: String
}, {strict: false})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)