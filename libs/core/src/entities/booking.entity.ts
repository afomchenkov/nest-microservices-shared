import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Property } from './property.entity';
import { User } from './user.entity';
import { Order } from './order.entity';

@Entity({ name: 'booking' })
export class Booking extends BaseEntity {
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

  @CreateDateColumn({
    name: 'date_from',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  dateFrom: string;

  @CreateDateColumn({
    name: 'date_to',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  dateTo: string;

  @Column({ default: true, name: 'is_active' })
  isActive: boolean;

  @ManyToOne(() => Property, (property) => property.bookings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'property_id' })
  property: Property;

  @ManyToOne(() => User, (user) => user.bookings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'tenant_id' })
  tenant: User;

  @OneToOne(() => Order, (order) => order.booking, { cascade: true })
  @JoinColumn({ name: 'order_id' })
  order: Order;
}
