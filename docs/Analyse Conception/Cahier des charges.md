# Cahier des charges — PGDigital

## Identification

| Information | Valeur |
| --- | --- |
| Nom du projet | PGDigital — portfolio |
| Client / commanditaire | Patrick G. |
| Responsable / rédacteur | À confirmer |
| Date de référence | 2026-09-11 |
| Version | 1.0 |
| Statut | Document de cadrage technique; approbation métier à confirmer |
| Références | [Analyse des besoins](Analyse%20des%20besoins.md), [Architecture](Architecture.md) |

## 1. Objet et contexte

Ce cahier des charges décrit le périmètre fonctionnel et technique documenté de PGDigital ainsi que les vérifications attendues. Il s’agit d’un portfolio statique composé d’une page unique et déployable sur GitHub Pages, sans compilation ni serveur applicatif. Le site permet de consulter des contenus de présentation et d’envoyer une demande de contact.

Le commanditaire, les objectifs métier chiffrés et la décision d’approbation restent à préciser. Les exigences ci-dessous sont établies à partir de l’état décrit dans la documentation technique et ne constituent pas une validation contractuelle.

## 2. Périmètre

### Inclus

- Page unique présentant les sections Accueil, À propos, Services, Compétences, Outils et Contact.
- Navigation fullPage.js, animations, compteurs, titre animé et carrousels documentés.
- Chargement du contenu et de la configuration de formulaire depuis les deux fichiers JSON.
- Contenu HTML statique de repli lorsque le chargement JSON n’est pas possible.
- Menu mobile, thème clair/sombre et formulaire de contact.
- Brouillon et file locale d’envois échoués, ainsi que la nouvelle tentative documentée.
- Mise en page responsive et ressources statiques nécessaires au déploiement GitHub Pages.

### Exclus / non intégrés

- Backend applicatif, base de données serveur ou authentification.
- Expérimentation de consentement aux cookies : fichiers présents mais non chargés, API serveur absente.
- Métadonnées Open Graph ou Twitter Card, données structurées, sitemap et `robots.txt`, absents de l’état documenté.
- Fournisseur de formulaire spécifique : l’endpoint doit être choisi et configuré séparément.

### Hypothèses et contraintes

| Type | Description | Traitement |
| --- | --- | --- |
| Déploiement | Le site est publié sous forme de fichiers statiques sur GitHub Pages. | Pas d’étape de build ni de serveur applicatif. |
| Chargement local | `fetch` peut être bloqué en `file://`. | Maintenir le contenu de repli dans `index.html`. |
| Contenu | Les contenus existent à la fois dans les JSON et dans le HTML de repli. | Toute modification de contenu doit mettre à jour les deux emplacements. |
| Formulaire | Aucune clé d’accès n’est fournie par défaut. | Le fonctionnement par défaut utilise `mailto:`; l’envoi distant exige une configuration. |
| Dépendances | Les bibliothèques utilisées sont locales ou chargées depuis les CDN mentionnés. | Ne pas ajouter de versions dupliquées ni modifier les bibliothèques minifiées vendues. |
| Budget, délai, réglementation | Non précisés. | À déterminer et valider avec le commanditaire. |

## 3. Parties prenantes et utilisateurs

| Profil | Besoin / responsabilité | Validation attendue |
| --- | --- | --- |
| Visiteur | Consulter le portfolio et contacter son propriétaire depuis différents formats d’écran. | Navigation, lisibilité et formulaire utilisables. |
| Propriétaire du portfolio | Fournir et valider les informations présentées et la configuration de contact. | Validation des contenus et du parcours de contact. |
| Mainteneurs Product, Engineering et Design | Maintenir les fichiers statiques, les interactions et la cohérence entre contenu JSON et repli. | Contrôles techniques et navigateur. |
| Fournisseur de formulaire (si configuré) | Recevoir les soumissions du formulaire. | Endpoint et modalités de configuration à confirmer. |

## 4. Solution attendue et exigences

### Vue d’ensemble

Le site doit afficher une page unique avec six sections navigables. Le contenu dynamique est chargé depuis les fichiers JSON par `js/data.js`; `js/custom.js` attend que les données soient prêtes avant d’initialiser les carrousels et fullPage.js. Le HTML de `index.html` fournit un repli lorsque les JSON ne peuvent pas être chargés. La solution reste exécutable directement depuis la page et hébergeable comme site statique.

### Exigences fonctionnelles

