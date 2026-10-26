# Product Requirements Document (PRD) — PGDigital

## Informations du document

| Information | Valeur |
| --- | --- |
| Produit | PGDigital — portfolio personnel |
| Statut | Document de travail |
| Version | 1.0 |
| Date de mise à jour | 2026-10-26 |
| Propriétaire du produit / commanditaire | Patrick G. |
| Type de produit | Site web statique monopage |
| Approche de livraison | Dépôt de fichiers statiques; Agile / Scrum |
| Public visé | Visiteurs et clients potentiels; mainteneurs du dépôt |
| Mise en production | GitHub Pages; MVP après environ 12 semaines |
| Documents associés | [Analyse des besoins](Analyse%20des%20besoins.md), [Architecture](Architecture.md), [Cahier des charges](Cahier%20des%20charges.md), [Audit](Audit.md), [Tasks](Tasks.md) |

> Ce PRD décrit le produit constaté dans le dépôt et les résultats attendus connus. Il ne vaut pas approbation formelle, engagement de livraison ni remplacement du backlog. Les constats d’audit et les travaux proposés sont identifiés comme tels et ne sont pas présentés comme des fonctionnalités déjà acquises.

## 1. Résumé exécutif

PGDigital est un portfolio personnel en français, composé d’une page unique et de six sections : Accueil, À propos, Services, Compétences, Outils et Contact. Il présente les services et les compétences du propriétaire et permet aux visiteurs d’initier une demande de contact.

Le site est exécuté dans le navigateur et publié sous forme de fichiers statiques sur GitHub Pages, sans compilation ni serveur applicatif propre. En HTTP, les contenus et la configuration du formulaire proviennent de fichiers JSON; le balisage contient aussi un rendu statique de repli lorsque les données ne peuvent pas être chargées. Le contact est actuellement configuré pour soumettre du JSON à un service externe; un lien `mailto:` est prévu lorsque la configuration requise est absente.

Les priorités produit sont de permettre la découverte du portfolio sur ordinateur et mobile, de rendre le contact compréhensible et fiable, et de conserver un déploiement statique simple. L’audit du 2026-10-20 relève des risques à traiter pour la fiabilité du formulaire, la confidentialité des données locales, l’accessibilité et la résilience du démarrage. Ces points sont des travaux ouverts, non des garanties du produit actuel.

### Résultats attendus

- Les visiteurs peuvent parcourir les six sections et comprendre l’offre et les moyens de contact.
- Le contenu reste disponible en HTTP et lorsque les fichiers JSON ne sont pas accessibles.
- Le site reste utilisable sur les petits écrans et peut être maintenu et publié comme fichiers statiques.

Les résultats commerciaux quantifiés et leurs valeurs de référence ne sont pas définis.

## 2. Contexte, problème et éléments de preuve

### Contexte et problème

Le produit sert de présence en ligne au propriétaire du portfolio. Les visiteurs doivent pouvoir découvrir son profil, ses services, ses compétences et ses outils, puis le contacter. Les documents disponibles ne consignent pas d’étude utilisateur ni de problème métier quantifié; la compréhension de la cible et des résultats attendus doit donc être validée avec le propriétaire.

### Éléments de preuve

| Constat | Source | Date / limite |
| --- | --- | --- |
| Le dépôt contient une page statique avec six sections, des fichiers JSON de contenu et un formulaire. | Code et documentation du dépôt | État constaté au 2026-10-26 |
| Les six ancres et les principaux parcours visuels ont été parcourus aux dimensions consignées. | [Audit](Audit.md) | Audit ponctuel du site publié et du code local; pas une certification |
| Le parcours Contact présente des cas où une réponse d’échec peut être annoncée comme un succès et où le chargement des JSON retarde l’initialisation. | [Audit](Audit.md), constats F01–F02 | À corriger et à retester |
| Brouillon et file locale peuvent conserver des données personnelles sans expiration ni commande d’effacement visible. | [Audit](Audit.md), constat S02 | Politique à définir; aucun avis juridique réalisé |
| Des obstacles d’accessibilité et des dépendances anciennes sont relevés. | [Audit](Audit.md), constats S01, U01–U03 | Audit limité; ni test d’intrusion ni certification WCAG |

### Conséquences si les besoins ne sont pas satisfaits

