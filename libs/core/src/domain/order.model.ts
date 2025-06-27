import { Booking } from './booking.model';
import { BaseModel } from './base.model';

export interface Order extends BaseModel {
  price: string;
  billingAddress: string;
  bankAccount: string;
  effectiveDate: Date;
  booking: Booking;
}