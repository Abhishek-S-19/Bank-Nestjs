import { Test, TestingModule } from '@nestjs/testing';
import { FundTransferService } from './fund-transfer.service';

describe('FundTransferService', () => {
  let service: FundTransferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundTransferService],
    }).compile();

    service = module.get<FundTransferService>(FundTransferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
