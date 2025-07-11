import { Test } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from '../services';

import type { TestingModule } from '@nestjs/testing';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getBookings', () => {
    it('should return bookings', async () => {
      const appController = app.get<AppController>(AppController);
      const bookings = await appController.getBookings();
      expect(bookings.items_count).toBeGreaterThan(0);
    });
  });
});
