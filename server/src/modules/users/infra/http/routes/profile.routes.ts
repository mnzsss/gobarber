import { Router } from 'express';

import enchureAuthenticated from '../middlewares/enchureAuthenticated';
import ProfileController from '../controllers/ProfileController';

const profileRouter = Router();

profileRouter.use(enchureAuthenticated);

profileRouter.put('/', ProfileController.update);
profileRouter.get('/', ProfileController.show);

export default profileRouter;
