import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post('signup')
  // @HttpCode(201)
  // @AllowAnonymous()
  // async signup(@Body() createUserDto: CreateUserDto): Promise<any> {
  //   const result = await this.userService.register(createUserDto);
  //   return { message: 'User registered successfully', data: result };
  // }
}
