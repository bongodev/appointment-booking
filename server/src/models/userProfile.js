import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
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
