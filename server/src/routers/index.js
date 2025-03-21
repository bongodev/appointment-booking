import { authenticate } from '../middlewares/index.js';

import authRouter from './auth.js';
import signupRouter from './signup.js';
import userRouter from './userRoute.js';
import roleRouter from './roleRouter.js';

const configureRouter = (app) => {
  app.get('/status', (req, res) => {
    res.send('OK');
  });

  app.use('/api/auth', authRouter);
  app.use('/api/signup', signupRouter);
  app.use('/api/users', authenticate, userRouter);
  app.use('/api/roles', roleRouter);
};

export default configureRouter;
