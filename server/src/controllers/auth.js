import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

import { User } from '../models/index.js';
import { config } from '../config/index.js';

export const login = asyncHandler(async (req, res) => {
  const { email, password, refreshToken } = req.body;

  if (email) {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: 'No user exists with this email' });
    }

    if (!(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'wrong password' });
    }

    return res.status(200).json(generateAuthToken(user));
  }
  if (!refreshToken) {
    res.status(401).json({ message: 'no refresh token found' });
  }
  jwt.verify(refreshToken, config.AUTH.JWT_SECRET, async (err, payload) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }
    const user = await User.findById(payload._id);
    if (!user) {
      return res
        .status(401)
        .json({ message: 'No user exists with this email' });
    }
    return res.status(200).json(generateAuthToken(user));
  });
});

const generateAuthToken = (user) => {
  const accessToken = jwt.sign(
    { _id: user._id.toString(), email: user.email },
    config.AUTH.JWT_SECRET,
    {
      expiresIn: '1m',
    }
  );

  const refreshToken = jwt.sign(
    { _id: user._id.toString(), email: user.email },
    config.AUTH.JWT_SECRET,
    {
      expiresIn: '5m',
    }
  );

  return { accessToken, refreshToken };
};
