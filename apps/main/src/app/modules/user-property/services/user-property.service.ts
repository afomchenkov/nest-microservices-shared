import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { UserPropertyRepository } from '../repositories';
import { PropertyEntity, CreatePropertyDto } from '@shared/core';

@Injectable()
export class UserPropertyService {
  private logger = new Logger(UserPropertyService.name);

  constructor(private userPropertyRepository: UserPropertyRepository) {}

  async getUserProperties(): Promise<PropertyEntity[]> {
    return this.userPropertyRepository.findAll();
  }

  async createUser(payload: CreatePropertyDto): Promise<PropertyEntity> {
    try {
      return this.userPropertyRepository.create(payload);
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        error.driverError?.code === 'ER_DUP_ENTRY'
      ) {
        throw new ConflictException('Property with this name already exists.');
      }

      this.logger.error(`[createUser] error: ${JSON.stringify(error)}`);

      throw new InternalServerErrorException('Failed to create property');
    }
  }
}
