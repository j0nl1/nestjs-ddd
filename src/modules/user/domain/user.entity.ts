import { AggregateRoot } from '@shared/domain/aggregate-root';
import CreatedUserEvent from '@user/application/create/created-user.event';
import UserEmail from './user-email.vo';
import UserPassword from './user-password.vo';

interface UserFromPrimitives {
  email: string;
  password: string;
}

export default class User extends AggregateRoot {
  constructor(public readonly email: UserEmail, private readonly password: UserPassword) {
    super();
  }

  static create(email: UserEmail, password: UserPassword): User {
    const user = new User(email, password);
    user.record(new CreatedUserEvent(email.value));
    return user;
  }

  static fromPrimitives({ email, password }: UserFromPrimitives): User {
    return new User(new UserEmail(email), new UserPassword(password));
  }

  toPrimitives(): UserFromPrimitives {
    return {
      email: this.email.value,
      password: this.password.value
    };
  }
}
