// src/accounts/accounts.controller.ts
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Post('open')
  openAccount(@Body() dto: CreateAccountDto) {
    return this.accountsService.createAccount(dto);
  }

  // Only admin can see pending accounts
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  @Get('pending')
  getPendingAccounts() {
    return this.accountsService.findAllPending();
  }

  // Only admin can approve accounts
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  @Patch('approve/:id')
  approve(@Param('id') id: string) {
    return this.accountsService.approveAccount(id);
  }
}
