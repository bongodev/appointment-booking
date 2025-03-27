import { DuplicateResourceError } from '../utils/customErrors.js';
import { logger } from '../config/logger.js';
import { User, UserProfile } from '../models/index.js';

export const signup = async ({ name, email, mobile, password }) => {
  const userAlredyExists = await User.findOne({ email });
  if (userAlredyExists) {
    throw new DuplicateResourceError(
      `User with email ${email} is already registered`
    );
  }
  const user = new User({
    name,
    email,
    mobile,
    password,
  });
  await user.save();

  if (!user._id) {
    throw new Error('User ID is missing after saving the user.');
  }
  const existingProfile = await UserProfile.findOne({ user: user._id });
  if (!existingProfile) {
    logger.info(`creatinguser profile for ${user._id} `);
    const newProfile = new UserProfile({
      user: user._id,
      address: { street: '', city: '', zipCode: '', country: '' },
      dateOfBirth: null,
    });
    await newProfile.save();
  }

  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
};
