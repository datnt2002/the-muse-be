import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  password: string;

  @Column()
  accessToken: string;

  @Column()
  refreshToken: string;

  @Column()
  accessTokenExpiresAt: string;

  @Column()
  refreshTokenExpiresAt: string;

  @OneToOne(() => User, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'userId' })
  user: User;
}
