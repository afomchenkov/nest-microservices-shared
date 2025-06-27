import { Module } from '@nestjs/common';
import { UserPropertyController } from './controllers';
import { UserPropertyService } from './services';
import { UserPropertyRepository } from './repositories';

const providers = [UserPropertyRepository, UserPropertyService];

@Module({
  imports: [],
  controllers: [UserPropertyController],
  providers,
  exports: providers,
})
export class UserPropertyModule {}
