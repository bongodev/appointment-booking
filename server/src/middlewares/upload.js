import multer from 'multer';
import { storage, fileFilter } from '../config/storage';

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
    fileFilter,
  },
});

export default upload;