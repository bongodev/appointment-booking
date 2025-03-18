import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';

export default function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'auth header missing' });
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No auth token found' });
  }

  jwt.verify(token, config.AUTH.JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ message: 'invalid auth token' });
    }
    req.user = payload;
    next();
  });
}
