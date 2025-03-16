import { Field, InputType } from '@nestjs/graphql';
import { Stock } from '../../stock/models/stock.model';
import { IsArray, IsString } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field()
  @IsString()
  name: string;

  @Field({ nullable: true })
  @IsString()
  description: string;

  @Field()
  @IsString()
  reference: string;

  @Field()
  @IsString()
  barcode: string;

  @Field(() => [Stock], { nullable: true })
  @IsArray()
  stocks: Stock[];
}