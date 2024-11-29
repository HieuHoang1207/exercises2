import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Meeting } from './meeting.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  gender: string;

  @Column()
  ip_address: string;

  @Column()
  days: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: string;

  @OneToMany(() => Meeting, (meeting) => meeting.user)
  meetings: Meeting[];
}
