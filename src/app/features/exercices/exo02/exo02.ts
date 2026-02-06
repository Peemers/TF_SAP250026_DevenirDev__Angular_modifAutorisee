import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo02',
  imports: [FormsModule],
  templateUrl: './exo02.html',
  styleUrl: './exo02.css',
})
export class Exo02 {

  nomComplet: string = "";
  email: string = "";
  dateNaissance: string = "1996-04-03";
  genre: string = "M";
  langues: string = "";
  url: string = "";

}
