import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from './base.entity';
import { PropertyEntity } from './property.entity';
import { BookingEntity } from './booking.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
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

  @OneToMany(() => PropertyEntity, (property) => property.owner)
  properties: PropertyEntity[];

  @OneToMany(() => BookingEntity, (booking) => booking.property)
  bookings: BookingEntity[];
}
