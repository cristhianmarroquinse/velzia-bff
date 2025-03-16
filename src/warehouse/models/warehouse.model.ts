import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsArray } from 'class-validator';
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

    @Field(() => [Stock], { nullable: true })
    @IsArray()
    stocks: Stock[];

}