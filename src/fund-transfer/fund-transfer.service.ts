import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payee } from './entities/payee.entity';
import { Transaction } from './entities/transaction.entity';
import { AddPayeeDto } from './dto/add-payee';
import { TransferDto } from './dto/transfer';

@Injectable()
export class FundTransferService {
  constructor(
    @InjectRepository(Payee)
    private readonly payeeRepo: Repository<Payee>,
    @InjectRepository(Transaction)
    private readonly transactionRepo: Repository<Transaction>,
  ) {}

  async addPayee(userId: string, dto: AddPayeeDto) {
    const payee = this.payeeRepo.create({ userId, ...dto });
    return this.payeeRepo.save(payee);
  }

  async getPayees(userId: string) {
    return this.payeeRepo.find({ where: { userId } });
  }

  async transferFunds(dto: TransferDto) {
    const tx = this.transactionRepo.create(dto);
    return this.transactionRepo.save(tx);
  }
}
