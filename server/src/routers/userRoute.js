import express from 'express';

import { User } from '../models/index.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

export default userRouter;
