import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

import { User } from '../models/index.js';
import { config } from '../config/index.js';

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (email) {
    const user = await User.findOne({ email });

    console.log(user);

    if (!user) {
      return res
        .status(401)
        .json({ message: 'No user exists with this email' });
    }

    if (!(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'wrong password' });
    }

    res.status(200).json(generateAuthToken(user));
  }

  res.status(200).json({ accessToken: 'access', refreshToken: 'refresh' });
});

const generateAuthToken = (user) => {
  const accessToken = jwt.sign(
    { _id: user._id.toString(), email: user.email },
    config.AUTH.JWT_SECRET,
    {
      expiresIn: '5m',
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
