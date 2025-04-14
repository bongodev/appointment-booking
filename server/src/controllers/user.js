import asyncHandler from 'express-async-handler';
import { userService } from '../services/index.js';
export const updateUserById = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const updatedUser = await userService.updateUser(userId, req.body);
  res.status(200).json({
    success: true,
    data: updatedUser,
  });
});
