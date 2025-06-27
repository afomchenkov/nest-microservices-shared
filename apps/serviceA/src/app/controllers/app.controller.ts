import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getUsers(): Promise<any[]> {
    return this.appService.getActiveUsers();
  }
}
