import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { DataSource } from 'typeorm';

import {
  AvailabilityEntity,
  BookingEntity,
  OrderEntity,
  PropertyEntity,
  UserEntity,
} from '../entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AvailabilityEntity,
      BookingEntity,
      OrderEntity,
      PropertyEntity,
      UserEntity,
    ]),
  ],
  controllers: [],
  providers: [],
})
export class DbModule {}
