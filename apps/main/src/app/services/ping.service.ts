import { Injectable } from '@nestjs/common';
import {
  HealthCheckError,
  HealthIndicator,
  HealthIndicatorResult,
  HttpHealthIndicator,
} from '@nestjs/terminus';

@Injectable()
export class PingIndicatorService extends HealthIndicator {
  constructor(private http: HttpHealthIndicator) {
    super();
  }

  async isHealthy(key: string, url: string): Promise<HealthIndicatorResult> {
    try {
      await this.http.pingCheck(key, url);
      return this.getStatus(key, true);
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      throw new HealthCheckError('failed', (error as any).causes);
    }
  }
}