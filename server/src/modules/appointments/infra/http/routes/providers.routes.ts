import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import enchureAuthenticated from '@modules/users/infra/http/middlewares/enchureAuthenticated';

import ProvidersController from '../controllers/ProvidersContoller';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providersRouter = Router();

providersRouter.use(enchureAuthenticated);

providersRouter.get('/', ProvidersController.index);
providersRouter.get(
  '/:provider_id/month-availability',
  celebrate({
    [Segments.PARAMS]: { provider_id: Joi.string().uuid().required() },
  }),
  ProviderMonthAvailabilityController.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  celebrate({
    [Segments.PARAMS]: { provider_id: Joi.string().uuid().required() },
  }),
  ProviderDayAvailabilityController.index,
);

export default providersRouter;
