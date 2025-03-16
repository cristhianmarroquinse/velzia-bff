import { Resolver, Query } from '@nestjs/graphql';
import { WarehouseService } from './warehouse.service';
import { Warehouse } from './models/warehouse.model';

@Resolver(() => Warehouse)
export class WarehouseResolver {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Query(() => [Warehouse])
  async getWarehouses(): Promise<Warehouse[]> {
    return this.warehouseService.getWarehouses();
  }

}
