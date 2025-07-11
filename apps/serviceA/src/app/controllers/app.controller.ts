import { Controller, Get } from '@nestjs/common';
import { AllUsersDto, UserMapper } from '@shared/core';

import { AppService } from '../services';

@Controller('service-a')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  async getUsers(): Promise<AllUsersDto> {
    const users = await this.appService.getActiveUsers();

    return {
      items: users.map(UserMapper.toDto),
      items_count: users.length,
    };
  }
}
