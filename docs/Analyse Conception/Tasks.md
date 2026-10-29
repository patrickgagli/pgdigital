# Tâches - PGDigital

Ce document suit l'état observable du dépôt. Une case terminée correspond à une fonctionnalité présente dans le code actuel, pas nécessairement à une validation sur tous les navigateurs.

## Identification

| Information | Valeur |
| --- | --- |
| Nom du projet | PGDigital — portfolio statique |
| Commanditaire | Patrick G. |
| Équipes propriétaires répertoriées | Product, Engineering et Design |
| Date de mise à jour | 2026-10-20 |
| Version | 1.0 |
| Auteur | Patrick G. 

## Livré
- [x] Créer les six sections Accueil, À propos, Services, Compétences, Outils et Contact.
- [x] Synchroniser la navigation et les ancres `slide01` à `slide06`.
- [x] Configurer fullPage.js et son mode responsive sous 768 px.
- [x] Ajouter les carrousels responsives avec Owl Carousel.
- [x] Uniformiser, recentrer et rendre les cinq cartes Services accessibles par des contrôles explicites.
- [x] Déclencher les animations Animate.css avec jquery.inview.
- [x] Animer les compteurs de la section À propos une seule fois.
- [x] Ajouter l'effet de saisie du titre avec Alpine.js.
- [x] Ajouter le menu mobile et maintenir son état `aria-expanded`.
- [x] Ajouter la validation native et l'envoi `mailto:` du formulaire de contact.
- [x] Ajouter les libellés accessibles, l'autocomplétion et le statut du formulaire.
- [x] Corriger le flux mobile de la section Contact et du pied de page.
- [x] Adapter la hauteur des sections au contenu et empêcher le header fixe de les recouvrir sur mobile.
- [x] Uniformiser l'espace supérieur des sections mobiles sous le header fixe.
- [x] Empiler les champs de contact et masquer les liens sociaux latéraux sous 768 px.
- [x] Vérifier les six ancres et le menu mobile à 320 x 568 et 390 x 844.
- [x] Aligner la documentation canonique sur le code au 2026-09-10.
- [x] Externaliser le contenu des sections dans `json/site-data.json` et le rendre via `js/data.js`.
- [x] Externaliser la configuration du formulaire dans `json/contact-form.json`.
- [x] Envoyer le formulaire de contact en `POST` JSON vers un endpoint configurable, avec repli `mailto:`.
- [x] Conserver le brouillon du formulaire et les envois échoués dans `localStorage`, puis les réémettre automatiquement.
- [x] Ajouter un champ piège anti-spam au formulaire de contact.
- [x] Corriger les noms accessibles des trois liens sociaux et l'espace de fin signalés par `html-validate`.

