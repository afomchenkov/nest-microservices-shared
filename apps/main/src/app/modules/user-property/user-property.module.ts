import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPropertyController } from './controllers';
import { UserPropertyService } from './services';
import { UserPropertyRepository } from './repositories';
import { PropertyEntity } from '@shared/core';

const providers = [UserPropertyRepository, UserPropertyService];

@Module({
  imports: [TypeOrmModule.forFeature([PropertyEntity])],
  controllers: [UserPropertyController],
  providers,
  exports: providers,
})
export class UserPropertyModule {}
