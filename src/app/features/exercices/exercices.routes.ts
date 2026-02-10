import { Routes } from "@angular/router";

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import("./exercices")
      .then(c => c.Exercices)
  },
  {
    path: 'exo01',
    loadComponent: () => import("./exo01/exo01")
      .then(c => c.Exo01)
  },
  {
    path: 'exo02',
    loadComponent: () => import("./exo02/exo02")
      .then(c => c.Exo02)
  },
  {
    path: 'exo03',
    loadComponent: () => import("./exo03/exo03")
      .then(c => c.Exo03)
  }
];