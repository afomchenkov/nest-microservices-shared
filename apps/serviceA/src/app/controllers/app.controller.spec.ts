import { Test } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from '../services';
import { UserRepository } from '../repositories';
import { convertKeysToSnakeCase } from '@shared/core';

import type { TestingModule } from '@nestjs/testing';

const mockUsers = [
  {
    id: 1,
    username: 'john_doe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@test.com',
    properties: [],
    bookings: [],
    createdAt: new Date('2025-07-11T14:30:45.123Z'),
    updatedAt: new Date('2025-07-11T14:30:45.123Z'),
  },
];

describe('AppController', () => {
  let app: TestingModule;
  let appController: AppController;
  let appService: AppService;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: UserRepository,
          useValue: {
            findAll: jest.fn().mockResolvedValue(mockUsers),
          },
        },
      ],
    }).compile();

    appController = app.get(AppController);
    appService = app.get(AppService);
  });

  describe('getUsers', () => {
    it('should return users', async () => {
      const result = await appController.getUsers();
      expect(result.items).toEqual(mockUsers.map(convertKeysToSnakeCase));
    });
  });
});
