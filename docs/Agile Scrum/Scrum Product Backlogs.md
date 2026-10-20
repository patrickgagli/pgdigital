# Product Backlog — PGDigital

## 1. Identification

| Information | Valeur |
| --- | --- |
| Produit | PGDigital — portfolio statique |
| Équipes propriétaires répertoriées | Product, Engineering et Design |
| Date de mise à jour | 2026-10-20 |
| Version | 1.0 |
| Références |  [Roadmap](Roadmap.md) |

Ce backlog rassemble les travaux issus des tâches déclarées et de l’audit. Les fonctionnalités cochées dans `docs/tasks.md` sont livrées selon l’état de ce suivi; cela ne garantit pas leur validation dans tous les scénarios. Les constats de l’audit concernent la révision `391b302`, tandis que le dépôt courant est `e46117a`. Ils sont donc marqués **À revalider** avant d’être considérés comme encore ouverts ou planifiés.

Les priorités P1/P2/P3 sont reprises de l’audit et ne représentent pas une échelle CVSS. Les estimations, responsables et dates ne sont pas documentés.

## 2. Objectif produit

Fournir un portfolio statique simple à déployer et parcourir, dont le contenu reste disponible en repli, et dont le contact est fiable, compréhensible, accessible et respectueux des données saisies.

## 3. Conventions et états

| État | Signification dans ce backlog |
| --- | --- |
| À revalider | Constat d’audit à vérifier sur la révision courante avant décision de mise en œuvre. |
| À faire | Besoin ouvert indiqué dans `docs/tasks.md`, à confirmer sur l’état courant. |
| À prioriser | Besoin identifié mais ordre d’exécution non validé par l’équipe. |
| Planifié | Accepté et sélectionné pour un sprint approuvé. |
| En cours | Travail commencé et suivi par l’équipe. |
| Fini | Critères d’acceptation satisfaits avec preuve vérifiable. |
| Écarté | Décision documentée de ne pas traiter l’élément. |

Les identifiants F01–U04 et M01 correspondent aux constats de l’audit afin de préserver leur traçabilité. Les éléments TODO proviennent des priorités ou contrôles non terminés listés dans `docs/tasks.md`.

## 4. Vue d’ensemble

| ID | Élément | Type | Priorité | État initial | Source |
| --- | --- | --- | --- | --- | --- |
| PB-00 | Revalider l’audit sur la révision courante | Story technique | Préalable | À faire | Audit `391b302`, HEAD `e46117a` |
| F01 | Vérifier le succès métier avant confirmation | Défaut | P1 | À revalider | Audit |
| F02 | Rendre le contact sûr pendant le chargement | Défaut | P1 | À revalider | Audit |
| F03 | Fiabiliser le stockage et la file de messages | Défaut | P1 | À revalider | Audit |
| S01 | Inventorier et mettre à niveau les dépendances | Story technique | P1 | À revalider | Audit |
| S02 | Définir la conservation et l’effacement des données | User story / conformité | P1 | À revalider | Audit |
| U01 | Corriger les contrastes du thème clair | Défaut | P1 | À revalider | Audit |
| U02 | Améliorer structure, clavier et carrousels | Défaut | P1 | À revalider | Audit |
| S03 | Maîtriser les ressources tierces et les politiques | Story technique | P2 | À revalider | Audit |
| P01 | Optimiser les images actives | Story technique | P2 | À revalider | Audit |
| P02 | Améliorer le démarrage et mesurer les performances | Story technique | P2 | À revalider | Audit |
| U03 | Respecter le mouvement réduit | Défaut | P2 | À revalider | Audit |
| M01 | Harmoniser le contenu de repli et la configuration | Défaut | P2 | À revalider | Audit |
| U04 | Renforcer la présentation et le référencement | User story | P3 | À revalider | Audit |
| TODO-01 | Décider du consentement aux cookies | Story technique / produit | À décider | À faire | Tâches |
| TODO-02 | Ajouter les métadonnées Open Graph et Twitter Card | Story technique | À prioriser | À faire | Tâches |
| TODO-03 | Évaluer données structurées, sitemap et robots.txt | Story technique | À prioriser | À faire | Tâches |
| TODO-04 | Réaliser les contrôles navigateur encore non cochés | Story technique / recette | Préalable de livraison | À faire | Tâches |

## 5. Éléments du backlog

### PB-00 — Revalider l’audit sur la révision courante

| Champ | Valeur |
| --- | --- |
| Type | Story technique |
| Priorité | Préalable |
| État | À faire |
| Dépendances | Aucune |
| Estimation / responsable | À estimer / à affecter |

