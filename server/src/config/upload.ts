import { resolve } from 'path';
import crypto from 'crypto';
import multer from 'multer';

const uploadsFolder = resolve(__dirname, '..', '..', 'uploads');

export default {
  directory: uploadsFolder,

  storage: multer.diskStorage({
    destination: uploadsFolder,
    filename(req, file, cb) {
      const fileHash = crypto.randomBytes(5).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return cb(null, fileName);
    },
  }),
};
