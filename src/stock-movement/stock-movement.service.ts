import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StockMovementType } from '@prisma/client';
import { CreateStockMovement } from './input/create-stock-movement.input';

@Injectable()
export class StockMovementService {
  constructor(private readonly prisma: PrismaService) {}

  async createStockMovement(data: CreateStockMovement) {
    const { productId, warehouseId, quantity, type } = data;
    return this.prisma.$transaction(async (prisma) => {
      // Create the StockMovement
      const stockMovement = await prisma.stockMovement.create({data});

      // Find the existing stock
      const stock = await prisma.stock.findUnique({
        where: {
          productId_warehouseId: {
            productId,
            warehouseId,
          },
        },
      });

      if (!stock) {
        throw new Error('Stock not found');
      }

      // Update the stock quantity based on the movement type
      const newQuantity = type === StockMovementType.IN ? stock.quantity + quantity : stock.quantity - quantity;

      if (newQuantity < 0) {
        throw new Error('Insufficient stock');
      }

      await prisma.stock.update({
        where: {
          id: stock.id,
        },
        data: {
          quantity: newQuantity,
        },
      });

      return stockMovement;
    });
  }
}