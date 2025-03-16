import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Stock {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  warehouseId: number;

  @Field(() => Int)
  quantity: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

}
