// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (!user || user.isLocked) return null;  

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      user.loginAttempts = 0;
      await this.usersService.update(user);
      const { password, ...result } = user;
      return result;
    } else {
      user.loginAttempts++;
      if (user.loginAttempts >= 3) user.isLocked = true;
      await this.usersService.update(user);
      return null;
    }
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.id,
      role: user.role, // ✅ Include the role in the token
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userDto: any) {
    const hashedPassword = await bcrypt.hash(userDto.password, 10);

    // Default to 'user' role if not provided
    const role = userDto.role ?? 'user';

    return this.usersService.create({
      ...userDto,
      password: hashedPassword,
      role,
      isLocked: false,
      loginAttempts: 0,
    });
  }
}
