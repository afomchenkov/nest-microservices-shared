import {
  IsString,
  IsDefined,
  ValidateNested,
  IsArray,
  IsInt,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from './base.dto';
import { PropertyDto } from './property.dto';
import { UserDto } from './user.dto';

export class BookingDto extends BaseDto {
  @ApiProperty({
    description: 'Booking title',
    nullable: false,
    required: true,
    type: String,
    example: 'Beach House Booking',
  })
  @IsDefined()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Booking description',
    nullable: false,
    required: true,
    type: String,
    example: 'Booking for a lovely beach house.',
  })
  @IsDefined()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Booking start date',
    nullable: false,
    required: true,
    type: String,
    example: '2023-10-01T12:00:00Z',
  })
  @IsDefined()
  @IsString()
  date_from: string;

  @ApiProperty({
    description: 'Booking end date',
    nullable: false,
    required: true,
    type: String,
    example: '2023-10-07T12:00:00Z',
  })
  @IsDefined()
  @IsString()
  date_to: string;

  @ApiProperty({
    description: 'Is booking active',
    nullable: false,
    required: true,
    type: Boolean,
    example: true,
  })
  @IsDefined()
  is_active: boolean;

  @ApiProperty({
    description: 'Property associated with the booking',
    nullable: false,
    required: true,
    type: () => PropertyDto,
  })
  @IsDefined()
  @ValidateNested()
  @Type(() => PropertyDto)
  property: PropertyDto;

  @ApiProperty({
    description: 'Tenant associated with the booking',
    nullable: false,
    required: true,
    type: () => UserDto,
  })
  @IsDefined()
  @ValidateNested()
  @Type(() => UserDto)
  tenant: UserDto;
}

export class AllBookingsDto {
  @ApiProperty({
    type: [BookingDto],
    required: false,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BookingDto)
  public items: BookingDto[];

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
