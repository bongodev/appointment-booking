import { Appointment } from '../models/index.js';
export const createAppointment = async (appointmentPayload) => {
  const appointment = new Appointment(appointmentPayload);
  await appointment.save();
  return appointment;
};
