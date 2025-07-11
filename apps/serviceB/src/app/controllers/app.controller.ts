import { Controller, Get } from '@nestjs/common';
import { AllBookingsDto, BookingMapper } from '@shared/core';

import { AppService } from '../services';

@Controller('service-b')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/bookings')
  async getBookings(): Promise<AllBookingsDto> {
    const bookings = await this.appService.getActiveBookings();

    return {
      items: bookings.map(BookingMapper.toDto),
      items_count: bookings.length,
    };
  }
}
