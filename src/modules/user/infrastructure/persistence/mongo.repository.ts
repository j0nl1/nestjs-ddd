import { Inject, Injectable } from '@nestjs/common';
import UserEmail from '@user/domain/user-email.vo';
import IUserRepository from '@user/domain/user-repository.interface';
import User from '@user/domain/user.entity';
import { Db } from 'mongodb';

@Injectable()
export default class MongoUserRepository implements IUserRepository {
  constructor(@Inject('MONGO_CONNECTION') private db: Db) {}

  async create(user: User): Promise<void> {
    await this.db.collection('user').insertOne(user);
  }

  async search(email: UserEmail): Promise<User | void> {
    return await this.db.collection('user').findOne<User>({ email });
  }
}
