# Architecture — PGDigital

## 1. Identification

| Information | Valeur |
| --- | --- |
| Nom du projet | PGDigital — portfolio |
| Propriétaire / commanditaire | Patrick G. |
| Responsables | Product, Engineering et Design (noms à confirmer) |
| Date de référence | 2026-09-11 |
| Version | 1.0 |

## 2. Contexte et objectifs d’architecture

PGDigital est un site de portfolio statique à page unique, exécuté dans le navigateur et déployable tel quel sur GitHub Pages. L’architecture privilégie une maintenance simple, l’absence de compilation et de serveur applicatif, le chargement de contenu structuré depuis des fichiers JSON et un repli utilisable lorsque `fetch` ne fonctionne pas en `file://`.

Les objectifs de performance, disponibilité, budget, volume de trafic et conservation des données ne sont pas quantifiés dans la documentation de référence.

## 3. Architecture de solution

### 3.1 Vue d’ensemble et composants applicatifs

| Composant | Utilisateurs / consommateurs | Responsabilité |
| --- | --- | --- |
| Navigateur et `index.html` | Visiteurs | Fournir la page unique, les sections et le contenu HTML de repli. |
| `js/data.js` | Page et scripts d’interface | Charger les fichiers JSON, construire les contenus dynamiques et exposer `window.PGDigital.ready`. |
| `js/custom.js` | Page | Attendre le chargement des données puis initialiser fullPage.js, Owl Carousel, animations, menu mobile et formulaire. |
| `js/scripts.js` | Page | Gérer le thème clair/sombre et sa persistance. |
| `json/site-data.json` | `js/data.js` | Fournir les faits, services, compétences, outils et coordonnées. |
| `json/contact-form.json` | `js/data.js` / formulaire | Fournir les paramètres du formulaire, dont l’endpoint, la clé éventuelle, les clés de stockage et messages de statut. |
| GitHub Pages | Visiteurs | Héberger et servir les fichiers statiques du site. |
| Endpoint de formulaire configuré | Formulaire | Recevoir les soumissions JSON lorsque l’endpoint et la clé sont renseignés. Le fournisseur n’est pas précisé. |

### 3.2 Données et persistance

| Données | Stockage / origine | Utilisation |
| --- | --- | --- |
| Contenus du portfolio | `json/site-data.json`; copie statique dans `index.html` | Construction des listes et coordonnées affichées. |
| Configuration du formulaire | `json/contact-form.json` | Configuration de l’envoi, de la file et des messages de statut. |
| Préférence de thème | `localStorage`, clé `dark-mode` | Restaurer le thème choisi. |
| Brouillon de contact | `localStorage`, clé `pgdigital:contact:draft` | Restaurer la saisie au prochain chargement. |
| File d’envois échoués | `localStorage`, clé `pgdigital:contact:outbox` | Réessayer les envois, dans la limite de `maxQueued`. |

Aucune base de données ou persistance serveur propre au site n’est décrite. La durée de conservation, l’effacement et les règles de confidentialité des données stockées localement restent à définir.

### 3.3 Flux et intégrations

| Émetteur | Destinataire | Mécanisme | Comportement |
| --- | --- | --- | --- |
| Navigateur | Fichiers JSON du site | `fetch` HTTP | `js/data.js` charge les données avant l’initialisation de l’interface. |
| Navigateur en `file://` ou après échec de chargement | Contenu HTML statique | Repli local | Le contenu statique de `index.html` reste affiché lorsque les JSON ne peuvent pas être chargés. |
| Formulaire du navigateur | Endpoint configuré | Requête `POST` JSON | Utilisée uniquement si `endpoint` et `accessKey` sont renseignés; bouton désactivé pendant l’envoi. |
| Formulaire du navigateur | Application de messagerie du visiteur | Lien `mailto:` | Repli utilisé en l’absence d’endpoint ou de clé configurés. |
| Formulaire du navigateur | `localStorage` | Stockage local | Conservation du brouillon et mise en file des envois échoués; réémission au chargement et à l’événement `online`. |

Le texte JSON est inséré via `textContent`; les URL sont limitées aux schémas `http`, `https` et `mailto`.

### 3.4 Infrastructure et déploiement

| Élément | Choix documenté | Rôle |
| --- | --- | --- |
| Hébergement | GitHub Pages | Servir les fichiers statiques. |
| Calcul applicatif | Navigateur du visiteur | Exécuter les scripts et interactions côté client. |
| Serveur applicatif / base de données | Aucun dans le périmètre documenté | Non nécessaires au fonctionnement principal du site statique. |
| Stockage client | `localStorage` | Préférence de thème, brouillon et file de messages. |
| Sauvegarde | Non documentée | Politique et responsabilité à confirmer. |

