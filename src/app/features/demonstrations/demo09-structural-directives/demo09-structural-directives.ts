import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo09-structural-directives',
  imports: [NgIf],
  templateUrl: './demo09-structural-directives.html',
  styleUrl: './demo09-structural-directives.css',
})
export class Demo09StructuralDirectives {

  isShowed: boolean = true;

  toggleShowed () {
    this.isShowed = !this.isShowed;
  }

}
