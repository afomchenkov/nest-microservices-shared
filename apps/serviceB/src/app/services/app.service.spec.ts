import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getActiveBookings', () => {
    it('should have defined method', () => {
      expect(service.getActiveBookings).toBeDefined();
    });
  });
});
