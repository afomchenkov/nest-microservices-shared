import { Entity, CreateDateColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from './base.entity';
import { Property } from './property.entity';

@Entity({ name: 'availability' })
export class Availability extends BaseEntity {
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  date: string;

  @ManyToOne(() => Property, (property) => property.availabilities, {
    onDelete: 'CASCADE',
  })
  property: Property;
}
