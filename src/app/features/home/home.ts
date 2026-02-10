import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <h2>{{ title }}</h2>
    <p>Bienvenue sur mon application Angular !</p>
  `,
  styles: `h2 { color: darkgrey; }`
})
export class Home implements OnInit, OnDestroy {
  
  title: string = "Accueil";

  ngOnInit(): void {
    console.log("Initialisation du composant Home");
  }

  ngOnDestroy(): void {
    console.log("Destruction du composant Home");
  }


}
