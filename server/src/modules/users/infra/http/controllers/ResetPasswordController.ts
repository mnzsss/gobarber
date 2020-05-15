import { Response, Request } from 'express';
import { container } from 'tsyringe';

import ResetPasswordService from '@modules/users/services/ResetPasswordService';

class ResetPasswordController {
  async create(req: Request, res: Response): Promise<Response> {
    const { token, password } = req.body;

    const resetPasswordEmail = container.resolve(ResetPasswordService);

    await resetPasswordEmail.run({ token, password });

    return res.status(204).send();
  }
}

export default new ResetPasswordController();
