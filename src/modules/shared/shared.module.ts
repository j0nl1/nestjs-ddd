import { Global, Module } from '@nestjs/common';
import { MongoModule } from './infrastructure/persitence/mongo.module';

@Global()
@Module({
  imports: [MongoModule],
  controllers: [],
  providers: [],
  exports: [MongoModule]
})
export class SharedModule {}
