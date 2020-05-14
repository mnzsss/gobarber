import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import enchureAuthenticated from '../middlewares/enchureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const usersRepository = new UsersRepository();
  const createUser = new CreateUserService(usersRepository);

  const user = await createUser.run({ name, email, password });

  delete user.password;

  return res.json(user);
});

usersRouter.use(enchureAuthenticated);

usersRouter.patch('/avatar', upload.single('avatar'), async (req, res) => {
  const usersRepository = new UsersRepository();
  const updateUserAvatar = new UpdateUserAvatarService(usersRepository);

  const user = await updateUserAvatar.run({
    user_id: req.user.id,
    avatarFileName: req.file.filename,
  });

  delete user.password;

  return res.json(user);
});

export default usersRouter;
