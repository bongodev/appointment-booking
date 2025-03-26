import asyncHandler from 'express-async-handler';
import { appointmentServices } from '../services/index';

export const createAppopintment = asyncHandler(async (req, res) => {
  const appointmentData = await appointmentServices.createAppointment(req.body);
  res.status(201).json(appointmentData);
});