- Un visiteur peut ne pas trouver l’information ou le moyen de contact sur son appareil.
- Une demande de contact peut être perdue ou son état mal présenté.
- Des informations de contact peuvent rester dans le stockage local au-delà de ce que le visiteur attend.
- Une panne des scripts ou données peut rendre la page ou ses contrôles difficiles à utiliser.

## 3. Hypothèses, décisions et questions à valider

| ID | Hypothèse ou décision | Importance | Validation | Statut |
| --- | --- | --- | --- | --- |
| A-01 | Le public cible principal est constitué de visiteurs et clients potentiels recherchant les services du propriétaire. | Périmètre et contenu | Validation avec le propriétaire | À confirmer |
| A-02 | Le site restera un portfolio statique hébergé sur GitHub Pages. | Architecture et livraison | Confirmer avec le propriétaire | Constat actuel, décision formelle à confirmer |
| A-03 | Le service de formulaire actuellement configuré est le fournisseur prévu pour la production. | Contact et données | Confirmer fournisseur, restrictions, conditions et configuration | À confirmer |
| A-04 | Une sauvegarde locale du brouillon et une réémission automatique sont souhaitables. | Confidentialité et comportement | Décider durée, consentement/notice, effacement et annulation | À confirmer |
| A-05 | Les profils sociaux restent absents tant que des liens réels ne sont pas fournis. | Contenu | Confirmer avec le propriétaire | Données JSON actuellement vides |
| A-06 | Les objectifs chiffrés de performance, de fréquentation et de conversion ne sont pas connus. | Mesure du succès | Définir une référence et des objectifs utiles | À confirmer |
| A-07 | Les responsabilités nominatives, le budget, l’échéance et la procédure de publication restent à préciser. | Gouvernance | Décision du commanditaire | À confirmer |

## 4. Vision, objectifs et hors objectifs

### Vision

Offrir une présentation personnelle claire et maintenable qui permet aux visiteurs de découvrir l’offre de PGDigital et de contacter son propriétaire depuis un navigateur de bureau ou mobile.

### Principes produit

- Préserver le fonctionnement statique, sans backend ni compilation obligatoires.
- Garder les contenus éditables en JSON et fournir un repli HTML utile.
- Privilégier une expérience compréhensible, responsive, accessible et honnête sur l’état d’une demande de contact.
- Ne pas présenter comme existantes des fonctions ou garanties non vérifiées.

### Objectifs

| ID | Objectif | Résultat attendu | Mesure |
| --- | --- | --- | --- |
| OBJ-01 | Présenter le portfolio | Six sections consultables et navigation cohérente | Parcours des six ancres |
| OBJ-02 | Prendre en charge les visiteurs mobiles | Pas de débordement, titre tronqué ni chevauchement sur les tailles convenues | Vérification navigateur aux tailles précisées ci-dessous |
| OBJ-03 | Permettre une prise de contact compréhensible | Validation et retour de statut; soumission au service configuré ou solution de repli explicite | Scénarios de validation et de réponse du service |
| OBJ-04 | Maintenir l’autonomie de publication | Exécution directe et hébergement statique | Vérification HTTP et ouverture directe |

### Hors objectifs actuels

- Backend applicatif, base de données serveur, authentification ou espace administrateur.
- Service de consentement aux cookies : les fichiers présents ne sont pas intégrés et l’API attendue n’existe pas dans le dépôt.
- Garantie de livraison d’un email par le fournisseur de formulaire.
- Objectifs commerciaux, délais, budget ou niveaux de service non approuvés.

## 5. Utilisateurs et parties prenantes

| Profil | Objectifs et besoins | Contraintes |
| --- | --- | --- |
| Visiteur du portfolio | Découvrir le profil, les services, compétences et outils; consulter sur mobile ou bureau. | Navigation et contenu compréhensibles, contrôles utilisables. |
| Visiteur souhaitant contacter | Envoyer ses coordonnées et un message et comprendre ce qu’il advient de sa demande. | Validation utile, information sur la transmission et le stockage, résultat honnête. |
| Propriétaire du portfolio | Présenter des informations exactes et recevoir les demandes. | Valider les contenus, le destinataire et le fournisseur. |
| Mainteneurs | Modifier les données, styles et comportements et publier le site. | Maintenir le JSON et le repli cohérents; pas de build obligatoire. |
| Fournisseur du formulaire | Recevoir une soumission lorsque l’envoi distant est activé. | Fournisseur actuellement configuré, conditions et limites à vérifier. |

Les personnes responsables de la validation produit, de la confidentialité, de l’exploitation et de la publication restent à confirmer.

