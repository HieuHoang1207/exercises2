import { User } from './user.entity';
export declare class Meeting {
    id: number;
    user: User;
    room_id: number;
    start_day: number;
    end_day: number;
    created_at: string;
}
