import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import CreateUserCommand from '@user/application/create/create-user.command';
import FindUserQuery from '@user/application/find/find-user.query';

@Controller('/user')
export default class UserController {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}
  @Post()
  async create(@Body() { email, password }): Promise<void> {
    try {
      await this.commandBus.execute(new CreateUserCommand(email, password));
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.FORBIDDEN);
    }
  }

  @Get('/:email')
  async search(@Param('email') email: string): Promise<void> {
    try {
      return await this.queryBus.execute(new FindUserQuery(email));
    } catch (err) {}
  }
}
