import { z } from 'zod';
import mongoose from 'mongoose';
import { logger } from '../config/index.js';



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

  logger.error(err.stack);
  res.status(500).send('Internal server error');
};

export default errorHandler;
