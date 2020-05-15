import { inject, injectable } from 'tsyringe';
import { differenceInHours } from 'date-fns';

// import AppError from '@shared/errors/AppError';

import AppError from '@shared/errors/AppError';
import IUserRepository from '../repositories/IUsersRepository';
import IUserTokensRepository from '../repositories/IUserTokensRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  token: string;
  password: string;
}

@injectable()
class ResetPasswordService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async run({ token, password }: IRequest): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User token does not exists');
    }

    const user = await this.usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User token does not exists');
    }

    const tokenCreatedAt = userToken.created_at;

    const hoursDiff = differenceInHours(Date.now(), tokenCreatedAt);

    if (hoursDiff >= 2) {
      throw new AppError('Token expired, generate a new token and try again');
    }

    user.password = await this.hashProvider.generateHash(password);

    await this.usersRepository.save(user);
  }
}

export default ResetPasswordService;
