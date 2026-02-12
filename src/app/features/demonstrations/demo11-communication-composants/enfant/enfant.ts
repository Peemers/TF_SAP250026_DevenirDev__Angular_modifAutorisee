import { Component, EventEmitter, Input, input, InputSignal, output, Output, OutputEmitterRef, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enfant',
  imports: [FormsModule],
  templateUrl: './enfant.html',
  styleUrl: './enfant.css',
})
export class Enfant {
  
  // Ancienne façon
  @Input() valueFromParentDecorator: string = "";
  @Output() valueEmitted: EventEmitter<string> = new EventEmitter();
  
  // Nouvelle façon
  valueFromParentSignal: InputSignal<string> = input("");
  valueEmittedSignal: OutputEmitterRef<string> = output();
  
  value = "";
  valueSignal = signal("");
  
  sendToParent() {
    this.valueEmitted.emit(this.value);
    this.valueEmittedSignal.emit(this.valueSignal());
  }
}