**Description :** comparer les constats de l’audit, établi sur `391b302`, à l’état du dépôt `e46117a` et aux cases du suivi des tâches.

**Critères d’acceptation :**

- Chaque constat F01–U04 et M01 est marqué confirmé, corrigé, non reproduit ou hors périmètre, avec une preuve ou une justification.
- Les tâches précédemment déclarées terminées et les contrôles restés ouverts sont distingués.
- Les éléments confirmés sont conservés dans le backlog; ceux qui sont déjà corrigés sont clos avec référence au changement et à la vérification.

### F01 — Vérifier le succès métier avant confirmation

**Type / priorité / état :** Défaut / P1 / À revalider
**Description :** l’audit a observé qu’une réponse HTTP 200 avec `success: false` pouvait être annoncée comme un succès et effacer le formulaire.

**Critères d’acceptation :**

- HTTP 200 avec `success: false`, JSON invalide et HTTP 400 ne déclenchent jamais le message de succès ni l’effacement du message saisi.
- Seule une réponse métier positive conforme à l’API configure le succès.
- Le texte de succès annonce une prise en charge sans garantir la livraison finale d’un email.

### F02 — Rendre le contact sûr pendant le chargement

**Type / priorité / état :** Défaut / P1 / À revalider
**Description :** le démarrage peut attendre les deux JSON avant d’attacher les gestionnaires; en leur absence le formulaire HTML sans `method` ni `action` peut soumettre les données en GET.

**Critères d’acceptation :**

- Sous JSON lent, absent ou invalide, aucune donnée personnelle saisie ne peut apparaître dans l’URL.
- Le site affiche un état explicite et un moyen de contact utilisable lorsque JavaScript ou les JSON sont indisponibles.
- Une seule initialisation du formulaire a lieu après disponibilité de sa configuration.

### F03 — Fiabiliser le stockage et la file de messages

**Type / priorité / état :** Défaut / P1 / À revalider
**Description :** l’audit a relevé des succès de sauvegarde annoncés sans écriture, la mise en file de rejets définitifs, des suppressions silencieuses à la limite, l’absence de verrou de vidange et de timeout explicite.

**Critères d’acceptation :**

- Stockage bloqué ou plein n’est jamais présenté comme une sauvegarde réussie.
- Seules les erreurs réessayables sont mises en file; une file pleine est annoncée sans supprimer silencieusement les anciens messages.
- Les vidanges concurrentes et les soumissions pendant la vidange n’écrasent ni ne dupliquent les messages.
- Un timeout ou une erreur réactive le bouton et conserve le contenu jusqu’à un résultat sûr.
- Les cas de test couvrent 400, 429, 503, timeout, stockage interdit, file pleine et retour en ligne.

### S02 — Définir la conservation et l’effacement des données

**Type / priorité / état :** User story / P1 / À revalider
**User story :** En tant que visiteur, je veux comprendre comment mes données de contact sont stockées et pouvoir les supprimer, afin de maîtriser leur conservation sur mon appareil.

**Critères d’acceptation :**

- La sauvegarde, le destinataire, la finalité, la durée et le contact responsable sont expliqués avant ou au moment de la saisie, selon les décisions applicables.
- Le visiteur peut effacer son brouillon et annuler les messages en attente.
- Les données expirées ne sont ni restaurées ni envoyées automatiquement.
- Les conditions du fournisseur, les restrictions de domaine et les protections antispam sont vérifiées par les responsables, sans test abusif en production.

### S01 — Inventorier et mettre à niveau les dépendances

**Type / priorité / état :** Story technique / P1 / À revalider

**Critères d’acceptation :** inventaire exact des bibliothèques exécutées; avis applicables examinés; versions et documentation cohérentes; compatibilité vérifiée sur ancres, responsive, carrousels et contact; aucune bibliothèque minifiée modifiée manuellement et aucune version dupliquée.

### U01 — Corriger les contrastes

**Type / priorité / état :** Défaut / P1 / À revalider

**Critères d’acceptation :** contraste mesuré pour texte courant (4,5:1), grand texte et éléments graphiques concernés (3:1); inclure surfaces réelles, deux thèmes, champs, messages, boutons, focus et états désactivés.

### U02 — Améliorer structure, clavier et carrousels

**Type / priorité / état :** Défaut / P1 / À revalider

**Critères d’acceptation :** repères sémantiques et titres structurés; navigation clavier sans focus masqué; boutons Owl nommés et annoncés avec leur état; menu refermable avec Échap et focus restitué; défilement contrôlable nativement; descriptions des outils disponibles sans survol; test lecteur d’écran et zoom 200 %.

### S03 — Maîtriser les ressources tierces et les politiques

