import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercises2Module } from './exercises2.module';

import { User } from './entities/user.entity';
import { Meeting } from './entities/meeting.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as mysql from 'mysql2/promise';

@Module({
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'mysql',
  //     host: 'localhost',
  //     port: 3306,
  //     username: 'root',
  //     password: '123456',
  //     database: 'user_meetings',
  //     entities: [User, Meeting], // Đảm bảo bạn đã khai báo entities User và Meeting ở đây
  //     synchronize: true, // Tự động tạo bảng nếu không có
  //   }),
  //   TypeOrmModule.forFeature([User, Meeting]),
  //   Exercises2Module,
  // ],
  // controllers: [AppController],
  providers: [
    // AppService,
    {
      provide: 'DATABASE_POOL',
      useFactory: async () => {
        const pool = mysql.createPool({
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT as string, 10),
          user: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
          waitForConnections: true,
          connectionLimit: 5, // Tối đa 10 kết nối đồng thời
          queueLimit: 0, // Không giới hạn hàng đợi
        });
        return pool;
      },
    },
  ],
})
export class AppModule {}
