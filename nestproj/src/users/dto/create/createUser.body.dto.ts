import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from '@nestjs/class-validator';

export class CreateUserBodyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsNumber()
  age: number;
}
