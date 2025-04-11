import bcrypt from 'bcrypt';

import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    guests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    meetingDetails: {
      meetingLink: {
        type: String,
        required: true,
      },
      password: {
        type: String,
      },
    },
    dateTime: {
      type: Date,
      required: true,
    },
    timeZone: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'canceled', 'rescheduled'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

// Hash password before saving
appointmentSchema.pre('save', async function (next) {
  if (
    this.isModified('meetingDetails.password') &&
    this.meetingDetails?.password
  ) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(
        this.meetingDetails.password,
        salt
      );
      this.meetingDetails.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;
