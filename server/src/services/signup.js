import { User } from '../models/index.js';
import { DuplicateResourceError } from '../utils/customErrors.js';

export const signup = async ({ name, email, mobile, password }) => {
  const userAlredyExists = await User.findOne({ email });
  if (userAlredyExists) {
    throw new DuplicateResourceError(`User with email ${email} is already registered`);
  }
  const user = new User({
    name,
    email,
    mobile,
    password,
  });
  await user.save();
  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
};
