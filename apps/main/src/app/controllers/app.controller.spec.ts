import { Test } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService, HealthService } from '../services';

import type { TestingModule } from '@nestjs/testing';

describe('AppController', () => {
  let app: TestingModule;
  let appController: AppController;
  let healthService: HealthService;
  let appService: AppService;

  const appServiceMock = {
    getData: jest.fn().mockReturnValue({ message: 'Hello API' }),
  };

  const healthServiceMock = {
    checkTerminus: jest.fn().mockReturnValue({
      status: 'ok',
      details: { database: { status: 'up' } },
    }),
  };

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        { provide: AppService, useValue: appServiceMock },
        { provide: HealthService, useValue: healthServiceMock },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
    healthService = app.get<HealthService>(HealthService);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

  describe('getData', () => {
    it('should return data from AppService', () => {
      const result = appController.getData();
      expect(result).toEqual({ message: 'Hello API' });
      expect(appService.getData).toHaveBeenCalled();
    });
  });

  describe('healthcheck', () => {
    it('should return health status from HealthService', () => {
      const result = appController.healthcheck();
      expect(result).toEqual({
        status: 'ok',
        details: { database: { status: 'up' } },
      });
      expect(healthService.checkTerminus).toHaveBeenCalled();
    });
  });
});
