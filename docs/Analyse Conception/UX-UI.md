# Conception UX/UI — PGDigital

## Identification

| Information | Valeur |
| --- | --- |
| Produit | PGDigital — portfolio personnel DevOps |
| Propriétaire / commanditaire | Patrick G. |
| Date de mise à jour | 2026-11-10 |
| Version | 1.0 |
| Document de référence | [PRD](PRD.md) |
| Plateformes | Web, ordinateur et mobile |
| Statut | Synthèse de l’interface existante et cible éditoriale; validation utilisateur à organiser |

Ce document décrit les choix UX/UI observables dans le dépôt et les besoins de conception du repositionnement DevOps. Il ne prétend pas qu’une recherche utilisateur, une maquette ou une validation formelle a déjà eu lieu.

## 1. Objectifs de l’expérience

### Publics et besoins

| Profil | Besoin principal | Contexte |
| --- | --- | --- |
| Recruteur ou responsable technique | Comprendre rapidement le rôle visé, les compétences et les contributions pertinentes. | Consultation souvent rapide, sur ordinateur ou téléphone. |
| Client potentiel | Comprendre les services réellement proposés et savoir comment contacter le propriétaire. | Doit distinguer les offres confirmées des domaines seulement explorés. |
| Visiteur souhaitant contacter | Envoyer une demande et comprendre si elle a été transmise, mise en attente ou si une autre action est nécessaire. | Formulaire avec validation native et service externe configuré; le résultat doit rester explicite. |
| Propriétaire / mainteneur | Mettre à jour le profil, les compétences et les projets sans outil de compilation. | Édition de JSON et du contenu HTML statique de repli. |

### Principes de conception

- **Preuves avant affirmations :** présenter les compétences par des exemples confirmés; ne pas transformer une liste de technologies en déclaration de maîtrise.
- **Contribution explicite :** distinguer la contribution personnelle du travail d’équipe et préciser le contexte de chaque étude de cas.
- **Parcours court :** rendre le rôle, les domaines d’intervention, les preuves et l’action de contact repérables sans devoir parcourir des listes de technologies non contextualisées.
- **Cohérence et résilience :** conserver les six sections et leurs ancres; garder un contenu utile lorsque les fichiers JSON ne se chargent pas.
- **Feedback honnête :** annoncer validation, envoi, échec et repli avec des messages accessibles; ne pas promettre la livraison d’un email.
- **Confidentialité par défaut :** expliquer le destinataire et la sauvegarde locale réelle; n’exposer aucune donnée ou architecture de projet non autorisée.

### Objectifs et mesure

| Objectif | Résultat attendu | Vérification |
| --- | --- | --- |
| Comprendre le positionnement | Un visiteur cible peut résumer le rôle et la valeur apportée après une consultation rapide. | Tests de compréhension à définir avec le propriétaire. |
| Évaluer les compétences | Les compétences principales sont reliées à une expérience ou une preuve publiable. | Revue éditoriale et des preuves avant publication. |
| Parcourir sur mobile | Pas de débordement horizontal, de titre tronqué ni de chevauchement Contact/pied de page. | Essais documentés à 390 × 844 et 320 × 568. |
| Contacter en connaissance de cause | Le visiteur comprend l’action entreprise et le résultat. | Scénarios de validation, succès, rejet, échec et repli. |

La recherche utilisateur, les mesures initiales et les seuils de conversion ne sont pas documentés; ils restent à définir.

## 2. Architecture de l’information et parcours

Le parcours conserve les six sections de la page actuelle :

| Ancre | Section actuelle | Intention UX à préserver / faire évoluer |
| --- | --- | --- |
| `slide01` | Accueil | Identifier immédiatement le profil et le positionnement DevOps validé; proposer l’accès aux preuves et au contact. |
| `slide02` | À propos | Donner le contexte professionnel et les informations biographiques approuvées. |
| `slide03` | Services | Décrire uniquement les services réellement offerts et validés. |
| `slide04` | Compétences | Présenter les compétences avec leur niveau ou contexte d’expérience et des preuves associées. |
| `slide05` | Outils | Qualifier les outils selon leur usage confirmé; éviter une liste interprétable comme une maîtrise uniforme. |
| `slide06` | Contact | Permettre une demande de contact avec validation et retours compréhensibles. |

