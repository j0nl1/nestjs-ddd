import { Injectable } from '@nestjs/common';
import UserEmail from '@user/domain/user-email.vo';
import IUserRepository from '@user/domain/user-repository.interface';
import User from '@user/domain/user.entity';

@Injectable()
export default class InMemoryUserRepository implements IUserRepository {
  private db = [];

  async create(user: User): Promise<void> {
    this.db.push(user.toPrimitives());
  }

  async search(email: UserEmail): Promise<User | void> {
    return this.db.find((user) => user.email === email.value);
  }
}
