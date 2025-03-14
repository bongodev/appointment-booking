import mongoose from 'mongoose';

import { config } from './config/index.js';

const connectDB = async () => {
  console.log('Connecting mongodb...');
  try {
    await mongoose.connect(config.db.MONGO_URI, {
      dbName: config.db.MONGO_DB_NAME,
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error(`MongoDB connection failed!! ${error}`);
  }
};

export default connectDB;
