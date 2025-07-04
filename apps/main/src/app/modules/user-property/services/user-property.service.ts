import { Injectable } from '@nestjs/common';
import { UserPropertyRepository } from '../repositories';
import { PropertyEntity } from '@shared/core';

@Injectable()
export class UserPropertyService {
  constructor(private userPropertyRepository: UserPropertyRepository) {}

  async getUserProperties(): Promise<PropertyEntity[]> {
    return this.userPropertyRepository.findAll();
  }

  async createUser(payload: any) {
    return this.userPropertyRepository.create(payload);
  }
}
