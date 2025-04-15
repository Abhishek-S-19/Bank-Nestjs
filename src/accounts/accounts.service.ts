// src/accounts/accounts.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './accounts.entity';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class AccountsService {
  constructor(@InjectRepository(Account) private repo: Repository<Account>) {}

  async createAccount(dto: CreateAccountDto): Promise<Account> {
    const account = this.repo.create({
      ...dto,
      status: 'PENDING',
      accountNumber: this.generateAccountNumber(),
      createdAt: new Date(),
    });
    return this.repo.save(account);
  }

  async findAllPending(): Promise<Account[]> {
    return this.repo.find({ where: { status: 'PENDING' } });
  }



async approveAccount(id: string): Promise<Account> {
  const account = await this.repo.findOne({
    where: { _id: new ObjectId(id) },
  });

  if (!account) {
    throw new Error(`Account with id ${id} not found`);
  }

  account.status = 'APPROVED';
  return this.repo.save(account);
}


  private generateAccountNumber(): string {
    return 'AC' + Math.floor(Math.random() * 1000000000);
  }
}
