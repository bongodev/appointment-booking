import mongoose from 'mongoose';

const slotSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: [true, 'Date is required'],
    },
    duration: {
      type: String,
      required: [true, 'Duration is required'],
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

const Slot = mongoose.model('Slot', slotSchema);

export default Slot;
