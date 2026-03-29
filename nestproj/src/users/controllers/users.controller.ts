import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserBodyDto } from '../dto/create/createUser.body.dto';
import { UserEntity } from '../entities/user.entity';
import { UpdateUserBodyDto } from "../dto/update/updateUser.body.dto";

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post() // create user
  async createUser(@Body() body: CreateUserBodyDto): Promise<UserEntity> {
    return await this.userService.createUser(body);
  }

  @Get() // get all registered users
  async findAll(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }

  @Get(':id') // get user by his id
  async getId(@Param('id') id: number) {
    return await this.userService.getId(id);
  }

  @Patch(':id') // get user by his id
  async updateUser(@Param('id') id: number, @Body() body: UpdateUserBodyDto) {
    return await this.userService.updateUser(id, body);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return await this.userService.deleteUser(id);
  }
}
