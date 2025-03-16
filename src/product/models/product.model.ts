import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsArray, IsNumber, IsString } from 'class-validator';
import { Stock } from '../../stock/models/stock.model';

@ObjectType()
export class Product {
    @IsNumber()
    @Field(() => Int, { nullable: false })
    id: number;

    @Field()
    @IsString()
    name: string;

    @IsString()
    @Field({ nullable: true })
    description: string;

    @Field()
    @IsString()
    reference: string;

    @Field()
    @IsString()
    barcode: string;

    @Field()
    createdAt: Date;
  
    @Field()
    updatedAt: Date;

    @Field(() => [Stock])
    @IsArray()
    stocks: Stock[];
  
}