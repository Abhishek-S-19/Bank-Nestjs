// src/accounts/dto/create-account.dto.ts
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty() fullName: string;
  @IsEmail() email: string;
  @IsNotEmpty() phone: string;
  @IsNotEmpty() address: string;
  @IsNotEmpty() dateOfBirth: string;
}
