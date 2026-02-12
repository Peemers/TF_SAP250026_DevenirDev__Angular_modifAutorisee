import { Component, input } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-list-products',
  imports: [CurrencyPipe],
  templateUrl: './list-products.html',
  styleUrl: './list-products.css',
})
export class ListProducts {

  productsToDisplay = input<Product[]>([]);

}
