import { DatasourceService } from '../datasource/datasource.service';
import { IncompleteProductDto } from './dto/incomplete-product.dto';
import { Product } from './product.entity';
import { Injectable, HttpStatus } from '@nestjs/common';

@Injectable()
export class CatalogService {
  constructor(private readonly datasourceService: DatasourceService) {}

  create(product: Product) {
    this.datasourceService.getCatalog().push(product);
    return product;
  }

  findOne(id: number) {
    return this.datasourceService
      .getCatalog()
      .find((product) => product.id === id);
  }

  findAll(): Product[] {
    return this.datasourceService.getCatalog();
  }

  findIncomplete(): IncompleteProductDto[] {
    return this.datasourceService.getCatalog();
  }

  update(id: number, updatedProduct: Product) {
    const index = this.datasourceService
      .getCatalog()
      .findIndex((product) => product.id === id);
    this.datasourceService.getCatalog()[index] = updatedProduct;
    return this.datasourceService.getCatalog()[index];
  }

  remove(id: number) {
    const index = this.datasourceService
      .getCatalog()
      .findIndex((product) => product.id === id);
    this.datasourceService.getCatalog().splice(index, 1);
    return HttpStatus.OK;
  }
}
