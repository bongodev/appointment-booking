import signupRouter from './signup.js';
import userRouter from './userRoute.js';

const configureRouter = (app) => {
  app.get('/status', (req, res) => {
    res.send('OK');
  });

  app.use('/api/signup', signupRouter);
  app.use('/api/users', userRouter);
};

export default configureRouter;
