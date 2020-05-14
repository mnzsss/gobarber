import { Router } from 'express';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authUser = new AuthenticateUserService();

  const { user, token } = await authUser.run({ email, password });

  delete user.password;

  return res.json({ user, token });
});

export default sessionsRouter;