## 6. Périmètre produit

### Inclus dans l’état actuel

- Page unique à six sections avec navigation fullPage.js.
- Contenu éditable dans `json/site-data.json` et configuration du formulaire dans `json/contact-form.json`.
- Contenu HTML statique de repli dans `index.html`.
- Carrousels de faits, services, compétences et outils, animations, compteurs et titre animé.
- Menu mobile, bascule de thème clair/sombre et formulaire de contact.
- Brouillon et file d’envois échoués stockés dans `localStorage`; réémission prévue au chargement et au retour en ligne.
- Publication de fichiers statiques sur GitHub Pages.
- URL canonique et données structurées JSON-LD dans `index.html`, ainsi que `sitemap.xml` et `robots.txt` dans le dépôt. Le fichier `robots.txt` du dépôt de projet n’est pas à la racine du domaine GitHub Pages; son activation est conditionnée à une publication adaptée.

### Hors périmètre ou non intégré

- Backend, base de données ou authentification propres au site.
- Consentement aux cookies; `js/cookie_consent.js` et `css/cookie_consent.css` ne sont pas chargés et leur API serveur est absente.
- Fournisseur de formulaire alternatif non validé.
- Métadonnées Open Graph et Twitter Card, signalées comme non implémentées dans le suivi du projet.
- Réalisations clients, témoignages ou résultats non fournis et approuvés par le propriétaire.

### Contraintes

- Ressources statiques et compatibilité avec l’ouverture directe de `index.html`.
- `fetch` des JSON peut ne pas fonctionner en `file://`; le repli statique doit rester utile.
- Textes de données rendus de manière sûre et URL limitées aux schémas autorisés par l’implémentation.
- Pas de modification des bibliothèques minifiées vendues ni de chargement de bibliothèques en double.
- Toute modification de contenu doit tenir compte du rendu JSON et du contenu de repli.

## 7. Parcours utilisateurs principaux

### UC-01 — Découvrir le portfolio

**Acteur et objectif :** visiteur souhaitant comprendre l’offre.

1. Le visiteur ouvre la page.
2. Il parcourt Accueil, À propos, Services, Compétences, Outils et Contact par la navigation ou le défilement.
3. Il consulte les contenus dans une mise en page adaptée à son écran.

**Résultat attendu :** les sections, ancres et états de navigation restent synchronisés. Si les JSON sont indisponibles, le contenu statique reste consultable.

### UC-02 — Contacter le propriétaire

**Acteur et objectif :** visiteur souhaitant transmettre une demande.

1. Le visiteur renseigne les champs requis et une adresse email valide.
2. Le navigateur bloque les champs invalides et présente une erreur compréhensible.
3. Si la configuration est utilisable, le site soumet un POST JSON au service configuré et présente le résultat correspondant à la réponse métier.
4. Si la configuration d’envoi distant n’est pas disponible, le site propose un email prérempli.
5. En cas d’échec, le message reste récupérable; le site ne prétend pas l’avoir conservé ou envoyé sans confirmation réelle.

Les étapes 3 à 5 décrivent le comportement attendu. Les défauts F01–F03 de l’audit doivent être corrigés avant de considérer le parcours fiable.

### UC-03 — Mettre à jour le contenu

Le mainteneur modifie les données JSON et vérifie également le rendu statique de repli. Les informations doivent être cohérentes dans les deux modes.

## 8. Exigences fonctionnelles

Priorités : **Must** = indispensable; **Should** = important; **Could** = facultatif; **Won’t** = exclu de cette version. Les identifiants permettent le suivi; ils ne remplacent pas le backlog.

