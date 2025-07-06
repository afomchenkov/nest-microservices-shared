import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  PropertyEntity,
  PropertyMapper,
  CreatePropertyDto,
  UpdatePropertyDto,
} from '@shared/core';

@Injectable()
export class UserPropertyRepository {
  private logger = new Logger(UserPropertyRepository.name);

  constructor(
    @InjectRepository(PropertyEntity)
    private readonly property: Repository<PropertyEntity>,
  ) {}

  async findAll(): Promise<PropertyEntity[]> {
    return this.property.find();
  }

  async findOne(id: string): Promise<PropertyEntity> {
    return this.property.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.property.delete(id);
  }

  async create(property: CreatePropertyDto): Promise<PropertyEntity> {
    const createdProperty = await this.property.save(
      PropertyMapper.toDomain(property),
    );

    this.logger.debug(`[create]: ${JSON.stringify(createdProperty)}`);

    return createdProperty;
  }

  async update(property: UpdatePropertyDto): Promise<PropertyEntity> {
    return this.property.save(property);
  }
}
