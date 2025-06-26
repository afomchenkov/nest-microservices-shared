import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Availability, Booking, Order, Property, User } from '../entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Availability, Booking, Order, Property, User]),
  ],
  controllers: [],
  providers: [],
})
export class DbModule {}
