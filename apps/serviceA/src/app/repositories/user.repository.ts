import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity, User } from '@shared/core';

@Injectable()
export class UserRepository {
  private logger = new Logger(UserRepository.name);

  constructor(
    @InjectRepository(UserEntity)
    private readonly user: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.user.find();
  }

  async findOne(id: string): Promise<UserEntity> {
    return this.user.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.user.delete(id);
  }

  async create(user: User): Promise<UserEntity> {
    this.logger.debug(`[create]: ${JSON.stringify(user)}`);

    return this.user.save(user);
  }

  async update(user: User): Promise<UserEntity> {
    return this.user.save(user);
  }
}
