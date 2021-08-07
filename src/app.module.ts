import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '@user/user.module';

const MODULES = [UserModule];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ...MODULES
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
