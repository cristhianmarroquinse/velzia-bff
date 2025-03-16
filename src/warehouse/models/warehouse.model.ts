import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsArray } from 'class-validator';
import { StockInput } from 'src/stock/input/stock.input';

@ObjectType()
export class Warehouse {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    address: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(() => [StockInput], { nullable: true })
    @IsArray()
    stocks: StockInput[];

}