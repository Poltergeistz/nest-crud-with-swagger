import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';

@Injectable()
export class UserAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<any> {
    const request = context.switchToHttp().getRequest();
    return request.authenticate();
  }
}
