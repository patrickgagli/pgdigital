# Structure du projet — PGDigital

## 1. Identification

| Information | Valeur |
| --- | --- |
| Nom du projet | PGDigital — portfolio statique |
| Commanditaire | Patrick G. |
| Équipes propriétaires répertoriées | Product, Engineering et Design |
| Date de mise à jour | 2026-10-20 |
| Version | 1.0 |
| Auteur | Patrick G. |

## 2. Objectif et périmètre

Ce document décrit l’organisation du dépôt, les responsabilités techniques connues et les éléments de gouvernance disponibles pour le projet PGDigital.

Le projet couvre un portfolio statique à page unique, son contenu, ses interactions côté navigateur et sa documentation. Le site est destiné à être publié sur GitHub Pages sans compilation ni serveur applicatif. Les responsables nominatifs, les règles de décision, les fréquences de communication et les disponibilités ne sont pas précisés dans les documents de référence.

## 3. Principes d’organisation

- Garder `index.html` comme point d’entrée et conserver une exécution directe du site statique.
- Séparer le contenu variable dans les fichiers JSON, tout en maintenant le contenu de repli correspondant dans `index.html`.
- Garder les comportements actifs dans `js/custom.js`, le chargement et le rendu des données dans `js/data.js`, et la préférence de thème dans `js/scripts.js`.
- Placer les styles généraux dans `css/style.css` et les adaptations aux dimensions d’écran dans `css/responsive.css`.
- Réutiliser les bibliothèques présentes; ne pas modifier les bibliothèques minifiées et ne pas charger de versions en double.
- Vérifier la présence des ressources locales ajoutées sous `img/`.
- Ne pas considérer les fichiers de consentement aux cookies comme une fonctionnalité intégrée.

## 4. Organisation et rôles

### Équipes propriétaires

Les documents généraux répertorient Product, Engineering et Design comme propriétaires du projet. Ils ne détaillent pas la répartition de leurs responsabilités ni les personnes affectées.

| Équipe / rôle connu | Contribution au projet | Responsable nominatif |
| --- | --- | --- |
| Product | Équipe propriétaire répertoriée; responsabilité précise à confirmer. | À confirmer |
| Engineering | Équipe propriétaire répertoriée; responsabilité précise à confirmer. | À confirmer |
| Design | Équipe propriétaire répertoriée; responsabilité précise à confirmer. | À confirmer |
| Propriétaire du portfolio | Valider les contenus et le besoin de contact; identité et délégations à confirmer. | À confirmer |

### Parties prenantes du système

| Partie prenante | Interaction avec le projet |
| --- | --- |
| Visiteur | Parcourt les sections du portfolio et peut utiliser le formulaire de contact. |
| Mainteneurs du dépôt | Modifient le contenu, les styles, les comportements et la documentation. Les personnes et affectations ne sont pas indiquées. |
| Fournisseur du formulaire, si activé | Reçoit les requêtes JSON lorsque l’endpoint et la clé sont configurés. Le fournisseur n’est pas identifié. |

### Matrice de responsabilités à compléter

Les documents disponibles ne permettent pas d’attribuer un responsable final (A) à chaque activité. Cette matrice doit être validée par le commanditaire avant d’être utilisée pour la gouvernance.

| Activité | Product | Engineering | Design | Propriétaire du portfolio |
| --- | --- | --- | --- | --- |
| Valider le périmètre et les besoins | À attribuer | À attribuer | À attribuer | À confirmer |
| Valider les contenus du portfolio | À attribuer | À attribuer | À attribuer | À confirmer |
| Maintenir le code et vérifier les comportements | À attribuer | À attribuer | À attribuer | À confirmer |
| Valider l’expérience visuelle et responsive | À attribuer | À attribuer | À attribuer | À confirmer |
| Configurer et valider le service de formulaire | À attribuer | À attribuer | À attribuer | À confirmer |
| Publier et accepter une mise en production | À attribuer | À attribuer | À attribuer | À confirmer |

## 5. Gouvernance, décisions et communication

Les documents de référence ne précisent pas d’instance de gouvernance, de cadence de réunion, de canal officiel, de processus d’escalade ni de décideur par domaine. Ces éléments restent à définir par les équipes propriétaires.

