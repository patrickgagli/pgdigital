---
title: structure
description: Document de structure du projet.
product: pgdigital
version: 1.0
status: current
owners:
  - Product
  - Engineering
  - Design
last_updated: 2026-09-10
tags: [structure organisationnelle, conception, architecture, planification]
---

# Structure du projet

## Arborescence

```text
pgdigital/
├── index.html
├── README.md
├── css/
│   ├── style.css
│   ├── responsive.css
│   ├── cookie_consent.css
│   └── bibliothèques CSS locales
├── js/
│   ├── custom.js
│   ├── scripts.js
│   ├── cookie_consent.js
│   └── bibliothèques JavaScript locales
├── img/
│   ├── competences/
│   ├── tools/
│   └── ressources générales
├── fonts/
└── docs/
    ├── documentation.md
    ├── structure.md
    ├── tasks.md
    └── labo.md
```

## Responsabilités des fichiers

| Chemin                  | Responsabilité                                                                                       |
| ----------------------- | ---------------------------------------------------------------------------------------------------- |
| `index.html`            | Point d'entrée unique, contenu des six sections, navigation, formulaire et chargement des ressources |
| `css/style.css`         | Identité visuelle, typographie, mise en page et styles des composants                                |
| `css/responsive.css`    | Surcharges liées aux dimensions de l'écran et comportement mobile                                    |
| `js/custom.js`          | fullPage.js, carrousels, animations, compteurs, menu mobile et formulaire de contact                 |
| `img/competences/`      | Illustrations de la section Compétences                                                              |
| `img/tools/`            | Illustrations de la section Outils                                                                   |
| `docs/documentation.md` | Référence fonctionnelle et technique canonique                                                       |
| `docs/tasks.md`         | État vérifié et prochain travail du projet                                                           |
| `docs/labo.md`          | Zone non canonique réservée aux essais et notes temporaires                                          |

## Bibliothèques vendues localement

Les fichiers Bootstrap, fullPage.js, Owl Carousel, jQuery, jquery.inview, scrolloverflow et Animate.css sont des dépendances du navigateur conservées dans le dépôt. Les fichiers minifiés ne doivent pas être modifiés directement.

Bootstrap Icons, Alpine.js et Google Fonts sont chargés depuis des CDN. Une ouverture hors ligne peut donc afficher la page sans ces ressources externes.

## Flux d'exécution

1. Le navigateur charge les styles depuis `index.html`.
2. Alpine.js est différé ; les autres scripts sont chargés en fin de document.
3. jQuery charge les bibliothèques locales avant `js/custom.js`.
4. `js/custom.js` initialise les carrousels, fullPage.js et les gestionnaires d'événements lorsque le DOM est prêt.
5. Après le chargement complet de la fenêtre, le préchargeur disparaît et les animations de visibilité sont armées.

## Invariants d'architecture

- Le site doit rester statique et fonctionnel par ouverture directe de `index.html`.
- Les six ancres `slide01` à `slide06` doivent rester identiques dans le HTML et la configuration fullPage.js.
- Le comportement actif appartient à `js/custom.js`.
- Les corrections de présentation spécifiques aux viewports appartiennent à `css/responsive.css`.
- Les nouvelles ressources locales doivent être placées sous `img/` et leur présence doit être vérifiée.
- Une bibliothèque existante doit être réutilisée sans charger de version en double.

## Fichiers présents mais inactifs

- `js/scripts.js` contient une logique de mode sombre, mais n'est pas référencé par `index.html`.
- `js/cookie_consent.js` et `css/cookie_consent.css` concernent un bandeau de consentement, mais ne sont pas référencés par `index.html`.

Ces fichiers ne doivent pas être décrits comme des fonctionnalités livrées tant qu'ils ne sont pas intégrés et testés.
