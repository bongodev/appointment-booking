import express from 'express';
import { User } from '../models/index.js';
import { currentUserController, userController } from '../controllers/index.js';
import { userSchema } from '../schemas/index.js';
import validatePayload from '../middlewares/validationMiddleware.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});
userRouter.get('/current-user', currentUserController.getcurrentUser);
userRouter.put(
  '/:userId',
  validatePayload(userSchema.omit({ role: true, password: true, _id: true })),
  userController.updateUserById
);

export default userRouter;
