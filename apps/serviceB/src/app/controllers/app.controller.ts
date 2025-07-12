import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { AllBookingsDto, BookingMapper } from '@shared/core';
import { AuthGuard } from '../guards';
import { AppService } from '../services';
import { LoggingInterceptor } from '../interceptors';

@Controller('service-b')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard)
  @UseInterceptors(LoggingInterceptor)
  getSecureData() {
    return { message: 'Protected route!' };
  }

  @Get('/bookings')
  async getBookings(): Promise<AllBookingsDto> {
    const bookings = await this.appService.getActiveBookings();

    return {
      items: bookings.map(BookingMapper.toDto),
      items_count: bookings.length,
    };
  }
}
