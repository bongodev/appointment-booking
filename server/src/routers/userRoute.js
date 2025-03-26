import express from 'express';

import { User } from '../models/index.js';
import { currentUserController } from '../controllers/index.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});
userRouter.get('/current-user', currentUserController.getcurrentUser);

export default userRouter;
