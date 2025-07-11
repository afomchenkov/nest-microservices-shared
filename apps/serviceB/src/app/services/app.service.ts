import { Injectable } from '@nestjs/common';
import { BookingEntity } from '@shared/core';

import { BookingRepository } from '../infrastructure/repositories';

@Injectable()
export class AppService {
  constructor(private bookingRepository: BookingRepository) {}

  async getActiveBookings(): Promise<BookingEntity[]> {
    return this.bookingRepository.findAll();
  }
}
