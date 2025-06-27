import { Entity, Column, ManyToOne } from 'typeorm';

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

  @ManyToOne(() => PropertyEntity, (property) => property.availabilities, {
    onDelete: 'CASCADE',
  })
  property: PropertyEntity;
}
