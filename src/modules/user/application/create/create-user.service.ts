import { Inject } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import UserEmail from '@user/domain/user-email.vo';
import UserPassword from '@user/domain/user-password.vo';
import IUserRepository from '@user/domain/user-repository.interface';
import User from '@user/domain/user.entity';

class CreateUserService {
  constructor(@Inject('IUserRepository') private userRepository: IUserRepository, private eventBus: EventBus) {}

  async run(userEmail: UserEmail, userPassword: UserPassword): Promise<void> {
    const user = User.create(userEmail, userPassword);
    await this.userRepository.create(user);
    this.eventBus.publishAll(user.pullDomainEvents());
  }
}

export default CreateUserService;
