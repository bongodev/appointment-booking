import multer from 'multer';
import path from 'path';
import fs from 'fs';
import config from './appConfig';
import logger from './logger';

const uploadDir = path.join(
  __dirname,
  `../../${config.FILE_SERVER.UPLOAD_DIR}`
);

if (!fs.existsSync(uploadDir)) {
  logger.warn('Upload directory does not exist');
  try {
    logger.info('Creating upload directory...');
    fs.mkdirSync(uploadDir, { recursive: true });
    logger.info('Upload directory created successfully');
  } catch (error) {
    logger.error('Failed to create upload directory', error);
  }
} else {
  logger.info('Upload directory already exists');
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});

function fileFilter(req, file, cb) {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file type'), false);
  }
}

export { storage, fileFilter };