**Type / priorité / état :** Story technique / P2 / À revalider

**Critères d’acceptation :** versions tierces fixées ou ressources locales maîtrisées; SRI configuré lorsque possible; CSP testée avec Alpine et le formulaire; capacités et limites de GitHub Pages vérifiées pour les en-têtes; aucune permission ou source inutile; fonctionnement des ressources restantes vérifié.

### P01 — Optimiser les images actives

**Type / priorité / état :** Story technique / P2 / À revalider

**Critères d’acceptation :** viser une réduction d’au moins 50 % des 1 065 272 octets d’images actives mesurés dans l’audit; conserver une qualité acceptable à densité ×2; réserver les dimensions; différer les images hors écran sans pénaliser le LCP; mettre à jour HTML et rendu JSON et vérifier tous les carrousels.

### P02 — Améliorer le démarrage et mesurer les performances

**Type / priorité / état :** Story technique / P2 / À revalider

**Critères d’acceptation :** aucun préchargeur bloquant durablement le contenu; chargement JSON borné avec état d’échec; scripts inutiles retirés uniquement après vérification; ordre d’initialisation conservé; comparaisons reproductibles à cache froid et réseau mobile. Cibles proposées au 75e percentile : LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1.

### U03 — Respecter le mouvement réduit

**Type / priorité / état :** Défaut / P2 / À revalider

**Critères d’acceptation :** pas d’autoplay sous `prefers-reduced-motion`; mouvements du hero, compteurs et transitions adaptés; pause/reprise disponible et contenus consultables manuellement.

### M01 — Harmoniser le contenu de repli et la configuration

**Type / priorité / état :** Défaut / P2 / À revalider

**Critères d’acceptation :** contenu JSON et HTML de repli cohérents; liens sociaux génériques absents tant que les profils réels ne sont pas configurés; destinataire de secours validé; configuration du formulaire et README à jour; vérifier HTTP, JSON indisponible et `file://`.

### U04 — Renforcer la présentation et le référencement

**Type / priorité / état :** User story / P3 / À revalider

**Critères d’acceptation :** appel à l’action vers Contact; titre et description français; métadonnées Open Graph et Twitter Card et image locale de partage; seules des réalisations réelles et autorisées sont ajoutées; clavier et mobile vérifiés.

### TODO-01 — Décider du consentement aux cookies

**Type / état :** Story technique / À faire selon `docs/tasks.md`

**Critères d’acceptation :** décision d’intégrer ou non; ne pas annoncer la fonctionnalité comme active tant que le balisage et l’API `/api/cookie-consent/` ne sont pas disponibles et testés.

### TODO-02 — Ajouter les métadonnées de partage

**Type / état :** Story technique / À faire selon `docs/tasks.md`

**Critères d’acceptation :** Open Graph et Twitter Card cohérents avec le contenu français; image de partage réelle et accessible; validation après publication.

### TODO-03 — Évaluer les ressources SEO complémentaires

**Type / état :** Story technique / À faire selon `docs/tasks.md`

**Critères d’acceptation :** décision argumentée sur les données structurées, sitemap et `robots.txt` adaptée au site monopage; ne pas ajouter de données non vérifiées.

### TODO-04 — Réaliser les contrôles navigateur ouverts

**Type / état :** Recette / À faire selon `docs/tasks.md`

**Critères d’acceptation :** console et ressources; six ancres et état actif; menu et `aria-expanded`; carrousels, icônes et titre Alpine; validation et `mailto:`; HTTP et `file://`; brouillon et file; contact à 390 × 844 et 320 × 568. Ajouter les scénarios d’échec décrits par l’audit.

## 6. Affinage et définition de fini

Avant de planifier un élément :

- vérifier qu’il est encore pertinent sur la révision courante;
- préciser la valeur attendue, les critères observables et les dépendances;
- estimer l’effort et désigner un responsable lors de la planification;
- définir des tests qui n’envoient pas de messages réels et n’abusent pas le service externe;
- conserver une preuve de validation et mettre à jour `docs/tasks.md`.

**Responsable de l’ordre du backlog et cadence d’affinage :** à confirmer.

Un élément ne peut être marqué Fini que si ses critères sont vérifiés, les tests pertinents réussissent, les documents liés sont à jour et aucun défaut bloquant ne subsiste sans décision explicite.

## 7. Historique des mises à jour

| Date | Modifications | Motif |
| --- | --- | --- |
| 2026-10-20 | Backlog établi à partir du suivi des tâches et des constats de l’audit; constats marqués à revalider en raison de l’écart de révision. | Préserver la traçabilité sans supposer que les défauts sont encore présents. |
