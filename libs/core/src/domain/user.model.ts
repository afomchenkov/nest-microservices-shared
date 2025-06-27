import { BaseModel } from './base.model';

export interface User extends BaseModel {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}
