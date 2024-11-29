import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user2.service';
import { User } from './entities/user.entity';
import { Meeting } from './entities/meeting.entity';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Meeting]), // Include User and Meeting repositories here
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class Exercises2Module {}
