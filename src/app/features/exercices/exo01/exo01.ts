import { Component } from '@angular/core';

@Component({
  selector: 'app-exo01',
  imports: [],
  templateUrl: './exo01.html',
  styleUrl: './exo01.css',
})
export class Exo01 {

  nomComplet: string = "Quentin Geerts";
  email: string = "quentin.geerts@bstorm.be";
  dateNaissance: Date = new Date("1996-04-03");
  genre: "M" | "F" | "X" = "M";
  langues: string[] = ["Français", "Néerlandais", "Anglais", "Japonais"];
  urlPhoto: string = "https://images.ctfassets.net/denf86kkcx7r/2lAnM10AMAxuGdxSvtNK9m/19d1ed1cc37d43d0d15fe9653b49eac4/chat_noir_soleil.jpg";

}
