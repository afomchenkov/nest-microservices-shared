import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories';

@Injectable()
export class AppService {
  constructor(private userRepository: UserRepository) {}

  async getActiveUsers() {
    return this.userRepository.findAll();
  }
}