import { Component, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {

  // EventEmitter
  createdProduct: OutputEmitterRef<Product> = output<Product>();

  // Propriétés pour le produit
  productName: WritableSignal<string> = signal("");
  productPrice = signal(0);

  createProduct() {
    const newProduct: Product = {
      name: this.productName(),
      price: this.productPrice()
    };

    this.productName.set("");
    this.productPrice.set(0);

    this.createdProduct.emit(newProduct);
  }
}
