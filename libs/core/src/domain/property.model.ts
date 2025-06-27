import { User } from './user.model';
import { Availability } from './availability.model';
import { Booking } from './booking.model';
import { BaseModel } from './base.model';

export interface Property extends BaseModel {
  name: string;
  description: string;
  address: string;
  country: string;
  amenities?: object;
  toKnow?: object;
  owner: User;
  availabilities: Availability[];
  bookings: Booking[];
}