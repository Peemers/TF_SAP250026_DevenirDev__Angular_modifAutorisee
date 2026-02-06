import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <h2>{{ title }}</h2>
    <p>Bienvenue sur mon application Angular !</p>
  `,
  styles: `h2 { color: darkgrey; }`
})
export class Home {
  title: string = "Accueil";
}
