---
title: documentation
description: Documentation générale du projet.
product: pgdigital
version: 1.0
status: current
owners:
  - Product
  - Engineering
  - Design
last_updated: 2026-09-10
tags: [documentation, projet, pgdigital]
---

# Documentation technique

## Vue d'ensemble

PGDigital est un portfolio statique composé d'une page unique. Le site est déployable tel quel sur GitHub Pages : il n'utilise ni compilation, ni gestionnaire de paquets, ni serveur applicatif.

`index.html` contient le contenu et charge les feuilles de style, les bibliothèques du navigateur et `js/custom.js`. Les interactions sont entièrement exécutées côté client.

## Sections et navigation

| Ancre     | Section     | Libellé du menu |
| --------- | ----------- | --------------- |
| `slide01` | Accueil     | Accueil         |
| `slide02` | À propos    | À propos        |
| `slide03` | Services    | Services        |
| `slide04` | Compétences | Compétences     |
| `slide05` | Outils      | Outils          |
| `slide06` | Contact     | Contact         |

Pour chaque section, les valeurs suivantes doivent rester synchronisées :

- l'attribut `data-section` de la section ;
- l'attribut `data-menuanchor` de l'entrée de navigation ;
- la cible `href` de l'entrée de navigation ;
- le tableau `anchors` configuré dans `js/custom.js`.

fullPage.js active la navigation verticale et les points latéraux. Sous 768 px de largeur, ou sous 600 px de hauteur, son mode responsive rétablit un défilement normal.

## Comportements actifs

### Chargement et animations

- Le préchargeur disparaît après l'événement `load` de la fenêtre.
- jquery.inview déclenche les classes Animate.css définies dans `data-animate`.
- Les animations sont échelonnées par intervalles de 50 ms.
- Les compteurs de la section À propos sont animés une fois lors de leur première apparition.
- Alpine.js affiche progressivement le texte `PGDigital PORTFOLIO` dans la section d'accueil.

### Carrousels

Owl Carousel gère quatre groupes : faits, services, compétences et outils. Les listes affichent une carte sur mobile, deux à partir de 576 px lorsque la configuration le prévoit, puis trois à partir de 992 px. Les cinq cartes Services conservent une hauteur uniforme, disposent de boutons précédent/suivant accessibles et le carrousel est recalculé au chargement et lors d'un redimensionnement. Les carrousels Compétences et Outils utilisent la lecture automatique.

### Menu mobile

Sous 768 px, le bouton de navigation affiche ou masque le menu avec jQuery. La valeur `aria-expanded` est mise à jour à chaque action et le menu se referme après la sélection d'un lien.

### Formulaire de contact

Le formulaire ne transmet aucune donnée à un serveur. À la soumission :

1. la validation HTML native vérifie les champs obligatoires et l'adresse email ;
2. le sujet et le corps du message sont encodés ;
3. un lien `mailto:` ouvre l'application de messagerie du visiteur ;
4. la zone `#form-messages`, déclarée comme région de statut, annonce l'ouverture de l'application.

## Dépendances

| Dépendance           | Source          | Usage actuel                               |
| -------------------- | --------------- | ------------------------------------------ |
| Bootstrap            | Fichiers locaux | Grille, mise en page et composants visuels |
| Bootstrap Icons 1.11 | CDN jsDelivr    | Icônes du menu et des liens sociaux        |
| jQuery               | Fichier local   | Initialisation et interactions principales |
| fullPage.js          | Fichier local   | Navigation entre les six sections          |
| Owl Carousel         | Fichier local   | Carrousels responsives                     |
| jquery.inview        | Fichier local   | Détection de visibilité                    |
| Animate.css          | Fichier local   | Effets d'apparition                        |
| Alpine.js 3.x        | CDN unpkg       | Animation de saisie du titre d'accueil     |
| Raleway              | Google Fonts    | Typographie principale                     |

`js/scripts.js` et `js/cookie_consent.js` sont conservés dans le dépôt, mais aucun des deux n'est chargé par `index.html`. Le mode sombre et le bandeau de consentement présents dans ces fichiers ne font donc pas partie de l'expérience active.

## Responsive et accessibilité

Les styles généraux sont définis dans `css/style.css`. Les adaptations de largeur et de hauteur se trouvent dans `css/responsive.css`, avec des paliers principaux à 1440, 1199, 991 et 767 px.

Sur mobile, l'en-tête devient fixe et la navigation est repliée dans un menu dont les cibles tactiles mesurent au moins 44 px. Les sections utilisent une hauteur minimale égale à la hauteur visible de l'écran et s'agrandissent lorsque leur contenu l'exige. Hors accueil, leur contenu est aligné en haut avec un espace d'environ 24 px sous le header fixe ; l'accueil reste centré verticalement.

Sous 768 px, les liens sociaux latéraux sont masqués pour ne pas recouvrir le contenu. Sous 576 px, les champs Nom et Prénom sont empilés, les composants utilisent des espacements plus compacts et les cartes Compétences sont réduites. Le pied de page reste dans le flux normal. Les vues à 320 x 568 et 390 x 844 doivent rester sans débordement horizontal, titre tronqué ou chevauchement.

L'interface actuelle comprend notamment des textes alternatifs pour les images, des libellés ARIA sur les champs du formulaire, un état `aria-expanded` sur le menu mobile, des indications `autocomplete` et une région `aria-live` pour le retour du formulaire.

## Référencement actuel

Le document fournit un titre, une description, des mots-clés, un auteur, une icône et une configuration de viewport. Il ne contient actuellement ni métadonnées Open Graph ou Twitter Card, ni données structurées, ni sitemap, ni fichier `robots.txt`.

## Validation

Exécuter les contrôles disponibles après toute modification :

```powershell
node --check js/custom.js
node --check js/scripts.js
node --check js/cookie_consent.js
npx --yes html-validate@latest index.html
```

État vérifié au 2026-09-10 : les trois contrôles de syntaxe JavaScript réussissent. La validation HTML signale trois liens sociaux sans nom accessible (`wcag/h30`) et une ligne contenant des espaces de fin (`no-trailing-whitespace`).

Compléter ces contrôles par un test manuel sur ordinateur, à 390 x 844 et à 320 x 568 :

- absence d'erreur dans la console et de ressource locale introuvable ;
- activation correcte des six ancres ;
- ouverture, fermeture et état accessible du menu mobile ;
- rendu du titre Alpine.js, des icônes et des carrousels ;
- validation du formulaire et ouverture d'un email prérempli ;
- absence de débordement ou de chevauchement dans la section Contact.

## Règles de maintenance

- Conserver une exécution directe depuis `index.html`.
- Ne pas modifier les bibliothèques minifiées ou vendues localement.
- Placer les styles généraux dans `css/style.css` et les corrections responsives dans `css/responsive.css`.
- Utiliser les ressources locales sous `img/` lorsque cela est possible.
- Ne pas ajouter une seconde version d'une bibliothèque déjà chargée.
