import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { StockMovementType } from '@prisma/client';


@InputType()
export class CreateStockMovement {
    @Field()
    stockId: number;
    
    @Field()
    quantity: number;
    
    @Field()
    @IsString()
    type: StockMovementType;
}