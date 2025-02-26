const mongoose = require('mongoose');
const { role } = require('../constants');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      uni,
    },
    phoneNumber: String,
    address: {
      country: String,
      city: String,
    },
    role: {
      type: String,
      enum: role,
      default: 'customer',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
