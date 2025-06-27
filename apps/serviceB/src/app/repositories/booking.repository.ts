
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BookingEntity, Booking } from '@shared/core';

@Injectable()
export class BookingRepository {
  constructor(
    private readonly booking: Repository<BookingEntity>,
  ) {}
  
  async findAll(): Promise<BookingEntity[]> {
    return this.booking.find();
  }

  async findOne(id: string): Promise<BookingEntity> {
    return this.booking.findOne({ where: { id }});
  }

  async remove(id: number): Promise<void> {
    await this.booking.delete(id);
  }

  async create(user: Booking): Promise<BookingEntity> {
    return this.booking.save(user);
  }

  async update(user: Booking): Promise<BookingEntity> {
    return this.booking.save(user);
  }
}