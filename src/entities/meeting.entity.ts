import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.meetings)
  @JoinColumn({ name: 'user_id' }) // Chỉ định tên cột khóa ngoại là user_id
  user: User;

  @Column()
  room_id: number;

  @Column()
  start_day: number;

  @Column()
  end_day: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: string;
}
