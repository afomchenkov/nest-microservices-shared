import { Module } from '@nestjs/common';
import { AppController } from './controllers';
import { AppService } from './services';
import { UserRepository } from './repositories';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserRepository],
})
export class AppModule {}
