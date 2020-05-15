import { Router } from 'express';

import enchureAuthenticated from '@modules/users/infra/http/middlewares/enchureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();

appointmentsRouter.use(enchureAuthenticated);

appointmentsRouter.post('/', AppointmentsController.create);
appointmentsRouter.get('/me', ProviderAppointmentsController.index);

export default appointmentsRouter;
