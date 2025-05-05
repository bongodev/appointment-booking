import { Router } from 'express';
import { userProfileController } from '../controllers/index.js';
import { authenticate, validatePayload, upload } from '../middlewares/index.js';
import { userProfileImageSchema } from '../schemas/index.js';
import { config } from '../config/appConfig.js';
import { logger } from '../config/logger.js';

const profileRouter = Router();

profileRouter.get('/', userProfileController.getUserProfile);
profileRouter.get('/:profileId', userProfileController.getProfileById);
profileRouter.use(
  '/images',
  express.static(path.join(__dirname, `../../${config.FILE_SERVER.UPLOAD_DIR}`))
);
profileRouter.put(
  '/:profileId',
  upload.single('imageFile'),
  (req, res, next) => {
    if (req.file) {
      logger.info(`Request has file ${req.file}`);
      req.body.image = `api/userImage/images/${req.file.filename}`;
    }
    next();
  },
  authenticate,
  validatePayload(userProfileImageSchema),
  userProfileController.updateUserProfile
);
profileRouter.delete(
  '/:profileId',
  authenticate,
  userProfileController.deleteUserProfile
);

export default profileRouter;
