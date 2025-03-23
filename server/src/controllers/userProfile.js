import asyncHandler from "express-async-handler";
import { userProfileServices } from "../services";


const createUserProfile = asyncHandler(async(req, res) =>{
    const {payload} = req.body;
    const profile = await userProfileServices.createUserProfile(payload);
    res.status(201).send(profile);
})

const getUserProfile = asyncHandler(async (req, res)=>{
    const profiles = await userProfileServices.getUserProfile();
    res.json(profiles);
}) 

const findProfileByUserId = asyncHandler(async (req, res)=>{
    const {userId} = req.params;
    const profile = await userProfileServices.findProfileByUserId(userId);
    res.json(profile);
} )


const updateUserProfile = asyncHandler(async (req, res)=>{
    const {userId} = req.params;
    const {payload} = req.body;
    const updatedProfile = await userProfileServices.updateUserProfile(userId, payload);
    res.status(201).send(updatedProfile);

})

const deleteUserProfile = asyncHandler(async (userId) =>{
    const {userId} = req.params;
    await userProfileServices.deleteUserProfile(userId);
    res.status(200).json({ message: `Profile with id: ${userId} successfully deleted` });
})

export {
    createUserProfile,
    getUserProfile,
    findProfileByUserId,
    updateUserProfile,
    deleteUserProfile,
}