import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeRantingService } from './coffee-ranting.service';

describe('CoffeeRantingService', () => {
  let service: CoffeeRantingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeeRantingService],
    }).compile();

    service = module.get<CoffeeRantingService>(CoffeeRantingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
