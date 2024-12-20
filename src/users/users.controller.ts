import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('signup')
  async signup(@Body() data: any) {
    return this.usersService.signup(data);
  }

  @Post('login')
  async login(@Body() data: any) {
    return this.usersService.login(data);
  }

  @Post('loginwithtoken')
  async loginwithtoken(@Body() data: any) {
    return this.usersService.loginwithtoken(data);
  }
}