Le dépôt distingue les documents de conception, de planification et les documents Scrum. Les décisions, validations et changements importants devraient être consignés dans les documents de suivi concernés et reflétés dans les documents techniques lorsqu’ils modifient le fonctionnement du site.

| Sujet à définir | État |
| --- | --- |
| Commanditaire et approbateurs | À confirmer |
| Décideurs pour le périmètre, le contenu et l’architecture | À confirmer |
| Réunions, participants et fréquence | À confirmer |
| Canal de communication et emplacement des comptes rendus | À confirmer |
| Processus d’escalade et délai de décision | À confirmer |

## 6. Processus de travail et responsabilités techniques

### Flux d’exécution du site

1. Le navigateur charge les styles déclarés dans `index.html`.
2. Alpine.js est différé; les autres scripts sont chargés à la fin du document.
3. jQuery et les bibliothèques locales sont chargés avant `js/data.js`, puis `js/custom.js`.
4. `js/data.js` récupère `json/site-data.json` et `json/contact-form.json`, met à jour les contenus concernés et expose `window.PGDigital.ready`.
5. `js/custom.js` attend cette promesse avant d’initialiser les carrousels, fullPage.js, les gestionnaires d’événements et le formulaire.
6. Après l’événement `load`, le préchargeur disparaît et les animations de visibilité sont activées.

### Responsabilités des fichiers et dossiers

| Chemin | Responsabilité |
| --- | --- |
| `index.html` | Point d’entrée, contenu des six sections, navigation, formulaire, URL canonique, données structurées JSON-LD et chargement des ressources. |
| `sitemap.xml` | URL canonique de l’unique page indexable, sans fragments de navigation. |
| `robots.txt` | Règles d’exploration et URL absolue du sitemap; nécessite une publication à la racine du domaine pour être pris en compte par les robots. |
| `css/style.css` | Identité visuelle, typographie, mise en page et styles des composants. |
| `css/responsive.css` | Surcharges selon les dimensions d’écran et comportement mobile. |
| `js/custom.js` | fullPage.js, carrousels, animations, compteurs, menu mobile et formulaire. |
| `js/data.js` | Chargement des fichiers JSON et rendu des sections pilotées par les données. |
| `js/scripts.js` | Bascule du mode sombre et préférence persistée localement. |
| `json/site-data.json` | Faits, services, compétences, outils et coordonnées de contact. |
| `json/contact-form.json` | Endpoint, clé d’accès, clés de stockage local et messages de statut du formulaire. |
| `img/competences/` | Illustrations de la section Compétences. |
| `img/tools/` | Illustrations de la section Outils. |
| `docs/` | Documentation technique, de conception, de planification et de suivi du projet. |

### Dépendances et ressources externes

Bootstrap, fullPage.js, Owl Carousel, jQuery, jquery.inview, scrolloverflow et Animate.css sont conservés localement. Bootstrap Icons, Alpine.js et Google Fonts sont chargés depuis des CDN; une ouverture hors ligne peut donc ne pas afficher certaines ressources externes.

## 7. Outils et espaces de travail

| Espace | Usage connu | Remarque |
| --- | --- | --- |
| Dépôt du projet | Code du site, ressources et documentation. | Hébergement du dépôt et règles d’accès à confirmer. |
| `docs/Analyse Conception/` | Documents d’analyse, architecture, structure et conception. | Références de conception. |
| `docs/Agile Scrum/` | Documents de planification et de suivi Scrum. | Responsables et cadence à confirmer. |
| `docs/Extra/` | Ressources complémentaires du projet. | Convention de classement à préciser si nécessaire. |
| `docs/tasks.md` | État vérifié et prochain travail du projet, selon la structure technique. | Vérifier la mise à jour lors des changements importants. |
| GitHub Pages | Publication prévue du site statique. | Procédure exacte et responsable de publication à confirmer. |

## 8. Arborescence du projet

Arborescence représentative du dépôt. Les bibliothèques locales et ressources sont regroupées pour préserver la lisibilité.

