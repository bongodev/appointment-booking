import express from 'express';

import { slotController } from '../controllers/index.js';
import { validatePayload } from '../middlewares/index.js';
import { slotSchema } from '../schemas/slot.js';

const slotRouter = express.Router();

slotRouter.post('/', validatePayload(slotSchema.omit({ _id: true })), slotController.createSlot);
slotRouter.get('/', slotController.getSlot);
slotRouter.put('/:id', validatePayload(slotSchema.partial()), slotController.updateSlot);
slotRouter.delete('/:id', slotController.deleteSlot);

export default slotRouter;
