import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import UserEmail from '../../domain/user-email.vo';
import FindUserQuery from './find-user.query';
import FindUserService from './find-user.service';

@QueryHandler(FindUserQuery)
export class FindUserHandler implements IQueryHandler<FindUserQuery> {
  constructor(private service: FindUserService) {}

  async execute(command: FindUserQuery) {
    const { email } = command;
    console.log(email);

    const userEmail = new UserEmail(email);

    return await this.service.run(userEmail);
  }
}