// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';
import { Account } from './accounts/accounts.entity';
import { AccountsModule } from './accounts/accounts.module';
import { FundTransferModule } from './fund-transfer/fund-transfer.module';
import { Payee } from './fund-transfer/entities/payee.entity';
import { Transaction } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Account]),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      database: 'online_banking',
      entities: [User, Account,Payee,Transaction],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    AccountsModule,
    FundTransferModule,
  ],
})
export class AppModule { }
