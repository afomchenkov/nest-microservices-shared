export interface BaseModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  metadata?: object;
}
