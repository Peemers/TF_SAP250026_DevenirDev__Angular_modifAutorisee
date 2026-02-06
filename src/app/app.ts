import { Component, signal } from '@angular/core';
import { Demo02AttributeBinding } from "./features/demonstrations/demo02-attribute-binding/demo02-attribute-binding";

@Component({
  selector: 'app-root',
  imports: [Demo02AttributeBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TF_SAP250026_DevenirDev__Angular');
}
