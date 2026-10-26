# Sprint Backlog — PGDigital

## Identification

| Information | Valeur |
| --- | --- |
| Produit | PGDigital — portfolio statique |
| Équipes propriétaires répertoriées | Product, Engineering et Design |
| Sprint | À définir — proposition non planifiée |
| Date de mise à jour | 2026-10-20 |
| Version | 1.0 |
| Références | [Product Backlog](Scrum%20Product%20Backlogs.md), [Roadmap](Roadmap.md), [Tâches](../tasks.md), [Audit](../Extra/Audit.md) |

Ce document présente une proposition de périmètre pour le prochain sprint. Aucun sprint en cours, date, durée, capacité, participant ou engagement d’équipe n’est indiqué dans les sources. Les éléments ci-dessous ne sont donc pas réputés acceptés ou planifiés.

Les constats de l’audit concernent la révision `391b302`; le dépôt courant est `e46117a`. La première tâche proposée consiste à vérifier ces constats sur la révision courante et à ne corriger que ceux qui sont encore présents.

## 1. Proposition d’objectif de sprint

**Objectif proposé :** confirmer l’état des défauts P1 du parcours de contact et, si ces défauts sont présents sur la révision courante, empêcher les succès trompeurs, la fuite de données de formulaire dans l’URL et la perte silencieuse des messages.

**Statut :** à discuter lors de la planification.
**Réussite attendue :** scénarios d’échec et de succès validés avec des réponses simulées, sans envoi réel de message ni affirmation de sauvegarde non vérifiée.

## 2. Cadre, capacité et contraintes

| Information | Valeur |
| --- | --- |
| Début / fin / durée | À définir |
| Participants | À désigner |
| Capacité | À estimer par l’équipe |
| Responsable produit / approbateur | À confirmer |
| Environnement de test | À définir; utiliser des réponses simulées pour les tests de soumission |
| Dépendance externe | Contrat et configuration Web3Forms à vérifier; éviter les envois réels pendant les tests |

**Contraintes :** préserver les six ancres et le comportement mobile; ne pas modifier les bibliothèques minifiées vendues; conserver le déploiement statique; ne pas exposer de clé ou de données personnelles dans les journaux ni dans le dépôt.

## 3. Éléments candidats au sprint

| ID | Élément du Product Backlog | Priorité | Résultat visé | Statut de planification |
| --- | --- | --- | --- | --- |
| PB-00 | Revalider l’audit sur la révision courante | Préalable | Statut vérifié pour F01–F03, S02 et M01. | À discuter |
| F01 | Vérifier le succès métier avant confirmation | P1 | Aucun faux succès; formulaire non effacé sur un rejet. | À discuter si confirmé |
| F02 | Rendre le contact sûr pendant le chargement | P1 | Aucun GET contenant des données personnelles; contact utilisable en cas de panne JSON/scripts. | À discuter si confirmé |
| F03 | Fiabiliser stockage et file | P1 | Pas de sauvegarde ou d’envoi annoncé sans preuve; pas de perte silencieuse. | À discuter si confirmé |
| S02 | Définir conservation et effacement | P1 | Politique, information et commandes de suppression définies et vérifiables. | À discuter |
| M01 | Harmoniser repli, configuration et documentation | P2 | Contenu et destinataire validés en HTTP et en mode de repli. | À discuter |

Le Product Owner et l’équipe doivent confirmer le périmètre après estimation. Si les éléments excèdent la capacité, conserver l’objectif et reprioriser explicitement; ne pas présenter cette proposition comme un engagement.

## 4. Plan de travail proposé

### PB-00 — Vérification initiale

| Tâche | État initial | Responsable |
| --- | --- | --- |
| Comparer les chemins de code actuels aux preuves F01–F03, S02 et M01 de l’audit. | À planifier | À affecter |
| Vérifier les tâches précédemment cochées et les contrôles encore ouverts dans `docs/tasks.md`. | À planifier | À affecter |
| Consigner pour chaque constat : confirmé, corrigé, non reproduit ou hors périmètre, avec preuve. | À planifier | À affecter |

### F01 — Résultat métier du formulaire, si le constat est confirmé

| Tâche | État initial | Responsable |
| --- | --- | --- |
| Définir les réponses positives et négatives selon le contrat du fournisseur. | À planifier | À affecter |
| Traiter les réponses JSON invalides et les rejets sans afficher le succès ni effacer les champs. | À planifier | À affecter |
| Vérifier les cas HTTP 200 avec `success: false`, JSON invalide, HTTP 400 et succès positif simulé. | À planifier | À affecter |

### F02 — Démarrage et soumission sûre, si le constat est confirmé

