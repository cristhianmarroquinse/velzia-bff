import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Stock {
  @Field(type => Int)
  id: number;

  @Field(type => Int)
  productId: number;

  @Field(type => Int)
  warehouseId: number;

  @Field(type => Int)
  quantity: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

}
