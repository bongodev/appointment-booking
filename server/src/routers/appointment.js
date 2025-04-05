import express from 'express';
import { appointmentSchema } from '../schemas/appointment.js';
import { validatePayload } from '../middlewares/index.js';
import { appointmentController } from '../controllers/index.js';
const appointmentRouter = express.Router();

appointmentRouter.post(
  '/',
  validatePayload(appointmentSchema.omit({ _id: true })),
  appointmentController.createAppointment
);
appointmentRouter.post('/search', appointmentController.searchAppointments);

export default appointmentRouter;
