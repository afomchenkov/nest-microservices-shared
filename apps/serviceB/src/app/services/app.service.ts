import { Injectable } from '@nestjs/common';
import { BookingRepository } from '../repositories';
import { BookingEntity } from '@shared/core';

@Injectable()
export class AppService {
  constructor(private bookingRepository: BookingRepository) {}

  async getActiveBookings(): Promise<BookingEntity[]> {
    return this.bookingRepository.findAll();
  }
}
