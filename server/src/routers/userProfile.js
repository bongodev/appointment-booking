import { Router } from "express";
import { userProfileController } from "../controllers/index.js";
import { authenticate, validatePayload } from "../middlewares/index.js";
import { userProfileSchema } from "../schemas/index.js";

const profileRouter = Router();

// profileRouter.post('/', validatePayload(userProfileSchema) ,userProfileController.createUserProfile);
profileRouter.get('/', userProfileController.getUserProfile);
profileRouter.get('/users', userProfileController.getUser);
profileRouter.get('/:profileId', userProfileController.getProfileByUserId)
profileRouter.put('/:profileId', validatePayload(userProfileSchema.partial()), userProfileController.updateUserProfile);
profileRouter.delete('/:profileId', userProfileController.deleteUserProfile)

export default profileRouter;