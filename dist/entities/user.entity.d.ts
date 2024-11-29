import { Meeting } from './meeting.entity';
export declare class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
    days: number;
    created_at: string;
    meetings: Meeting[];
}
