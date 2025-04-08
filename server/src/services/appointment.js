import { Appointment } from '../models/index.js';
import { formatPagination } from '../schemas/index.js';
export const createAppointment = async (appointmentPayload) => {
  const appointment = new Appointment(appointmentPayload);
  await appointment.save();
  return appointment;
};

export const searchAppointments = async ({ host, page, limit }) => {
  const query = {};
  if (host) query.host = host;

  const skip = (page - 1) * limit;
  //count the documents and return the documents which match with the specific query
  const total = await Appointment.countDocuments(query);

  const appointments = await Appointment.find(query)
    .populate('host')
    .populate('guests')
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  return {
    hits: appointments,
    pagination: formatPagination({ total, page, limit }),
  };
};
