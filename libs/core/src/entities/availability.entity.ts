import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { BaseEntity } from './base.entity';
import { PropertyEntity } from './property.entity';

@Entity({ name: 'availability' })
export class AvailabilityEntity extends BaseEntity {
  @Column({
    name: 'date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  date: string;

  @Column({ default: true, name: 'is_available' })
  isAvailable: boolean;

  @ManyToOne(() => PropertyEntity, (property) => property.availabilities, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'property_id' })
  property: PropertyEntity;
}