| ID | Exigence | Priorité | Critère d’acceptation |
| --- | --- | --- | --- |
| EF-01 | Le site doit exposer les sections Accueil, À propos, Services, Compétences, Outils et Contact. | Must | Les six ancres `slide01` à `slide06`, leurs sections, entrées de menu et configuration `anchors` sont synchronisées et fonctionnelles. |
| EF-02 | Le site doit charger le contenu depuis `json/site-data.json` et la configuration du formulaire depuis `json/contact-form.json`. | Must | En HTTP, les données alimentent les conteneurs décrits dans la documentation technique avant l’initialisation des composants concernés. |
| EF-03 | Le site doit afficher son contenu statique lorsque les fichiers JSON ne peuvent pas être chargés. | Must | Le contenu utile reste affiché lors d’une ouverture `file://` ou d’un échec de chargement. |
| EF-04 | Le site doit initialiser les carrousels pour les groupes Faits, Services, Compétences et Outils. | Should | Les carrousels s’affichent après le chargement; les cinq cartes Services ont une hauteur uniforme, des boutons précédent/suivant accessibles et un recalcul au chargement et au redimensionnement. |
| EF-05 | Le menu mobile doit se replier et s’ouvrir à la demande. | Must | Sous 768 px, ouverture et fermeture fonctionnent, `aria-expanded` reflète l’état et la sélection d’un lien ferme le menu. |
| EF-06 | Le visiteur doit pouvoir alterner entre thème clair et thème sombre. | Should | `data-bs-theme`, `aria-pressed` et la préférence `localStorage` (`dark-mode`) sont actualisés. |
| EF-07 | Le formulaire doit valider les champs requis et l’adresse email et présenter un résultat accessible. | Must | La validation HTML native s’applique et `#form-messages` annonce le résultat comme région de statut. |
| EF-08 | Le formulaire doit envoyer un POST JSON lorsque endpoint et clé sont configurés; sinon, il doit proposer un `mailto:` prérempli. | Must | Le chemin utilisé dépend de la configuration; le bouton est désactivé pendant l’envoi distant et le formulaire est réinitialisé après succès. |
| EF-09 | Le formulaire doit restaurer le brouillon et conserver les envois échoués pour une nouvelle tentative. | Should | Brouillon sous `pgdigital:contact:draft`; file sous `pgdigital:contact:outbox`, limitée par `maxQueued`, réémise au chargement et à l’événement `online`, puis vidée après succès. |

### Exigences non fonctionnelles

| ID | Domaine | Exigence | Vérification |
| --- | --- | --- | --- |
| ENF-01 | Déploiement | Le site doit fonctionner comme ensemble de fichiers statiques, sans compilation ni backend. | Ouvrir `index.html` et servir le site via GitHub Pages ou HTTP local. |
| ENF-02 | Responsive | Les mises en page doivent éviter les débordements horizontaux, titres tronqués et chevauchements aux dimensions 390 × 844 et 320 × 568. | Inspection navigateur aux deux dimensions. |
| ENF-03 | Navigation responsive | fullPage.js doit passer en défilement normal sous 768 px de largeur ou sous 600 px de hauteur. | Vérifier les deux conditions d’activation du mode responsive. |
| ENF-04 | Accessibilité | Les images, champs et contrôles concernés doivent disposer des textes alternatifs, libellés et états accessibles documentés. | Vérifier `alt`, libellés ARIA, `autocomplete`, `aria-expanded`, `aria-pressed` et région de statut. |
| ENF-05 | Sécurité de rendu | Les textes JSON doivent être insérés via `textContent`; les URL doivent être limitées à `http`, `https` et `mailto`. | Inspection du code et des URL effectivement acceptées. |
| ENF-06 | Maintenabilité | Les styles généraux restent dans `css/style.css`, les ajustements responsive dans `css/responsive.css`, et les bibliothèques vendues ne sont pas modifiées. | Revue des fichiers modifiés. |
| ENF-07 | Référencement | Conserver le titre, la description, les mots-clés, l’auteur, l’icône et le viewport actuellement documentés. | Inspection de `index.html`. |

Aucune cible chiffrée de performance ou disponibilité n’est spécifiée; elles doivent être définies avant toute recette fondée sur des seuils.

### Données, interfaces et confidentialité

| Donnée / interface | Règle documentée |
| --- | --- |
| Contenus du portfolio | Source JSON : `json/site-data.json`; maintenir également la version statique de `index.html`. |
| Configuration et textes de statut du formulaire | Source : `json/contact-form.json`. La clé d’accès est vide par défaut. |
| Endpoint de formulaire | Requête JSON `POST` optionnelle; fournisseur, politique de données et disponibilité à confirmer. |
| Brouillon et file de messages | Stockés dans le `localStorage` du navigateur; durée de conservation et règles de suppression à définir. |
| Préférence de thème | Stockée dans `localStorage` sous `dark-mode`. |

