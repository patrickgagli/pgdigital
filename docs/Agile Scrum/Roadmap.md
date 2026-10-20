# Feuille de route — PGDigital

## 1. Identification

| Information | Valeur |
| --- | --- |
| Produit | PGDigital — portfolio statique |
| Équipes propriétaires répertoriées | Product, Engineering et Design |
| Date de mise à jour | 2026-10-20 |
| Version | 1.0 |
| Références | [Product Backlog](Scrum%20Product%20Backlogs.md), [Sprint Backlog](Scrum%20Sprint%20Backlogs.md) |

## 2. Contexte et vision

PGDigital est un portfolio statique à page unique, publié sur GitHub Pages. Les tâches suivies dans `docs/tasks.md` indiquent que les six sections, la navigation, les carrousels, les contenus JSON et le formulaire de contact sont déjà implémentés. Le suivi distingue les fonctionnalités présentes dans le code de leur validation complète sur tous les navigateurs.

L’audit du 20 octobre 2026 relève des risques prioritaires dans la fiabilité et la confidentialité du contact, l’accessibilité et l’état des dépendances. Il a porté sur le code local et le site publié pour la révision `391b302`; la révision actuellement ouverte dans le dépôt est `e46117a`. Les constats doivent donc être vérifiés sur cette révision avant de les considérer comme des défauts encore présents ou de planifier leur correction.

**Vision :** proposer un portfolio accessible et fiable, dont le parcours de contact protège les informations saisies, tout en conservant un déploiement statique simple.

## 3. Objectifs et indicateurs de réussite

| ID | Objectif | Indicateur / cible | Source et méthode |
| --- | --- | --- | --- |
| OBJ-01 | Fiabiliser le parcours de contact. | Un rejet métier, une erreur réseau ou une sauvegarde impossible ne sont jamais annoncés comme un succès; aucun message n’est perdu silencieusement. | Audit F01–F03; essais contrôlés avec réponses positives, rejet, 429, 503, timeout et stockage indisponible. |
| OBJ-02 | Encadrer les données personnelles du formulaire. | Le visiteur est informé de la sauvegarde et du destinataire; il peut effacer ses données et annuler une réexpédition; les données expirées ne sont pas restaurées. | Audit S02; tests de conservation, suppression et restauration. |
| OBJ-03 | Améliorer l’accessibilité. | Contraste WCAG AA visé : 4,5:1 pour le texte courant et 3:1 pour le grand texte et les éléments concernés; parcours clavier et lecteur d’écran vérifiés. | Audit U01–U02; tests couvrant les thèmes, états de focus et contrôles. |
| OBJ-04 | Réduire le poids des images actives. | Réduction initiale visée d’au moins 50 % des 1 065 272 octets d’images actives, sans dégradation nette à densité ×2. | Audit P01; comparaison des ressources avant/après et vérification visuelle. |
| OBJ-05 | Améliorer les performances sans régression. | Cibles au 75e percentile : LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1; ce sont des objectifs, pas des résultats mesurés. | Audit P02; mesures reproductibles avant/après et données de terrain si disponibles. |
| OBJ-06 | Préserver les parcours et le déploiement existants. | Six ancres, menus, carrousels, formulaire et repli statique demeurent vérifiés; le site ne nécessite pas de build. | `docs/tasks.md`, audit et contrôles manuels. |

## 4. Principes, horizon et limites

- Les phases ci-dessous définissent un ordre de travail, pas un calendrier approuvé. Aucune date, capacité ou affectation n’est connue.
- Commencer par vérifier les constats d’audit sur `e46117a`, car l’audit décrit `391b302` et précise qu’aucune correction applicative n’a été effectuée dans son cadre.
- Traiter d’abord le parcours de contact et la confidentialité; les priorités P1 de dépendances et d’accessibilité demeurent également à planifier.
- Les priorités P1/P2/P3 sont celles de l’audit, pas une échelle CVSS ni une preuve de vulnérabilité exploitable.
- Conserver une architecture statique, les comportements existants et la compatibilité d’ouverture directe; éviter une refonte ou un build non justifiés.
- Ne pas intégrer le consentement aux cookies sans décision de produit, balisage adapté et API serveur compatible.

## 5. Vue d’ensemble par phase

