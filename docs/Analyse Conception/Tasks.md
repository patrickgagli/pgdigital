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
- [x] Retirer les liens sociaux génériques tant que les profils réels ne sont pas configurés.
- [x] Passer l'attribut `lang` du document à `fr` pour refléter le contenu de l'interface.
- [x] Retirer le chargement réseau de HTMX, qui n'est pas utilisé par la page.
- [x] Intégrer, tester et documenter le mode sombre de `js/scripts.js`.
- [ ] Intégrer, tester et documenter le consentement de `js/cookie_consent.js` avec un bandeau HTML et une API serveur compatibles.
- [ ] Ajouter les métadonnées de partage Open Graph et Twitter Card.
- [x] Implémenter l'ajout de données structurées, d'un sitemap et d'un fichier `robots.txt`.
- [ ] Publier les règles `robots.txt` à la racine de `patrickgagli.github.io` (ou d'un domaine personnalisé) et soumettre le sitemap dans Google Search Console.
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


## Production Checklist
- [ ] Ensure all code is reviewed and approved.
- [ ] Run all tests and verify they pass.
- [ ] Update documentation to reflect any changes.
- [ ] Verify that all dependencies are up-to-date.
- [ ] Check for any security vulnerabilities.
- [ ] Favicon generation and verification.
- [ ] Sitemap generation and verification.
- [ ] Meta tags and SEO optimization.
- [ ] Compress images and other static assets for optimized performance.
- [ ] RGPD compliance check.
- [ ] CGU compliance check. 
- [ ] Force HTTPS for all communications.
- [ ] Cookies banner and consent management.
- [ ] Data backup and recovery plan verification.
- [ ] Performance and load testing.
- [ ] Logging and monitoring setup verification.
- [ ] Disaster recovery plan verification.
- [ ] User access and permissions review.
- [ ] Compliance with data protection regulations.
- [ ] Ensure proper logging and error reporting mechanisms are in place.
- [ ] Conduct a final security audit before deployment.
- [ ] Verify that all third-party services and integrations are functioning correctly.
