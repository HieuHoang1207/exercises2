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
      host: 'bqhb6eeylfrj0sodfql0-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'uikodafracmdjk0s',
      password: 'VOclsCP2fPSK0ORi5TTL',
      database: 'bqhb6eeylfrj0sodfql0',
      entities: [User, Meeting], // Khai báo entities
      synchronize: true, // Tự động tạo bảng nếu không có
      extra: {
        connectionLimit: 5, // Giới hạn số lượng kết nối đồng thời
      },
    }),
    TypeOrmModule.forFeature([User, Meeting]),
    Exercises2Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
