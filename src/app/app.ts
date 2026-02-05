import { Component, signal } from '@angular/core';
import { Home } from "./features/home/home";
import { Demo01Interpolation } from "./features/demonstrations/demo01-interpolation/demo01-interpolation";

@Component({
  selector: 'app-root',
  imports: [Home, Demo01Interpolation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TF_SAP250026_DevenirDev__Angular');
}
