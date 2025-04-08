import mongoose from 'mongoose';

import { config, logger } from './config/index.js';

const connectDB = async () => {
  logger.info('Connecting mongodb...');
  try {
    await mongoose.connect(config.db.MONGO_URI, {
      dbName: config.db.MONGO_DB_NAME,
    });

    logger.info('MongoDB connected successfully');
  } catch (error) {
    logger.error(`MongoDB connection failed!! ${error}`);
  }
};

export default connectDB;
