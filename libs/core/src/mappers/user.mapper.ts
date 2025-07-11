import { PropertyMapper } from './property.mapper';
import { BookingMapper } from './booking.mapper';

import type { UserEntity } from '../entities';
import type { User } from '../domain';
import type { UserDto } from '../dtos';

export class UserMapper {
  static toDomain(entity: UserEntity): User {
    const { id, username, firstName, lastName, email, createdAt, updatedAt } =
      entity;
    return {
      id,
      username,
      firstName,
      lastName,
      email,
      createdAt,
      updatedAt,
    };
  }

  static toDto(entity: UserEntity): UserDto {
    const {
      id,
      username,
      firstName,
      lastName,
      email,
      properties,
      bookings,
      createdAt,
      updatedAt,
    } = entity;
    return {
      id,
      username,
      first_name: firstName,
      last_name: lastName,
      email,
      properties: properties.map(PropertyMapper.toDto),
      bookings: bookings.map(BookingMapper.toDto),
      created_at: createdAt.toISOString(),
      updated_at: updatedAt.toISOString(),
    };
  }
}
