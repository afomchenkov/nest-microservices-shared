import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UserPropertyService } from '../services';
import { AllPropertiesDto, PropertyMapper, PropertyDto } from '@shared/core';

@Controller('user-property')
@ApiTags('User Property')
export class UserPropertyController {
  constructor(private readonly userPropertyService: UserPropertyService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary: 'Get properties',
    operationId: 'get-all-properties',
  })
  @ApiOkResponse({
    description: 'Successful get all properties response',
    type: AllPropertiesDto,
  })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async getUserProperty(): Promise<AllPropertiesDto> {
    const properties = await this.userPropertyService.getUserProperties();

    return {
      items: properties.map(PropertyMapper.toDto),
      items_count: properties.length,
    };
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({
    summary: 'Creates new property',
    operationId: 'create-new-property',
  })
  @ApiBody({
    type: PropertyDto,
    required: true,
    description: 'Payload to create new property',
  })
  @ApiCreatedResponse({ description: 'User property created', type: PropertyDto })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async createUser(@Body() payload: any) {
    return this.userPropertyService.createUser(payload);
  }
}
