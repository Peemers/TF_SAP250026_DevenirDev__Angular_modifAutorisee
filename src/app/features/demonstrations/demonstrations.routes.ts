import { Routes } from "@angular/router";

export const routes: Routes = [
  // { path: '', component: Demonstrations },
  {
    path: 'demo01',
    title: 'Démonstration 01 - Interpolation',

    loadComponent: () => import("./demo01-interpolation/demo01-interpolation")
      .then(c => c.Demo01Interpolation)
  },
  {
    path: 'demo02',
    loadComponent: () => import("./demo02-attribute-binding/demo02-attribute-binding")
      .then(c => c.Demo02AttributeBinding)
  },
  {
    path: 'demo03',
    loadComponent: () => import("./demo03-event-binding/demo03-event-binding")
      .then(c => c.Demo03EventBinding)
  },
  {
    path: 'demo04',
    loadComponent: () => import("./demo04-twoway-binding/demo04-twoway-binding")
      .then(c => c.Demo04TwowayBinding)
  },
  {
    path: 'demo05',
    loadComponent: () => import("./demo05-routing/demo05-routing")
      .then(c => c.Demo05Routing)
  },
];