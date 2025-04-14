import { User } from '../models/index.js';

export const updateUser = async (userId, data) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { $set: data },
    { new: true }
  ).select('-password');
  // TODO: throw error
  return user;
};
