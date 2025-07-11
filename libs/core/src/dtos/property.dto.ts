import {
  IsString,
  IsDefined,
  IsOptional,
  IsArray,
  IsInt,
  IsUUID,
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
  to_know?: object;
}

export class CreatePropertyDto {
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
  to_know?: object;

  @ApiProperty({
    description: 'Owner unique identifier',
    nullable: false,
    required: true,
    example: '81142c6a-50b8-4cd4-8ed6-bfda614103dd',
  })
  @IsDefined()
  @IsUUID()
  owner_id: string;
}

export class UpdatePropertyDto extends CreatePropertyDto {
  @ApiProperty({
    nullable: false,
    required: true,
    description: 'Entity unique identifier',
    example: 'ce2c97af-17e4-4d85-8248-d7ba8b45527f',
    format: 'uuid',
  })
  @IsOptional()
  @IsUUID()
  readonly id?: string;
}

export class AllPropertiesDto {
  @ApiProperty({
    type: [PropertyDto],
    required: false,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PropertyDto)
  public items: PropertyDto[];

  @ApiProperty({
    description: 'Number of items',
    nullable: false,
    required: true,
    type: Number,
  })
  @IsDefined()
  @IsInt()
  public items_count: number;
}
