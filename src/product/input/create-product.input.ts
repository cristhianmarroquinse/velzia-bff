import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsString } from 'class-validator';
import { StockInput } from 'src/stock/input/stock.input';

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

  @Field(() => [StockInput], { nullable: true })
  @IsArray()
  stocks: StockInput[];
}