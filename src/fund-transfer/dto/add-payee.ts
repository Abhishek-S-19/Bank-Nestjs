import { IsString } from 'class-validator';

export class AddPayeeDto {
  @IsString()
  beneficiaryName: string;

  @IsString()
  beneficiaryAccountNumber: string;

  @IsString()
  nickname?: string;
}
