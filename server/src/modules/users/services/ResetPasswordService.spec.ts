// import AppError from '@shared/errors/AppError';

import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeUserTokensRepository from '../repositories/fakes/FakeUserTokensRepository';
import ResetPasswordService from './ResetPasswordService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokensRespository: FakeUserTokensRepository;
let fakeHashProvider: FakeHashProvider;
let resetPassword: ResetPasswordService;

describe('ResetPassword', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeUserTokensRespository = new FakeUserTokensRepository();
    fakeHashProvider = new FakeHashProvider();

    resetPassword = new ResetPasswordService(
      fakeUsersRepository,
      fakeUserTokensRespository,
      fakeHashProvider,
    );
  });

  it('should be able to reset password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const { token } = await fakeUserTokensRespository.generate(user.id);

    const generateHash = jest.spyOn(fakeHashProvider, 'generateHash');

    await resetPassword.run({
      token,
      password: '123123',
    });

    const updatedUser = await fakeUsersRepository.findById(user.id);

    expect(generateHash).toBeCalledWith('123123');
    expect(updatedUser?.password).toBe('123123');
  });

  it('should not be able to reset password with no existing token', async () => {
    expect(
      resetPassword.run({ token: 'non-existing-token', password: '123456' }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to reset password with no existing user', async () => {
    const { token } = await fakeUserTokensRespository.generate(
      'non-existing-user',
    );

    expect(
      resetPassword.run({ token, password: '123456' }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to reset password with passed more than 2 hours', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const { token } = await fakeUserTokensRespository.generate(user.id);

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      const customDate = new Date();

      return customDate.setHours(customDate.getHours() + 3);
    });

    await expect(
      resetPassword.run({
        password: '123123',
        token,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