Le référencement utilise l’URL canonique `https://patrickgagli.github.io/pgdigital/`, déclarée dans `index.html`. Un graphe JSON-LD Schema.org statique décrit la personne, le site et la page (`Person`, `WebSite`, `WebPage`), sans dépendre de `js/data.js`. Le fichier `sitemap.xml` expose uniquement cette page, sans les fragments de navigation.

Le fichier `robots.txt` autorise l’exploration et référence le sitemap par son URL absolue. Sur GitHub Pages, il est servi sous `/pgdigital/robots.txt`, alors que les robots consultent `/robots.txt` à la racine du domaine. Son activation nécessite donc une publication à la racine via le dépôt `patrickgagli.github.io`, en préservant les règles des autres projets, ou un domaine personnalisé servant ce site à sa racine. Le sitemap peut être soumis directement dans Google Search Console. Tout changement d’URL publique doit être répercuté dans la canonique, le JSON-LD, le sitemap et la directive `Sitemap`.

### 3.5 Sécurité et limites

- Le rendu des textes utilise `textContent` et les URL acceptées sont limitées à `http`, `https` et `mailto`.
- Aucune clé d’accès n’est fournie par défaut. Si une clé est configurée dans les fichiers servis au navigateur, elle est accessible côté client; la configuration doit tenir compte des capacités et recommandations du fournisseur de formulaire.
- Le formulaire comporte un champ piège `company` et une validation HTML native; le service externe reste responsable de ses propres contrôles côté serveur.
- Le contenu de formulaire peut rester dans le `localStorage` du navigateur après un échec. La durée de conservation et le traitement des données personnelles ne sont pas spécifiés.
- Les expérimentations de consentement aux cookies ne sont pas intégrées : elles ne sont pas chargées par `index.html` et leur API serveur `/api/cookie-consent/` est absente.

### 3.6 Composants humains et opérationnels

| Profil | Responsabilité |
| --- | --- |
| Propriétaire du portfolio | Valider les contenus et la configuration de contact. |
| Mainteneurs Product, Engineering et Design | Maintenir les fichiers, vérifier la cohérence JSON/repli et valider le rendu. |
| Fournisseur de formulaire | Fournir l’endpoint et les modalités de configuration si un envoi distant est activé. |

Les noms des responsables et les modalités de support opérationnel sont à confirmer.

### 3.7 Schéma logique

```text
Visiteur
   |
   v
Navigateur : index.html + CSS + scripts locaux
   |                         |
   | fetch                   | POST JSON (optionnel)
   v                         v
Fichiers JSON             Endpoint de formulaire
   |
   +--> js/data.js --> rendu des contenus
                         |
                         +--> js/custom.js (navigation, carrousels, formulaire)
                         +--> js/scripts.js (thème)
                         +--> localStorage (thème, brouillon, file)

Si les fichiers JSON ne sont pas accessibles : contenu statique de index.html.
```

## 4. Architecture logicielle

### 4.1 Modules et dépendances

| Module / dépendance | Responsabilité |
| --- | --- |
| `index.html` | Structure de la page, six sections, contenu statique de repli et chargement des ressources. |
| `js/data.js` | Chargement des deux JSON et rendu du contenu dynamique. |
| `js/custom.js` | Initialisation après `window.PGDigital.ready`; navigation, carrousels, animations, menu et contact. |
| `js/scripts.js` | Thème clair/sombre et préférence persistée. |
| `css/style.css` et `css/responsive.css` | Styles généraux et adaptations de largeur/hauteur. |
| Bootstrap, jQuery, fullPage.js, Owl Carousel, jquery.inview, Animate.css | Bibliothèques locales utilisées par l’interface. |
| Bootstrap Icons 1.11, Alpine.js 3.x, Raleway | Ressources externes chargées respectivement depuis jsDelivr, unpkg et Google Fonts. |

`js/cookie_consent.js` et `css/cookie_consent.css` sont des fichiers non intégrés et ne font pas partie du chemin d’exécution actif.

### 4.2 Ordonnancement et comportement des composants

1. `index.html` charge la page, les bibliothèques et les scripts.
2. `js/data.js` récupère les JSON et reconstruit les conteneurs de faits, services, témoignages, galerie et contact.
3. `js/data.js` expose `window.PGDigital.ready`; `js/custom.js` attend cette promesse avant l’initialisation des carrousels et de fullPage.js.
4. Si `fetch` échoue, le contenu statique du document demeure le repli.
5. Le formulaire choisit l’envoi distant uniquement lorsque l’endpoint et la clé sont présents; sinon il construit un lien `mailto:`.

