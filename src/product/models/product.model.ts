import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class Product {
    @IsNumber()
    @Field(() => Int, { nullable: false })
    id: number;

    @Field()
    @IsString()
    name: string;

    @Field({ nullable: true })
    @IsString()
    description: string | null;

    @Field()
    @IsString()
    reference: string;

    @Field()
    @IsString()
    barcode: string;
}