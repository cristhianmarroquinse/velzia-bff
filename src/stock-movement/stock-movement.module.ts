import { Module } from '@nestjs/common';
import { StockMovementService } from './stock-movement.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [StockMovementService],
  exports: [StockMovementService],
})
export class StockMovementModule {}