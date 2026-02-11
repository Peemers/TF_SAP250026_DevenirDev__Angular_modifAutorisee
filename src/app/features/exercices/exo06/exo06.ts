import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemperaturePipe, TemperatureType } from "../../../shared/pipes/temperature-pipe";

@Component({
  selector: 'app-exo06',
  imports: [FormsModule, TemperaturePipe],
  templateUrl: './exo06.html',
  styleUrl: './exo06.css',
})
export class Exo06 {

  temp: WritableSignal<number> = signal(0);
  unitSrc: WritableSignal<TemperatureType> = signal("celsius");
  unitDest: WritableSignal<TemperatureType> = signal("celsius");

}
