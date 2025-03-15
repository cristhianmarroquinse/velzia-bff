import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

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
}