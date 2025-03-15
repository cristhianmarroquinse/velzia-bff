import { Test, TestingModule } from '@nestjs/testing';
import { StockMovementResolver } from './stock-movement.resolver';

describe('StockMovementResolver', () => {
  let resolver: StockMovementResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockMovementResolver],
    }).compile();

    resolver = module.get<StockMovementResolver>(StockMovementResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
