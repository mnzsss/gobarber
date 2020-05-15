import { Router } from 'express';

import enchureAuthenticated from '@modules/users/infra/http/middlewares/enchureAuthenticated';

import ProvidersController from '../controllers/ProvidersContoller';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providersRouter = Router();

providersRouter.use(enchureAuthenticated);

providersRouter.get('/', ProvidersController.index);
providersRouter.get(
  '/:provider_id/month-availability',
  ProviderMonthAvailabilityController.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  ProviderDayAvailabilityController.index,
);

export default providersRouter;
