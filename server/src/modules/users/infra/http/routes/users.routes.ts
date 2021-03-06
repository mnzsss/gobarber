import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersController from '../controllers/UsersContoller';
import UserAvatarController from '../controllers/UserAvatarController';

import enchureAuthenticated from '../middlewares/enchureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig.multer);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  UsersController.create,
);

usersRouter.patch(
  '/avatar',
  enchureAuthenticated,
  upload.single('avatar'),
  UserAvatarController.update,
);

export default usersRouter;
