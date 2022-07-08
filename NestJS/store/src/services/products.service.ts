import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'some description',
      price: 233,
      image: '',
      stock: 56,
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const indexProduct = this.products.findIndex((item) => item.id === id);
    if (indexProduct === -1) {
      throw new Error('Product not found');
    }
    return {
      message: 'Detail product',
      product_updated: this.products[indexProduct],
    };
  }
  create(payload: any) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: any) {
    const indexProduct = this.products.findIndex((item) => item.id === id);
    if (indexProduct === -1) {
      throw new Error('Product not found');
    }
    this.products[indexProduct] = {
      id: id,
      ...payload,
    };
    return {
      message: 'Updated product',
      product_updated: this.products[indexProduct],
    };
  }
  delete(id: number) {
    const indexProduct = this.products.findIndex((item) => item.id === id);
    if (indexProduct === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(indexProduct, 1);
    return {
      message: 'Deleted product',
    };
  }
}
