import { Router } from "express";
import { userProfileController } from "../controllers";
import { validatePayload } from "../middlewares";
import { userProfileSchema } from "../schemas";

const profileRouter = Router();

profileRouter.post('/', validatePayload(userProfileSchema) ,userProfileController.createUserProfile.omit({_id: true}));
profileRouter.get('/', userProfileController.getUserProfile);
profileRouter.get('/:userId', userProfileController.findProfileByUserId)
profileRouter.put('/:userId', validatePayload(userProfileSchema), userProfileController.updateUserProfile.partial());
profileRouter.delete('/:userId', userProfileController.deleteUserProfile)

export default profileRouter;