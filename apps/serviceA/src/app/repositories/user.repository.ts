import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity, User } from '@shared/core';

@Injectable()
export class UserRepository {
  constructor(
    private readonly user: Repository<UserEntity>,
  ) {}
  
  async findAll(): Promise<UserEntity[]> {
    return this.user.find();
  }

  async findOne(id: string): Promise<UserEntity> {
    return this.user.findOne({ where: { id }});
  }

  async remove(id: number): Promise<void> {
    await this.user.delete(id);
  }

  async create(user: User): Promise<UserEntity> {
    return this.user.save(user);
  }

  async update(user: User): Promise<UserEntity> {
    return this.user.save(user);
  }
}