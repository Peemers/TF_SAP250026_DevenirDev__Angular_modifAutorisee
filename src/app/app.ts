import { Component, signal } from '@angular/core';
import { Demo02AttributeBinding } from "./features/demonstrations/demo02-attribute-binding/demo02-attribute-binding";
import { Demo03EventBinding } from "./features/demonstrations/demo03-event-binding/demo03-event-binding";

@Component({
  selector: 'app-root',
  imports: [Demo03EventBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TF_SAP250026_DevenirDev__Angular');
}
