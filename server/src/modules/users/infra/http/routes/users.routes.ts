import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersController from '../controllers/UsersContoller';
import UserAvatarController from '../controllers/UserAvatarController';

import enchureAuthenticated from '../middlewares/enchureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', UsersController.create);

usersRouter.patch(
  '/avatar',
  enchureAuthenticated,
  upload.single('avatar'),
  UserAvatarController.update,
);

export default usersRouter;
