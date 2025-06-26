import { Property } from './property.model';
import { Booking } from './booking.model';
import { BaseModel } from './base.model';

export interface User extends BaseModel{
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  properties: Property[];
  bookings: Booking[];
}
