import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IFindAllProviderDTO from '../dtos/IFindAllProvidersDTO';

export default interface IUserRepository {
  findAllProviders(data: IFindAllProviderDTO): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
