import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Demonstrations } from './features/demonstrations/demonstrations';

export const routes: Routes = [
  {
    path: 'home',
    // Eager loading: chargement direct
    component: Home
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: "demonstrations",
    component: Demonstrations,
    // children: [
    //   { path: 'demo01', component: Demo01Interpolation },
    //   { path: 'demo02', component: Demo02AttributeBinding },
    //   { path: 'demo03', component: Demo03EventBinding },
    //   { path: 'demo04', component: Demo04TwowayBinding },
    // ]
    loadChildren: () => import("./features/demonstrations/demonstrations.routes")
      .then(r => r.routes)
  },



  {
    path: '**',
    // Lazy loading: chargement à la demande
    loadComponent: () => import("./features/errors/not-found/not-found")
      .then(c => c.NotFound)
  }
];
