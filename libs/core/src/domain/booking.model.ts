import { Property } from './property.model';
import { User } from './user.model';
import { Order } from './order.model';
import { BaseModel } from './base.model';

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
