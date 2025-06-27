import { Property } from './property.model';
import { BaseModel } from './base.model';

export interface Availability extends BaseModel {
  date: string;
  property: Property;
}