| Tâche | État initial | Responsable |
| --- | --- | --- |
| Empêcher le comportement natif GET avant que la configuration JSON soit disponible. | À planifier | À affecter |
| Découpler l’initialisation du formulaire du chargement des données de contenu ou prévoir un état de repli sûr. | À planifier | À affecter |
| Borner le chargement JSON et présenter une erreur compréhensible; garder un moyen de contact accessible. | À planifier | À affecter |
| Vérifier JSON lent, absent, invalide et scripts désactivés; confirmer l’absence de données personnelles dans l’URL. | À planifier | À affecter |

### F03 — Stockage et file fiable, si le constat est confirmé

| Tâche | État initial | Responsable |
| --- | --- | --- |
| Rendre visibles les erreurs de lecture et d’écriture de `localStorage`. | À planifier | À affecter |
| Définir les erreurs temporaires réessayables et les rejets définitifs. | À planifier | À affecter |
| Empêcher la suppression silencieuse lorsque `maxQueued` est atteint; ajouter information et option d’annulation. | À planifier | À affecter |
| Sérialiser la vidange, traiter les soumissions concurrentes et ajouter un timeout contrôlé. | À planifier | À affecter |
| Tester stockage interdit, file pleine, 400, 429, 503, timeout, retour en ligne et nouvelle saisie pendant la vidange. | À planifier | À affecter |

### S02 / M01 — Données et cohérence

| Tâche | État initial | Responsable |
| --- | --- | --- |
| Faire valider la durée de conservation, la finalité, les destinataires et le texte d’information du formulaire. | À planifier | À affecter |
| Définir l’effacement du brouillon et l’annulation de la file; vérifier qu’aucune donnée expirée n’est restaurée. | À planifier | À affecter |
| Valider le destinataire de secours et harmoniser contenu JSON, HTML de repli et README. | À planifier | À affecter |
| Vérifier les liens sociaux réels ou les omettre tant que les profils ne sont pas configurés. | À planifier | À affecter |

## 5. Suivi d’avancement

À remplir lors de la planification et du déroulement réel du sprint. Aucun avancement ne peut être inféré des documents sources.

| Date | Travail terminé / restant | Blocage | Adaptation décidée |
| --- | --- | --- | --- |
| À compléter | À compléter | À compléter | À compléter |

## 6. Hors de cette proposition et dépendances

Les sujets suivants restent dans le Product Backlog et ne sont pas automatiquement inclus dans ce sprint :

- S01 — inventaire et mise à niveau des dépendances;
- U01 et U02 — contraste, structure sémantique, clavier et carrousels;
- S03 — ressources tierces et politiques HTTP;
- P01 et P02 — images, démarrage et mesures de performance;
- U03 — mouvement réduit et pause des animations;
- U04 et TODO-02/03 — présentation, métadonnées de partage et évaluation SEO;
- TODO-01 — décision sur le consentement aux cookies, qui reste non intégré faute de balisage et d’API serveur documentés;
- TODO-04 — contrôles navigateur récurrents non encore cochés dans `docs/tasks.md`.

Le respect du calendrier, les disponibilités des personnes, le service de formulaire et les limites d’en-têtes de GitHub Pages sont des dépendances à clarifier.

## 7. Définition de fini et recette proposée

- [ ] Les constats traités ont été confirmés sur la révision visée et leurs critères d’acceptation sont satisfaits.
- [ ] Les contrôles syntaxiques JavaScript et `html-validate` réussissent si des scripts ou du HTML ont été modifiés.
- [ ] Les tests du formulaire utilisent des réponses simulées; aucun message réel n’est envoyé sans autorisation.
- [ ] Aucun cas ne présente un faux succès, ne perd silencieusement un message ou n’expose les champs dans l’URL.
- [ ] Brouillon, file, effacement et erreurs de stockage sont vérifiés.
- [ ] Les six ancres, le menu, les carrousels et les dimensions mobiles n’ont pas régressé.
- [ ] Les documents liés et `docs/tasks.md` sont actualisés avec les résultats et les tâches restantes.
- [ ] Aucun secret, message personnel ou donnée de test sensible n’est ajouté au dépôt.

## 8. Revue et rétrospective

À compléter uniquement après un sprint approuvé :

| Élément | Résultat |
| --- | --- |
| Date et participants de la revue | À compléter |
| Incrément et éléments acceptés | À compléter |
| Éléments reportés et destination | À compléter |
| Retours recueillis | À compléter |
| Amélioration décidée | À compléter |

## 9. Historique

| Version | Date | Modifications |
| --- | --- | --- |
| 1.0 | 2026-10-20 | Proposition de sprint issue des priorités P1 de l’audit; statut explicitement non planifié et révision à revalider. |
