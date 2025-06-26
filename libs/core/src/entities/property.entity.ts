import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { Availability } from './availability.entity';
import { Booking } from './booking.entity';

@Entity({ name: 'property' })
export class Property extends BaseEntity {
  @Column({
    name: 'name',
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    name: 'description',
    type: 'text',
    nullable: false,
  })
  description: string;

  @Column({ name: 'address' })
  address: string;

  @Column({ name: 'country' })
  country: string;

  @Column({ name: 'amenities', type: 'jsonb', nullable: true })
  amenities: object;

  @Column({ name: 'to_know', type: 'jsonb', nullable: true })
  toKnow: object;

  @ManyToOne(() => User, (user) => user.properties)
  @JoinColumn({ name: 'user_id' })
  owner: User;

  @OneToMany(() => Availability, (availability) => availability.property)
  availabilities: Availability[];

  @OneToMany(() => Booking, (booking) => booking.property)
  bookings: Booking[];
}
