import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 2255,
      username: 'postgres',
      password: 'root',
      autoLoadEntities: true,
      database: 'postgres',
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
