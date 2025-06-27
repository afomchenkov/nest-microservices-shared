import { PropertyEntity } from '../entities';
import { Property } from '../domain';
import { PropertyDto } from '../dtos';

export class PropertyMapper {
  static toDomain(entity: PropertyEntity): Property {
    const {
      id,
      name,
      description,
      address,
      country,
      amenities,
      toKnow,
      createdAt,
      updatedAt,
    } = entity;
    return {
      id,
      name,
      description,
      address,
      country,
      amenities,
      toKnow,
      createdAt,
      updatedAt,
    };
  }

  static toDto(entity: PropertyEntity): PropertyDto {
    const {
      id,
      name,
      description,
      address,
      country,
      amenities,
      toKnow,
      createdAt,
      updatedAt,
    } = entity;
    return {
      id,
      name,
      description,
      address,
      country,
      amenities,
      toKnow,
      created_at: createdAt.toISOString(),
      updated_at: updatedAt.toISOString(),
    };
  }
}