| Phase | Horizon indicatif | Objectif | Initiatives principales | Condition de sortie |
| --- | --- | --- | --- | --- |
| 0 — Revalidation | Prochaine étape, non datée | Comparer les constats d’audit et le suivi des tâches à la révision courante. | Vérifier F01–F03, S01–S03, U01–U04, P01–P02 et M01; actualiser les statuts. | Chaque constat est confirmé, corrigé ou clos avec une justification et une preuve sur la révision ciblée. |
| 1 — Contact et confidentialité | Après validation de la phase 0 | Rendre la soumission, la sauvegarde et la reprise des messages honnêtes et fiables. | F01, F02, F03, S02; vérifier M01 et le destinataire de secours. | Cas d’acceptation du contact réussis, sans succès erroné, fuite dans l’URL ni perte silencieuse. |
| 2 — Sécurité des dépendances et accessibilité | À planifier | Réduire les risques de maintenance et les obstacles d’accès. | S01, U01 et U02; analyser S03 selon les limites de l’hébergement. | Versions inventoriées et validées; parcours clavier, lecteur d’écran et contrastes vérifiés. |
| 3 — Résilience, performance et visibilité | À planifier | Améliorer le chargement, le mouvement, les médias et la présentation du portfolio. | S03, P01, P02, U03, M01 et U04; demandes ouvertes de `tasks.md` relatives aux métadonnées. | Mesures comparatives documentées; expérience sans régression; contenu et SEO validés. |
| Transversal — Contrôles de livraison | À chaque livraison | Vérifier les fonctionnalités, le repli et l’état de production. | Contrôles automatisés existants et scénarios manuels non cochés de `docs/tasks.md`. | Résultats de recette et anomalies restantes consignés. |

## 6. Détail des phases

### Phase 0 — Revalider l’état du dépôt

**Période :** à définir
**Statut :** à planifier

| Initiative | Résultat attendu | Priorité |
| --- | --- | --- |
| Vérifier les écarts entre l’audit `391b302` et le dépôt `e46117a`. | Chaque constat d’audit porte un statut actuel et une preuve, ou est retiré du backlog avec justification. | Préalable |
| Comparer les tâches cochées et non cochées dans `docs/tasks.md` à l’état actuel. | Fonctionnalités livrées, vérifications manuelles et travaux restant à faire sont distingués. | Préalable |
| Reconfirmer les paramètres et le destinataire du formulaire sans divulguer de clé. | Configuration réelle, secours `mailto:` et documentation sont cohérents. | P1 |

### Phase 1 — Fiabiliser le contact et la confidentialité

**Période :** à définir
**Statut :** à planifier après revalidation

| Initiative | Résultat / preuve attendue | Priorité |
| --- | --- | --- |
| F01 — Vérifier le résultat métier de l’endpoint avant d’afficher le succès ou d’effacer les champs. | Réponses `success: false`, JSON invalide et HTTP 400 ne sont pas présentées comme un succès; une réponse positive conforme conserve le parcours nominal. | P1 |
| F02 — Initialiser le contact indépendamment du chargement des JSON et empêcher le GET natif. | Sous JSON lent, absent ou invalide, aucune donnée de formulaire ne se retrouve dans l’URL; un moyen de contact reste accessible. | P1 |
| F03 — Rendre la file et le stockage explicites et résistants aux erreurs. | Stockage indisponible, file pleine, erreurs définitives, timeout et vidanges concurrentes ne causent ni confirmation trompeuse ni perte silencieuse. | P1 |
| S02 — Définir la conservation, l’information et l’effacement des données. | Notice, durée, suppression et annulation des messages en attente sont décidées et testées; obligations à valider par le responsable compétent. | P1 |
| M01 — Harmoniser le HTML de repli, le JSON, la configuration et les informations du README. | Contenus, profils sociaux et contact restent cohérents en HTTP, en cas d’échec JSON et en `file://`. | P2 |

### Phase 2 — Réduire les risques et les obstacles d’accès

**Période :** à définir
**Statut :** à planifier

| Initiative | Résultat / preuve attendue | Priorité |
| --- | --- | --- |
| S01 — Inventorier et mettre à niveau les dépendances réellement utilisées. | Versions et licences vérifiées; avis applicables traités; parcours retestés sans version en double ni modification manuelle de bibliothèques minifiées. | P1 |
| U01 — Corriger le contraste dans les deux thèmes et les états interactifs. | Seuils WCAG AA visés mesurés sur textes, champs, messages, contrôles et focus. | P1 |
| U02 — Corriger la structure sémantique, le clavier et les carrousels. | Titres et repères cohérents; contrôles nommés; focus visible; menu gère Échap; zones de contrôle accessibles. | P1 |
| S03 — Réduire les dépendances tierces et définir les politiques possibles. | Versions tierces fixées ou ressources maîtrisées; CSP et en-têtes évalués avec les limites de GitHub Pages documentées. | P2 |

### Phase 3 — Performance, résilience et visibilité

**Période :** à définir
**Statut :** à planifier

