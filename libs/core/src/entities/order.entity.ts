import { Column, Entity, OneToOne } from 'typeorm';

import { BaseEntity } from './base.entity';
import { BookingEntity } from './booking.entity';

@Entity({ name: 'order' })
export class OrderEntity extends BaseEntity {
  @Column({
    name: 'price',
    nullable: false,
  })
  price: string;

  @Column({
    name: 'billing_address',
    nullable: false,
  })
  billingAddress: string;

  @Column({
    name: 'bank_account',
  })
  bankAccount: string;

  @Column({
    name: 'effective_date',
    type: 'timestamptz',
    nullable: false,
  })
  effectiveDate: Date;

  @OneToOne(() => BookingEntity, (booking) => booking.order)
  booking: BookingEntity;
}
