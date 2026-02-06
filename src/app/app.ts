import { Component, signal } from '@angular/core';
import { Demo02AttributeBinding } from "./features/demonstrations/demo02-attribute-binding/demo02-attribute-binding";
import { Demo03EventBinding } from "./features/demonstrations/demo03-event-binding/demo03-event-binding";
import { Demo04TwowayBinding } from "./features/demonstrations/demo04-twoway-binding/demo04-twoway-binding";

@Component({
  selector: 'app-root',
  imports: [Demo04TwowayBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TF_SAP250026_DevenirDev__Angular');
}