### 4.3 Charge et évolution

Le site ne documente ni volume de trafic, ni objectif de disponibilité, ni mesure de charge. Il n’y a pas de composants applicatifs côté serveur à mettre à l’échelle. L’hébergement statique et l’exécution côté navigateur constituent le modèle actuel. Les exigences de montée en charge doivent être réévaluées si un backend, une authentification ou une persistance serveur est ajouté.

### 4.4 Type d’architecture logicielle

| Option | Adéquation au projet |
| --- | --- |
| Application statique côté client, page unique | Choix actuel : adapté au portfolio, au faible périmètre fonctionnel et au déploiement sans serveur applicatif. |
| Architecture en couches avec backend | Non mise en œuvre; ajouterait des services et opérations non requis par le périmètre documenté. |
| Microservices | Non adaptés au périmètre actuel; aucun service applicatif interne n’est documenté. |

**Architecture constatée :** site statique à page unique avec composants et scripts côté client.
**Compromis :** simplicité de déploiement et de maintenance contre dépendance au navigateur pour les interactions; envoi de contact distant délégué à un endpoint externe optionnel.

## 5. Hébergement et services cloud

| Sujet | État documenté |
| --- | --- |
| Modèle de déploiement | Fichiers statiques sur GitHub Pages. |
| Région / localisation | Non précisée. |
| Modèle de service | Hébergement statique géré; la documentation ne qualifie pas formellement le service comme IaaS, PaaS ou SaaS. |
| Autres services externes | CDN jsDelivr, unpkg et Google Fonts pour certaines dépendances; endpoint de formulaire optionnel non identifié. |
| Environnements | Aucun environnement distinct de développement, test ou production n’est décrit. |

## 6. Décisions architecturales constatées

Les éléments suivants décrivent l’implémentation documentée et ne constituent pas des décisions formellement approuvées dans un registre ADR.

| ID | Décision / état constaté | Motif documenté ou compromis |
| --- | --- | --- |
| ADR-01 | Utiliser un site statique à page unique hébergé sur GitHub Pages. | Pas de compilation, de gestionnaire de paquets ni de serveur applicatif. |
| ADR-02 | Stocker les contenus variables dans des fichiers JSON tout en gardant une copie HTML statique. | Chargement structuré en HTTP et repli en cas d’échec de `fetch`, notamment `file://`. |
| ADR-03 | N’activer l’envoi distant du formulaire que si endpoint et clé sont configurés; sinon utiliser `mailto:`. | L’envoi distant n’est pas obligatoire pour le fonctionnement par défaut. |
| ADR-04 | Conserver thème, brouillon et file d’envoi dans `localStorage`. | Préférence et reprise de saisie côté navigateur, sans persistance serveur. |

Les dates d’adoption, participants, alternatives formelles et approbations sont à confirmer.

## 7. Critères d’architecture et vérifications

| Critère | État / vérification documentée |
| --- | --- |
| Performance | Aucun objectif chiffré documenté; mesurer avant toute exigence de seuil. |
| Scalabilité | Site statique; aucun besoin de mise à l’échelle applicative documenté. |
| Disponibilité | Dépend de l’hébergement statique et des services externes; aucune cible définie. |
| Sécurité | Rendu textuel via `textContent`, schémas d’URL restreints; configuration et traitement du formulaire externe à confirmer. |
| Coût | Aucun budget ni coût d’hébergement documenté. |
| Maintenabilité | Fichiers sans compilation; règles de maintenance définies dans la documentation technique. |
| Conformité | Obligations et règles de conservation non précisées. |

## 8. Déploiement et exploitation

- **Pré-requis :** les fichiers du site, JSON, scripts, styles et ressources doivent être présents et cohérents.
- **Hébergement :** publier les fichiers statiques via GitHub Pages. La procédure exacte de publication n’est pas documentée.
- **Vérifications :** exécuter les contrôles JavaScript et HTML décrits dans la documentation technique; vérifier le chargement JSON en HTTP et le repli `file://`.
- **Contrôles navigateur :** tester les six ancres, menu mobile, carrousels, thème, formulaire et vues 390 × 844 et 320 × 568.
- **Incidents et retour arrière :** procédure, contacts, sauvegarde et restauration à définir par les responsables du dépôt.

## 9. Validation

La validation architecturale et les responsables d’exploitation ne sont pas renseignés.

| Validateur | Rôle | Date | Décision |
| --- | --- | --- | --- |
| À confirmer | Propriétaire / responsable technique | À confirmer | À confirmer |

## 10. Historique des versions

| Version | Date | Auteur | Modifications |
| --- | --- | --- | --- |
| 1.0 | 2026-09-11 | Patrick G. |  |
