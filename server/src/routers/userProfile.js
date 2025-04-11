import { Router } from 'express';
import { userProfileController } from '../controllers/index.js';
import { authenticate, validatePayload } from '../middlewares/index.js';
import { userProfileSchema } from '../schemas/index.js';

const profileRouter = Router();

profileRouter.get('/', userProfileController.getUserProfile);
profileRouter.get('/:profileId', userProfileController.getProfileById);
profileRouter.put(
  '/:profileId',
  authenticate,
  validatePayload(userProfileSchema.partial()),
  userProfileController.updateUserProfile
);
profileRouter.delete(
  '/:profileId',
  authenticate,
  userProfileController.deleteUserProfile
);

export default profileRouter;
