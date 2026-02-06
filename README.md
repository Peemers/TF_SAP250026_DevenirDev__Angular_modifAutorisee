# TFSAP250026DevenirDevAngular

Pour toutes les informations, veuillez vous référencer à la documentation officielle : [https://angular.dev](https://angular.dev)

## Prérequis

Avant de commencer, assurez-vous d'avoir :
- Node.js installé (version LTS recommandée)
- npm (fourni avec Node.js)
- Angular CLI installé globalement :

```bash
npm install -g @angular/cli
```

Vérifiez la version installée :

```bash
ng version
```

---
## Créer un nouveau projet Angular

### Commande de base

```bash
ng new nom-du-projet [options]
```

ou en forme abrégée :

```bash
ng n nom-du-projet [options]
```

### Options principales

| Option | Alias | Description |
|--------|-------|-------------|
| `--skip-tests` | | Ne génère pas les fichiers de test (*.spec.ts) |
| `--routing` | | Ajoute un module de routing à l'application |
| `--style` | | Définit le format de feuilles de style (`css`, `scss`, `sass`, `less`, `tailwind`) |
| `--standalone` | | Crée une application basée sur l'API standalone (sans NgModules) |
| `--ssr` | | Configure l'application pour le Server-Side Rendering (SSR) et la génération de sites statiques |
| `--skip-install` | | Ne pas installer automatiquement les dépendances |
| `--skip-git` | | Ne pas initialiser un dépôt Git |
| `--strict` | | Active la vérification stricte des types et des budgets de bundle |
| `--package-manager` | | Gestionnaire de packages à utiliser (`npm`, `yarn`, `pnpm`, `bun`) |
| `--prefix` | | Préfixe à appliquer aux sélecteurs (par défaut : `app`) |
| `--inline-style` | | Inclut les styles directement dans le fichier .ts |
| `--inline-template` | | Inclut le template directement dans le fichier .ts |
| `--minimal` | | Génère un workspace minimal sans frameworks de test (pour apprentissage) |

### Exemples

```bash
# Projet avec routing et SCSS
ng new mon-projet --routing --style=scss

# Projet standalone avec SSR
ng new mon-projet --standalone --ssr

# Projet minimal pour apprendre
ng new mon-projet --minimal --skip-tests
```

**Note :** Après la création, naviguez dans le dossier du projet :

```bash
cd nom-du-projet
```

---

## Démarrer le serveur de développement

### Commande de base

```bash
ng serve [options]
```

### Options principales

| Option | Alias | Description |
|--------|-------|-------------|
| `--open` | `-o` | Ouvre automatiquement l'application dans le navigateur |
| `--port` | | Spécifie le port du serveur (par défaut : 4200) |


### Exemples

```bash
# Démarre et ouvre dans le navigateur
ng serve --open

# ou en forme abrégée
ng serve -o

# Démarre sur le port 4242
ng serve --port 4242
```

L'application sera accessible par défaut à l'adresse : `http://localhost:4200/`

---

## Générer des composants et autres fichiers

### Créer un composant

```bash
ng generate component nom-du-composant [options]
```

ou en forme abrégée :

```bash
ng g c nom-du-composant [options]
```

### Options pour les composants

| Option | Description |
|--------|-------------|
| `--skip-tests` | Ne génère pas le fichier de test .spec.ts |
| `--inline-style` | Inclut les styles dans le fichier .ts |
| `--inline-template` | Inclut le template dans le fichier .ts |
| `--standalone` | Crée un composant standalone |
| `--style` | Type de feuille de style (`css`, `scss`, `sass`, `less`, `none`) |
| `--flat` | Crée les fichiers directement sans créer de dossier |
| `--export` | Exporte automatiquement le composant depuis le NgModule |
| `--skip-import` | Ne pas importer le composant dans le NgModule |
| `--change-detection` | Stratégie de détection de changement (`Default`, `OnPush`) |
| `--prefix` | Préfixe du sélecteur |
| `--selector` | Sélecteur HTML personnalisé |

### Exemples de composants

```bash
# Composant standard
ng generate component user-profile

# Composant sans tests
ng g c user-profile --skip-tests

# Composant flat (sans dossier)
ng g c header --flat
```

---
