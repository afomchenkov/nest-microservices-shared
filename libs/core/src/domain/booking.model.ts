import type { Property } from './property.model';
import type { User } from './user.model';
import type { Order } from './order.model';
import type { BaseModel } from './base.model';

export interface Booking extends BaseModel {
  title: string;
  description: string;
  dateFrom: string;
  dateTo: string;
  isActive: boolean;
  property?: Property;
  tenant?: User;
  order?: Order;
}
