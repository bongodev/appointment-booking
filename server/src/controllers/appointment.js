import asyncHandler from 'express-async-handler';
import { appointmentServices } from '../services/index.js';

export const createAppointment = asyncHandler(async (req, res) => {
  const appointmentData = await appointmentServices.createAppointment(req.body);
  res.status(201).json(appointmentData);
});

export const searchAppointments = asyncHandler(async (req, res) => {
  const { host, page = 1, limit = 5 } = req.body;

  const appointments = await appointmentServices.searchAppointments({
    host,
    page,
    limit,
  });
  res.status(200).json(appointments);
});
