import { Router } from 'express';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UsersRepository from '../../typeorm/repositories/UsersRepository';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const usersRepository = new UsersRepository();
  const authUser = new AuthenticateUserService(usersRepository);

  const { user, token } = await authUser.run({ email, password });

  delete user.password;

  return res.json({ user, token });
});

export default sessionsRouter;
