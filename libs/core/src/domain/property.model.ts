import type { User } from './user.model';
import type { Availability } from './availability.model';
import type { Booking } from './booking.model';
import type { BaseModel } from './base.model';

export interface Property extends BaseModel {
  name: string;
  description: string;
  address: string;
  country: string;
  amenities?: object;
  toKnow?: object;
  owner?: Partial<User>;
  availabilities?: Availability[];
  bookings?: Booking[];
}