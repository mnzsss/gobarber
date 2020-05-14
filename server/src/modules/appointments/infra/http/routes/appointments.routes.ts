import { Router } from 'express';

import enchureAuthenticated from '@modules/users/infra/http/middlewares/enchureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();

appointmentsRouter.use(enchureAuthenticated);

// appointmentsRouter.get('/', async (req, res) => {
//   const appointmentsRepository = getCustomRepository(AppointmentRepository);
//   const appointments = await appointmentsRepository.find();

//   return res.json(appointments);
// });

appointmentsRouter.post('/', AppointmentsController.create);

export default appointmentsRouter;
