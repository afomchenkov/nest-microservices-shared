import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { BaseEntity } from './base.entity';
import { PropertyEntity } from './property.entity';
import { UserEntity } from './user.entity';
import { OrderEntity } from './order.entity';

@Entity({ name: 'booking' })
export class BookingEntity extends BaseEntity {
  @Column({
    name: 'title',
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  title: string;

  @Column({
    name: 'description',
    type: 'text',
    nullable: false,
  })
  description: string;

  @Column({
    name: 'date_from',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  dateFrom: string;

  @Column({
    name: 'date_to',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  dateTo: string;

  @Column({ default: true, name: 'is_active' })
  isActive: boolean;

  @ManyToOne(() => PropertyEntity, (property) => property.bookings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'property_id' })
  property: PropertyEntity;

  @ManyToOne(() => UserEntity, (user) => user.bookings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'tenant_id' })
  tenant: UserEntity;

  @OneToOne(() => OrderEntity, (order) => order.booking, { cascade: true })
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;
}