| Initiative | Résultat / preuve attendue | Priorité |
| --- | --- | --- |
| P01 — Optimiser les images et réserver leur espace. | Réduction visée d’au moins 50 % du poids des images actives, sans image cassée, saut de mise en page ni dégradation visuelle à densité ×2. | P2 |
| P02 — Simplifier et rendre résilient le démarrage. | Comparaison cache froid/réseau mobile, ressources inutiles retirées seulement après validation, police et stratégie de cache ajustées sur mesures. | P2 |
| U03 — Respecter le mouvement réduit et proposer la pause des animations. | Pas d’autoplay sous `prefers-reduced-motion`; animations contrôlables et contenus utilisables manuellement. | P2 |
| U04 — Renforcer la présentation du portfolio et le référencement. | Réalisations réelles autorisées, appel à l’action, métadonnées de partage et titre français validés; aucune référence inventée. | P3 |
| SEO — Décider des données structurées, du sitemap et de `robots.txt`. | Décision documentée selon l’utilité du site monopage. | À évaluer |
| Consentement — Décider du sort de l’expérimentation. | Intégration uniquement si le besoin, le balisage et l’API serveur sont définis; sinon maintenir les fichiers hors fonctionnalités livrées. | À décider |

## 7. Dépendances, risques et arbitrages

| Dépendance / risque | Impact | Réponse |
| --- | --- | --- |
| Écart de révision entre l’audit et le dépôt courant. | Risque de traiter un constat déjà corrigé ou d’omettre un changement ultérieur. | Revalider les constats sur `e46117a` avant de figer le backlog et les sprints. |
| Service Web3Forms et ses conditions opérationnelles. | La validation de l’envoi, les quotas, restrictions et traitements ne sont pas contrôlés par le dépôt seul. | Vérifier le contrat, le domaine autorisé, les quotas et les exigences de confidentialité sans test abusif en production. |
| Limites de GitHub Pages sur les en-têtes HTTP. | Une CSP ou des protections d’en-tête ne peuvent pas toujours être configurées par simple modification du dépôt. | Confirmer les possibilités d’hébergement avant de choisir une mesure. |
| Repli statique maintenu en parallèle du JSON. | Divergence de contenu entre HTTP et ouverture locale. | Intégrer une vérification systématique des deux chemins dans la recette. |
| Absence de mesures à froid et de données terrain. | Les performances observées en cache ne caractérisent pas une première visite mobile. | Établir des mesures reproductibles avant/après; distinguer mesures laboratoire et données de terrain. |
| Responsables, dates et capacité non précisés. | Impossible de confirmer l’ordre calendaire et l’engagement d’un sprint. | Faire valider les personnes, disponibilités et dates par les propriétaires du projet. |

## 8. Suivi de la valeur et de l’avancement

Les valeurs initiales sont celles mesurées dans l’audit, et non une mesure garantie de l’état courant. Elles doivent être reproduites avant comparaison.

| Initiative | Valeur de départ / cible | Résultat actuel |
| --- | --- | --- |
| Images actives | 1 065 272 octets mesurés; réduction cible initiale ≥ 50 %. | À remesurer sur l’état courant. |
| Performance terrain | Aucun score Lighthouse ni Core Web Vitals terrain disponible; cibles LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 au 75e percentile. | Non mesuré. |
| Navigation responsive | Six ancres vérifiées à 1440 × 900 et 390 × 844 dans l’audit; tâches demandent aussi 320 × 568. | À revérifier après toute modification. |
| Contact | Réponses négatives et scénarios d’échec simulés dans l’audit; aucun envoi réel effectué. | À revalider sans soumettre de message réel. |

## 9. Gouvernance et mise à jour

- **Équipes propriétaires répertoriées :** Product, Engineering et Design.
- **Responsable de la roadmap, décideurs, capacité et cadence de revue :** à confirmer.
- Réviser la roadmap lorsque les constats d’audit sont revalidés, qu’un critère est satisfait ou qu’une dépendance change.
- Ne déclarer une initiative terminée qu’avec une preuve de recette; mettre à jour simultanément les statuts dans `docs/tasks.md` et le backlog.

| Date de revue | Changement | Motif |
| --- | --- | --- |
| 2026-10-20 | Création des phases à partir de `docs/tasks.md` et de l’audit du 20 octobre 2026; aucune date de livraison assignée. | Distinguer les fonctionnalités déjà livrées, les constats à revalider et les travaux à planifier. |

## 10. Documents liés et validation

| Document | Utilisation |
| --- | --- |
| [Product Backlog](Scrum%20Product%20Backlogs.md) | Éléments ordonnés et critères d’acceptation. |
| [Sprint Backlog](Scrum%20Sprint%20Backlogs.md) | Proposition de périmètre à confirmer lors de la planification. |

| Validateur | Rôle | Statut |
| --- | --- | --- |
| À confirmer | Représentant Product / commanditaire | À valider |
| À confirmer | Représentant Engineering / Design | À valider |
