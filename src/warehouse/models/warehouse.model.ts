import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Stock } from '../../stock/models/stock.model';

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

    @Field(type => [Stock])
    stocks: Stock[];

}