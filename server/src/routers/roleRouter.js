import express from 'express';

import { roleController } from '../controllers/index.js';
import { validatePayload } from '../middlewares/index.js';
import { roleSchema } from '../schemas/role.js';

const roleRouter = express.Router();

roleRouter.post(
  '/',
  validatePayload(roleSchema.omit({ _id: true })),
  roleController.createRole
);

roleRouter.get('/', roleController.getAllRoles);

roleRouter.put(
  '/:id',
  validatePayload(roleSchema.partial()),
  roleController.updateRole
);

roleRouter.delete('/:id', roleController.deleteRoleById);

export default roleRouter;
