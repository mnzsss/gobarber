import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import enchureAuthenticated from '../middlewares/enchureAuthenticated';

import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const createUser = new CreateUserService();

  const user = await createUser.run({ name, email, password });

  delete user.password;

  return res.json(user);
});

usersRouter.use(enchureAuthenticated);

usersRouter.patch('/avatar', upload.single('avatar'), async (req, res) => {
  const updateUserAvatar = new UpdateUserAvatarService();

  const user = await updateUserAvatar.run({
    user_id: req.user.id,
    avatarFileName: req.file.filename,
  });

  delete user.password;

  return res.json(user);
});

export default usersRouter;
