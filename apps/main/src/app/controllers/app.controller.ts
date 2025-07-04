import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiServiceUnavailableResponse, ApiTags } from '@nestjs/swagger';
import { HealthCheck } from '@nestjs/terminus';
import { AppService, HealthService } from '../services';

@Controller()
@ApiTags('main')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly healthService: HealthService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/healthcheck')
  @HealthCheck()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get microservice liveness', operationId: 'health-liveness' })
  @ApiResponse({ status: 200, type: Object, description: 'The Health Check is successful' })
  @ApiServiceUnavailableResponse({ description: 'The Health Check is not successful' })
  healthcheck() {
    return this.healthService.checkTerminus();
  }
}
