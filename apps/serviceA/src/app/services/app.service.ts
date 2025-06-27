import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories';
import { UserEntity } from '@shared/core';

@Injectable()
export class AppService {
  constructor(private userRepository: UserRepository) {}

  async getActiveUsers(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }
}