import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { UserAuthGuard } from './auth/guards/user-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Get('login')
  login(@Request() req): any {
    return req.user;
  }

  @UseGuards(UserAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return this.appService.getHello();
  }
}
