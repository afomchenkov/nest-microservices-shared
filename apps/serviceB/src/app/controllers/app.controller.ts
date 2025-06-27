import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services';
import { AllBookingsDto, BookingMapper } from '@shared/core';

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
