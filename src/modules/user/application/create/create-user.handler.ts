import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import UserEmail from '../../domain/user-email.vo';
import UserPassword from '../../domain/user-password.vo';
import CreateUserCommand from './create-user.command';
import CreateUserService from './create-user.service';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private service: CreateUserService) {}

  async execute(command: CreateUserCommand) {
    const { email, password } = command;

    const userEmail = new UserEmail(email);
    const userPassword = new UserPassword(password);

    await this.service.run(userEmail, userPassword);
  }
}
