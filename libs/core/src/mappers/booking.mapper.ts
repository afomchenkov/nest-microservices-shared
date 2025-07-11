import { PropertyMapper } from './property.mapper';
import { UserMapper } from './user.mapper';

import type { BookingEntity } from '../entities';
import type { Booking } from '../domain';
import type { BookingDto } from '../dtos';

export class BookingMapper {
  static toDomain(entity: BookingEntity): Booking {
    const {
      id,
      title,
      description,
      dateFrom,
      dateTo,
      isActive,
      createdAt,
      updatedAt,
    } = entity;
    return {
      id,
      title,
      description,
      dateFrom,
      dateTo,
      isActive,
      createdAt,
      updatedAt,
    };
  }

  static toDto(entity: BookingEntity): BookingDto {
    const {
      id,
      title,
      description,
      dateFrom,
      dateTo,
      isActive,
      createdAt,
      updatedAt,
      property,
      tenant,
    } = entity;
    return {
      id,
      title,
      description,
      date_from: dateFrom,
      date_to: dateTo,
      is_active: isActive,
      created_at: createdAt.toISOString(),
      updated_at: updatedAt.toISOString(),
      property: PropertyMapper.toDto(property),
      tenant: UserMapper.toDto(tenant),
    };
  }
}
