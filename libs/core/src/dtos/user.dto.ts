import {
  IsArray,
  IsString,
  IsInt,
  IsDefined,
  IsOptional,
  IsEmail,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

import { BaseDto } from './base.dto';
import { PropertyDto } from './property.dto';
import { BookingDto } from './booking.dto';

export class CreateUserDto {
  @ApiProperty({
    description: 'Username',
    nullable: false,
    required: true,
    type: String,
    example: 'MaxMustermann',
  })
  @IsDefined()
  @IsString()
  username: string;

  @ApiProperty({
    description: 'User first name',
    nullable: false,
    required: true,
    type: String,
    example: 'Max',
  })
  @IsDefined()
  @IsString()
  first_name: string;

  @ApiProperty({
    description: 'User last name',
    nullable: false,
    required: true,
    type: String,
    example: 'Mustermann',
  })
  @IsDefined()
  @IsString()
  last_name: string;

  @ApiProperty({
    description: 'User email address',
    nullable: false,
    required: true,
    type: String,
    example: 'max.mustermann@email.com',
  })
  @IsDefined()
  @IsEmail()
  email: string;
}

export class UpdateUserDto {
  @ApiProperty({
    description: 'Username',
    nullable: false,
    required: true,
    type: String,
    example: 'MaxMustermann',
  })
  @IsOptional()
  @IsString()
  username: string;

  @ApiProperty({
    description: 'User first name',
    nullable: false,
    required: true,
    type: String,
    example: 'Max',
  })
  @IsOptional()
  @IsString()
  first_name: string;

  @ApiProperty({
    description: 'User last name',
    nullable: false,
    required: true,
    type: String,
    example: 'Mustermann',
  })
  @IsOptional()
  @IsString()
  last_name: string;

  @ApiProperty({
    description: 'User email address',
    nullable: false,
    required: true,
    type: String,
    example: 'max.mustermann@email.com',
  })
  @IsOptional()
  @IsEmail()
  email: string;
}

export class UserDto extends BaseDto {
  @ApiProperty({
    description: 'Username',
    nullable: false,
    required: true,
    type: String,
    example: 'MaxMustermann',
  })
  @IsDefined()
  @IsString()
  username: string;

  @ApiProperty({
    description: 'User first name',
    nullable: false,
    required: true,
    type: String,
    example: 'Max',
  })
  @IsDefined()
  @IsString()
  first_name: string;

  @ApiProperty({
    description: 'User last name',
    nullable: false,
    required: true,
    type: String,
    example: 'Mustermann',
  })
  @IsDefined()
  @IsString()
  last_name: string;

  @ApiProperty({
    description: 'User email address',
    nullable: false,
    required: true,
    type: String,
    example: 'max.mustermann@email.com',
  })
  @IsDefined()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: [PropertyDto],
    required: false,
    default: [],
    description: 'User owned properties',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PropertyDto)
  public properties: PropertyDto[] = [];

  @ApiProperty({
    type: [BookingDto],
    required: false,
    default: [],
    description: 'User bookings',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BookingDto)
  bookings: BookingDto[] = [];
}

export class AllUsersDto {
  @ApiProperty({
    type: [UserDto],
    required: false,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UserDto)
  public items: UserDto[];

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
