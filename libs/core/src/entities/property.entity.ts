import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
import { AvailabilityEntity } from './availability.entity';
import { BookingEntity } from './booking.entity';

@Entity({ name: 'property' })
export class PropertyEntity extends BaseEntity {
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

  @ManyToOne(() => UserEntity, (user) => user.properties)
  @JoinColumn({ name: 'user_id' })
  owner: UserEntity;

  @OneToMany(() => AvailabilityEntity, (availability) => availability.property)
  availabilities: AvailabilityEntity[];

  @OneToMany(() => BookingEntity, (booking) => booking.property)
  bookings: BookingEntity[];
}
