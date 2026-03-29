import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from '@nestjs/class-validator';

export class UpdateUserBodyDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsNumber()
  age: number;
}
