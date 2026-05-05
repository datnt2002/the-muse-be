import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signUp(email: string, password: string) {
    // const user = await this.userService.findByEmail(email);
  }
}
