import asyncHandler from 'express-async-handler';
import { logger } from '../config/logger.js';
import { getCurrentUserById } from '../services/index.js';

export const getcurrentUser = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;
    // const userId = req.query._id ; //when there is no authentication setup
    if (!userId) {
      return res.status(400).json({
        message: 'Not authenticiated',
      });
    }
    const user = await getCurrentUserById(userId);
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
      profile: user.profile,
    });
  } catch (error) {
    logger.error('Error fetching current user:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user details',
      error: error.message,
    });
  }
});
