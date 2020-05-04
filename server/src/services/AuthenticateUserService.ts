import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AppError from '../errors/AppError';

import authConfig from '../config/auth';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  token: string;
  user: User;
}

class AuthenticateUserService {
  public async run({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMacthed = await compare(password, user.password);

    if (!passwordMacthed) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = authConfig;

    const token = sign({}, secret, {
      expiresIn,
      subject: user.id,
    });

    return { token, user };
  }
}

export default AuthenticateUserService;
