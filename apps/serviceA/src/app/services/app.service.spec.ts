import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import { UserRepository } from '../repositories';

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

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
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

    service = app.get<AppService>(AppService);
  });

  describe('getActiveUsers', () => {
    it('should check api function', () => {
      expect(service.getActiveUsers).toBeDefined();
    });
  });
});
