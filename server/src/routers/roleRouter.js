import express from 'express';

import { roleController } from '../controllers/index.js';

const router = express.Router();

router.post('/', roleController.createRole);
router.get('/', roleController.getAllRoles);
router.get('/:id', roleController.getRoleById);
router.put('/:id', roleController.updateRoleById);
router.delete('/:id', roleController.deleteRoleById);

export default router;
