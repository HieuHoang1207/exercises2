import { UserService } from '../services/user2.service';
import { UserDto } from '../dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(offset?: number, limit?: number): Promise<UserDto[]>;
}
