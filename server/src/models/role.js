import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,

      enum: ['Client', 'Support', 'Executive', 'Admin'],
    },
    description: { type: String },
    permissions: { type: [String], default: [] },
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

const Role = mongoose.model('Role', roleSchema);
export default Role;
