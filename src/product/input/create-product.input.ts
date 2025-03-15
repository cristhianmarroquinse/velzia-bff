import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

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
}