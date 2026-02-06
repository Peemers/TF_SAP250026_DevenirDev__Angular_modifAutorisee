import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo04-twoway-binding',
  imports: [FormsModule],
  templateUrl: './demo04-twoway-binding.html',
  styleUrl: './demo04-twoway-binding.css',
})
export class Demo04TwowayBinding {

  firstname: string = "Quentin";

}
