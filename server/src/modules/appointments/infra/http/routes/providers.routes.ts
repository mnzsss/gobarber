import { Router } from 'express';

import enchureAuthenticated from '@modules/users/infra/http/middlewares/enchureAuthenticated';
import ProvidersController from '../controllers/ProvidersContoller';

const providersRouter = Router();

providersRouter.use(enchureAuthenticated);

providersRouter.get('/', ProvidersController.index);

export default providersRouter;
