import { User } from '../models/index.js';
export const getCurrentUserById = async (userId) => {
  try {
    const currentUser = await User.findById(userId).select('-password');
    if (!currentUser) {
      throw new Error('User not found');
    }
    return currentUser;
  } catch (error) {
    throw error;
  }
};
