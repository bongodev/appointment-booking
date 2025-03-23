import { UserProfile } from "../models"

const createUserProfile = async(payload) =>{
    const existingProfile = await Profile.findOne({email, mobile });
    if (existingProfile) {
      throw new Error('Profile already exists for this user');
    }
const newProfile = new UserProfile(payload);
await newProfile.save();
return newProfile;
}

const getUserProfile = async ()=>{
    const profiles = await UserProfile.find({deleted: false});
    return profiles;
}
const findProfileByUserId = async (userId)=>{
    const profile = await UserProfile.findOne({_id: userId, deleted: false})
}

const updateUserProfile = async (userId, payload)=>{
    return await UserProfile.findOneAndUpdate({ _id: userId }, payload);
}

const deleteUserProfile = async (userId) =>{
    return await UserProfile.findOneAndUpdate({ _id: userId, deleted: true,  deletedAt: new Date()})
}

export {
    createUserProfile,
    getUserProfile,
    findProfileByUserId,
    updateUserProfile,
    deleteUserProfile,
}