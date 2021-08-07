import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Module({
  providers: [
    {
      provide: 'MONGO_CONNECTION',
      useFactory: async (): Promise<Db> => {
        try {
          const client = await MongoClient.connect(process.env.DB_URI);
          return client.db('cqrs');
        } catch (e) {
          throw e;
        }
      }
    }
  ],
  exports: ['MONGO_CONNECTION']
})
export class MongoModule {}
