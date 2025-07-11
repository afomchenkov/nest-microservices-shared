import type { Property } from './property.model';
import type { BaseModel } from './base.model';

export interface Availability extends BaseModel {
  date: string;
  property: Property;
}