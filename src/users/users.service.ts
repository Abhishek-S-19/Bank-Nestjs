// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}

  async create(user: Partial<User>): Promise<User> {
    const newUser = this.userRepo.create({
      ...user,
      loginAttempts: 0,
      isLocked: false,
    });
    return this.userRepo.save(newUser);
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.userRepo.findOne({ where: { username } });
  }
  

  async update(user: User) {
    return this.userRepo.save(user);
  }
}
