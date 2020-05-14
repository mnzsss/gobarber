import { Response, Request } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

class SessionsController {
  async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authUser.run({ email, password });

    delete user.password;

    return res.json({ user, token });
  }
}

export default new SessionsController();