```text
pgdigital/
├── index.html
├── sitemap.xml
├── robots.txt
├── README.md
├── css/
│   ├── style.css
│   ├── responsive.css
│   ├── [styles des bibliothèques locales]
│   └── cookie_consent.css (non intégré)
├── js/
│   ├── custom.js
│   ├── data.js
│   ├── scripts.js
│   ├── [bibliothèques JavaScript locales]
│   └── cookie_consent.js (non intégré)
├── json/
│   ├── site-data.json
│   └── contact-form.json
├── img/
│   ├── competences/
│   ├── tools/
│   └── random/
├── fonts/
└── docs/
    ├── structure.md
    ├── tasks.md
    ├── Analyse Conception/
    ├── Agile Scrum/
    └── Extra/
```

Les sous-dossiers de `docs/Analyse Conception/` comprennent notamment les documents d’analyse des besoins, d’architecture, de cahier des charges, de structure, de modélisation et d’UX/UI. Les fichiers et sous-dossiers peuvent évoluer; cette arborescence est un repère et non une liste exhaustive.

## 9. Invariants et éléments non intégrés

- Le site doit rester statique et fonctionner lors de l’ouverture directe de `index.html`.
- Si les fichiers JSON ne peuvent pas être chargés, notamment en `file://`, le contenu HTML statique doit rester disponible.
- Toute modification du contenu piloté par les données doit être reportée dans `json/site-data.json` et dans le contenu de repli correspondant de `index.html`.
- Les ancres `slide01` à `slide06` doivent rester synchronisées entre les sections HTML, la navigation et le tableau `anchors` de `js/custom.js`.
- Les comportements actifs restent dans `js/custom.js`; le thème actif reste géré par `js/scripts.js`.
- `js/cookie_consent.js` et `css/cookie_consent.css` ne sont pas chargés par `index.html`. Le script attend une API `/api/cookie-consent/` absente du dépôt; ces fichiers ne doivent pas être décrits comme une fonctionnalité livrée.
- Toute ressource locale ajoutée doit exister à l’emplacement référencé et ne pas dupliquer une bibliothèque déjà chargée.

## 10. Continuité, points ouverts et risques organisationnels

| Point / risque | Impact | Action attendue | Statut |
| --- | --- | --- | --- |
| Responsabilités et approbateurs non attribués | Décisions et validations difficiles à achever. | Désigner un responsable et un approbateur par activité. | À confirmer |
| Cohérence des contenus JSON et de leur repli HTML | Le site peut afficher des informations différentes selon le mode de chargement. | Inclure la vérification des deux sources dans la maintenance du contenu. | Règle connue |
| Dépendance aux CDN | Certaines ressources peuvent manquer en mode hors ligne. | Décider si cette limitation est acceptable pour les usages prévus. | À confirmer |
| Envoi de contact dépendant d’une configuration externe | L’envoi distant n’est pas actif par défaut et dépend d’un endpoint configuré. | Confirmer le fournisseur, la configuration et le responsable opérationnel. | À confirmer |
| Absence de relais et procédure d’exploitation documentés | Les mises à jour et incidents peuvent dépendre d’une seule personne. | Définir les contacts, les accès et le transfert des connaissances. | À confirmer |

## 11. Vérification et validation

- [ ] Les personnes responsables et approbateurs sont identifiés.
- [ ] Les rôles d’équipe répertoriés sont confirmés et leurs responsabilités attribuées.
- [ ] Les fichiers JSON et le repli statique restent cohérents.
- [ ] Les six ancres sont synchronisées entre HTML, navigation et configuration.
- [ ] Les dépendances locales et CDN sont documentées; les fichiers de consentement restent identifiés comme non intégrés.
- [ ] La procédure de publication et les contacts d’exploitation sont définis.

| Validateur | Rôle | Validation / remarques | Date |
| --- | --- | --- | --- |
| À confirmer | Commanditaire / représentant Product | À valider | À confirmer |
| À confirmer | Représentant Engineering | À valider | À confirmer |
| À confirmer | Représentant Design | À valider | À confirmer |

## 12. Historique des versions

| Version | Date | Auteur | Modifications |
| --- | --- | --- | --- |
| 1.0 | 2026-10-20 | Patrick G. |  |
