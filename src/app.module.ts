import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercises2Module } from './exercises2.module';

import { User } from './entities/user.entity';
import { Meeting } from './entities/meeting.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT as string, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Meeting], // Đảm bảo bạn đã khai báo entities User và Meeting ở đây
      synchronize: true, // Tự động tạo bảng nếu không có
    }),
    TypeOrmModule.forFeature([User, Meeting]),
    Exercises2Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
