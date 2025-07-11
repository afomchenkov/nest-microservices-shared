import type { PropertyEntity } from '../entities';
import type { Property } from '../domain';
import type { PropertyDto, CreatePropertyDto } from '../dtos';

export class PropertyMapper {
  static toDomain(entity: CreatePropertyDto): Partial<Property> {
    const {
      name,
      description,
      address,
      country,
      amenities,
      to_know,
      owner_id,
    } = entity;
    return {
      name,
      description,
      address,
      country,
      amenities,
      toKnow: to_know,
      owner: {
        id: owner_id,
      },
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
      to_know: toKnow,
      created_at: createdAt.toISOString(),
      updated_at: updatedAt.toISOString(),
    };
  }
}
