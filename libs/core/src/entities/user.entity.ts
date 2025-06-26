import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from './base.entity';
import { Property } from './property.entity';
import { Booking } from './booking.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({
    name: 'username',
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({
    name: 'email',
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({ default: true, name: 'is_active' })
  isActive: boolean;

  @OneToMany(() => Property, (property) => property.owner)
  properties: Property[];

  @OneToMany(() => Booking, (booking) => booking.property)
  bookings: Booking[];
}
