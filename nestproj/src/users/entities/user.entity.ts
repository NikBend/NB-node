import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsOptional } from "@nestjs/class-validator";

@Entity() // Create table name's user_entity
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @IsOptional()
  age: number;

  @Column()
  createdAt: Date;
}
