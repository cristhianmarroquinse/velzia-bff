import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './models/product.model';
import { CreateProductInput } from './input/create-product.input';
import { UpdateProductInput } from './input/update-product.input';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  async createProduct(
    @Args({ name: 'data', type: () => CreateProductInput })
    data: CreateProductInput,
  ): Promise<Product> {
    return this.productService.createProduct(data);
  }

  @Query(() => [Product])
  async getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Query(() => Product)
  async getProduct(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    const product = await this.productService.getProduct(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('id', { type: () => Int }) id: number,
    @Args({ name: 'data', type: () => UpdateProductInput })
    data: UpdateProductInput,
  ): Promise<Product> {
    return this.productService.updateProduct(id, data);
  }

  @Mutation(() => Product)
  async deleteProduct(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    return this.productService.deleteProduct(id);
  }
}
