import * as path from 'path';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import {
  configValidationSchema,
  UserEntity,
  PropertyEntity,
  OrderEntity,
  BookingEntity,
  AvailabilityEntity,
} from '@shared/core';

import { AppController } from './controllers';
import { AppService } from './services';
import { BookingRepository } from './infrastructure/repositories';
import { LoggerMiddleware } from './middlewares';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AvailabilityEntity,
      UserEntity,
      PropertyEntity,
      OrderEntity,
      BookingEntity,
    ]),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: path.resolve(__dirname, `stage.${ENV}.env`),
      isGlobal: true,
      validationSchema: configValidationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          autoLoadEntities: true,
          synchronize: false,
        };
      },
      // dataSource receives the configured DataSourceOptions and returns a Promise<DataSource>.
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, BookingRepository],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*'); // { path: 'users', method: RequestMethod.GET }
  }
}
