import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserBodyDto } from '../dto/create/createUser.body.dto';
import {UpdateUserBodyDto} from "../dto/update/updateUser.body.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(body: CreateUserBodyDto) {
    const user = this.userRepository.create({
      name: body.name,
      email: body.email,
      age: body.age !== undefined ? body.age : 0,
      createdAt: new Date(),
    });
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async getId(id: number) {
    const entities = await this.findAll();
    const result = entities.find((user) => user.id == id);
    return result !== undefined ? result : '404 Not Found';
  }

  async updateUser(id: number, body: UpdateUserBodyDto) {
    const entities = await this.findAll();
    const entity = entities.find((user) => user.id == id);
    if (entity) {
      entity.name = body.name !== undefined ? body.name : entity.name;
      entity.email = body.email !== undefined ? body.email : entity.email;
      entity.age = body.age !== undefined ? body.age : entity.age;
      return await this.userRepository.save(entity);
    }
    return '404 Not Found';
  }

  async deleteUser(id: number) {
    const entities = await this.findAll();
    const entity = entities.find((user) => user.id == id);
    if (entity) {
      await this.userRepository.delete(entity);
      return 'Entity successfully deleted';
    }
    return '404 Not Found';
  }
}
