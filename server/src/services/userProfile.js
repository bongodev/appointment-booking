import { User, UserProfile } from "../models/index.js"

// const createUserProfile = async(payload, userId) =>{
// const newProfile = new UserProfile({ user: userId, ...payload });
// await newProfile.save();
// return newProfile
// }

const getUserProfile = async ()=>{
    const profiles = await UserProfile.find({deleted: false}).populate('user', 'name email mobile');
    return profiles;
}
const  getProfileByUserId = async (profileId)=>{
    const profile = await UserProfile.findOne({_id: profileId, deleted: false}).populate('user', 'name email mobile')
    return profile;
}

const updateUserProfile = async (profileId, payload)=>{
    return await UserProfile.findOneAndUpdate({ _id: profileId }, payload);
}

const deleteUserProfile = async (profileId) =>{
    return await UserProfile.findOneAndUpdate({ _id: profileId, deleted: true,  deletedAt: new Date()})
}

const getUser = async ()=>{
    const users = await User.find();
    return users;
}

export {
    getUser,
    getUserProfile,
    getProfileByUserId,
    updateUserProfile,
    deleteUserProfile,
}