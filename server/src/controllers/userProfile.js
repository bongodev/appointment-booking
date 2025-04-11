import asyncHandler from 'express-async-handler';
import { userProfileServices } from '../services/index.js';

const getUserProfile = asyncHandler(async (req, res) => {
  const profiles = await userProfileServices.getUserProfile();
  res.json(profiles);
});

const getProfileById = asyncHandler(async (req, res) => {
  const { profileId } = req.params;
  const profile = await userProfileServices.getProfileById(profileId);
  res.json(profile);
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const { profileId } = req.params;
  const updatedProfile = await userProfileServices.updateUserProfile(
    profileId,
    req.body
  );
  res.status(200).send(updatedProfile);
});

const deleteUserProfile = asyncHandler(async (req, res) => {
  const { profileId } = req.params;
  await userProfileServices.deleteUserProfile(profileId);
  res
    .status(200)
    .json({ message: `Profile with id: ${profileId} successfully deleted` });
});

export { getUserProfile, getProfileById, updateUserProfile, deleteUserProfile };
