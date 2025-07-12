import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        const req = context.switchToHttp().getRequest();
        console.log(
          `[${req.method}] ${req.url} took ${Date.now() - now}ms`
        );
      }),
    );
  }
}
