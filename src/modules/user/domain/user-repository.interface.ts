import UserEmail from './user-email.vo';
import User from './user.entity';

export default interface IUserRepository {
  create: (user: User) => Promise<void>;
  search: (email: UserEmail) => Promise<User | void>;
}
