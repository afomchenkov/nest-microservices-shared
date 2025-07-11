import { Injectable } from '@nestjs/common';
import { UserEntity } from '@shared/core';

import { UserRepository } from '../repositories';

@Injectable()
export class AppService {
  constructor(private userRepository: UserRepository) {}

  async getActiveUsers(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }
}