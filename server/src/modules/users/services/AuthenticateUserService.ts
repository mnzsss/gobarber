import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AppError from '@shared/errors/AppError';

import authConfig from '@config/auth';

import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
  user: User;
}

class AuthenticateUserService {
  constructor(private usersRepository: IUserRepository) {}

  public async run({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

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
