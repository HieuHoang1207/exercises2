import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from '../services/user2.service';
import { UserDto } from '../dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = 10,
  ): Promise<UserDto[]> {
    return await this.userService.getUsers(offset, limit);
  }
}
