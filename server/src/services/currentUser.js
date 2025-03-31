import { User } from '../models/index.js';
export const getCurrentUserById = async (userId) => {
  try {
    const currentUser = await User.findById(userId).select('-password').populate({path: 'role',select: 'role description permissions'});
    if (!currentUser) {
      throw new Error('User not found');
    }
    return currentUser;
  } catch (error) {
    throw error;
  }
};
