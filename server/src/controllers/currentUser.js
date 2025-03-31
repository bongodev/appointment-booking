import asyncHandler from 'express-async-handler';
import { getCurrentUserById } from '../services/index.js';

export const getcurrentUser = asyncHandler(async (req, res) => {
  
    const userId = req.user._id;
    if (!userId) {
      return res.status(400).json({
        message: 'Not authenticiated',
      });
    }
    const {currentUser, currentUserProfile} = await getCurrentUserById(userId);
    if (!currentUser){
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });  
    }
    
    res.status(200).json({
      id: currentUser._id,
      email: currentUser.email,
      mobile: currentUser.mobile,
      role: currentUser.role? {
        id: currentUser.role._id,
          name: currentUser.role.role,
          description: currentUser.role.description,
          permissions: currentUser.role.permissions
      } : null,
      profile: currentUserProfile? {
        id: currentUserProfile._id,
        image: currentUserProfile.image,
        address: currentUserProfile.address,
        dateOfBirth: currentUserProfile.dateOfBirth
      } : null
    });
  });
