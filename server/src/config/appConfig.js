import dotenv from 'dotenv';
dotenv.config();

export const config = {
  PORT: process.env.PORT,
  db: {
    MONGO_URI: process.env.MONGO_URI,
    MONGO_DB_NAME: process.env.MONGO_DB,
  },
  CORS: {
    ORIGIN: process.env.CORS_ORIGIN,
  },
  FILE_SERVER: {
    UPLOAD_DIR: '/tmp/uploads',
  },
  AUTH: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
};
