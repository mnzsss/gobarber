import FakeUserRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUserRepository: FakeUserRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    listProviders = new ListProvidersService(fakeUserRepository);
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const user2 = await fakeUserRepository.create({
      name: 'John Tre',
      email: 'johntree@example.com',
      password: '123456',
    });

    const loggedUser = await fakeUserRepository.create({
      name: 'Logged',
      email: 'logged@example.com',
      password: '123456',
    });

    const providers = await listProviders.run({ user_id: loggedUser.id });

    expect(providers).toEqual([user1, user2]);
  });
});