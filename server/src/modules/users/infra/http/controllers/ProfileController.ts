import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import ShowProfileService from '@modules/users/services/ShowProfileService';

class ProfileController {
  async show(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;

    const showProfile = container.resolve(ShowProfileService);

    const user = await showProfile.run({ user_id });

    return res.json({ user: classToClass(user) });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { name, email, password, old_password } = req.body;
    const user_id = req.user.id;

    const updateProfile = container.resolve(UpdateProfileService);

    const user = await updateProfile.run({
      user_id,
      name,
      email,
      old_password,
      password,
    });

    return res.json({ user: classToClass(user) });
  }
}

export default new ProfileController();
