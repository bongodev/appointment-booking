import asyncHandler from 'express-async-handler';

import { signupServices } from '../services/index.js';

export const signup = asyncHandler(async (req, res) => {
  const { name, email, mobile, password } = req.body;
  const user = await signupServices.signup({
    name,
    email,
    mobile,
    password,
  });
  res.status(201).send(user);
});
