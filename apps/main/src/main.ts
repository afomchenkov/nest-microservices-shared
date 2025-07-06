import { hostname } from 'os';
import { promises as fs } from 'node:fs';
import { NestFactory } from '@nestjs/core';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { WinstonModule, utilities } from 'nest-winston';
import { format, transports } from 'winston';
import { dump } from 'js-yaml';
import { AppModule } from './app/app.module';

const ENV = process.env.NODE_ENV || 'development';

const setupSwagger = async (app: INestApplication): Promise<void> => {
  const documentBuilder = new DocumentBuilder()
    .setTitle('Service Main')
    .setDescription('Service Main API documentation')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder);

  SwaggerModule.setup('api/v1/docs', app, document, {
    customSiteTitle: 'Swagger documentation',
  });

  // generate new doc in dev mode
  if (ENV === 'development') {
    await fs.writeFile('swagger/main-service.swagger.yaml', dump(document));
  }
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    cors: true,
    logger: WinstonModule.createLogger({
      level: ['development'].includes(ENV) ? 'debug' : 'info',
      transports: [
        new transports.Console({
          format: ['development'].includes(ENV)
            ? format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
                format.ms(),
                utilities.format.nestLike('Service Main Dev', {
                  colors: true,
                  prettyPrint: true,
                }),
              )
            : format.printf((msg) => {
                const logFormat = {
                  hostname: hostname(),
                  app: process.env.APP_NAME || 'Main Service',
                  environment: ENV,
                  level: msg.level,
                  msg: msg.message,
                  product: 'Service Main',
                  time: new Date().toISOString(),
                };

                return JSON.stringify(logFormat);
              }),
        }),
      ],
    }),
  });
  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  const port = configService.get('PORT');

  // Set the global prefix for all routes
  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: false,
        exposeDefaultValues: true,
      },
    }),
  );

  await setupSwagger(app);

  await app.listen(port);
}
bootstrap();
