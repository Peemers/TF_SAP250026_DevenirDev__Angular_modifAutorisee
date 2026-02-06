import { Component, signal } from '@angular/core';
import { Home } from "./features/home/home";
import { Demo01Interpolation } from "./features/demonstrations/demo01-interpolation/demo01-interpolation";
import { Exo01 } from "./features/exercices/exo01/exo01";

@Component({
  selector: 'app-root',
  imports: [Home, Demo01Interpolation, Exo01],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TF_SAP250026_DevenirDev__Angular');
}
