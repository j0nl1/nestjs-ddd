import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

// @Services
import CreateUserService from './application/create/create-user.service';
import FindUserService from './application/find/find-user.service';

// @CommandHandlers
import CreateUserHandler from './application/create/create-user.handler';

// @QueryHandlers
import FindUserHandler from './application/find/find-user.handler';

// @Controller
import UserController from './infrastructure/http/user.controller';

// @Repositories
import InMemoryUserRepository from './infrastructure/persistence/in-memory.repository';

const Services = [CreateUserService, FindUserService];
const EventHandlers = [];
const QueryHandlers = [FindUserHandler];
const CommandHandlers = [CreateUserHandler];

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [
    {
      provide: 'IUserRepository',
      useClass: InMemoryUserRepository
    },
    ...Services,
    ...EventHandlers,
    ...QueryHandlers,
    ...CommandHandlers
  ]
})
export class UserModule {}
