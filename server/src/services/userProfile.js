import { User, UserProfile } from '../models/index.js';

const getUserProfile = async () => {
  const profiles = await UserProfile.find({ deleted: false }).populate(
    'user',
    'name email mobile'
  );
  return profiles;
};
const getProfileById = async (profileId) => {
  const profile = await UserProfile.findOne({
    _id: profileId,
    deleted: false,
  }).populate('user', 'name email mobile');
  return profile;
};

const updateUserProfile = async (profileId, payload) => {
  return await UserProfile.findOneAndUpdate({ _id: profileId }, payload);
};

const deleteUserProfile = async (profileId) => {
  const profile = await UserProfile.findById(profileId);
  if (!profile) return { message: 'Profile not found' };

  const userId = profile.user;
  await UserProfile.findOneAndUpdate(
    { _id: profileId },
    { deleted: true, deletedAt: new Date() }
  );
  await User.findOneAndUpdate(
    { _id: userId },
    { deleted: true, deletedAt: new Date() }
  );
  return { message: 'User and Profile soft-deleted successfully' };
};


export {
    getUserProfile,
    getProfileById,
    updateUserProfile,
    deleteUserProfile,
};
