import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

class SessionsController {
  async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authUser.run({ email, password });

    return res.json({ user: classToClass(user), token });
  }
}

export default new SessionsController();
