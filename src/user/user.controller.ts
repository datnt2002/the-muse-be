import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';
import { CreateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  @HttpCode(201)
  @AllowAnonymous()
  async signup(@Body() createUserDto: CreateUserDto): Promise<any> {
    const result = await this.userService.register(createUserDto);
    return { message: 'User registered successfully', data: result };
  }
}
