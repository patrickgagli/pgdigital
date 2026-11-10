# Analyse des besoins — PGDigital

## Identification du projet

| Information | Valeur |
| --- | --- |
| Nom du projet | PGDigital — portfolio personnel DevOps |
| Client / commanditaire | Patrick G. |
| Analystes / responsables | Product, Engineering et Design (noms à confirmer) |
| Date de référence | 2026-11-10 |
| Version du document | 1.1 |
| Auteur | Patrick G. |

## 1. Contexte et objectifs

### Contexte

PGDigital est le portfolio personnel de Patrick G., destiné à présenter un positionnement DevOps. Le site existant est une page française composée de fichiers statiques et déployable directement sur GitHub Pages, sans compilation, gestionnaire de paquets ni serveur applicatif. Il contient six sections, des faits, services, compétences, outils et coordonnées de contact. Son contenu visible demeure encore principalement celui d’un portfolio généraliste de développement Web; le repositionnement et les preuves correspondantes sont à valider et à mettre en œuvre.

### Besoins et objectifs

- Présenter le portfolio et ses contenus dans une interface claire, accessible et adaptée aux écrans mobiles comme aux écrans de bureau.
- Permettre aux visiteurs de parcourir les six sections du site et de contacter le propriétaire.
- Permettre la mise à jour du contenu sans introduire de backend ni d’étape de compilation.
- Maintenir un affichage de repli lorsque le navigateur ne peut pas charger les fichiers JSON, notamment en ouverture `file://`.
- Étayer les compétences et l’approche DevOps par des projets réels, autorisés et décrits avec la contribution personnelle et des résultats vérifiables.
- Distinguer les expériences professionnelles, les projets personnels ou de formation et les apprentissages en cours, selon les faits confirmés par le propriétaire.

Les problèmes métier à l’origine du projet et les indicateurs de réussite quantitatifs ne sont pas précisés dans la documentation technique et restent à confirmer.

### Critères de réussite connus

| Critère | Résultat attendu | Vérification |
| --- | --- | --- |
| Navigation | Les six ancres mènent aux sections Accueil, À propos, Services, Compétences, Outils et Contact. | Vérification manuelle dans un navigateur |
| Affichage adaptatif | Pas de débordement horizontal, de titre tronqué ni de chevauchement à 390 × 844 et 320 × 568. | Vérification manuelle aux dimensions indiquées |
| Contenu | Le contenu JSON s’affiche via HTTP et le contenu statique reste disponible en `file://`. | Vérification des deux modes |
| Contact | Le formulaire valide les champs, transmet au endpoint configuré ou ouvre un message prérempli par `mailto:`. | Scénarios de validation et d’envoi |
| Positionnement | Les visiteurs comprennent le rôle DevOps et peuvent relier les compétences présentées à des preuves validées. | Validation du contenu par le propriétaire et tests de compréhension à définir |
| Études de cas | Chaque projet publié décrit le contexte, la contribution personnelle et des résultats vérifiables, sans information sensible. | Revue des preuves, autorisations et contenu avant publication |
| Qualité technique | Les contrôles JavaScript et HTML documentés réussissent. | Exécution des commandes de validation |

Les objectifs chiffrés de performance, de disponibilité et de fréquentation ne sont pas définis.

## 2. Périmètre du projet

### Éléments inclus

- Une page unique organisée en six sections et navigable au moyen de fullPage.js.
- Chargement des contenus depuis `json/site-data.json` et de la configuration de formulaire depuis `json/contact-form.json`.
- Affichage de repli du contenu statique présent dans `index.html` lorsque le chargement JSON échoue.
- Animations, compteurs, titre animé et carrousels de contenus.
- Menu mobile, thème clair/sombre et formulaire de contact avec envoi configuré ou repli `mailto:`.
- Brouillon local du formulaire, file locale des envois échoués et nouvelle tentative lors du chargement ou du retour en ligne.
- Repositionnement éditorial du profil, des compétences et services autour du DevOps, sous réserve de validation des affirmations.
- Études de cas de projets réels, autorisés et vérifiables, une fois les éléments fournis et approuvés.
- Adaptations responsives et fonctionnalités d’accessibilité décrites dans la documentation technique.
- Déploiement de fichiers statiques sur GitHub Pages.

### Éléments exclus ou non intégrés

- Backend applicatif et stockage serveur propre au site.
- Consentement aux cookies : les fichiers `js/cookie_consent.js` et `css/cookie_consent.css` sont des expérimentations non chargées par `index.html`; l’API serveur attendue n’existe pas dans ce dépôt.
- Métadonnées Open Graph et Twitter Card, non encore implémentées selon le suivi des tâches. Une URL canonique, des données structurées, un sitemap et un fichier `robots.txt` sont présents; la publication de `robots.txt` à la racine du domaine GitHub Pages reste à vérifier.
- Tout service externe de formulaire autre que l’endpoint actuellement configuré; son contrat, ses conditions et ses protections doivent être confirmés.

### Contraintes

