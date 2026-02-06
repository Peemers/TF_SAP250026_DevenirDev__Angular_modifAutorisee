import { Component } from '@angular/core';

@Component({
  selector: 'app-demo03-event-binding',
  imports: [],
  templateUrl: './demo03-event-binding.html',
  styleUrl: './demo03-event-binding.css',
})
export class Demo03EventBinding {

  compteur: number = 0;
  firstname: string = "Quentin";

  increase() {
    console.log("Incrémentation du compteur...");
    this.compteur++;
  }

  decrease(event: Event) {
    event.preventDefault();
    console.log("Décrémentation du compteur");
    this.compteur--;
  }

  updateValue(event: Event) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.firstname = input.value;

    // this.firstname = (event.target as HTMLInputElement).value;
  }
}