| ID | Exigence | Justification | Priorité | Critères d’acceptation |
| --- | --- | --- | --- | --- |
| FR-001 | Le site doit présenter les six sections et synchroniser les ancres, liens de navigation et configuration fullPage.js. | Découverte du portfolio | Must | Les ancres `slide01` à `slide06` ouvrent la section correspondante; une seule entrée active est annoncée. |
| FR-002 | En HTTP, le site doit charger les contenus de portfolio depuis `json/site-data.json`. | Mise à jour sans backend | Must | Les contenus affichés correspondent aux données servies. |
| FR-003 | Le site doit conserver un contenu utile dans `index.html` si les fichiers JSON ne sont pas accessibles. | Résilience et ouverture directe | Must | Un échec ou refus de chargement des JSON ne supprime pas le contenu statique. |
| FR-004 | Le site doit fournir menu mobile et navigation adaptative. | Utilisation sur petits écrans | Must | Sous 768 px, ouverture/fermeture fonctionnent, `aria-expanded` reflète l’état et la sélection d’un lien ferme le menu. |
| FR-005 | Le visiteur doit pouvoir basculer entre thèmes clair et sombre. | Préférence d’affichage | Should | Le thème, l’état accessible et la préférence `dark-mode` sont synchronisés. |
| FR-006 | Les faits, services, compétences et outils doivent être présentés dans les groupes/carrousels prévus. | Présentation du contenu | Should | Les quatre groupes s’initialisent après disponibilité des données et restent navigables. |
| FR-007 | Le formulaire doit valider les champs obligatoires et le format email et annoncer son état de manière accessible. | Réduire les erreurs et informer le visiteur | Must | Les champs invalides bloquent l’envoi; le résultat est annoncé dans la région de statut. |
| FR-008 | Le formulaire doit empêcher toute soumission native de données personnelles dans l’URL, y compris pendant le chargement ou l’échec des scripts/configuration. | Confidentialité | Must | Sous JSON lent, absent ou invalide, aucun champ de formulaire ne se retrouve dans la query string. |
| FR-009 | Lorsque l’envoi distant est configuré, le formulaire doit envoyer les données en JSON et distinguer succès métier, rejet et réponse invalide. | Fiabilité du contact | Must | HTTP 200 avec succès métier négatif, JSON invalide et rejet HTTP ne déclenchent jamais un faux succès ni l’effacement du message. |
| FR-010 | Si aucun envoi distant valide n’est disponible, le formulaire doit proposer un `mailto:` prérempli sans prétendre qu’un email a été envoyé. | Solution de repli | Must | Destinataire, sujet et corps sont correctement encodés; le statut annonce l’ouverture du client de messagerie. |
| FR-011 | Si une sauvegarde locale est conservée, l’utilisateur doit être informé, pouvoir effacer son brouillon et annuler une réémission; la conservation doit être bornée. | Confidentialité et maîtrise utilisateur | Must avant de maintenir la persistance automatique | Expiration, effacement et annulation vérifiables; aucune sauvegarde annoncée après échec de `localStorage`. La durée reste à décider. |
| FR-012 | Les liens sociaux ne doivent être affichés que si des URL de profils réelles et approuvées sont disponibles. | Exactitude du contenu | Should | Aucun lien générique n’est affiché avec la liste JSON sociale vide ni dans le repli. |
| FR-013 | La page doit fournir les métadonnées de base et les ressources de référencement réellement définies. | Découvrabilité et partage | Should | Titre/description cohérents; toute URL canonique, donnée structurée, sitemap ou directive robots correspond à l’URL publiée. |

## 9. Exigences non fonctionnelles

| ID | Domaine | Exigence | Vérification | Statut |
| --- | --- | --- | --- | --- |
| NFR-001 | Déploiement | Le produit doit fonctionner comme fichiers statiques, sans compilation ni serveur applicatif propre. | Ouvrir directement et servir via HTTP | Contrainte actuelle |
| NFR-002 | Responsive | Pas de débordement horizontal, titre tronqué ou chevauchement formulaire/pied de page à 390 × 844 et 320 × 568. | Inspection DOM et visuelle aux deux dimensions | Contrôle déjà documenté à 390 × 844; 320 × 568 à maintenir dans la recette |
| NFR-003 | Mode responsive | fullPage passe au défilement normal sous 768 px de largeur ou sous 600 px de hauteur. | Vérifier les deux seuils | Exigence issue du cahier des charges |
| NFR-004 | Accessibilité | Contrôles avec nom, état, focus visible, labels et retours de statut; structure de titres et navigation clavier cohérentes. | Test clavier, inspection et lecteur d’écran | Améliorations ouvertes dans l’audit U02 |
| NFR-005 | Contraste | Viser WCAG AA : ratio 4,5:1 pour texte courant et 3:1 pour grand texte et composants concernés. | Mesurer les combinaisons réelles des deux thèmes et états | Travail ouvert dans l’audit U01 |
| NFR-006 | Mouvement | Respecter `prefers-reduced-motion` et offrir une manière de mettre en pause les animations automatiques. | Essai avec préférence réduite et contrôle de pause | Travail ouvert dans l’audit U03 |
| NFR-007 | Sécurité du rendu | Insérer le texte de données sans interprétation HTML et limiter les URL aux schémas autorisés. | Revue de code et valeurs de test | Mesure documentée à préserver |
| NFR-008 | Confidentialité | Minimiser les données de contact, informer sur le prestataire et borner leur conservation. | Revue du parcours, stockage local et informations fournies | Politique à décider; audit S02 |
| NFR-009 | Performance | Objectifs de laboratoire proposés : LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 au 75e percentile lorsque les mesures pertinentes sont disponibles. | Au moins trois mesures à cache froid par profil; distinguer terrain et laboratoire | Proposition issue de l’audit, pas résultat mesuré ni engagement approuvé |
| NFR-010 | Compatibilité | Prendre en charge les navigateurs modernes de bureau et mobile compatibles avec les dépendances retenues. | Matrice de navigateurs à définir | Matrice et versions minimales à confirmer |
| NFR-011 | Maintenabilité | Séparer comportements, données et styles selon l’organisation actuelle; ne pas ajouter de build pour une évolution limitée. | Revue des changements | Contrainte du dépôt |

