import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Warehouse } from './models/warehouse.model';

@Injectable()
export class WarehouseService {
  constructor(private prisma: PrismaService) {}

  async getWarehouses(): Promise<Warehouse[]> {
    return this.prisma.warehouse.findMany({
        include: {
            stocks: true,
        },
    });
  }

}
