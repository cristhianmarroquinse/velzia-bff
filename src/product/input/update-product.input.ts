import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdateProductInput {
    @Field({ nullable: true })
    @IsString()
    name: string;

    @Field({ nullable: true })
    @IsString()
    description: string;

    @Field({ nullable: true })
    @IsString()
    reference: string;

    @Field({ nullable: true })
    @IsString()
    barcode: string;
}