Les cibles de disponibilité, conservation légale, support navigateur formel et performance en production ne sont pas approuvées.

## 10. Données, confidentialité et règles métier

| Donnée | Finalité / origine | Stockage et accès | Conservation |
| --- | --- | --- | --- |
| Contenu du portfolio | Présenter les faits, services, compétences, outils et coordonnées; JSON et repli HTML | Fichiers statiques publics | Mis à jour par les mainteneurs |
| Nom, prénom, email et message | Répondre à une demande de contact; saisie du visiteur | Navigateur, puis service externe si envoi activé | Brouillon et file locale actuellement dans `localStorage`; durée et suppression à définir |
| Préférence de thème | Restaurer la préférence du visiteur | `localStorage` | Jusqu’à effacement par l’utilisateur ou le navigateur |
| Configuration du formulaire | Définir l’endpoint, destinataire et messages | Fichier JSON public côté client | Ne jamais y placer un secret serveur; vérifier toute donnée avant publication |

### Règles

- Le texte saisi ou chargé depuis les JSON ne doit pas être interprété comme HTML.
- Une réponse HTTP réussie seule ne suffit pas à déclarer le succès métier du formulaire.
- Un message ne peut être annoncé comme sauvegardé que si l’écriture locale a effectivement réussi.
- Les erreurs définitives ne doivent pas être réessayées indéfiniment; les règles de reprise restent à spécifier.
- L’endpoint, la politique du fournisseur, les destinataires, la base légale et les durées de conservation doivent être validés par le propriétaire.
- La clé d’accès actuellement présente dans la configuration est une donnée de configuration publique exposée au navigateur; elle ne doit pas être copiée dans cette documentation. Les restrictions et protections du fournisseur sont à confirmer.

## 11. Intégrations et dépendances

| Intégration | Finalité | Statut / risque |
| --- | --- | --- |
| GitHub Pages | Hébergement statique | Actuel; procédure de publication détaillée à confirmer |
| Fichiers JSON du dépôt | Données et configuration | Actuels; le chargement peut échouer, d’où le repli HTML |
| Fournisseur de formulaire configuré | Réception du POST JSON | Configuration observée; contrat, restrictions, quotas, conservation et conditions à valider |
| Application de messagerie du visiteur | Repli `mailto:` | Dépend de la configuration locale du visiteur; ne confirme pas l’envoi |
| CDN et Google Fonts | Icônes, script et police | Dépendances externes; versions flottantes et politiques à évaluer selon l’audit |

Les fichiers de consentement aux cookies et leur API attendue ne sont pas des intégrations actives.

## 12. UX/UI

- Conserver les six sections et la cohérence des ancres desktop/mobile.
- Adapter l’interface au mobile, y compris la vue Contact et le pied de page en flux normal.
- Donner aux champs du formulaire des libellés, contraintes et messages d’erreur compréhensibles.
- Annoncer distinctement envoi, acceptation, rejet, échec, mise en attente et repli email.
- Informer avant envoi des destinataires et du stockage local réellement appliqués.
- Prévoir un focus clavier visible, des contrôles tactiles suffisants et des descriptions accessibles sans survol.
- Ajouter les métadonnées sociales et les réalisations uniquement après validation des contenus.

## 13. Contraintes techniques et exploitation

