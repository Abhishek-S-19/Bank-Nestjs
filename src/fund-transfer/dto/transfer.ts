import { IsString, IsNumber, IsIn } from 'class-validator';

export class TransferDto {
  @IsString()
  senderAccount: string;

  @IsString()
  receiverAccount: string;

  @IsNumber()
  amount: number;

  @IsIn(['NEFT', 'RTGS', 'IMPS'])
  type: 'NEFT' | 'RTGS' | 'IMPS';
}