Les études de cas doivent pouvoir être consultées depuis les sections pertinentes et contenir : contexte et besoin, rôle/contribution personnelle, approche, outils réellement utilisés, résultats vérifiables, limites et enseignements. Leur emplacement et leur format visuel restent à valider avant implémentation.

### Parcours prioritaires

**Évaluer le profil :** accueil → profil et domaines validés → compétence → étude de cas correspondante → contact.

**Contacter :** section Contact → saisie des champs → validation native → envoi distant si configuré, sinon repli `mailto:` → retour de statut exact. Les défauts d’envoi et de stockage recensés dans l’audit restent à revalider; ce parcours n’est pas présumé fiable dans tous les cas.

**Maintenir le contenu :** mise à jour de `json/site-data.json` et du contenu de repli de `index.html` → vérification de leur cohérence en HTTP et `file://` → revue de contenu, preuves et autorisations avant publication.

## 3. Interactions et états

| Composant / action | État attendu | Règle UX et accessibilité |
| --- | --- | --- |
| Navigation de section | Section active clairement identifiable. | Ancres, liens de navigation et configuration fullPage.js restent synchronisés; clavier utilisable. |
| Menu mobile | Ouvert ou fermé. | `aria-expanded` reflète l’état; la sélection d’un lien ferme le menu. |
| Thème | Clair ou sombre, préférence conservée. | Le contrôle expose son état accessible et respecte les contrastes dans les deux thèmes. |
| Carrousels | Contenu consultable et navigation compréhensible. | Les contrôles doivent être nommés, utilisables au clavier et ne pas masquer l’information. |
| Formulaire | Prêt, validation invalide, envoi, succès métier, échec, mise en attente ou repli. | Les messages sont annoncés dans la région de statut; la saisie n’est perdue qu’après un résultat sûr. |
| Chargement du contenu | JSON chargé ou contenu HTML de repli. | Le contenu utile reste disponible si `fetch` échoue, notamment en ouverture `file://`. |
| Étude de cas (cible) | Résumé consultable puis détails. | La contribution personnelle, le contexte et les limites sont visibles sans dépendre d’un survol. |

## 4. Direction visuelle et UI existante

### Interface observée

- Une page monopage à six sections, navigation fullPage.js sur grand écran et comportement responsive sur petit écran.
- Un thème clair/sombre avec préférence conservée dans le navigateur.
- Des carrousels pour faits, services, compétences et outils; animations et titre animé.
- Une identité visuelle issue des styles existants : typographie Raleway documentée, fonds sombres/éclaircis selon le thème et accents en dégradé bleu/cyan (`#4096ee` vers `#39ced6`).
- Les styles de base se trouvent dans `css/style.css`; les ajustements de viewport dans `css/responsive.css`.
- Les valeurs de contraste de toutes les combinaisons et états n’ont pas été certifiées; les couleurs existantes ne constituent pas une garantie WCAG.

### Évolution recommandée

Conserver les composants existants lorsque leur comportement est adapté; faire évoluer la hiérarchie et le contenu avant d’introduire une refonte visuelle. Donner la priorité au rôle, aux preuves et à la contribution. Une étude de cas doit être lisible dans le flux normal de la page et ne pas dépendre exclusivement d’un carrousel, d’une animation ou d’un effet au survol.

La palette, les tailles typographiques, la grille des études de cas, les maquettes et les variantes exactes mobile/desktop restent à valider avec le propriétaire. Ne pas introduire de nouvelles couleurs ou composants comme s’ils avaient été approuvés.

