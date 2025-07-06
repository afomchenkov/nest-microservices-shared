import { Body, Controller, Get, Post, HttpCode, Logger } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiConflictResponse,
} from '@nestjs/swagger';
import { UserPropertyService } from '../services';
import {
  AllPropertiesDto,
  PropertyMapper,
  PropertyDto,
  CreatePropertyDto,
} from '@shared/core';

@Controller('user-property')
@ApiTags('User Property')
export class UserPropertyController {
  private logger = new Logger(UserPropertyController.name);

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

    this.logger.debug(`[getUserProperty]: ${JSON.stringify(properties)}`);

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
    type: CreatePropertyDto,
    required: true,
    description: 'Payload to create new property',
  })
  @ApiCreatedResponse({
    description: 'User property created',
    type: PropertyDto,
  })
  @ApiConflictResponse({
    description: 'Property with this name already exists',
  })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async createUserProperty(@Body() payload: CreatePropertyDto) {
    this.logger.debug(
      `[createUserProperty]: ${JSON.stringify(payload)}`,
    );

    const createdProperty = await this.userPropertyService.createUser(payload);

    return PropertyMapper.toDto(createdProperty);
  }
}
