import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from './models/product.model';
import { CreateProductInput } from './input/create-product.input';
import { UpdateProductInput } from './input/update-product.input';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: CreateProductInput): Promise<Product> {
    return this.prisma.product.create({
      data: {
        ...data,
        stocks: {
          create: data.stocks,
        },
      },
      include: {
        stocks: true,
      },
    });
  }

  async getProducts(): Promise<Product[]> {
    return this.prisma.product.findMany({
      include: {
        stocks: true,
      },
    });
  }

  async getProduct(id: number): Promise<Product | null> {
    return this.prisma.product.findUnique({ where: { id }, include: { stocks: true } });
  }

  async updateProduct(id: number, data: UpdateProductInput): Promise<Product> {
    return this.prisma.product.update({ where: { id }, data, include: { stocks: true } });
  }

  async deleteProduct(id: number): Promise<Product> {
    return this.prisma.product.delete({ where: { id }, include: { stocks: true } });
  }
}
