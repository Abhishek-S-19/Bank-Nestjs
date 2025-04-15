import { Test, TestingModule } from '@nestjs/testing';
import { FundTransferController } from './fund-transfer.controller';
import { FundTransferService } from './fund-transfer.service';

describe('FundTransferController', () => {
  let controller: FundTransferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundTransferController],
      providers: [FundTransferService],
    }).compile();

    controller = module.get<FundTransferController>(FundTransferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
