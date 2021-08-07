import { Inject } from '@nestjs/common';
import UserEmail from '@user/domain/user-email.vo';
import IUserRepository from '@user/domain/user-repository.interface';
import User from '@user/domain/user.entity';

class FindUserService {
  constructor(@Inject('IUserRepository') private userRepository: IUserRepository) {}

  async run(userEmail: UserEmail): Promise<User | void> {
    return await this.userRepository.search(userEmail);
  }
}

export default FindUserService;
