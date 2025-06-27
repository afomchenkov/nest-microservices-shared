import {
  IsString,
  IsDefined,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from './base.dto';

export class PropertyDto extends BaseDto {
  @ApiProperty({
    description: 'Property name',
    nullable: false,
    required: true,
    type: String,
    example: 'Beautiful Beach House',
  })
  @IsDefined()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Property description',
    nullable: false,
    required: true,
    type: String,
    example: 'A lovely beach house with stunning ocean views.',
  })
  @IsDefined()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Property address',
    nullable: false,
    required: true,
    type: String,
    example: '123 Ocean Drive, Beach City, CA',
  })
  @IsDefined()
  @IsString()
  address: string;

  @ApiProperty({
    description: 'Property country',
    nullable: false,
    required: true,
    type: String,
    example: 'USA',
  })
  @IsDefined()
  @IsString()
  country: string;

  @ApiProperty({
    description: 'Property amenities',
    nullable: true,
    required: false,
    type: Object,
    example: {
      wifi: true,
      pool: true,
      parking: false,
    },
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => Object)
  amenities?: object;

  @ApiProperty({
    description: 'Property to know information',
    nullable: true,
    required: false,
    type: Object,
    example: {
      checkInTime: '3 PM',
      checkOutTime: '11 AM',
      petPolicy: 'No pets allowed',
    },
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => Object)
  toKnow?: object;
}
