import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from '../services';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getUsers', () => {
    it('should return users', async () => {
      const appController = app.get<AppController>(AppController);
      const users = await appController.getUsers();
      expect(users.items_count).toBeGreaterThan(0);
    });
  });
});
