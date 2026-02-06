import { Component, signal } from '@angular/core';
import { Demo02AttributeBinding } from "./features/demonstrations/demo02-attribute-binding/demo02-attribute-binding";
import { Demo03EventBinding } from "./features/demonstrations/demo03-event-binding/demo03-event-binding";
import { Demo04TwowayBinding } from "./features/demonstrations/demo04-twoway-binding/demo04-twoway-binding";
import { Home } from "./features/home/home";
import { Demo01Interpolation } from "./features/demonstrations/demo01-interpolation/demo01-interpolation";
import { Exo01 } from "./features/exercices/exo01/exo01";
import { Exo02 } from "./features/exercices/exo02/exo02";
import { Exo03 } from "./features/exercices/exo03/exo03";

@Component({
  selector: 'app-root',
  imports: [Demo04TwowayBinding, Home, Demo01Interpolation, Exo01, Demo02AttributeBinding, Demo03EventBinding, Exo02, Exo03],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TF_SAP250026_DevenirDev__Angular');
}
