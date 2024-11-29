import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercises2Module } from './exercises2.module';

import { User } from './entities/user.entity';
import { Meeting } from './entities/meeting.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'user_meetings',
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
