import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    unique: true,
    enum: ['Client', 'Support', 'Executive', 'Admin'],
  },
  description: { type: String },
  permissions: { type: [String], default: [] },
});

const Role = mongoose.model('Role', roleSchema);
export default Role;
