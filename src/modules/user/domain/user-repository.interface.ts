import UserEmail from './user-email.vo';
import User, { IUser } from './user.entity';

export default interface IUserRepository {
  create: (user: IUser) => Promise<void>;
  search: (email: UserEmail) => Promise<User | void>;
}
