import { User } from '../models/index.js';
import { NotFoundError } from '../utils/customErrors.js';

export const updateUser = async (userId, data) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { $set: data },
    { new: true }
  ).select('-password');
  if (!user) {
    throw new NotFoundError(`User with id ${userId} not found`);
  }
  return user;
};
