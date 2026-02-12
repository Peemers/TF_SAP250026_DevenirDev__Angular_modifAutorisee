import { Component } from '@angular/core';
import { Enfant } from "./enfant/enfant";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo11-communication-composants',
  imports: [FormsModule, Enfant],
  templateUrl: './demo11-communication-composants.html',
  styleUrl: './demo11-communication-composants.css',
})
export class Demo11CommunicationComposants {

  value: string = "J'ai faim";

}
