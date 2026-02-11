import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo08-component-directives',
  imports: [NgClass, NgStyle],
  templateUrl: './demo08-component-directives.html',
  styleUrl: './demo08-component-directives.css',
})
export class Demo08ComponentDirectives {

  italic: boolean = false;
  bold: boolean = false;
  color: boolean = false;
  
  toggleItalic() {
    this.italic = !this.italic;
  }

  toggleBold() {
    this.bold = ! this.bold;
  }

  toggleColor() {
    this.color = !this.color;
  }

}
