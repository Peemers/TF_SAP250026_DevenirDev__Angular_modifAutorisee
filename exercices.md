# Exercices

## Exercice 01 - Créer son profil

> features/exercices/exo01

Vous devez créer une application pour permettre aux utilisateurs de créer leur propre profil personnel.
L'application doit contenir les champs suivants: 
- Nom complet
- Adresse email
- Date de naissance
- Genre
- Langues parlées
- URL de la photo de profil (optionnel)

Vous avez carte blanche pour le style visuel de la page HTML.

Pour rappel:
- Création d'un composant : `ng g c chemin/nom-du-composant`

## Exercice 02 - Créer son profil dynamique

> features/exercices/exo02

Vous devez créer une application séparée en deux parties.

La partie de gauche affiche un formulaire reprenant les informations du premier exercices.
La partie de droite affiche l'équivalent de l'exercice 1 par rapport aux données entrées à gauche.

La complétion du profil doit se faire en instantanée.

## Exercice 03 - Le chronomètre basique

Vous devez créer une application qui permet de gérer un chronomètre.
Vous pouvez : démarrer, mettre sur pause et reset le chronomètre.
Astuce: cherchez du côté du setInterval

## Exercice 04 - Menu exercice

Vous devez réimplémenter le routing pour les exercices.
Vous devez ajouter à la navbar les différents liens vers les exercices créés (1-4).
Vous devez créer un composant Exercices.
Vous devez créer un routing enfant pour les exercices.

Vous ne devez utiliser la balise <router-outlet> dans le composant Exercices (dans l'affichage, les exercices (1-4) remplace la vue du composant Exercices)