| Élément | Contrainte ou état |
| --- | --- |
| Point d’entrée | `index.html` |
| Contenu et configuration | `json/site-data.json`, `json/contact-form.json`; contenu de repli dans le HTML |
| Comportements | `js/custom.js`, `js/data.js`, `js/scripts.js` |
| Styles | `css/style.css`, `css/responsive.css` |
| Publication | Fichiers statiques GitHub Pages |
| Environnements | Environnement distinct de test/préproduction non documenté |
| Supervision, sauvegarde et retour arrière | Procédures et responsables non documentés |
| Référencement | Canonique et données structurées présents; sitemap et robots dans le dépôt. Le `robots.txt` d’un projet GitHub Pages n’est pas servi à la racine du domaine sans publication spécifique ou domaine personnalisé. |

Les validations documentées du dépôt sont :

```powershell
node --check js/custom.js
node --check js/data.js
node --check js/scripts.js
node --check js/cookie_consent.js
npx --yes html-validate@latest index.html
```

## 14. Indicateurs de réussite

| ID | Indicateur | Définition / vérification | Référence et cible |
| --- | --- | --- | --- |
| KPI-01 | Navigation fonctionnelle | Six liens ouvrent les six sections attendues | Contrôles ponctuels réussis selon l’audit; maintenir le résultat à chaque recette |
| KPI-02 | Utilisabilité mobile | Aucun débordement horizontal, titre tronqué ni chevauchement Contact/pied de page | Vérifié à 390 × 844 lors de l’audit; cible 390 × 844 et 320 × 568 |
| KPI-03 | Fidélité du contenu | Données visibles identiques entre JSON et repli pour les champs convenus | Contrôle de comparaison à chaque modification; divergences antérieures à corriger |
| KPI-04 | Fiabilité du contact | Succès uniquement après réponse métier positive; aucun message perdu silencieusement | État initial comporte des défauts audit F01–F03; cible à définir et tester |
| KPI-05 | Performance | LCP, INP et CLS séparés entre mesures terrain et laboratoire | Cibles proposées dans NFR-009; référence terrain absente |
| KPI-06 | Conversion / fréquentation | À définir avec le propriétaire sans collecte superflue de données personnelles | Valeur de référence et cible inconnues |

## 15. Priorités MVP et livraison

### Capacités indispensables

- Navigation fonctionnelle sur les six sections et contenu lisible.
- Rendu du contenu en HTTP et repli statique utile.
- Expérience responsive et contrôles de navigation utilisables.
- Formulaire sans soumission GET accidentelle, validation adéquate et état de résultat honnête.
- Informations de confidentialité et comportement de stockage décidés avant de conserver automatiquement des données personnelles.

### Travaux proposés à prioriser selon l’audit

1. **Lot contact et données (P1)** : F01, F02, F03, S02; traiter également la cohérence de contenu M01.
2. **Lot sécurité et accessibilité (P1/P2)** : S01, U01, U02, U03, puis S03.
3. **Lot performance et visibilité (P2/P3)** : P01, P02, U04.

Ces lots sont des recommandations d’audit et non des engagements de date. Le backlog de tâches reste la source de suivi d’implémentation.

## 16. Risques

| ID | Risque | Impact | Réponse proposée | Statut |
| --- | --- | --- | --- | --- |
| R-01 | Réponse d’échec métier interprétée comme succès | Perte de confiance ou de demande | Vérifier le contrat de réponse du fournisseur et tester les réponses négatives | Ouvert, audit F01 |
| R-02 | Formulaire non initialisé pendant le chargement et soumission native GET | Données personnelles dans l’URL | Prévenir la soumission immédiatement et découpler l’initialisation des JSON | Ouvert, audit F02 |
| R-03 | Échec silencieux du stockage ou perte/répétition des messages en attente | Demande perdue ou envoyée à tort comme conservée | Rendre les erreurs visibles, sérialiser les reprises, tester les limites | Ouvert, audit F03 |
| R-04 | Données personnelles conservées sans expiration/effacement | Exposition sur appareil partagé et reprise inattendue | Décider rétention, notice, effacement et annulation | Ouvert, audit S02 |
| R-05 | Obstacles d’accessibilité et dépendances vieillissantes | Exclusion de visiteurs, maintenance difficile | Traiter U01–U03 et vérifier les versions réellement actives | Ouvert, audit |
| R-06 | Divergence entre JSON, repli et documentation | Informations contradictoires selon le mode | Réconcilier les sources et documenter la configuration réelle | À vérifier/corriger |
| R-07 | Dépendance aux CDN et limites du `robots.txt` sous GitHub Pages projet | Résilience/contrôle de l’indexation | Valider les besoins CDN et publier robots à la racine si souhaité | À décider |

