import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { Meeting } from '../entities/meeting.entity';
import { UserDto } from '../dto/user.dto';
export declare class UserService {
    private readonly userRepository;
    private readonly meetingRepository;
    constructor(userRepository: Repository<User>, meetingRepository: Repository<Meeting>);
    getUsers(offset?: number, limit?: number): Promise<UserDto[]>;
    private mapUserToDto;
    private getMeetingDays;
}