## 5. Livrables attendus

| ID | Livrable | Critère de qualité |
| --- | --- | --- |
| LIV-01 | Site statique PGDigital | Page et ressources nécessaires présentes; navigation et comportements documentés fonctionnels. |
| LIV-02 | Contenus et configuration JSON | `json/site-data.json` et `json/contact-form.json` cohérents avec les comportements de l’interface. |
| LIV-03 | Contenu statique de repli | `index.html` conserve une version statique cohérente du contenu utile. |
| LIV-04 | Documentation technique et de conception | Décrit l’architecture, les contraintes et les vérifications pertinentes. |

Les responsables de livraison, formats supplémentaires et dates d’échéance sont à confirmer.

## 6. Planning, budget et ressources

Aucun planning, jalon, budget ou estimation de ressources n’est fourni par la documentation de référence. Ces éléments doivent être définis et validés par le commanditaire avant engagement.

## 7. Vérification, recette et réception

### Contrôles automatisables documentés

```powershell
node --check js/custom.js
node --check js/data.js
node --check js/scripts.js
node --check js/cookie_consent.js
npx --yes html-validate@latest index.html
```

L’état documenté au 2026-09-11 indique que les contrôles de syntaxe JavaScript et la validation HTML réussissent. Le rendu JSON en HTTP, les six sections, le menu mobile et l’absence de débordement horizontal à 390 × 844 ont également été vérifiés dans un navigateur via un serveur HTTP local.

### Contrôles manuels à compléter

- Absence d’erreurs console et de ressources locales introuvables.
- Navigation sur les six ancres.
- Ouverture, fermeture et mise à jour de `aria-expanded` du menu mobile.
- Affichage du titre Alpine.js, des icônes et des carrousels.
- Validation du formulaire et ouverture du message prérempli en mode `mailto:`.
- Restauration du brouillon, mise en file après échec et réémission après retour en ligne.
- Fonctionnement JSON via HTTP et repli statique en `file://`.
- Absence de débordement ou de chevauchement dans la section Contact à 390 × 844 et 320 × 568.

La réception doit confirmer les critères d’acceptation et documenter les anomalies ou réserves. Le responsable de recette et les règles de traitement des anomalies sont à désigner.

## 8. Risques et mesures de maîtrise

| Risque | Mesure de maîtrise |
| --- | --- |
| Divergence entre contenu JSON et contenu statique de repli. | Mettre à jour et vérifier les deux sources à chaque changement de contenu. |
| Chargement `fetch` indisponible en `file://`. | Préserver le repli HTML et valider les deux modes de chargement. |
| Envoi de formulaire impossible faute de configuration ou de service externe. | Garder `mailto:` comme repli et confirmer endpoint et clé avant l’activation de l’envoi distant. |
| Conservation locale de messages de contact après un échec. | Définir une politique de rétention et de suppression; informer le propriétaire du traitement des données. |
| Difficulté d’utilisation sur petits écrans. | Vérifier les dimensions 390 × 844 et 320 × 568, ainsi que le mode responsive sous 768 px. |

## 9. Gouvernance et changements

Le propriétaire du portfolio doit valider le contenu et le périmètre. Les responsables Product, Engineering et Design sont indiqués dans la documentation générale; leurs personnes référentes, pouvoirs d’approbation, cadence de suivi et processus de demande de changement restent à confirmer.

Toute modification du périmètre, du formulaire, des données conservées ou des critères de recette doit être validée par le commanditaire puis répercutée dans les documents concernés.

## 10. Documents associés

| Document | Objet |
| --- | --- |
| [Analyse des besoins](Analyse%20des%20besoins.md) | Objectifs, profils utilisateurs, besoins et exigences. |
| [Architecture](Architecture.md) | Composants, flux, stockage et décisions architecturales constatées. |
| [Documentation technique](../documentation.md) | Comportements, dépendances, validation et règles de maintenance. |
| [Modélisation](Modélisation.md) | Document associé; contenu non repris ici. |
| [UX-UI](UX-UI.md) | Document associé; contenu non repris ici. |

## 11. Approbation et historique

L’approbation du commanditaire et la date d’entrée en vigueur sont à confirmer.

| Version | Date | Auteur | Modifications |
| --- | --- | --- | --- |
| 1.0 | 2026-09-11 | Patrick G. |  |
