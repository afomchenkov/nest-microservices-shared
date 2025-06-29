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
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'mydb',
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
