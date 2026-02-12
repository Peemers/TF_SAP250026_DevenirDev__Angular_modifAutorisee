import { Component, Input, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.html',
  styleUrl: './enfant.css',
})
export class Enfant {

  // Ancienne façon
  @Input() valueFromParentDecorator: string = "";

  // Nouvelle façon
  valueFromParentSignal: InputSignal<string> = input("");

}
