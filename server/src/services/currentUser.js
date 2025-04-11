import { User, UserProfile } from '../models/index.js';
export const getCurrentUserById = async (userId) => {

    const currentUser = await User.findById(userId).select('-password').populate({path: 'role',select: 'role description permissions'});
    if (!currentUser) {
      throw new Error('User not found');
    }
    const currentUserProfile = await UserProfile.findOne({user: userId,
      deleted: false });
    return {currentUser, currentUserProfile};
};