| Type | Contrainte | Conséquence |
| --- | --- | --- |
| Technique | Exécution directe depuis `index.html`, sans compilation ni backend. | Les ressources et interactions doivent rester compatibles avec un site statique. |
| Déploiement | Publication prévue sur GitHub Pages. | Le site doit être livré sous forme de fichiers statiques. |
| Navigateur | `fetch` peut être bloqué en `file://`. | Conserver le contenu de repli dans `index.html`. |
| Sécurité des contenus | Les textes sont insérés via `textContent`; les URL sont limitées aux schémas `http`, `https` et `mailto`. | Toute évolution du rendu doit préserver ces protections. |
| Dépendances | Réutiliser les bibliothèques présentes et ne pas charger de doublons ni modifier les bibliothèques minifiées vendues avec le projet. | Les nouvelles fonctions doivent suivre l’architecture existante. |
| Budget / échéance | Non documentés. | À confirmer avec le commanditaire. |

## 3. Parties prenantes et utilisateurs

| Partie prenante / profil | Rôle et besoins | Préoccupations |
| --- | --- | --- |
| Visiteur du portfolio | Découvrir le profil, les services, les compétences et les outils; consulter le site sur ordinateur ou mobile; contacter le propriétaire. | Navigation compréhensible, affichage lisible, formulaire fonctionnel. |
| Propriétaire du portfolio | Présenter ses informations et recevoir les demandes de contact. | Exactitude des contenus et réception des messages. |
| Mainteneurs Product, Engineering et Design | Maintenir les contenus, les comportements et l’apparence du site statique. | Cohérence entre JSON et contenu de repli, compatibilité et simplicité du déploiement. |
| Fournisseur de formulaire configuré | Recevoir les soumissions lorsque l’envoi distant est activé. | Web3Forms est configuré dans `json/contact-form.json`; contrat, limites et traitements à confirmer. |

Les noms des personnes, le public cible détaillé et les modalités de validation métier ne sont pas fournis.

## 4. Recueil d’informations

L’analyse s’appuie sur le code et la documentation du dépôt, notamment le PRD 1.2 mis à jour le 2026-11-08. Aucun entretien, atelier, questionnaire ou observation utilisateur n’est consigné. Une validation par le propriétaire du portfolio reste à organiser.

## 5. Utilisateurs et besoins

| Profil utilisateur | Tâches | Besoins principaux | Contexte |
| --- | --- | --- | --- |
| Visiteur | Parcourir les sections, examiner les carrousels et changer de thème. | Navigation et contenu accessibles sur mobile et ordinateur. | Navigateur web; largeur mobile notamment inférieure à 768 px. |
| Visiteur souhaitant contacter le propriétaire | Saisir ses coordonnées et son message puis soumettre le formulaire. | Validation claire et confirmation du résultat ou ouverture d’un email prérempli. | Connexion requise pour l’envoi distant; `mailto:` disponible comme repli. |
| Mainteneur du contenu | Modifier les données et la configuration du site. | Repérer les fichiers JSON et maintenir le repli statique cohérent. | Édition des fichiers du dépôt. |

## 6. Exigences

### Exigences fonctionnelles

| ID | Exigence | Priorité | Critère d’acceptation |
| --- | --- | --- | --- |
| EF-01 | Le site doit présenter les six sections et maintenir synchronisés ancres, navigation et configuration fullPage.js. | Must | Chaque entrée de menu active la section correspondante. |
| EF-02 | Le site doit charger les contenus variables depuis les fichiers JSON documentés. | Must | En HTTP, les listes et coordonnées décrites sont rendues depuis les JSON. |
| EF-03 | Le site doit conserver un contenu statique de repli si le chargement JSON échoue. | Must | En ouverture `file://`, le contenu statique reste visible. |
| EF-04 | Le site doit fournir des animations, compteurs et carrousels pour les groupes de contenu prévus. | Should | Les carrousels faits, services, compétences et outils s’initialisent après le chargement des données. |
| EF-05 | Le menu mobile doit s’ouvrir et se fermer, mettre à jour `aria-expanded` et se refermer après sélection d’un lien. | Must | Les trois comportements sont vérifiés sur un écran de moins de 768 px. |
| EF-06 | Le visiteur doit pouvoir basculer entre les thèmes clair et sombre. | Should | Le thème, `aria-pressed` et la préférence `localStorage` sont mis à jour. |
| EF-07 | Le formulaire doit valider les champs obligatoires et l’adresse email, puis utiliser l’endpoint configuré ou le repli `mailto:`. | Must | La validation native bloque une saisie invalide; sans endpoint ou clé, un email prérempli est ouvert. |
| EF-08 | Le formulaire doit enregistrer le brouillon et mettre en file les envois échoués dans les limites configurées. | Should | Le brouillon est restauré; les messages en attente sont réémis au chargement et à l’événement `online`, puis retirés après succès. |
| EF-09 | Le contenu doit clarifier le positionnement DevOps à partir d’informations validées par le propriétaire. | Must | Profil, services, compétences et outils sont présentés sans affirmation non vérifiée; les expériences, projets et apprentissages sont qualifiés clairement. |
| EF-10 | Le portfolio doit présenter des études de cas réelles, autorisées et suffisamment documentées pour étayer les compétences mises en avant. | Must | Chaque étude de cas publiée décrit le contexte, le rôle personnel, l’approche, les outils réellement utilisés et des résultats vérifiables; limites, autorisations et informations sensibles sont vérifiées avant publication. |

