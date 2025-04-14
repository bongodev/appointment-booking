import express from 'express';

import { User } from '../models/index.js';
import { currentUserController, userController } from '../controllers/index.js';
import validatePayload from '../middlewares/validationMiddleware.js';
import { userSchema } from '../schemas/user.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});
userRouter.get('/current-user', currentUserController.getcurrentUser);
userRouter.route('/:userId').put(
  validatePayload(
    userSchema.pick({
      name: true,
      email: true,
      mobile: true,
    })
  ),
  userController.updateUserById
);

export default userRouter;
