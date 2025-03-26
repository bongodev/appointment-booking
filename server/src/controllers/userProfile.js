import asyncHandler from 'express-async-handler';
import { userProfileServices } from '../services/index.js';

// const createUserProfile = asyncHandler(async (req, res) => {
//   const { payload } = req.body;
//   const { userId } = req.user._id;
//   console.log(req.body);
//   const profile = await userProfileServices.createUserProfile(userId, payload);
//   res.status(201).send(profile);
// });

const getUserProfile = asyncHandler(async (req, res) => {

    const profiles = await userProfileServices.getUserProfile();
    res.json(profiles);
});
const getUser =asyncHandler(async(req, res)=>{
  const users= await userProfileServices.getUser()
  res.json(users)
})

const getProfileByUserId = asyncHandler(async (req, res) => {
  const { profileId } = req.params;
  const profile = await userProfileServices.getProfileByUserId(profileId);
  res.json(profile);
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const { profileId } = req.params;
  const { payload } = req.body;
  const updatedProfile = await userProfileServices.updateUserProfile(
    profileId,
    payload
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

export {
  getUser,
  getUserProfile,
  getProfileByUserId,
  updateUserProfile,
  deleteUserProfile,
};