### Exigences non fonctionnelles

| ID | Domaine | Exigence | Vérification |
| --- | --- | --- | --- |
| ENF-01 | Compatibilité / déploiement | Le site doit s’exécuter sans compilation ni serveur applicatif et rester déployable comme fichiers statiques. | Ouvrir directement `index.html` et déployer les ressources statiques sur GitHub Pages. |
| ENF-02 | Adaptabilité | Le site doit rester utilisable en mode responsive sous 768 px et sous 600 px de hauteur. | Contrôles manuels aux dimensions mobiles documentées. |
| ENF-03 | Accessibilité | Les contrôles concernés doivent fournir des noms ou libellés accessibles, les états ARIA prévus et un retour de formulaire annoncé. | Inspection des textes alternatifs, libellés, `aria-expanded`, `aria-pressed` et région de statut. |
| ENF-04 | Sécurité du rendu | Le rendu des textes doit utiliser `textContent` et les URL n’accepter que `http`, `https` ou `mailto`. | Inspection du rendu des données JSON et essais avec des URL non autorisées. |
| ENF-05 | Maintenabilité | Les contenus éditables doivent rester séparés dans les JSON, avec une copie statique de repli dans `index.html`. | Vérifier les deux sources après toute modification de contenu. |
| ENF-06 | Référencement | Le document doit conserver les métadonnées de base existantes; les métadonnées sociales et ressources de référencement non présentes ne sont pas exigées par l’état actuel. | Inspection des métadonnées de `index.html`. |

Les seuils mesurables de performance, de disponibilité et de conservation des données restent à définir.

## 7. Cas d’utilisation

### Acteurs et cas d’utilisation

| ID | Acteur | Cas d’utilisation | Résultat attendu |
| --- | --- | --- | --- |
| UC-01 | Visiteur | Parcourir le portfolio | Les six sections et leurs contenus sont consultables. |
| UC-02 | Visiteur | Changer de thème | Le thème choisi est appliqué et conservé localement. |
| UC-03 | Visiteur | Envoyer un message | Le message est envoyé au service configuré ou un email prérempli est proposé. |
| UC-04 | Mainteneur | Mettre à jour le contenu | Les données JSON et leur copie statique restent cohérentes. |
| UC-05 | Visiteur cible | Évaluer le profil DevOps | Les compétences et contributions sont compréhensibles et étayées par des contenus vérifiables. |

### Scénario principal — UC-03 Envoyer un message

**Acteur principal :** Visiteur
**Préconditions :** La section Contact est affichée.
**Déclencheur :** Le visiteur soumet le formulaire.

1. Le visiteur renseigne les champs requis et son adresse email.
2. Le navigateur valide les champs.
3. Si un endpoint et une clé d’accès sont configurés, le site envoie les données en JSON et annonce le résultat dans `#form-messages`.
4. Si la configuration n’est pas disponible, le site ouvre un lien `mailto:` avec le sujet et le message préremplis.
5. En cas d’échec d’envoi distant, le message peut être conservé dans la file locale prévue.

**Scénarios alternatifs :** une validation invalide bloque l’envoi; un échec réseau laisse le message dans la file locale, réémise au chargement ou au retour en ligne.

## 8. Questions ouvertes et décisions à confirmer

| Question | Responsable | Statut |
| --- | --- | --- |
| Qui est le commanditaire et qui valide le contenu et les besoins? | Propriétaire du portfolio | À confirmer |
| Quel est le public cible prioritaire et quels indicateurs de réussite doivent être suivis? | Product / commanditaire | À confirmer |
| Quel rôle, quels domaines DevOps, niveaux de compétences et projets peuvent être présentés et avec quelles preuves/autorisations? | Propriétaire du portfolio | À confirmer avant publication |
| Quel endpoint de formulaire sera utilisé en production et comment sa clé sera-t-elle configurée? | Engineering / propriétaire | À confirmer |
| Quelles exigences de conservation et de confidentialité s’appliquent aux brouillons et à la file locale? | Commanditaire / responsable du site | À confirmer |
| Quel budget et quelle échéance sont associés au projet? | Commanditaire | À confirmer |

## 9. Validation

La validation par le propriétaire du portfolio et les responsables concernés reste à documenter.

| Validateur | Rôle | Date | Décision / remarques |
| --- | --- | --- | --- |
| À confirmer | Commanditaire / propriétaire du portfolio | À confirmer | À confirmer |

## 10. Historique des versions

| Version | Date | Auteur | Modifications |
| --- | --- | --- | --- |
| 1.0 | 2026-09-11 | Patrick G. | Version initiale. |
| 1.1 | 2026-11-10 | Copilot | Alignement avec le PRD 1.2; ajout des besoins de positionnement DevOps, de qualification des compétences et d’études de cas; distinction entre le contenu actuel et la cible. |
