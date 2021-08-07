import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import UserEmail from '../../domain/user-email.vo';
import FindUserQuery from './find-user.query';
import FindUserService from './find-user.service';

@QueryHandler(FindUserQuery)
export default class FindUserHandler implements IQueryHandler<FindUserQuery> {
  constructor(private service: FindUserService) {}

  async execute(command: FindUserQuery) {
    const { email } = command;

    const userEmail = new UserEmail(email);

    return await this.service.run(userEmail);
  }
}