## Prochaines priorités
- [x] Renseigner la clé d'accès du service de formulaire dans `json/contact-form.json` pour activer l'envoi réel en production.
- [x] Retirer les liens sociaux génériques du rendu alimenté par JSON ; synchroniser aussi le repli HTML (voir M01).
- [x] Passer l'attribut `lang` du document à `fr` pour refléter le contenu de l'interface.
- [x] Retirer le chargement réseau de HTMX, qui n'est pas utilisé par la page.
- [x] Intégrer, tester et documenter le mode sombre de `js/scripts.js`.
- [ ] Décider si le consentement doit être intégré ; ne pas présenter `js/cookie_consent.js` comme une fonctionnalité active sans bandeau HTML et API serveur compatibles.
- [ ] Ajouter les métadonnées de partage Open Graph et Twitter Card.
- [x] Implémenter l'ajout de données structurées, d'un sitemap et d'un fichier `robots.txt`.
- [x] Publier les règles `robots.txt` à la racine de `patrickgagli.github.io` (ou d'un domaine personnalisé) et soumettre le sitemap dans Google Search Console.
- [x] Évaluer un canal de contact ne dépendant pas d'une application de messagerie locale.

## Contrôles récurrents
- [x] Exécuter `node --check js/custom.js` après une modification du comportement actif.
- [x] Exécuter `node --check js/data.js` et valider les fichiers `json/` après une modification des données.
- [x] Exécuter les contrôles de syntaxe sur `js/scripts.js` et `js/cookie_consent.js` lorsqu'ils sont modifiés.
- [x] Exécuter `npx --yes html-validate@latest index.html` après une modification du balisage.
- [x] Vérifier l'absence d'erreur console et de ressource locale introuvable.
- [x] Tester les six ancres et l'état actif de la navigation.
- [x] Tester l'ouverture, la fermeture et `aria-expanded` du menu mobile.
- [x] Tester les carrousels, les icônes Bootstrap et le titre Alpine.js.
- [x] Tester les champs requis, le format email et l'email prérempli du formulaire.
- [x] Tester le rendu depuis `json/` en HTTP et le repli statique en `file://`.
- [x] Tester la restauration du brouillon, la mise en file d'un envoi échoué et son réenvoi automatique.
- [x] Tester la section Contact à 390 x 844 sans débordement, titre tronqué ni chevauchement du pied de page.

## Règle de mise à jour
Lorsqu'une fonctionnalité est ajoutée ou retirée, mettre à jour dans la même modification :

- la documentation technique si le comportement ou une dépendance change ;
- la structure si la responsabilité d'un fichier change ;
- ce suivi si l'état d'une tâche change ;
- le README si l'installation, les fonctionnalités publiques ou les limitations changent.


## Suivi de l'audit du 2026-10-20

Les éléments cochés ci-dessous correspondent aux contrôles effectivement réalisés dans le périmètre et l'environnement décrits dans [Audit.md](../Extra/Audit.md). Ils ne valent pas certification, test exhaustif ni validation de la production au-delà des observations consignées.

### Résultats et contrôles réalisés

- [x] Auditer le site publié et le code local pour la performance, la sécurité, la confidentialité et l'expérience utilisateur ; consigner les limites et l'absence de test d'intrusion ou d'envoi réel.
- [x] Établir la référence de performance : 14 images actives totalisant 1 065 272 octets, 9 scripts et 6 feuilles CSS locales ; relever les mesures de navigation avec cache, sans les présenter comme des mesures à froid.
- [x] Vérifier les validations HTML et syntaxiques JavaScript : `html-validate` et les quatre commandes `node --check` réussissent.
- [x] Vérifier les six ancres, le menu mobile, les quatre carrousels, les icônes et l'effet de saisie aux dimensions consignées dans l'audit.
- [x] Vérifier le rendu des JSON en HTTP et le repli HTML quand les requêtes JSON échouent ; consigner la divergence des liens sociaux du repli.
- [x] Tester la validation native et le contenu du lien `mailto:` sans solliciter de service externe ni ouvrir de client de messagerie.
- [x] Tester brouillon et réémission avec un endpoint local simulant 503 puis 200 ; consigner les limites de ces essais et le brouillon qui reste après réémission.
- [x] Vérifier le Contact à 390 × 844 sans débordement horizontal, titre tronqué ni chevauchement du pied de page.
- [x] Confirmer HTTPS et HSTS observé, l'absence d'erreurs de ressources pendant les parcours contrôlés, et l'avertissement fullPage associé à `responsiveSlides`.

### Lot 1 — Fiabiliser le contact et protéger les données (P1)

- [ ] **F01 — Confirmer le succès métier.** Analyser la réponse JSON Web3Forms et vérifier explicitement son indicateur de succès ; traiter les JSON invalides et rejets HTTP. N'annoncer la prise en charge et n'effacer le formulaire ou brouillon qu'après acceptation confirmée ; employer un libellé qui ne promet pas la livraison finale. Recette : HTTP 200 avec `success: false`, JSON invalide et HTTP 400 ne produisent jamais de faux succès ni de perte du message ; une réponse positive conforme conserve le parcours nominal.
- [ ] **F02 — Rendre l'initialisation sûre et indépendante des JSON.** Prévenir dès le chargement toute soumission native en GET ; activer l'envoi seulement quand la configuration est connue, avec délai borné et état d'échec explicite. Rendre le contenu et les ancres accessibles sans JavaScript, ne pas laisser le préchargeur masquer la page, et fournir un moyen de contact en repli. Recette : JSON lent, absent ou invalide et scripts bloqués ne placent jamais de données personnelles dans l'URL ; un seul gestionnaire de soumission est enregistré.
- [ ] **F03 — Fiabiliser le brouillon et la file d'attente.** Signaler les erreurs de stockage sans prétendre qu'un message est sauvegardé ; limiter les tentatives aux erreurs transitoires, sérialiser les vidanges et éviter les pertes/doublons entre onglets. Avertir avant saturation, permettre de consulter/annuler les messages en attente et ajouter un timeout qui réactive toujours le bouton. Recette : tester stockage interdit/plein, 400, 429, 503, timeout, file pleine, retour en ligne et saisie pendant la vidange ; aucun message ne disparaît ni n'est déclaré sauvegardé à tort.
- [ ] **S02 — Encadrer les données personnelles.** Définir une durée de conservation, expiration, effacement du brouillon et annulation d'une réémission ; décider si la sauvegarde doit être volontaire ou limitée à la session. Ajouter près du formulaire une information sur le responsable, la finalité, la base légale à déterminer, les destinataires, la durée, les droits et le contact. Vérifier les conditions, transferts, restrictions de domaine, quotas et protections Web3Forms sans sollicitation abusive de la production ; ne pas considérer le honeypot côté client comme une protection serveur. Recette : l'utilisateur comprend la sauvegarde et le destinataire, peut effacer/annuler, et aucun brouillon expiré n'est restauré.
- [ ] **M01 — Synchroniser le repli statique et la configuration.** Valider le destinataire de secours, supprimer du HTML les liens de profils génériques, aligner HTML et JSON ainsi que `README.md` avec la configuration réelle. Ajouter au besoin un contrôle léger de cohérence sans imposer de build. Recette : contenu, contact et liens concordent avec JSON disponible, JSON indisponible et ouverture directe ; le consentement n'est pas décrit comme intégré sans bandeau et API compatibles.

### Lot 2 — Réduire les risques et améliorer l'accessibilité

- [ ] **S01 — Vérifier et mettre à niveau les dépendances actives.** Établir versions et empreintes vérifiables, corriger l'incohérence de version jQuery, examiner les avis applicables et retirer d'abord les dépendances sans usage. Remplacer les distributions obsolètes par des versions officielles compatibles, sans éditer les fichiers minifiés à la main ni charger une deuxième version de jQuery. Vérifier la licence et le mode de distribution de fullPage. Recette : inventaire cohérent avec l'exécution, aucun avis applicable non traité, et navigation, responsive, carrousels et contact validés.
- [ ] **U01 — Atteindre les contrastes WCAG AA.** Corriger les combinaisons texte/fond insuffisantes et vérifier thème clair et sombre, placeholders, messages, bordures, boutons, navigation et états focus/erreur/désactivé. Recette : au moins 4,5:1 pour le texte courant et 3:1 pour le grand texte et les composants graphiques concernés.
- [ ] **U02 — Structurer la page et rendre les contrôles accessibles.** Ajouter un repère `main`, un `h1`, des titres de section hiérarchisés et un lien d'évitement ; nommer les contrôles de pagination, annoncer leur état et traiter les clones Owl. Restaurer un focus visible contrasté, agrandir les cibles, remplacer le `div` cliquable de défilement par un contrôle natif, fermer le menu avec Échap en restituant le focus et synchroniser son libellé. Rendre les descriptions d'outils accessibles sans survol. Recette : parcours clavier complet sans piège ni focus masqué, noms/états annoncés, essai lecteur d'écran et zoom 200 %, cibles de 44 × 44 px visées.
- [ ] **U03 — Respecter la préférence de mouvement réduit et permettre la pause.** Désactiver l'autoplay sous `prefers-reduced-motion: reduce` ; permettre l'arrêt durable et suspendre les animations automatiques au focus et au survol. Adapter carrousels, compteurs, transitions fullPage et frappe du hero ; afficher le texte complet en mouvement réduit et un texte initial utile si Alpine ne charge pas. Recette : aucun mouvement automatique avec la préférence réduite, contenus toujours accessibles manuellement et mécanisme de pause disponible en mode normal.
- [ ] **S03 — Encadrer les ressources tierces et les politiques.** Figer la version Alpine et privilégier les ressources locales pour scripts, icônes et polices ; sinon utiliser SRI et `crossorigin` quand compatibles. Réduire les graisses de police, envisager WOFF2 et `font-display: swap`. Définir et tester une CSP minimale avec les sources réellement requises, sans ajouter aveuglément `unsafe-eval`. Configurer les en-têtes au niveau d'un hébergement qui le permet ; ne pas présenter une balise `meta` comme équivalente à `frame-ancestors` en en-tête. Recette : vérifier la réponse publiée et l'absence de violations inattendues ; conserver HSTS déjà observé.

### Lot 3 — Optimiser et mieux démontrer l'offre

- [ ] **P01 — Réduire le poids des images et prévenir les sauts de mise en page.** Redimensionner selon la taille affichée et la densité d'écran ; comparer WebP/AVIF et PNG optimisé, définir `width`/`height` ou un ratio stable et utiliser `loading="lazy"`/`decoding="async"` hors écran sans retarder l'image LCP. Appliquer au HTML et au générateur JSON. Recette : viser au moins 50 % de réduction sur les 1 065 272 octets de référence, contenu identique, rendu acceptable à densité ×2, sans 404 ni décalage notable.
- [ ] **P02 — Mesurer et simplifier le démarrage.** Découpler l'affichage du préchargeur et la configuration du contenu selon F02 ; mesurer puis retirer scripts inutilisés, vérifier l'absence d'usage de Bootstrap JS, et évaluer sans réécriture imposée les polices, icônes, carrousels, navigation et stratégie de cache. Si les scripts deviennent différés, préserver leur ordre et les abonnements aux événements. Retirer `responsiveSlides: true` si l'extension requise n'est pas utilisée. Recette : comparer au moins trois mesures à cache froid par profil réseau, documenter les médianes ; suivre LCP ≤ 2,5 s, INP ≤ 200 ms et CLS ≤ 0,1 comme objectifs, pas comme résultats déjà établis.
- [ ] **U04 — Améliorer la confiance, la conversion et le référencement.** Ajouter des réalisations réelles et autorisées (besoin, rôle, solution, résultat vérifiable), un appel à l'action vers Contact, un titre et une description en français, une image de partage locale, les métadonnées Open Graph/Twitter et une URL canonique. N'ajouter que des données structurées exactes et pertinentes ; évaluer sitemap et `robots.txt` sans présenter leur absence comme un blocage d'indexation. Recette : offre et prochaine action compréhensibles dès le premier écran, partage social lisible et réalisations utilisables au clavier et sur mobile.

### Recette après corrections

- [ ] Rejouer les validations syntaxiques et HTML, puis vérifier les six ancres, carrousels et menu à 1440 × 900, 390 × 844, 320 px et zoom 200 %.
- [ ] Tester HTTP, `file://`, JavaScript désactivé, CDN indisponible, JSON lent/invalide/absent et stockage interdit.
- [ ] Intercepter les appels de formulaire pour les cas succès métier, rejet, 429, 503, timeout et file pleine ; vérifier retour en ligne, vidanges concurrentes et nouvelle saisie. N'effectuer un envoi réel qu'avec accord.
- [ ] Tester navigation clavier, lecteur d'écran, contrastes, pause des animations et mouvement réduit.
- [ ] Vérifier les politiques sur la réponse de production et l'absence de nouvelles erreurs console ou requêtes locales en échec.