## 17. Stratégie de test et critères de sortie

| Domaine | Scénarios et critères |
| --- | --- |
| Fonctionnel | Vérifier les six ancres, le thème, le menu, les carrousels, le rendu JSON et le repli. |
| Contact | Champs vides, email invalide, succès métier, HTTP 200 négatif, JSON invalide, 400, 429, 503, timeout et absence de configuration; aucune donnée dans l’URL et aucun faux succès. |
| Stockage | Brouillon, expiration, effacement, annulation, quota/interdiction du stockage, file pleine, retour en ligne, nouvelle soumission pendant reprise et absence de perte silencieuse. |
| Résilience | HTTP, ouverture `file://`, JSON lent/absent/invalide, JavaScript et CDN indisponibles. La page ne doit pas masquer durablement son contenu ni rendre impossible tout contact. |
| Responsive | 1440 × 900, 390 × 844 et 320 × 568; vérifier menu, Contact, titre et pied de page. |
| Accessibilité | Parcours clavier, focus, libellés/états, lecteur d’écran, zoom 200 %, contraste et mouvement réduit. |
| Performance | Au moins trois mesures à cache froid par profil représentatif; consigner les médianes et distinguer laboratoire et terrain. |
| Déploiement | Contrôles JavaScript/HTML, absence d’erreurs console et de ressources locales manquantes; vérifier les URL publiques et en-têtes applicables. |

### Critères de sortie

- Les critères des exigences Must sont validés et les anomalies bloquantes convenues sont résolues.
- Les essais de soumission négative ne produisent ni faux succès ni perte silencieuse des données.
- La politique de conservation et d’effacement des données de contact est décidée et expliquée au visiteur.
- Les parcours essentiels sont testés aux dimensions convenues et les résultats sont consignés.
- Le propriétaire ou responsable produit approuve la livraison; approbateur et date restent à renseigner.

## 18. Gouvernance, décisions et questions ouvertes

| ID | Question | Responsable pressenti | Échéance | Impact |
| --- | --- | --- | --- | --- |
| Q-01 | Qui valide formellement le périmètre, le contenu et la livraison? | Propriétaire / Product | À définir | Approbation |
| Q-02 | Quel est le public prioritaire et quels indicateurs de conversion sont utiles? | Propriétaire / Product | À définir | Contenu et mesure |
| Q-03 | Quel fournisseur, quelles protections et quelles conditions s’appliquent au formulaire en production? | Propriétaire / Engineering | Avant validation du formulaire | Contact et confidentialité |
| Q-04 | Quelle durée de rétention s’applique au brouillon et à la file; faut-il conserver la sauvegarde automatique? | Propriétaire / responsable concerné | Avant maintien de la persistance automatique | Confidentialité |
| Q-05 | Quel est le périmètre navigateur officiellement pris en charge? | Engineering / Product | À définir | Compatibilité |
| Q-06 | Quels budget, échéance, cadence, procédure de publication et responsabilités opérationnelles sont retenus? | Commanditaire | À définir | Livraison et exploitation |
| Q-07 | Faut-il publier `robots.txt` à la racine du domaine GitHub Pages ou utiliser un domaine personnalisé? | Propriétaire | À définir | Référencement |

## 19. Approbations et historique

### Approbations

| Relecteur / rôle | Décision | Date | Notes |
| --- | --- | --- | --- |
| Patrick G. / propriétaire du portfolio | À confirmer | À confirmer | Validation du périmètre, des données et des objectifs |
| Product / Engineering / Design | À confirmer | À confirmer | Responsables nominatifs et approbations à documenter |

### Historique des modifications

| Version | Date | Auteur | Résumé |
| --- | --- | --- | --- |
| 1.0 | 2026-10-26 | Copilot | Remplacement du modèle générique par un PRD fondé sur le dépôt, les documents associés et l’audit du 2026-10-20; séparation des capacités constatées, risques ouverts et décisions à confirmer. |

---

Ce PRD doit évoluer avec les décisions du propriétaire, les éléments de preuve et les résultats des travaux. Les tâches détaillées et leur état restent suivis dans le backlog et [Tasks](Tasks.md).
