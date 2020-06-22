import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import enchureAuthenticated from '../middlewares/enchureAuthenticated';
import ProfileController from '../controllers/ProfileController';

const profileRouter = Router();

profileRouter.use(enchureAuthenticated);

profileRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      old_password: Joi.string().when(Joi.ref('passowrd'), {
        then: Joi.required(),
      }),
      password: Joi.string().when(Joi.ref('old_password'), {
        then: Joi.required(),
      }),
      password_confirmation: Joi.string().when(Joi.ref('password'), {
        then: Joi.required(),
      }),
    },
  }),
  ProfileController.update,
);

profileRouter.get('/', ProfileController.show);

export default profileRouter;
