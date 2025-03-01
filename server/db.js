const mongoose = require('mongoose');
const config = require('./src/config');

const connectDB = async () => {
  console.log('Connecting mongoDB...');
  try {
    await mongoose.connect(config.db.MONGO_URI, {
        dbName: config.db.MONGO_DB_NAME,
    });

    console.log('MongoDB connected successfully!');
  } catch(error) {
    console.error(`MongoDB connection failed! ${error}`);
  }
};

module.exports = connectDB;