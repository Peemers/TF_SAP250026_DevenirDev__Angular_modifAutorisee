# Formation Angular - Guide pas-à-pas

> Documentation officielle : [https://angular.dev](https://angular.dev)

Ce guide vous accompagne dans la recréation complète du projet Angular vu en formation. Chaque étape introduit une notion clé. Suivez-les dans l'ordre.

---

## Table des matières

1. [Prérequis](#1---prérequis)
2. [Créer le projet](#2---créer-le-projet)
3. [Structure du projet](#3---structure-du-projet)
4. [Comprendre le composant racine](#4---comprendre-le-composant-racine)
5. [Créer un modèle partagé](#5---créer-un-modèle-partagé)
6. [Démo 01 - Interpolation](#6---démo-01---interpolation)
7. [Démo 02 - Property Binding](#7---démo-02---property-binding)
8. [Démo 03 - Event Binding](#8---démo-03---event-binding)
9. [Démo 04 - Two-way Binding](#9---démo-04---two-way-binding)
10. [Exercice 01 - Profil statique](#10---exercice-01---profil-statique)
11. [Exercice 02 - Profil dynamique](#11---exercice-02---profil-dynamique)
12. [Exercice 03 - Chronomètre avec Signals](#12---exercice-03---chronomètre-avec-signals)
13. [Récapitulatif des notions](#13---récapitulatif-des-notions)

---

## 1 - Prérequis

Avant de commencer, installez :

- **Node.js** (version LTS) : [https://nodejs.org](https://nodejs.org)
- **npm** est fourni avec Node.js
- **Angular CLI** :

```bash
npm install -g @angular/cli
```

Vérifiez que tout est bien installé :

```bash
node -v
npm -v
ng version
```

> Docs : [https://angular.dev/tools/cli/setup-local](https://angular.dev/tools/cli/setup-local)

---

## 2 - Créer le projet

```bash
ng new mon-projet-angular --skip-tests --style=css
```

| Option | Rôle |
|--------|------|
| `--skip-tests` | Ne génère pas les fichiers `.spec.ts` |
| `--style=css` | Utilise CSS comme format de style |

Puis lancez le serveur de développement :

```bash
cd mon-projet-angular
ng serve --open
```

L'application s'ouvre dans le navigateur à l'adresse `http://localhost:4200/`.

> Docs : [https://angular.dev/tools/cli](https://angular.dev/tools/cli)

### Autres options utiles de `ng new`

| Option | Description |
|--------|-------------|
| `--routing` | Ajoute le routing |
| `--ssr` | Active le Server-Side Rendering |
| `--standalone` | Composants standalone (par défaut depuis Angular 17+) |
| `--minimal` | Workspace minimal, idéal pour l'apprentissage |
| `--prefix` | Change le préfixe des sélecteurs (par défaut : `app`) |
| `--inline-style` | Styles directement dans le fichier `.ts` |
| `--inline-template` | Template directement dans le fichier `.ts` |

---

## 3 - Structure du projet

Voici la structure cible que nous allons construire au fil des étapes :

```
src/
├── index.html                  ← Page HTML principale
├── main.ts                     ← Point d'entrée de l'application
├── styles.css                  ← Styles globaux
└── app/
    ├── app.ts                  ← Composant racine
    ├── app.html                ← Template du composant racine
    ├── app.css                 ← Styles du composant racine
    ├── app.config.ts           ← Configuration de l'application
    ├── app.routes.ts           ← Configuration du routing (vide pour l'instant)
    ├── shared/
    │   └── models/
    │       └── user.model.ts   ← Interfaces TypeScript partagées
    └── features/
        ├── home/
        │   └── home.ts
        ├── demonstrations/
        │   ├── demo01-interpolation/
        │   ├── demo02-attribute-binding/
        │   ├── demo03-event-binding/
        │   └── demo04-twoway-binding/
        └── exercices/
            ├── exo01/
            ├── exo02/
            └── exo03/
```

### Fichiers clés générés automatiquement

**`src/main.ts`** - Bootstrap de l'application (standalone) :

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
```

**`src/app/app.config.ts`** - Configuration globale :

```typescript
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
```

**`src/app/app.routes.ts`** - Routes (vide pour le moment) :

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [];
```

> Docs : [https://angular.dev/guide/components](https://angular.dev/guide/components)

---

## 4 - Comprendre le composant racine

Un **composant** Angular est une classe TypeScript décorée avec `@Component`. C'est la brique de base de toute application Angular.

> Docs : [https://angular.dev/guide/components](https://angular.dev/guide/components)

Ouvrez `src/app/app.ts` et remplacez son contenu :

```typescript
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',        // Balise HTML utilisée dans index.html
  imports: [],                  // Composants/modules importés
  templateUrl: './app.html',    // Fichier template HTML
  styleUrl: './app.css'         // Fichier de styles CSS
})
export class App {
  // Signal : système de réactivité moderne d'Angular
  protected readonly title = signal('Mon Projet Angular');
}
```

Dans `src/app/app.html` :

```html
<h1>{{ title() }}</h1>
```

### Ce qu'il faut retenir

| Concept | Description |
|---------|-------------|
| `@Component` | Décorateur qui transforme une classe en composant Angular |
| `selector` | Le nom de la balise HTML pour utiliser ce composant |
| `imports` | Liste des composants/directives/pipes utilisés dans le template |
| `templateUrl` | Chemin vers le fichier HTML du template |
| `styleUrl` | Chemin vers le fichier CSS du composant (styles encapsulés) |
| `signal()` | Crée une valeur réactive. On lit sa valeur en l'appelant : `title()` |

---

## 5 - Créer un modèle partagé

Avant de créer les démonstrations, créons une **interface TypeScript** pour typer nos données.

Créez le fichier `src/app/shared/models/user.model.ts` :

```typescript
export interface User {
  email: string;
  lastname: string;
  firstname: string;
}

export interface Login {
  email: string;
  password: string;
}
```

> Une **interface** définit un contrat : elle décrit la forme d'un objet sans fournir d'implémentation.

---

## 6 - Démo 01 - Interpolation

L'**interpolation** permet d'afficher des données du composant dans le template avec la syntaxe `{{ expression }}`.

> Docs : [https://angular.dev/guide/templates/binding](https://angular.dev/guide/templates/binding)

### Générer le composant

```bash
ng g c features/demonstrations/demo01-interpolation --skip-tests
```

### Le composant (`demo01-interpolation.ts`)

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-demo01-interpolation',
  imports: [],
  templateUrl: './demo01-interpolation.html',
  styleUrl: './demo01-interpolation.css',
})
export class Demo01Interpolation implements OnInit, OnDestroy {

  // Types de base
  firstname: string = "Quentin";
  age: number = 29;
  isDeveloper: boolean = true;

  // Assertion d'assignation définitive (sera assigné dans ngOnInit)
  maVariable1!: string;

  // Déclaration ambiante
  declare maVariable2: string;

  // Types union et optionnels
  maVariable3: string | null = null;
  maVariable4?: string = undefined;

  // Tableaux
  maVariable5: number[] = [1, 2, 3, 4, 5];
  maVariable6: Array<number> = [1, 2, 3, 4, 5];

  // Types spéciaux
  maVariable7: unknown;

  // Objet typé inline
  maVariable9: { lastname: string } = { lastname: 'Geerts' };

  // Objet typé avec une interface
  maVariable10: User = {
    email: "quentin.geerts@bstorm.be",
    lastname: 'Geerts',
    firstname: "Quentin"
  };

  // Tableau d'objets typés
  maVariable11: User[] = [this.maVariable10];

  constructor() { }

  ngOnInit(): void {
    this.maVariable1 = "Hello World !";
    this.maVariable2 = "Hi";
  }

  ngOnDestroy(): void {
    // Nettoyage (désabonnements, timers, etc.)
  }

  maMethode(a: string): string {
    return a;
  }
}
```

### Le template (`demo01-interpolation.html`)

```html
<h3>Démonstration 01 - Interpolation</h3>

<!-- Interpolation de propriétés -->
<p>Prénom : {{ firstname }}</p>
<p>Age : {{ age }}</p>

<!-- Opérateur ternaire dans l'interpolation -->
<p>{{ isDeveloper ? "Est un développeur" : "N'est pas un développeur" }}</p>

<!-- Accès aux propriétés d'un objet -->
<p>Nom : {{ maVariable9.lastname }}</p>
<p>Email : {{ maVariable10.email }}</p>

<!-- Appel de méthode -->
<p>{{ maMethode("Bonjour !") }}</p>

<!-- ngNonBindable : affiche la syntaxe {{ }} littéralement -->
<p>Syntaxe : <code ngNonBindable>{{ expression }}</code></p>
```

### Notions couvertes

| Notion | Exemple |
|--------|---------|
| Interpolation `{{ }}` | `{{ firstname }}` |
| Types TypeScript | `string`, `number`, `boolean`, `null`, `undefined` |
| Types union | `string \| null` |
| Propriétés optionnelles | `maVariable4?: string` |
| Assertion `!` | `maVariable1!: string` |
| Interfaces | `User` |
| Tableaux typés | `number[]`, `Array<number>`, `User[]` |
| Cycle de vie | `OnInit`, `OnDestroy` |
| Expressions dans le template | Ternaire, appels de méthodes, accès aux propriétés |
| `ngNonBindable` | Empêche l'interprétation Angular |

---

## 7 - Démo 02 - Property Binding

Le **property binding** permet de lier dynamiquement une valeur du composant à une propriété HTML/DOM avec la syntaxe `[propriété]="expression"`.

> Docs : [https://angular.dev/guide/templates/binding](https://angular.dev/guide/templates/binding)

### Générer le composant

```bash
ng g c features/demonstrations/demo02-attribute-binding --skip-tests
```

### Le composant (`demo02-attribute-binding.ts`)

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo02-attribute-binding',
  imports: [],
  templateUrl: './demo02-attribute-binding.html',
  styleUrl: './demo02-attribute-binding.css',
})
export class Demo02AttributeBinding {
  showPassword: boolean = true;
  password: string = "MonPassword!123=";

  urlImage: string = "https://placecats.com/300/200";
  altImage: string = "Photo d'un petit chat";
  widthImage: string = "300";
}
```

### Le template (`demo02-attribute-binding.html`)

```html
<h2>Démonstration 02 - Property Binding</h2>

<!-- Liaison dynamique du type d'input (text/password) -->
<input [type]="showPassword ? 'text' : 'password'" [value]="password">

<!-- Liaison d'un booléen -->
<input type="checkbox" [checked]="showPassword">

<!-- Liaisons multiples sur un même élément -->
<img [src]="urlImage" [alt]="altImage" [width]="widthImage">
```

### Notions couvertes

| Notion | Exemple |
|--------|---------|
| Property binding `[prop]` | `[src]="urlImage"` |
| Expression conditionnelle | `[type]="showPassword ? 'text' : 'password'"` |
| Liaison de booléen | `[checked]="showPassword"` |
| Liaisons multiples | Plusieurs `[prop]` sur un même élément |

---

## 8 - Démo 03 - Event Binding

L'**event binding** permet de réagir aux actions de l'utilisateur (clic, saisie, etc.) avec la syntaxe `(événement)="méthode()"`.

> Docs : [https://angular.dev/guide/templates/event-listeners](https://angular.dev/guide/templates/event-listeners)

### Générer le composant

```bash
ng g c features/demonstrations/demo03-event-binding --skip-tests
```

### Le composant (`demo03-event-binding.ts`)

```typescript
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

  // Méthode sans paramètre
  increase() {
    this.compteur++;
  }

  // Méthode avec l'objet Event
  decrease(event: Event) {
    event.preventDefault();
    this.compteur--;
  }

  // Récupérer la valeur d'un input via l'événement
  updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.firstname = input.value;
  }
}
```

### Le template (`demo03-event-binding.html`)

```html
<h2>Démonstration 03 - Event Binding</h2>

<p>Compteur : {{ compteur }}</p>

<!-- Événement click simple -->
<button (click)="increase()">+1</button>

<!-- Plusieurs événements sur un même élément -->
<!-- Clic gauche = +1, clic droit = -1 -->
<button (click)="increase()" (contextmenu)="decrease($event)">+1 / -1</button>

<!-- Événement input : on passe $event au handler -->
<p>Prénom : {{ firstname }}</p>
<input type="text" [value]="firstname" (input)="updateValue($event)">
```

### Notions couvertes

| Notion | Exemple |
|--------|---------|
| Event binding `(event)` | `(click)="increase()"` |
| Objet `$event` | `(contextmenu)="decrease($event)"` |
| `event.preventDefault()` | Empêche le comportement par défaut |
| `event.target as HTMLInputElement` | Cast de type pour accéder à `.value` |
| Événements multiples | `(click)` et `(contextmenu)` sur le même élément |

---

## 9 - Démo 04 - Two-way Binding

Le **two-way binding** synchronise automatiquement la valeur entre le composant et le template dans les deux sens. Syntaxe : `[(ngModel)]="propriété"` (dite "banana in a box").

> Docs : [https://angular.dev/guide/templates/two-way-binding](https://angular.dev/guide/templates/two-way-binding)

### Générer le composant

```bash
ng g c features/demonstrations/demo04-twoway-binding --skip-tests
```

### Le composant (`demo04-twoway-binding.ts`)

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // OBLIGATOIRE pour ngModel

@Component({
  selector: 'app-demo04-twoway-binding',
  imports: [FormsModule],  // Il faut importer FormsModule
  templateUrl: './demo04-twoway-binding.html',
  styleUrl: './demo04-twoway-binding.css',
})
export class Demo04TwowayBinding {
  firstname: string = "Quentin";
}
```

### Le template (`demo04-twoway-binding.html`)

```html
<h2>Démonstration 04 - Two-way Binding</h2>

<label>Prénom : {{ firstname }}</label>
<br>
<input type="text" [(ngModel)]="firstname">

<!--
  [(ngModel)]="firstname" est un raccourci pour :
  [ngModel]="firstname" (ngModelChange)="firstname = $event"
-->
```

### Notions couvertes

| Notion | Exemple |
|--------|---------|
| Two-way binding `[()]` | `[(ngModel)]="firstname"` |
| `FormsModule` | Import obligatoire pour utiliser `ngModel` |
| Sucre syntaxique | Combine property binding + event binding |

---

## 10 - Exercice 01 - Profil statique

**Objectif** : Créer un composant qui affiche un profil utilisateur en utilisant l'interpolation et le property binding.

### Générer le composant

```bash
ng g c features/exercices/exo01 --skip-tests
```

### Le composant (`exo01.ts`)

```typescript
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

  // Type union pour restreindre les valeurs possibles
  genre: "M" | "F" | "X" = "M";

  langues: string[] = ["Français", "Néerlandais", "Anglais", "Japonais"];

  urlPhoto: string = "https://placecats.com/300/300";
}
```

### Le template (`exo01.html`)

```html
<h2>Exercice 01 - Mon profil</h2>

<!-- Property binding pour src, interpolation pour alt -->
<img [src]="urlPhoto" alt="Photo de profil de {{ nomComplet }}" width="200">

<!-- Ternaires imbriqués pour le genre -->
<p>{{ genre === "M" ? "Monsieur" : (genre === "F" ? "Madame" : "") }} {{ nomComplet }}</p>

<p>Email : <a href="mailto:{{ email }}">{{ email }}</a></p>

<!-- Appel de méthode JavaScript directement dans le template -->
<p>Naissance : {{ dateNaissance.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) }}</p>

<!-- Méthode join() sur un tableau -->
<p>Langues : {{ langues.join(", ") }}</p>

<!-- Accès par index -->
<ul>
  <li>{{ langues[0] }}</li>
  <li>{{ langues[1] }}</li>
  <li>{{ langues[2] }}</li>
  <li>{{ langues[3] }}</li>
</ul>
```

### Notions pratiquées

- Interpolation avec expressions complexes (ternaires imbriqués)
- Property binding (`[src]`)
- Types union (`"M" | "F" | "X"`)
- Appels de méthodes dans le template (`toLocaleDateString`, `join`)
- Accès aux index d'un tableau

---

## 11 - Exercice 02 - Profil dynamique

**Objectif** : Créer un formulaire avec two-way binding qui met à jour un aperçu du profil en temps réel.

### Générer le composant

```bash
ng g c features/exercices/exo02 --skip-tests
```

### Le composant (`exo02.ts`)

```typescript
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
```

### Le template (`exo02.html`)

```html
<h2>Exercice 02 - Profil dynamique</h2>

<div class="container">
  <!-- Partie formulaire -->
  <div class="formulaire">
    <h3>Formulaire</h3>
    <div class="fields">
      <label>Nom complet :</label>
      <input type="text" [(ngModel)]="nomComplet">

      <label>Email :</label>
      <input type="email" [(ngModel)]="email">

      <label>Date de naissance :</label>
      <input type="date" [(ngModel)]="dateNaissance">

      <label>Genre :</label>
      <select [(ngModel)]="genre">
        <option value="M">Homme</option>
        <option value="F">Femme</option>
        <option value="X">Autre</option>
      </select>

      <label>Langues (séparées par une virgule) :</label>
      <input type="text" [(ngModel)]="langues">

      <label>URL de la photo :</label>
      <input type="url" [(ngModel)]="url">
    </div>
  </div>

  <!-- Aperçu en temps réel -->
  <div class="profil">
    <h3>Aperçu</h3>
    <img [src]="url" alt="Photo de {{ nomComplet }}" width="250">
    <p>{{ genre === "M" ? "Monsieur" : (genre === "F" ? "Madame" : "") }} {{ nomComplet }}</p>
    <p>Email : <a href="mailto:{{ email }}">{{ email }}</a></p>
    <p>Naissance : {{ dateNaissance }}</p>
    <p>Langues : {{ langues }}</p>
  </div>
</div>
```

### Les styles (`exo02.css`)

```css
.container {
  display: flex;
  border: 1px solid black;
}

.formulaire, .profil {
  width: 50%;
  border: 1px solid black;
  height: 600px;
  padding: 0 10px;
}

.fields > * {
  display: block;
}

.fields input, .fields select {
  margin: 5px 0 20px;
}

/* Responsive : sur petit écran, le profil passe au-dessus */
@media screen and (max-width: 600px) {
  .container {
    flex-direction: column-reverse;
  }
  .formulaire, .profil {
    width: 100%;
  }
}
```

### Notions pratiquées

- Two-way binding sur plusieurs types d'inputs (`text`, `email`, `date`, `url`, `select`)
- `FormsModule` et `ngModel`
- Mise à jour en temps réel d'un aperçu
- CSS Flexbox et responsive design (media queries)

---

## 12 - Exercice 03 - Chronomètre avec Signals

**Objectif** : Créer un chronomètre en utilisant les **Signals**, le nouveau système de réactivité d'Angular.

> Docs : [https://angular.dev/guide/signals](https://angular.dev/guide/signals)

### Générer le composant

```bash
ng g c features/exercices/exo03 --skip-tests
```

### Le composant (`exo03.ts`)

```typescript
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-exo03',
  imports: [],
  templateUrl: './exo03.html',
  styleUrl: './exo03.css',
})
export class Exo03 {

  // Création d'un signal avec une valeur initiale
  chrono: WritableSignal<number> = signal(0);

  // ID du timer (undefined = chrono arrêté)
  timer?: number;

  increment() {
    // .update() calcule la nouvelle valeur à partir de l'ancienne
    this.chrono.update(value => value + 1);

    // Alternative : .set() remplace directement la valeur
    // this.chrono.set(this.chrono() + 1);
  }

  startChrono() {
    // Empêche de lancer plusieurs timers
    if (this.timer !== undefined) return;
    this.timer = setInterval(() => this.increment(), 1000);
  }

  stopChrono() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  resetChrono() {
    this.stopChrono();
    this.chrono.set(0);  // Remet le signal à 0
  }
}
```

### Le template (`exo03.html`)

```html
<h2>Exercice 03 - Chronomètre</h2>

<!-- Un signal se lit en l'appelant comme une fonction : chrono() -->
<p>Chrono : {{ chrono() }}</p>

<!-- [disabled] désactive le bouton selon une condition -->
<button (click)="startChrono()" [disabled]="timer">Démarrer</button>
<button (click)="stopChrono()" [disabled]="!timer">Pause</button>
<button (click)="resetChrono()" [disabled]="!chrono()">Réinitialiser</button>
```

### Les Signals en résumé

| Concept | Syntaxe | Description |
|---------|---------|-------------|
| Créer un signal | `signal(valeur)` | Crée un signal modifiable (`WritableSignal<T>`) |
| Lire un signal | `monSignal()` | Appeler comme une fonction pour obtenir la valeur |
| Modifier avec `.set()` | `monSignal.set(42)` | Remplace la valeur |
| Modifier avec `.update()` | `monSignal.update(v => v + 1)` | Calcule à partir de la valeur précédente |
| Signal en lecture seule | `monSignal.asReadonly()` | Retourne un `Signal<T>` non modifiable |

---

## Afficher les composants dans l'application

Pour que vos composants soient visibles, importez-les dans le composant racine.

### `app.ts`

```typescript
import { Component, signal } from '@angular/core';
import { Demo01Interpolation } from './features/demonstrations/demo01-interpolation/demo01-interpolation';
import { Demo02AttributeBinding } from './features/demonstrations/demo02-attribute-binding/demo02-attribute-binding';
import { Demo03EventBinding } from './features/demonstrations/demo03-event-binding/demo03-event-binding';
import { Demo04TwowayBinding } from './features/demonstrations/demo04-twoway-binding/demo04-twoway-binding';
import { Exo01 } from './features/exercices/exo01/exo01';
import { Exo02 } from './features/exercices/exo02/exo02';
import { Exo03 } from './features/exercices/exo03/exo03';

@Component({
  selector: 'app-root',
  imports: [
    Demo01Interpolation,
    Demo02AttributeBinding,
    Demo03EventBinding,
    Demo04TwowayBinding,
    Exo01,
    Exo02,
    Exo03
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Mon Projet Angular');
}
```

### `app.html`

```html
<h1>{{ title() }}</h1>

<app-demo01-interpolation />
<app-demo02-attribute-binding />
<app-demo03-event-binding />
<app-demo04-twoway-binding />
<app-exo01 />
<app-exo02 />
<app-exo03 />
```

> Chaque composant est utilisé via son **sélecteur** (défini dans `@Component({ selector: '...' })`).

---

## 13 - Récapitulatif des notions

### Data Binding

| Type | Syntaxe | Direction | Exemple |
|------|---------|-----------|---------|
| Interpolation | `{{ expr }}` | Composant → Template | `{{ firstname }}` |
| Property Binding | `[prop]="expr"` | Composant → DOM | `[src]="urlImage"` |
| Event Binding | `(event)="fn()"` | DOM → Composant | `(click)="save()"` |
| Two-way Binding | `[(ngModel)]="prop"` | Composant ↔ DOM | `[(ngModel)]="name"` |

### Composants Angular

| Concept | Description |
|---------|-------------|
| `@Component` | Décorateur qui définit un composant |
| `selector` | Balise HTML personnalisée |
| `imports` | Dépendances du composant (composants, directives, modules) |
| `templateUrl` / `template` | Template HTML externe ou inline |
| `styleUrl` / `styles` | Styles CSS externes ou inline (encapsulés par défaut) |

### TypeScript essentiel

| Concept | Exemple |
|---------|---------|
| Types de base | `string`, `number`, `boolean` |
| Tableaux | `string[]` ou `Array<string>` |
| Interfaces | `interface User { name: string }` |
| Types union | `"M" \| "F" \| "X"` |
| Optionnel | `age?: number` |
| Assertion `!` | `value!: string` (sera assigné plus tard) |
| Cast de type | `event.target as HTMLInputElement` |

### Signals (réactivité moderne)

| Concept | Syntaxe |
|---------|---------|
| Créer | `signal(valeurInitiale)` |
| Lire | `monSignal()` |
| Écrire | `.set(valeur)` ou `.update(v => ...)` |
| Lecture seule | `.asReadonly()` |

### Cycle de vie

| Hook | Quand ? |
|------|---------|
| `ngOnInit` | Après l'initialisation du composant |
| `ngOnDestroy` | Avant la destruction du composant |

### Commandes CLI utiles

```bash
ng new mon-projet              # Créer un projet
ng serve -o                    # Lancer le serveur + ouvrir le navigateur
ng g c nom-composant           # Générer un composant
ng build                       # Compiler pour la production
```

---

## Ressources

- [Documentation officielle Angular](https://angular.dev)
- [Guide des composants](https://angular.dev/guide/components)
- [Guide des templates et bindings](https://angular.dev/guide/templates)
- [Guide des Signals](https://angular.dev/guide/signals)
- [Guide des formulaires](https://angular.dev/guide/forms)
- [Référence de la CLI Angular](https://angular.dev/tools/cli)
