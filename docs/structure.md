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
last_updated: 2026-09-11
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
│   ├── cookie_consent.css (non intégré)
│   └── bibliothèques CSS locales
├── js/
│   ├── custom.js
│   ├── data.js
│   ├── scripts.js
│   ├── cookie_consent.js (non intégré)
│   └── bibliothèques JavaScript locales
├── json/
│   ├── site-data.json
│   └── contact-form.json
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
| `js/data.js`            | Chargement des fichiers `json/` et rendu des sections pilotées par les données                       |
| `json/site-data.json`   | Données de contenu : faits, services, compétences, outils et coordonnées                              |
| `json/contact-form.json`| Configuration du formulaire : endpoint, clé d'accès, clés de stockage local et messages              |
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
3. jQuery charge les bibliothèques locales avant `js/data.js` puis `js/custom.js`.
4. `js/data.js` récupère `json/site-data.json` et `json/contact-form.json`, remplace le contenu des sections pilotées par les données et expose la promesse `window.PGDigital.ready`.
5. `js/custom.js` attend cette promesse, puis initialise les carrousels, fullPage.js, les gestionnaires d'événements et le formulaire de contact.
6. Après le chargement complet de la fenêtre, le préchargeur disparaît et les animations de visibilité sont armées.

## Invariants d'architecture

- Le site doit rester statique et fonctionnel par ouverture directe de `index.html`.
- Le contenu statique de `index.html` sert de repli : il reste affiché si les fichiers `json/` ne peuvent pas être chargés, notamment en `file://`.
- Toute modification du contenu piloté par les données doit être appliquée à la fois dans `json/site-data.json` et dans le repli statique de `index.html`.
- Les six ancres `slide01` à `slide06` doivent rester identiques dans le HTML et la configuration fullPage.js.
- Le comportement actif appartient à `js/custom.js`.
- Les corrections de présentation spécifiques aux viewports appartiennent à `css/responsive.css`.
- Les nouvelles ressources locales doivent être placées sous `img/` et leur présence doit être vérifiée.
- Une bibliothèque existante doit être réutilisée sans charger de version en double.

## Fichiers présents mais non intégrés

- `js/scripts.js` est chargé par `index.html` et gère le mode sombre ainsi que sa préférence locale.
- `js/cookie_consent.js` et `css/cookie_consent.css` concernent un bandeau de consentement, mais ne sont pas référencés par `index.html`. Le script dépend aussi d'une API serveur `/api/cookie-consent/` absente de ce dépôt.

Ces fichiers ne doivent pas être décrits comme des fonctionnalités livrées tant qu'ils ne sont pas intégrés et testés.
