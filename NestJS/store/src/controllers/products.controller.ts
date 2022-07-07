import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProductquery(
    @Query('limit') limit: number,
    @Query('offset') offset = 1, // default value
    @Query('brand') brand: string,
  ) {
    return {
      message: `products with query, limit: ${limit} and offset: ${offset} with brand${brand}`,
    };
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Acción de crear',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'Acción de actualizar',
      id,
      payload,
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'Acción de borrar',
      id,
    };
  }
}
