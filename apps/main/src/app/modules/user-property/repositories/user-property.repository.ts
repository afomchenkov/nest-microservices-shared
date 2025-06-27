import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PropertyEntity, Property } from '@shared/core';

@Injectable()
export class UserPropertyRepository {
  constructor(
    private readonly property: Repository<PropertyEntity>,
  ) {}
  
  async findAll(): Promise<PropertyEntity[]> {
    return this.property.find();
  }

  async findOne(id: string): Promise<PropertyEntity> {
    return this.property.findOne({ where: { id }});
  }

  async remove(id: number): Promise<void> {
    await this.property.delete(id);
  }

  async create(user: Property): Promise<PropertyEntity> {
    return this.property.save(user);
  }

  async update(user: Property): Promise<PropertyEntity> {
    return this.property.save(user);
  }
}