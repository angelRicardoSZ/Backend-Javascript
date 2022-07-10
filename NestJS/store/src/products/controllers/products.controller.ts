import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }
  @Get()
  getProductquery(
    @Query('limit') limit: number,
    @Query('offset') offset = 1, // default value
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products with query, limit: ${limit} and offset: ${offset} with brand${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    // return {
    //   message: `product ${productId}`,
    // };
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'Acción de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto) {
    // return {
    //   message: 'Acción de actualizar',
    //   id,
    //   payload,
    // };
    return this.productsService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    // return {
    //   message: 'Acción de borrar',
    //   id,
    // };
    return this.productsService.delete(id);
  }
}
