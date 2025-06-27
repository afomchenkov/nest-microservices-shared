import { Controller, Get } from '@nestjs/common';
import { UserPropertyService } from '../services';
import { AllPropertiesDto, PropertyMapper } from '@shared/core';

@Controller('user-property')
export class UserPropertyController {
  constructor(private readonly userPropertyService: UserPropertyService) {}

  @Get()
  async getUserProperty(): Promise<AllPropertiesDto> {
    const properties = await this.userPropertyService.getUserProperties();

    return {
      items: properties.map(PropertyMapper.toDto),
      items_count: properties.length,
    };
  }
}
