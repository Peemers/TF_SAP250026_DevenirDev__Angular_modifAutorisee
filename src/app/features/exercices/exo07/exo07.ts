import { Component } from '@angular/core';
import { ListProducts } from "./list-products/list-products";
import { AddProduct } from "./add-product/add-product";
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-exo07',
  imports: [ListProducts, AddProduct],
  templateUrl: './exo07.html',
  styleUrl: './exo07.css',
})
export class Exo07 {

  products: Product[] = [
    { name: 'Pomme', price: 1.2 },
    { name: 'Poire', price: 1.23 },
    { name: 'Cerise', price: 3.23 },
  ];

  addToProducts($event: Product) {
    this.products.push($event)
  }
}
