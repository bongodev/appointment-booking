import mongoose from 'mongoose';
import User from './user.js';

const userProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      // unique: true, 
    },
    image: {
      type: String,
    },
    address: {
      street: String,
      city: String,
      zipCode: String,
      country: String,
    },
    dateOfBirth: {
      type: Date,
    },
    contact: {
      type: String,//we will use nested schema for contact schema
      enum: ["email", "phone", "sms"],
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

const UserProfile = mongoose.model('UserProfile', userProfileSchema);
export default UserProfile;
