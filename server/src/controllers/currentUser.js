import asyncHandler from 'express-async-handler';
import { logger } from '../config/logger.js';
import { getCurrentUserById } from '../services/index.js';

export const getcurrentUser = asyncHandler(async (req, res) => {
  
    const userId = req.user._id;
    // const userId = req.query._id ; //when there is no authentication setup
    if (!userId) {
      return res.status(400).json({
        message: 'Not authenticiated',
      });
    }
    const user = await getCurrentUserById(userId);
    if (!user){
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });  
    }
     if(user.error){
    logger.error('Error fetching current user:', user.error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch user details',
      error: user.error.message,
    });
  }
    res.status(200).json({
      id: user._id,
      email: user.email,
      mobile: user.mobile,
      role: user.role? {
        id: user.role._id,
          name: user.role.role,
          description: user.role.description,
          permissions: user.role.permissions
      } : null,
      profile: user.profile? {
        id: profile._id,
        image: profile.image,
        address: profile.address,
        dateOfBirth: profile.dateOfBirth
      } : null
    });
  });