## 5. Accessibilité et responsive

### Cibles de conception

| Domaine | Cible | Vérification |
| --- | --- | --- |
| Contraste | WCAG AA visé : 4,5:1 pour texte courant; 3:1 pour grand texte et composants graphiques concernés. | Mesurer les états normaux, focus, erreur et désactivé dans les deux thèmes. |
| Clavier | Tous les liens, boutons, menus et contrôles sont accessibles et visibles au focus. | Parcours clavier complet, sans focus masqué ni piège. |
| Structure | Repères et titres hiérarchisés; labels associés aux champs. | Inspection HTML et lecteur d’écran. |
| Mouvement | Respecter `prefers-reduced-motion`; proposer une pause si les animations automatiques restent actives. | Essai avec préférence système réduite. |
| Mobile | Cibles tactiles et contenu restent consultables sans débordement. | 390 × 844 et 320 × 568, portrait et contrôle du Contact. |
| Images et icônes | Texte alternatif utile pour les images informatives; éléments décoratifs ignorés par les technologies d’assistance. | Vérification des `alt`, noms et états accessibles. |

Les éléments ci-dessus sont des exigences et contrôles à réaliser, pas une déclaration de conformité certifiée. Les constats d’audit U01–U03 doivent être revalidés.

## 6. Confidentialité et sécurité perçues

- Le formulaire collecte nom, prénom, email et message et est configuré pour un endpoint externe; le fournisseur et le destinataire doivent être décrits correctement.
- Le brouillon et la file d’attente utilisent actuellement `localStorage`. Leur durée, l’information fournie au visiteur et les moyens d’effacement/annulation doivent être décidés avant de considérer la persistance comme acceptable.
- L’interface ne doit jamais affirmer qu’un message est sauvegardé lorsque l’écriture locale a échoué, ni qu’un email est livré après l’acceptation du fournisseur.
- Les études de cas sont des contenus publics : faire approuver les autorisations et retirer secrets, identifiants, informations client et détails opérationnels non destinés à la publication.
- Les fichiers `js/cookie_consent.js` et `css/cookie_consent.css` ne sont pas intégrés à l’expérience active; ne pas afficher de promesse de consentement aux cookies.

La base légale, les durées de conservation et les textes d’information relèvent d’une décision à valider par le propriétaire et les responsables compétents; ce document ne constitue pas un avis juridique.

## 7. Recherche, prototypes et validation

| Activité | État |
| --- | --- |
| Entretiens, sondages ou observations | Aucun résultat utilisateur n’est consigné; méthode et participants à définir. |
| Maquettes / prototype | Aucun lien ou prototype validé n’est documenté. |
| Tests de compréhension du positionnement DevOps | À réaliser après validation des contenus de référence. |
| Tests d’utilisabilité mobile et contact | Parcours manuels à conserver et compléter selon le PRD et le suivi des tâches. |
| Validation éditoriale | Propriétaire à confirmer pour le rôle, les compétences, les projets, les résultats et les autorisations. |

## 8. Synthèse et validation

La direction UX consiste à conserver la simplicité d’un portfolio statique à six sections tout en rendant le profil DevOps compréhensible et étayé. Le travail de contenu dépend de la validation des faits et des projets par le propriétaire. Les comportements de contact, l’accessibilité, la confidentialité et les deux modes de rendu doivent être vérifiés avant de considérer les parcours comme terminés.

| Validateur | Rôle | Date | Décision |
| --- | --- | --- | --- |
| À confirmer | Propriétaire / commanditaire | À confirmer | À valider |
| À confirmer | Représentant UX/UI ou accessibilité | À confirmer | À valider |

## 9. Historique des versions

| Version | Date | Auteur | Modifications |
| --- | --- | --- | --- |
| 1.0 | 2026-11-10 | Copilot | Remplacement du modèle générique par une synthèse UX/UI liée au produit, à l’état observé et au repositionnement DevOps décrit dans le PRD. |
