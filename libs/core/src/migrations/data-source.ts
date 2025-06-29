import { DataSource } from 'typeorm';

import {
  AvailabilityEntity,
  BookingEntity,
  OrderEntity,
  PropertyEntity,
  UserEntity,
} from '../entities';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env['DB_HOST'],
  port: parseInt(process.env['DB_PORT']),
  username: process.env['DB_USERNAME'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_DATABASE'],
  entities: [
    AvailabilityEntity,
    BookingEntity,
    OrderEntity,
    PropertyEntity,
    UserEntity,
  ],
  migrations: ['libs/core/src/migrations/generated/*.ts'],
  migrationsTableName: 'shared_db_migrations_table',
  synchronize: false,
});
