import { User } from '../models/index.js';

export const signup = async ({ name, email, mobile, password }) => {
  const user = new User({
    name,
    email,
    mobile,
    password,
  });
  await user.save();
  user.password = undefined;
  return user;
};
