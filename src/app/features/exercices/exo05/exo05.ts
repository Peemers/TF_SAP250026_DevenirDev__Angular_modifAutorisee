import { Component, signal, WritableSignal } from '@angular/core';
import { ChronoPipe } from "../../../shared/pipes/chrono-pipe";

@Component({
  selector: 'app-exo05',
  imports: [ChronoPipe],
  templateUrl: './exo05.html',
  styleUrl: './exo05.css',
})
export class Exo05 {
  chrono: WritableSignal<number> = signal(59);
  // chronoLectureSeul: Signal<number> = this.chrono.asReadonly();
  timer?: number;

  increment()  {
    console.log('this.chrono :>> ', this.chrono());
    // this.chrono.set(this.chrono() + 1); // Modifier avec nouvelle valeur
    this.chrono.update(value => value + 1); // Par rapport à la valeur d'avant
  }

  startChrono() {
    if(this.timer !== undefined) return;
    console.log("Démarrage du chrono");
    this.timer = setInterval(() => this.increment(), 1000);
  }
  
  stopChrono() {
    console.log("Arrêt du chrono");
    clearInterval(this.timer);
    this.timer = undefined;
  }
  
  resetChrono() {
    console.log("Réinitialisation du chrono");
    this.stopChrono();
    // this.chrono = 0;
    this.chrono.set(0);
  }
}
