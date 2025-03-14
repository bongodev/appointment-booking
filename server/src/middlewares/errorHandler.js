import { z } from 'zod';
import mongoose from 'mongoose';

const errorHandler = (err, req, res, next) => {
  if (err instanceof z.ZodError) {
    return res.status(400).send(err.errors);
  }

  if (
    err instanceof mongoose.Error.ValidationError ||
    err instanceof mongoose.Error.CastError
  ) {
    return res.status(400).send(err.message);
  }

  console.error(err.stack);
  res.status(500).send('Internal server error');
};

export default errorHandler;
