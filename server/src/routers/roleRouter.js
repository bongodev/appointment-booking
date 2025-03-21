import express from 'express';

import { roleController } from '../controllers/index.js';

const router = express.Router();

router.post('/', roleController.createRole);
router.get('/', roleController.getAllRoles);

router.put('/:id', roleController.updateRole);
router.delete('/:id', roleController.deleteRoleById);

export default router;
