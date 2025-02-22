# AdventCalendarJS

Ce petit module vous permet de creer rapidement et simplement un Calendrier de l'avent sur internet. Ce module utile le langage HTML, Javascript pour recuperer les données et le langage Markdown pour les données de chaque jour.

## Installation

Pour installer ce module sur votre serveur il suffit simplement de cloner ce repertoire à la racine de votre serveur ou dossier cible souhaité.

> git clone https://github.com/simoncourtin/AdventCalendarJS.git

## Paramétrage

### Titre et localisation des données

Pour parametrer le calendrier ouvrez le fichier **param.js** et modifier les données.

Le champs *tittle* est le titre qui s'affichera en haut de votre calendrier

Le champs *month* est le mois d'execution de votre calendrier

Le champs *data_folder* est le dossier ou sont stockés vos données pour chaque jour de votre calendrier

### Position des jours du calendrier

Pour melanger les jours ouvrez le fichier **index.html**, et interchanger la position des lignes de la balise *<div class="day-container">* :

```html
...
<div class="day">3</div>
<div class="day">20</div>
<div class="day">12</div>
 ...
 ```

Pour ajouter des jours ajouter une de ces ligne avec le numéro du jour voulu.

### Remplissage de votre calendrier

Pour chaque jour le script Javascript fait le lien avec un fichier *.md* situé dans le dossier de donnée. Exemple pour le jour 12 le fichier de contenu de ce jour sera *12.md*

**Attention, si vous ajouter des jours, n'oublier pas d'ajouter le ficher .md correspondant.**

Dans chaque fichier *.md*, libre à vous d'ajouter le contenu que vous souhaiter en respectant les règles de la notation [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

Il est possible alors d'écrire du texte, de mettre des images et des vidéos.
