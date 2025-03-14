import express from 'express';

import { signupController } from '../controllers/index.js';

const signupRouter = express.Router();

signupRouter.post('/', signupController.signup);

export default signupRouter;
