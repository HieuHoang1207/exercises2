import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { Meeting } from '../entities/meeting.entity';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Meeting)
    private readonly meetingRepository: Repository<Meeting>,
  ) {}

  async getUsers(offset: number = 0, limit: number = 10): Promise<UserDto[]> {
    // Fetch users with pagination
    const users = await this.userRepository.find({
      take: limit,
      skip: offset,
      relations: ['meetings'], // Ensure meetings are loaded
    });

    // Await all promises returned by mapUserToDto to resolve
    return await Promise.all(users.map((user) => this.mapUserToDto(user)));
  }

  private async mapUserToDto(user: User): Promise<UserDto> {
    // Calculate meeting days
    const meetingDays = await this.getMeetingDays(user.id);
    // Calculate days without meetings
    const daysWithoutMeetings = user.days - meetingDays.length;

    return {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      gender: user.gender,
      days: user.days,
      meeting_days: meetingDays,
      days_without_meetings: daysWithoutMeetings,
    };
  }

  private async getMeetingDays(userId: number): Promise<string[]> {
    // Lấy danh sách cuộc họp của user theo userId
    const userMeetings = await this.meetingRepository.find({
      where: { user: { id: userId } },
    });

    const meetingDays: string[] = [];

    userMeetings.forEach((meeting) => {
      // Tạo chuỗi định dạng "start_day->end_day"
      meetingDays.push(`${meeting.start_day}->${meeting.end_day}`);
    });

    return meetingDays;
  }
}
