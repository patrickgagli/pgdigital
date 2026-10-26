# Audit — PGDigital

## Identification du projet

| Information | Valeur |
| --- | --- |
| Nom du projet | PGDigital — portfolio |
| Client / commanditaire | Patrick G. |
| Analystes / responsables | Product, Engineering et Design (noms à confirmer) |
| Date de référence | 2026-10-20 |
| Version du document | 1.0 |
| Auteur | Patrick G. |

## 1. Rapport d'audit

Date : **20 octobre 2026**

Périmètre : site statique [PGDigital publié](https://patrickgagli.github.io/pgdigital/) et code local, révision Git `391b302`.

Objet : performance, sécurité, confidentialité et expérience utilisateur. **Aucune correction applicative n'a été effectuée dans le cadre de cet audit.**

## 2. Synthèse

Le site dispose d'une base simple, sans backend applicatif à maintenir. Les six sections sont accessibles sur ordinateur et mobile lorsque JavaScript et les fichiers JSON ont terminé leur initialisation. La vue Contact à 390 × 844 ne présente pas de débordement horizontal ni de chevauchement formulaire/pied de page dans le navigateur testé.

Les priorités sont toutefois la **fiabilité du parcours de contact**, la **protection des données saisies**, la **mise à niveau des dépendances** et l'**accessibilité**. Certaines erreurs sont actuellement présentées comme des succès ; le fonctionnement dépend fortement du chargement des scripts et des JSON.

| ID | Priorité | Domaine | Constat principal | Effort estimé |
|---|---|---|---|---|
| F01 | P1 | Fiabilité | Réponse métier négative annoncée comme un succès | Faible |
| F02 | P1 | Confidentialité / disponibilité | Formulaire GET par défaut pendant l'attente des JSON | Moyen |
| F03 | P1 | Fiabilité | Conservation et réexpédition des messages non fiables | Moyen |
| S01 | P1 | Sécurité | Dépendances anciennes, version jQuery incohérente | Moyen |
| S02 | P1 | Confidentialité | Données personnelles persistées sans expiration ni commande d'effacement | Moyen |
| U01 | P1 | Accessibilité | Contraste insuffisant pour du texte courant en thème clair | Moyen |
| U02 | P1 | Accessibilité | Structure de titres, clavier et carrousels à améliorer | Moyen |
| S03 | P2 | Sécurité | Ressources tierces non verrouillées et protections HTTP incomplètes | Moyen |
| P01 | P2 | Performance | Images lourdes chargées immédiatement sans dimensions réservées | Moyen |
| P02 | P2 | Performance / résilience | Chaîne de chargement et bibliothèques disproportionnées | Moyen |
| U03 | P2 | Accessibilité | Animations automatiques sans respect de la réduction du mouvement | Faible à moyen |
| M01 | P2 | Cohérence | Repli statique et configuration susceptibles de diverger | Faible |
| U04 | P3 | Conversion / référencement | Portfolio peu démonstratif et métadonnées sociales absentes | Moyen |

**Lecture des priorités :** P1 = à traiter en premier ; P2 = amélioration importante après sécurisation du parcours principal ; P3 = optimisation de contenu et de visibilité. Il ne s'agit pas d'une échelle CVSS. Aucun scénario d'exploitation critique n'a été démontré ; une dépendance ancienne n'est pas, à elle seule, la preuve d'une faille exploitable sur ce site.

## 3. Méthode et limites

### Contrôles effectués

- Lecture de [la page HTML](../../index.html), des scripts applicatifs, des styles actifs et des configurations JSON.
- Inventaire des ressources chargées et des versions des bibliothèques locales.
- Navigation sur le site publié à **1440 × 900** et **390 × 844**, avec vérification des six ancres et du menu mobile.
- Inspection du DOM, des boutons de carrousel, des images et du comportement sous `prefers-reduced-motion: reduce`.
- Essais du formulaire avec données fictives et **interception des requêtes Web3Forms**, sans envoi de message réel : réponse HTTP 200 avec `success: false`, puis HTTP 503 et stockage indisponible.
- Simulation d'un chargement JSON suspendu et d'une indisponibilité des scripts dans des pages temporaires, fermées après les essais.
- Consultation des en-têtes HTTP par `curl -I`.
- Vérification de l'existence des ressources locales référencées par le HTML et des images référencées par le JSON.
- Validation syntaxique des quatre scripts demandés par les consignes du dépôt et validation HTML.

Les simulations et modifications temporaires du stockage ont été nettoyées. Le contrôle couvre le code local et une observation ponctuelle du site publié, sans garantir que toutes les ressources du navigateur proviennent exactement de la même révision : cache et déploiement peuvent différer.

### Limites

Il ne s'agit ni d'un test d'intrusion, ni d'une certification WCAG/RGPD, ni d'un audit du prestataire Web3Forms. Aucun test de charge, scan offensif ou envoi réel n'a été effectué. Les restrictions de domaine, quotas, protections antispam, conditions de conservation et transferts du prestataire restent à vérifier dans son administration et ses conditions contractuelles.

Aucun score Lighthouse ni résultat de terrain Core Web Vitals n'est disponible. Les temps ci-dessous proviennent d'une navigation de navigateur sans bridage réseau et majoritairement en cache ; ils ne prouvent pas les performances d'une première visite mobile. Le chemin `file://` a été analysé dans le code, mais n'a pas fait l'objet d'un essai navigateur pendant cet audit.

## 4. État mesuré

| Indicateur | Résultat et interprétation |
|---|---|
| HTML local | 31 899 octets |
| Images actives du HTML/JSON, hors favicon | 14 fichiers, **1 065 272 octets**, soit environ 1,02 Mio |
| JavaScript local effectivement inclus | 9 fichiers, **324 247 octets** avant compression HTTP |
| CSS local effectivement inclus | 6 fichiers, **232 747 octets** avant compression HTTP |
| Ressources observées dans la navigation initiale | 34 entrées Resource Timing, environ **1,55 Mio de corps décompressés de même origine**, hors document HTML |
| Temps de la navigation initiale | TTFB ≈ 42 ms ; FCP ≈ 504 ms ; `load` ≈ 754 ms ; cache présent, non représentatif d'une visite à froid |
| HTTPS | Réponse 200 et HSTS observé par `curl` |
| Cache du document | `Cache-Control: max-age=600` ; compression gzip observée depuis le navigateur |
| Ressources locales | Références HTML et images JSON présentes ; aucune image cassée observée |
| Navigation | Six ancres correctes sur les deux tailles testées |
| Contact mobile | Pas de débordement horizontal ; pied de page en position statique et après le formulaire |
| HTML | `npx --yes html-validate@latest index.html` : code de sortie 0, aucun diagnostic |
| JavaScript | Les quatre commandes `node --check` : code de sortie 0 |

Les tailles sont des octets de fichiers ou de corps décompressés, **pas une somme du trafic réellement transféré**. Les ressources en cache indiquent souvent `transferSize: 0`, et les métriques des ressources tierces sont limitées par les règles du navigateur. Les gros fichiers non utilisés, comme `img/placeholder.png`, ne sont pas comptés comme un coût de chargement de cette page.

## 5. Fiabilité du contact

### F01 — Ne pas confondre succès HTTP et succès métier — P1

**Preuve.** Dans [post()](../../js/custom.js), seul `response.ok` est contrôlé ; le corps JSON n'est pas lu. Une réponse interceptée HTTP 200 contenant `{"success":false}` déclenche le message « Votre message a bien été envoyé » et efface le formulaire.

**Impact.** Une demande peut être perdue alors que le visiteur croit l'avoir transmise. Le navigateur ne peut par ailleurs pas garantir la réception finale d'un email à partir d'une simple acceptation API.

**Recommandations.**

- Pour Web3Forms, analyser le JSON et vérifier explicitement le succès prévu par son contrat ; traiter aussi les réponses invalides ou inattendues.
- N'effacer le formulaire et le brouillon qu'après acceptation confirmée par le prestataire.
- Distinguer rejet de validation, indisponibilité temporaire et résultat ambigu après coupure réseau.
- Employer un libellé exact, par exemple « Votre demande a été prise en charge », sans promettre sa livraison finale.

**Acceptation.** Un HTTP 200 avec `success: false`, un JSON invalide et un HTTP 400 ne doivent jamais afficher le succès ni effacer le message. Une réponse positive conforme doit conserver le parcours nominal.

### F02 — Initialiser le formulaire indépendamment des JSON — P1

**Preuve.** [Le démarrage](../../js/custom.js) attend `PGDigital.ready`, qui attend les deux requêtes JSON via `Promise.all` dans [data.js](../../js/data.js). Aucun délai applicatif maximal n'est prévu. Avec les réponses JSON suspendues, le préchargeur disparaît mais le formulaire ne possède aucun gestionnaire d'événement ; fullPage n'est pas initialisé. Dans [le HTML](../../index.html), le formulaire n'a ni `method` ni `action` : le comportement natif est un **GET vers la page courante**.

**Impact.** Pendant cette fenêtre d'attente, une soumission valide peut placer nom, email et message dans l'URL, donc dans l'historique et potentiellement dans les journaux d'accès. La politique de référent et les destinations déterminent ensuite les éventuelles propagations ; une fuite vers un tiers n'est pas démontrée ici.

Autre dégradation confirmée : lorsque les scripts sont bloqués, le préchargeur couvre durablement la page (`z-index: 9999`). Les liens `#slide01` à `#slide06` ne correspondent alors à aucun `id` natif.

**Recommandations.**

- Brancher immédiatement une prévention de soumission native, puis activer l'envoi quand sa configuration est connue ; ne pas bloquer ce parcours sur le JSON de contenu.
- Définir un délai borné pour les chargements de configuration et fournir un état explicite en cas d'échec.
- Rendre les liens de section fonctionnels sans fullPage, en synchronisant les `id`, ancres et liens.
- Prévoir une base lisible sans JavaScript : préchargeur activé uniquement par le script, contenu visible et contact email explicite dans un repli adapté.
- Empêcher la soumission native en l'absence d'un endpoint sûr ; `method="post"` seul vers GitHub Pages ne constitue pas une solution fonctionnelle.

**Acceptation.** Sous JSON lent, absent, invalide ou scripts bloqués, aucun champ personnel ne doit apparaître dans l'URL. Le contenu et un moyen de contact restent accessibles. Après disponibilité des JSON, le formulaire ne doit pas recevoir plusieurs gestionnaires concurrents.

### F03 — Rendre la sauvegarde et la file d'attente fiables — P1

**Preuves dans [custom.js](../../js/custom.js).**

- Les erreurs de `localStorage` sont absorbées silencieusement. Avec un HTTP 503 simulé et `setItem` en échec, l'interface affirme « Votre message est conservé », alors qu'aucune file n'a été enregistrée.
- Toutes les erreurs HTTP sont mises en file, y compris les rejets définitifs.
- `slice(-maxQueued)` supprime silencieusement les messages les plus anciens au-delà de la limite configurée de 10.
- `flushOutbox()` n'a pas de verrou contre les exécutions simultanées. Une nouvelle mise en file pendant une vidange peut être écrasée par une écriture issue d'un ancien instantané. Ce dernier point est un risque identifié à la lecture, non un scénario reproduit.
- Aucun délai d'abandon explicite n'encadre `fetch` ; un envoi qui reste pendant peut laisser le bouton désactivé.

**Recommandations.**

- Faire remonter le résultat des écritures et ne promettre une sauvegarde qu'après confirmation ; sinon conserver les champs et proposer une copie ou un email de secours.
- Ne réessayer que les erreurs transitoires, avec délai progressif et traitement de `Retry-After` si pertinent.
- Sérialiser les vidanges et supprimer uniquement les messages dont l'acceptation est confirmée ; prévenir les écrasements et doublons entre onglets.
- Avertir lorsque la file est pleine, proposer consultation/annulation et ne pas supprimer silencieusement d'anciens messages.
- Ajouter un timeout maîtrisé, réactiver le bouton sur toutes les sorties et traiter l'incertitude d'un envoi déjà accepté côté serveur.

**Acceptation.** Tester quota de stockage, stockage interdit, 400, 429, 503, timeout, file pleine, retour en ligne et nouvelle soumission pendant la vidange. Aucun message ne doit être déclaré sauvegardé sans l'être, ni disparaître silencieusement.

## 6. Sécurité et confidentialité

### S01 — Mettre à niveau les dépendances réellement utilisées — P1

| Bibliothèque active | Version observée |
|---|---|
| jQuery | **2.2.0 à l'exécution** et dans le code distribué ; commentaire de tête annonçant 3.0.0 |
| Bootstrap CSS et JS | 4.1.3 |
| fullPage.js | 3.0.3 |
| Owl Carousel | 2.3.4 |
| iScroll / scrolloverflow | 5.2.0 |

**Impact.** Des composants anciens compliquent la maintenance et peuvent contenir des défauts de sécurité connus. La bannière jQuery trompeuse rend l'inventaire moins fiable. Cet audit n'a pas démontré qu'une entrée contrôlée par un attaquant atteigne un mécanisme vulnérable de ces bibliothèques.

**Recommandations.** Établir un inventaire vérifiable par version et empreinte ; examiner les avis de sécurité des versions réellement présentes ; remplacer les fichiers vendus par des distributions officielles compatibles, sans modifier manuellement leur code minifié. Retirer les dépendances sans usage avant de migrer les autres. Tester les six ancres, le responsive, les carrousels et le contact à chaque mise à niveau ; ne pas charger une deuxième version de jQuery pour contourner une incompatibilité.

**Acceptation.** Versions cohérentes entre code, documentation et exécution ; absence d'avis de sécurité applicable non traité ; parcours existants validés. Vérifier également que l'usage et la licence fullPage correspondent au mode de distribution du projet.

### S02 — Encadrer les données personnelles et le prestataire de formulaire — P1

**Preuve.** [Le formulaire](../../js/custom.js) sauvegarde automatiquement nom, prénom, email et message dans `localStorage` lors de la saisie. Brouillon et file n'ont ni expiration ni commande visible d'effacement. La file contient aussi le payload d'envoi, dont la clé publique Web3Forms. Aucune notice de confidentialité dédiée n'est visible près du formulaire dans [la page](../../index.html).

**Impact.** Persistance sur un appareil partagé ; accès possible par les scripts exécutés dans la même origine ; renvoi automatique ultérieur d'un message devenu indésirable. Les données d'une demande sont transmises à un prestataire tiers lors de l'envoi configuré.

**Recommandations.**

- Limiter la conservation à une durée documentée et adaptée ; prévoir expiration, effacement et annulation des messages en attente.
- Envisager une sauvegarde de session ou volontaire plutôt qu'une persistance automatique longue. Le chiffrement avec une clé stockée dans le même JavaScript ne protège pas d'un script exécuté sur l'origine.
- Ajouter une information claire : responsable, finalité, base légale à déterminer, destinataires, durée, droits et contact ; vérifier les conditions et transferts du prestataire.
- Ne pas confondre clé publique de formulaire et secret serveur : sa présence côté client n'est pas une fuite de secret en soi. Vérifier restrictions de domaine, limitation d'abus et protections côté prestataire.
- Le honeypot actuel reste contournable, car évalué côté client et non transmis dans le payload. Ne pas le présenter comme une protection serveur suffisante.

**Acceptation.** Un visiteur comprend la sauvegarde et le destinataire avant l'envoi, peut effacer ses données et annuler une réexpédition ; aucun brouillon expiré n'est restauré. Les protections du service sont vérifiées sans solliciter abusivement l'API de production.

### S03 — Réduire la dépendance aux tiers et renforcer les politiques — P2

**Preuve.** [Le HTML](../../index.html) charge Alpine depuis `alpinejs@3.x.x`, donc une version flottante, ainsi que Google Fonts et Bootstrap Icons depuis des CDN. Les inclusions n'ont pas d'attribut `integrity`. La réponse HTTP contrôlée ne contient pas de CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` ou protection d'encadrement explicite. HSTS est bien présent : ne pas le considérer comme manquant.

**Impact.** Évolution non maîtrisée d'un script exécuté sur l'origine, dépendance à la disponibilité des CDN, exposition de métadonnées de connexion aux fournisseurs et défense en profondeur limitée. L'absence de CSP n'établit pas, à elle seule, une XSS.

**Recommandations.**

- Fixer une version Alpine exacte. Préférer des ressources locales pour scripts, icônes et polices ; sinon ajouter SRI et `crossorigin` là où l'intégration le permet. Le CSS dynamique de Google Fonts demande une stratégie distincte, l'auto-hébergement étant plus prévisible.
- Définir une CSP restrictive et testée, avec sources d'images/styles/polices/scripts minimales et `connect-src` autorisant uniquement les besoins réels, dont Web3Forms.
- Tenir compte des attributs Alpine et de son fonctionnement avant de verrouiller la politique ; envisager sa distribution compatible CSP plutôt que d'ajouter aveuglément `unsafe-eval`.
- Configurer les politiques HTTP à un niveau d'hébergement qui les supporte. GitHub Pages ne fournit pas de configuration arbitraire de ces en-têtes via un simple fichier du dépôt.
- Une CSP en balise `meta` et une politique de référent HTML peuvent apporter une protection partielle ; **`frame-ancestors` doit être envoyé en en-tête**, pas dans une balise `meta`. Ne pas promettre une solution complète avec HTML seul.

**Acceptation.** Versions figées et ressources contrôlées ; contact, icônes, polices et animations fonctionnent sous la politique retenue ; absence de violations inattendues et vérification des en-têtes sur la réponse publiée.

## 7. Performance

### P01 — Optimiser les images et réserver leur espace — P2

Les plus gros fichiers **effectivement chargés** sont :

| Image | Taille locale |
|---|---:|
| [SQL](../../img/competences/sql.png) | 298 630 octets |
| [Bash](../../img/competences/bash.png) | 229 901 octets |
| [Illustration À propos](../../img/computer-system.jpg) | 129 144 octets |
| [Python](../../img/competences/python.png) | 106 018 octets |
| [Docker](../../img/tools/docker.png) | 72 639 octets |

SQL et Bash représentent à eux seuls environ **50 % du poids des images actives**. Leurs représentations sont petites à l'écran. Les balises du HTML et [le générateur d'images JSON](../../js/data.js) ne fournissent ni dimensions intrinsèques, ni chargement différé. Les images possèdent des `src` normaux : l'option de lazy loading fullPage ne suffit pas à différer ces requêtes.

**Recommandations.** Redimensionner selon les tailles affichées et la densité d'écran ; comparer WebP/AVIF et PNG optimisé pour les logos ; fournir `width`/`height` ou un ratio stable. Utiliser `loading="lazy"` et `decoding="async"` pour les images hors écran, en préservant le chargement prioritaire de l'éventuelle image LCP. Appliquer les changements au HTML **et** à `data.js`, puis vérifier les carrousels et le repli statique.

**Acceptation.** Objectif initial à confirmer visuellement : réduire d'au moins **50 %** les 1 065 272 octets d'images actives, à contenu identique ; pas de dégradation nette à densité ×2, pas de nouvelles requêtes 404 ni de sauts de mise en page.

### P02 — Réduire le coût et la fragilité du démarrage — P2

**Preuves.** Neuf scripts locaux sont chargés sans `defer` en bas de page, en plus d'Alpine différé. Les feuilles CSS sont bloquantes. Le préchargeur masque l'interface jusqu'à `load`, tandis que les composants attendent ensuite les JSON. [fetchJson()](../../js/data.js) demande `cache: 'no-cache'`, ce qui force une revalidation plutôt qu'une réutilisation directe du cache frais. Raleway demande six graisses sans paramètre `display=swap`.

Bootstrap JS représente environ 81 Kio ; aucune interaction Bootstrap JS n'a été identifiée dans le balisage actif. La navigation mobile est gérée par le code personnalisé. Sa suppression reste à valider par les parcours, pas par son poids seul.

**Recommandations.**

- Rendre le contenu utilisable sans préchargeur global ; découpler configuration du contact et enrichissement du contenu comme indiqué en F02.
- Mesurer puis retirer les scripts sans usage ; conserver les styles Bootstrap nécessaires à la grille. Comparer ensuite une navigation native et des carrousels plus légers, sans imposer une réécriture.
- Si les scripts passent à `defer`, préserver leur ordre et adapter les abonnements à `DOMContentLoaded`/`load` pour éviter les événements manqués.
- Réduire les graisses de police aux besoins réels ; auto-héberger en WOFF2 ou utiliser une pile système ; prévoir `font-display: swap`.
- Envisager des SVG d'icônes ciblés plutôt qu'une police complète, si le gain mesuré justifie le changement.
- Rendre la stratégie de cache cohérente entre HTML, JSON et ressources versionnées ; éviter une revalidation forcée sans besoin éditorial.
- Retirer `responsiveSlides: true` si l'extension fullPage n'est pas utilisée : un avertissement de dépendance à `fullpage.extensions.min.js` est observé. Ne pas ajouter une bibliothèque supplémentaire uniquement pour faire disparaître cet avertissement.

**Acceptation.** Comparaison avant/après avec cache froid et réseau mobile simulé : octets transférés, requêtes, temps de blocage et Core Web Vitals. Cibles de référence au 75e percentile : **LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1**. Ce sont des objectifs, pas des résultats mesurés par cet audit.

## 8. Expérience utilisateur et accessibilité

### U01 — Corriger les contrastes du thème clair — P1

**Preuve.** [Les styles](../../css/style.css) placent du texte blanc sur un dégradé bleu/turquoise semi-transparent à 75 %, au-dessus du fond `#222`. Le contraste calculé aux extrémités de ce fond est d'environ **4,54:1 côté bleu** et **3,02:1 côté turquoise**, avant les autres surfaces translucides.

Ce calcul établit un problème pour le texte courant affiché sur la zone turquoise ; ce n'est pas une mesure exhaustive de tous les pixels, cartes, états de focus ou du thème sombre. Le seuil de 3:1 du grand texte ne suffit pas pour les paragraphes et champs de petite taille.

**Recommandations.** Assombrir les fonds, choisir une couleur de texte adaptée ou ajouter une surface suffisamment opaque ; vérifier aussi placeholders, messages de succès/erreur, bordures, boutons et navigation dans les deux thèmes.

**Acceptation.** WCAG AA : **4,5:1** pour texte courant, **3:1** pour grand texte et éléments graphiques/contrôles concernés. Mesurer chaque combinaison réelle, y compris les états désactivé, focus et erreur.

### U02 — Structurer la page et rendre tous les contrôles utilisables au clavier — P1

**Preuves.**

- Aucun `h1`, `h2` ou repère `main` dans le DOM contrôlé ; plusieurs titres de section sont des `span`, et « À propos » est un `h4`.
- Les boutons de pagination Owl n'ont pas de nom accessible : **21 boutons sans libellé** dans la configuration mobile observée ; le nombre varie selon le breakpoint.
- Des styles suppriment `outline` sur liens, champs, menu et points de carrousel, sans remplacement systématique. Le bouton de thème dispose déjà d'un traitement `:focus-visible`.
- Les points font généralement 12 × 12 px, ou 16 × 16 px pour les services sur mobile : petites zones de visée à revoir.
- Le menu mobile conserve `aria-expanded="true"` après Échap. Son libellé reste « Ouvrir le menu » lorsqu'il est ouvert.
- « Défiler vers le bas » est un `div` cliquable ; les descriptions des outils sont révélées uniquement par `:hover` dans les styles.

**Recommandations.** Ajouter un `main`, un `h1` descriptif visible, des `h2` de section et un lien d'évitement ; fournir des noms de pagination et l'état courant, gérer les clones Owl pour les technologies d'assistance. Restaurer un focus visible contrasté, agrandir les cibles, transformer le défilement en lien ou bouton natif. Fermer le menu par Échap, restituer le focus et synchroniser son libellé. Rendre les descriptions d'outils accessibles sans survol, y compris sur écran tactile.

**Acceptation.** Parcours intégral au clavier, sans piège ni focus masqué ; nom et état annoncés pour chaque contrôle ; test avec lecteur d'écran et zoom 200 %. Viser 44 × 44 px pour le confort tactile, et vérifier au minimum les exigences WCAG 2.2 applicables sur taille/espacement des cibles.

### U03 — Respecter le mouvement réduit et permettre la pause — P2

**Preuve.** [custom.js](../../js/custom.js) active la rotation automatique des compétences et outils. Sous `prefers-reduced-motion: reduce`, ces deux carrousels restent en autoplay. Aucune adaptation dédiée n'est présente dans les styles applicatifs ou le script ; l'effet de frappe Alpine et les transitions fullPage ne sont pas conditionnés.

**Recommandations.** Désactiver l'autoplay par défaut ou fournir un contrôle explicite pause/reprise ; suspendre au focus et au survol. Respecter la préférence de mouvement réduit pour les carrousels, compteurs, transitions et frappe du hero. Afficher immédiatement le texte complet dans ce mode et prévoir un texte initial utile si Alpine ne charge pas.

**Acceptation.** Aucune rotation automatique sous mouvement réduit ; tous les contenus restent accessibles manuellement. En mode normal, un utilisateur peut arrêter durablement les contenus animés pendant sa lecture.

### U04 — Renforcer la confiance, la conversion et le référencement — P3

**Preuve.** Le site annonce un portfolio mais les six sections présentent surtout services, compétences et outils ; aucun cas de réalisation concret n'a été identifié. Le hero ne contient pas d'appel à l'action direct vers le contact. Le titre « Home | PGDigital » est générique et anglophone. Open Graph, Twitter Card et URL canonique ne sont pas définis.

**Recommandations.** Présenter quelques réalisations réelles et autorisées : besoin, rôle, solution, résultat vérifiable et lien éventuel. Ajouter un appel à l'action clair, améliorer le titre et la description en français, prévoir une image de partage locale. Utiliser des données structurées exactes uniquement si pertinentes ; ne pas inventer références ou avis. Évaluer l'utilité d'un sitemap et d'un `robots.txt` pour ce site monopage, sans considérer leur absence comme un blocage automatique d'indexation.

**Acceptation.** Offre et prochaine action compréhensibles dès le premier écran ; partage social lisible ; réalisations consultables au clavier et sur mobile.

## 9. Cohérence du contenu et maintenance

### M01 — Maintenir un repli statique réellement cohérent — P2

**Preuve.** Le JSON contient une liste sociale vide, alors que [le HTML de repli](../../index.html) affiche des liens génériques vers Twitter, Reddit et GitHub. Le destinataire par défaut de [custom.js](../../js/custom.js) diffère de celui de [contact-form.json](../../json/contact-form.json). Le fichier de configuration possède actuellement un endpoint et une clé publique ; certaines limites indiquées dans [README.md](../../README.md) décrivent encore un formulaire en attente de configuration. Les données visibles sont maintenues à la fois en HTML et en JSON.

**Impact.** Différences entre HTTP et `file://`, liens peu crédibles et destinataire de secours potentiellement involontaire lorsque la configuration est indisponible.

**Recommandations.** Valider l'adresse de secours souhaitée, harmoniser les deux versions de contenu, supprimer les liens de profils génériques et mettre la documentation en accord avec la configuration réelle. Garder le site sans build obligatoire ; un contrôle léger de cohérence HTML/JSON peut suffire.

**Acceptation.** Contenu, contact et liens cohérents avec JSON disponible, JSON absent et ouverture directe. [Le script de consentement](../../js/cookie_consent.js) et sa feuille CSS restent des expériences non intégrées ; ne pas les présenter comme une gestion de consentement active ni les brancher sans API adaptée.

## 10. Points positifs à préserver

- Architecture statique simple et déploiement HTTPS ; HSTS déjà fourni.
- Rendu des textes JSON via `textContent`, plutôt que concaténation HTML.
- Filtrage des schémas d'URL des liens sociaux/contact par `safeUrl`.
- Liens externes de repli protégés par `rel="noopener noreferrer"`.
- Champs `required`, type email, noms accessibles et attributs d'autocomplétion ; statut du formulaire avec `role="status"` et `aria-live="polite"`.
- Menu mobile avec état `aria-expanded`, fermeture après sélection et ancres correctement synchronisées une fois initialisées.
- Contact mobile sans chevauchement du pied de page ; icônes Bootstrap et effet de frappe observés.
- Contenu HTML de repli déjà présent, à rendre effectivement accessible en cas de panne des scripts.

## 11. Plan de correction et de recette

### Lot 1 — Protéger le parcours principal

Traiter **F01, F02, F03 et S02** : succès métier, initialisation sûre, stockage honnête, politique de conservation, possibilité d'annuler et information du visiteur. Valider le destinataire de secours de **M01**.

### Lot 2 — Réduire les risques et les obstacles d'accès

Traiter **S01, U01, U02 et U03**, puis **S03** selon les possibilités d'hébergement. Préserver les six ancres et la compatibilité d'ouverture directe ; ne pas modifier les dépendances minifiées à la main.

### Lot 3 — Optimiser et mieux démontrer l'offre

Traiter **P01, P02 et U04**. Mesurer les gains avant de remplacer une bibliothèque ; éviter d'introduire un framework ou une chaîne de build pour ces seules améliorations.

### Recette minimale après corrections

1. Rejouer les validations syntaxiques et HTML déjà utilisées ; elles ne remplacent pas les tests fonctionnels.
2. Vérifier les six ancres, carrousels et menu à 1440 × 900 et 390 × 844, puis à 320 px et avec zoom 200 %.
3. Tester HTTP et `file://`, absence de JavaScript, CDN indisponible, JSON lent/invalide/absent et stockage interdit.
4. Vérifier champs vides et email invalide ; intercepter les appels API pour les cas succès métier, rejet, 429, 503, timeout et file pleine. N'effectuer un envoi réel qu'avec accord.
5. Vérifier retour en ligne, double déclenchement de vidange et nouvelle saisie pendant un envoi ; aucune perte ou répétition silencieuse.
6. Tester navigation clavier, lecteur d'écran, contrastes, pause des animations et mouvement réduit.
7. Effectuer au moins trois mesures à cache froid par profil de performance, documenter les médianes et séparer les mesures de laboratoire des données de terrain au 75e percentile.
8. Vérifier les politiques sur la réponse de production et l'absence de nouvelles erreurs console ou requêtes locales en échec.

**Conclusion :** le site fonctionne sur les parcours de navigation contrôlés, mais l'amélioration prioritaire n'est pas une refonte visuelle. Elle consiste à rendre le contact fiable et confidentiel, à assurer un repli utilisable et à supprimer les obstacles d'accessibilité, puis à réduire le poids de la page sur la base de mesures reproductibles.


### Résultat du contrôle console et ressources — 2026-10-20

- Parcours des six sections en HTTP local sous `/pgdigital/` et en ouverture directe `file://`, à 1440 x 900 et 390 x 844.
- Aucune erreur console, exception JavaScript, requête échouée, réponse HTTP en erreur ou image cassée observée; les polices Bootstrap Icons sont chargées.
- Un avertissement fullPage.js persiste : `responsiveSlides` exige `fullpage.extensions.min.js`, alors que le site charge `fullpage.min.js` (`js/custom.js`). Ce contrôle n'a pas modifié cette configuration.
- Le navigateur intégré a autorisé le chargement des JSON même en `file://`; ces parcours ne valident donc pas le repli statique dans un navigateur bloquant `fetch` sur ce protocole.
- Aucun envoi réel du formulaire ni réémission de message en attente n'a été testé.

### Résultat du contrôle des ancres et de la navigation — 2026-10-20

- Tests dans le navigateur intégré en `file://`, à 1440 x 900 et 390 x 844.
- Les six liens Accueil, À propos, Services, Compétences, Outils et Contact ont été cliqués via le menu, ouvert avant chaque sélection sur mobile.
- Pour chaque lien, après la transition : fragment URL attendu (`#slide01` à `#slide06`), section correspondante visible et active, une seule entrée active dans `#nav` et indicateur fullPage correspondant actif. Le menu mobile se referme avec `aria-expanded="false"`.
- Les six URL avec fragment ont également été rechargées à chaque résolution : les 12 contrôles de section visible et d'état actif ont réussi.
- Un parcours desktop supplémentaire par clics rapprochés d'À propos à Contact a conservé la synchronisation finale, sans exception JavaScript.
- Une première sonde avec clics forcés, sans attendre les transitions, a déclenché une exception fullPage (`Cannot set properties of undefined (setting 'top')`). Elle n'a pas été reproduite par les parcours avec clics ordinaires ci-dessus; la configuration du site n'a pas été modifiée.

### Résultat du contrôle du menu mobile — 2026-10-20

- Tests en `file://` dans le navigateur intégré, à 320 x 568 et 390 x 844 : 46 contrôles d'état réussis, sans exception JavaScript.
- Au chargement, le menu est masqué et `aria-expanded="false"`. Trois cycles d'ouverture/fermeture au bouton par résolution maintiennent la cohérence entre visibilité réelle, attribut ARIA et classe `mobile-menu-open`, après les animations.
- Les touches Entrée et Espace ouvrent puis ferment le menu depuis le bouton focalisé, aux deux résolutions.
- Chacun des six liens ferme le menu, rétablit `aria-expanded="false"` et retire `mobile-menu-open`; le fragment URL et l'entrée active correspondent au lien sélectionné.
- Le contrôle est un bouton natif avec un libellé accessible et `aria-controls="navigation-menu"` désignant le menu existant. Aucun code applicatif modifié.

### Résultat du contrôle des carrousels, icônes et titre — 2026-10-20

- Tests dans le navigateur intégré en `file://`, à 1440 x 900 et 390 x 844, sans exception JavaScript pendant le parcours des quatre carrousels.
- Initialisation Owl Carousel confirmée : 4 faits, 5 services, 6 compétences et 6 outils. Sur desktop, les nombres d'éléments affichés sont respectivement 3, 3, 1 et 3; sur mobile, chaque carrousel affiche un élément.
- Pour les quatre carrousels aux deux résolutions, clics ordinaires sur la dernière puis la première pagination : dernier élément présent parmi les cartes actives, puis retour à l'index zéro. Les clones Owl sont pris en compte pour les carrousels en boucle.
- Les flèches Services avancent de l'index 0 à 1 puis reviennent à 0 aux deux résolutions. La lecture automatique des compétences et des outils avance de 0 à 1 sans action supplémentaire après sélection de la première pagination.
- Le carrousel Outils est configuré sans boucle : une fois la dernière position atteinte, la lecture automatique n'avance plus. Le geste tactile natif n'a pas été testé.
- Les 13 classes d'icônes présentes ont un glyphe `::before` défini avec la famille `bootstrap-icons`, dont la police est chargée, aux deux résolutions.
- Alpine.js fait progresser le titre de `PG` observé au début jusqu'au texte exact `PGDigital PORTFOLIO`, sans duplication, aux deux résolutions.
- Une première tentative de clic pendant l'alignement mobile a rencontré une interception par d'autres éléments; le contrôle a réussi après stabilisation de la section et lors d'un chargement direct sur Services. Aucun code applicatif modifié.

### Résultat du contrôle de validation et de l'email prérempli — 2026-10-20

- Tests HTTP locaux dans le navigateur intégré, à 1440 x 900 et 390 x 844 : 18 scénarios réussis, sans exception JavaScript ni requête `POST`.
- Clic sur Envoyer avec les quatre champs vides, puis avec chacun des champs nom, prénom, email et message vide séparément : la validation native bloque la soumission (`valueMissing`), sans générer d'email.
- Les adresses `sans-arobase`, `qa@` et `@example.test` sont rejetées avec `typeMismatch`, sans soumission. L'adresse de test `qa+portfolio@example.test` est acceptée.
- Avec des données valides, vérification exacte du destinataire de repli, du sujet et du corps décodés du lien `mailto:` : nom/prénom, message multiligne, adresse de réponse, accents et caractères `&`, `?`, `#`, `=`, `%`, `+` préservés; espaces extérieurs du nom, prénom et message retirés.
- Le statut « Ouverture de votre application de messagerie… » est affiché dans la zone `role="status"` / `aria-live="polite"`; le bouton reste disponible, le brouillon de test est supprimé et aucun message n'est mis en file.
- Méthode sans envoi réel : serveur temporaire servant une configuration avec endpoint et clé vides, des clés de stockage réservées au test et une copie en mémoire de `js/custom.js` capturant l'URL au lieu d'affecter `window.location.href`. La validation native et le gestionnaire de soumission réel ont été exécutés par clics ordinaires.
- Aucun service externe ni client de messagerie n'a été sollicité. Le flux de production Web3Forms et l'ouverture effective d'une application de messagerie ne sont pas validés par ces tests. Stockage de test nettoyé, serveur arrêté et fichiers applicatifs inchangés.

### Résultat du contrôle JSON HTTP et repli statique — 2026-10-20

- Tests dans le navigateur intégré à 1440 x 900 et 390 x 844, sans modification des fichiers applicatifs.
- En HTTP sous `/pgdigital/`, les deux fichiers JSON répondent avec le statut 200 et les résultats de `PGDigital.ready` correspondent aux fichiers servis. La configuration du formulaire est chargée avec endpoint et clé renseignés, sans soumission de message.
- Comparaison exacte du rendu avec `json/site-data.json` : 4 faits (icônes, valeurs finales et libellés), 5 services (icônes, titres et descriptions), 6 compétences et 6 outils (noms, descriptions et chemins d'images), coordonnées de contact et absence des liens sociaux conformément au tableau `social` vide. Aucune image cassée.
- En `file://`, le navigateur intégré autorisant normalement `fetch`, un script de test injecté avant le chargement rejette uniquement les deux requêtes JSON. La restriction d'un navigateur standard est donc simulée, pas observée nativement; aucune interception ne reste après fermeture de l'onglet de test.
- Avec ces deux échecs, `PGDigital.ready` se résout avec `content: null` et `form: null`; les avertissements de repli sont explicites et aucune exception JavaScript n'est observée. Les compteurs, textes, icônes, images, coordonnées et liens sociaux correspondent au HTML source, indépendamment des JSON.
- Aux deux résolutions en repli, les quatre carrousels sont initialisés, les quatre champs requis du formulaire sont présents et les six liens activent les entrées attendues du menu. Aucune image cassée. Le serveur de vérification temporaire est arrêté après les contrôles.
- Divergence préexistante révélée : le HTML statique conserve trois liens génériques Twitter, Reddit et GitHub, absents du rendu HTTP piloté par `social: []`. Le repli fonctionne, mais cette partie du contenu n'est pas synchronisée avec le JSON.

### Résultat du contrôle du brouillon et des réémissions — 2026-10-20

- Tests HTTP locaux à 1440 x 900 et 390 x 844 avec les scripts applicatifs inchangés, des données fictives et un endpoint local contrôlé répondant successivement 503 puis 200. La configuration de test utilise des clés de stockage distinctes; aucun service d'envoi réel ni brouillon existant n'a été sollicité.
- Après saisie, le brouillon stocké correspond aux quatre champs, y compris accents et retour à la ligne. Après rechargement, les valeurs sont restaurées à l'identique et le statut annonce « Un brouillon de message a été restauré. ».
- La soumission via `requestSubmit()` reçoit une réponse 503 : un seul payload est mis en file, identique à celui reçu par l'endpoint et contenant `savedAt`. Le brouillon est conservé, le bouton redevient disponible et le statut explique la conservation pour un réenvoi ultérieur.
- Un événement `online` simulé avec l'endpoint encore en échec provoque une nouvelle tentative sans modifier la file. Après passage de l'endpoint à 200, un nouvel événement `online` réémet exactement le payload stocké, supprime la file et annonce le succès.
- Une seconde soumission échouée est ensuite réémise automatiquement au rechargement, sans nouvel événement `online`, après rétablissement de l'endpoint. Identité du payload et suppression de la file vérifiées aux deux résolutions.
- Comportement préexistant observé : après réémission réussie, le brouillon et les champs restent présents. Au rechargement, le statut peut donc rester « Un brouillon de message a été restauré. » malgré la file vidée; un nouvel envoi manuel peut renvoyer le même contenu.
- Les erreurs réseau 503 visibles pendant le test sont attendues et simulées. Le retour de connectivité a été simulé par événement, pas par une coupure réseau réelle. Les envois simultanés, plusieurs onglets et la saturation du stockage n'ont pas été testés.
- Clés de test supprimées, navigation d'origine restaurée et serveur temporaire arrêté après vérification. Aucun code applicatif modifié.

### Résultat du contrôle Contact à 390 x 844 — 2026-10-20

- Tests en `file://` dans le navigateur intégré, viewport confirmé à 390 x 844, après chargement des polices et stabilisation des animations. Contrôle par mesures DOM et capture visuelle.
- Chargement direct sur `#slide06` puis accès via le menu mobile : aucun élément de Contact ni pied de page ne dépasse horizontalement le viewport; largeur défilable du document de 375 px (barre de défilement verticale présente).
- Le titre « Contactez-moi en remplissant le formulaire ! » s'affiche intégralement sur deux lignes, sous le header fixe, sans conteneur ancêtre rognant son texte ni débordement interne.
- Le formulaire et le bouton Envoyer ne chevauchent pas le pied de page, en position `static`. Écart mesuré entre la fin du formulaire et le début du pied de page : 28 px; entre la zone de statut et le pied de page : 12 px.
- Avec un message de statut multiligne injecté temporairement dans le DOM, sans soumission, le pied de page reste après le formulaire et le statut : écarts respectifs de 76 px et 12 px, sans débordement horizontal ni titre tronqué. Texte de statut restauré après mesure.
- Aucun code applicatif ni donnée de formulaire modifié. Le clavier virtuel d'un appareil mobile réel n'a pas été testé.