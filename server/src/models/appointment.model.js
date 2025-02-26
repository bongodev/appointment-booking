const mongoose = require('mongoose');
const { appointmentStatus } = require('../constants');

const appointmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    timeSlot: String,
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: String,
      enum: Object.values(appointmentStatus),
      default: appointmentStatus.SCHEDULED,
    },
    isDeleted: {
      type: Boolean, // for soft delete
      default: false,
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
