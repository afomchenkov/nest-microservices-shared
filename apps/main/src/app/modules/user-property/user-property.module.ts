import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyEntity } from '@shared/core';

import { UserPropertyController } from './controllers';
import { UserPropertyService } from './services';
import { UserPropertyRepository } from './repositories';

const providers = [UserPropertyRepository, UserPropertyService];

@Module({
  imports: [TypeOrmModule.forFeature([PropertyEntity])],
  controllers: [UserPropertyController],
  providers,
  exports: providers,
})
export class UserPropertyModule {}
