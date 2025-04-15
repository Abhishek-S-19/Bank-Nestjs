import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FundTransferController } from './fund-transfer.controller';
import { FundTransferService } from './fund-transfer.service';
import { Payee } from './entities/payee.entity';
import { Transaction } from './entities/transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payee, Transaction])],
  controllers: [FundTransferController],
  providers: [FundTransferService],
})
export class FundTransferModule {}