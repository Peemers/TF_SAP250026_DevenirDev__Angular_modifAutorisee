import { Component, signal, WritableSignal } from '@angular/core';
import { Highlight } from "../../../shared/directives/highlight";

@Component({
  selector: 'app-demo10-custom-directives',
  imports: [Highlight],
  templateUrl: './demo10-custom-directives.html',
  styleUrl: './demo10-custom-directives.css',
})
export class Demo10CustomDirectives {

  italic: WritableSignal<boolean> = signal(false);

  onClick() {
    this.italic.update(value => !value);
  }

}
