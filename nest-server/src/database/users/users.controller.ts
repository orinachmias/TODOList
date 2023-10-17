
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './users.model';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('add')
  async create(@Body() userData: User): Promise<User> {
    console.log(userData)
    return this.userService.create(userData);
  }

  @Get('all')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
