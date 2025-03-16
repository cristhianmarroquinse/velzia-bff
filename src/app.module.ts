import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PrismaModule } from './prisma/prisma.module';
import { ProductResolver } from './product/product.resolver';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { StockMovementResolver } from './stock-movement/stock-movement.resolver';
import { StockMovementService } from './stock-movement/stock-movement.service';
import { StockMovementModule } from './stock-movement/stock-movement.module';
import { WarehouseResolver } from './warehouse/warehouse.resolver';
import { WarehouseService } from './warehouse/warehouse.service';
import { WarehouseModule } from './warehouse/warehouse.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    StockMovementModule,
    ProductModule,
    PrismaModule,
    WarehouseModule,
  ],
  controllers: [AppController],
  providers: [AppService, ProductResolver, ProductService, StockMovementResolver, StockMovementService, WarehouseResolver, WarehouseService],
})
export class AppModule {}
