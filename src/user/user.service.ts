import { Injectable } from '@nestjs/common';
import { AuthService } from '@thallesp/nestjs-better-auth';
import { CreateUserDto } from './dtos/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly authService: AuthService) {}

  register({ name, email, password }: CreateUserDto): unknown {
    const response = this.authService.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    return response;
  }
}
