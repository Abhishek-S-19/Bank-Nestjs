import { IsString, IsEmail, IsOptional, IsIn } from 'class-validator';

export class RegisterDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsIn(['admin', 'user']) 
  role?: 'admin' | 'user';
}