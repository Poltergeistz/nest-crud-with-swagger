import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const isPasswordMatching: boolean = await bcrypt.compare(
      user.password,
      password,
    );
    if (user && isPasswordMatching === true) {
      return user;
    }
    if (!isPasswordMatching) {
      throw new BadRequestException();
    }

    return null;
  }
}
