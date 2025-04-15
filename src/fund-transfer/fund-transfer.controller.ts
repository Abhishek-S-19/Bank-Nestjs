// src/fund-transfer/fund-transfer.controller.ts
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { FundTransferService } from './fund-transfer.service';
import { AddPayeeDto } from './dto/add-payee';
import { TransferDto } from './dto/transfer';
import { AuthGuard } from '@nestjs/passport';

@Controller('fund-transfer')
@UseGuards(AuthGuard('jwt'))
export class FundTransferController {
  constructor(private readonly service: FundTransferService) {}

  @Post('add-payee')
  async addPayee(@Request() req, @Body() dto: AddPayeeDto) {
    return this.service.addPayee(req.user.userId, dto);
  }

  @Get('payees')
  async getPayees(@Request() req) {
    return this.service.getPayees(req.user.userId);
  }

  @Post('transfer')
  async transferFunds(@Body() dto: TransferDto) {
    return this.service.transferFunds(dto);
  }
}
