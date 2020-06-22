import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import enchureAuthenticated from '@modules/users/infra/http/middlewares/enchureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();

appointmentsRouter.use(enchureAuthenticated);

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date().required(),
    },
  }),
  AppointmentsController.create,
);
appointmentsRouter.get('/me', ProviderAppointmentsController.index);

export default appointmentsRouter;
