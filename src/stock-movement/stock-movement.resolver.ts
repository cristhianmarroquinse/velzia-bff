import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { StockMovementService } from './stock-movement.service';
import { CreateStockMovement } from './input/create-stock-movement.input';

@Resolver()
export class StockMovementResolver {
  constructor(private readonly stockMovementService: StockMovementService) {}

  @Mutation(() => Boolean)
  async createStockMovement(
    @Args({ name: 'data', type: () => CreateStockMovement })
    data: CreateStockMovement,
  ) {
    await this.stockMovementService.createStockMovement(data);
    return true;
  }
}