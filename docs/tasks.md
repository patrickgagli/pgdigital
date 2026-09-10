---
title: tasks
description: État vérifié, tâches et points de contrôle du projet.
product: pgdigital
version: 1.0
status: current
owners:
  - Product
  - Engineering
  - Design
last_updated: 2026-09-10
tags:
  [
    tâches,
    listes de tâches,
    checkpoints de tâches,
    codebase,
    gestion de projet,
    développement agile,
    scrum,
    planification,
    livraison,
  ]
---

# Tâches

Ce document suit l'état observable du dépôt. Une case terminée correspond à une fonctionnalité présente dans le code actuel, pas nécessairement à une validation sur tous les navigateurs.

## Livré

- [x] Créer les six sections Accueil, À propos, Services, Compétences, Outils et Contact.
- [x] Synchroniser la navigation et les ancres `slide01` à `slide06`.
- [x] Configurer fullPage.js et son mode responsive sous 768 px.
- [x] Ajouter les carrousels responsives avec Owl Carousel.
- [x] Déclencher les animations Animate.css avec jquery.inview.
- [x] Animer les compteurs de la section À propos une seule fois.
- [x] Ajouter l'effet de saisie du titre avec Alpine.js.
- [x] Ajouter le menu mobile et maintenir son état `aria-expanded`.
- [x] Ajouter la validation native et l'envoi `mailto:` du formulaire de contact.
- [x] Ajouter les libellés accessibles, l'autocomplétion et le statut du formulaire.
- [x] Corriger le flux mobile de la section Contact et du pied de page.
- [x] Aligner la documentation canonique sur le code au 2026-09-10.
- [x] Corriger les noms accessibles des liens sociaux et les espaces de fin signalés par `html-validate`.

## Prochaines priorités

- [ ] Remplacer les pages d'accueil des plateformes sociales par des profils réels ou retirer les liens.
- [ ] Passer l'attribut `lang` du document à `fr` pour refléter le contenu de l'interface.
- [ ] Décider si HTMX doit être utilisé ; sinon, retirer son chargement réseau.
- [ ] Décider si le mode sombre de `js/scripts.js` doit être intégré, testé et documenté, ou supprimé.
- [ ] Décider si le consentement de `js/cookie_consent.js` doit être intégré, testé et documenté, ou supprimé.
- [ ] Ajouter les métadonnées de partage Open Graph et Twitter Card.
- [ ] Évaluer l'ajout de données structurées, d'un sitemap et d'un fichier `robots.txt`.
- [ ] Évaluer un canal de contact ne dépendant pas d'une application de messagerie locale.

## Contrôles récurrents

- [ ] Exécuter `node --check js/custom.js` après une modification du comportement actif.
- [ ] Exécuter les contrôles de syntaxe sur `js/scripts.js` et `js/cookie_consent.js` lorsqu'ils sont modifiés.
- [ ] Exécuter `npx --yes html-validate@latest index.html` après une modification du balisage.
- [ ] Vérifier l'absence d'erreur console et de ressource locale introuvable.
- [ ] Tester les six ancres et l'état actif de la navigation.
- [ ] Tester l'ouverture, la fermeture et `aria-expanded` du menu mobile.
- [ ] Tester les carrousels, les icônes Bootstrap et le titre Alpine.js.
- [ ] Tester les champs requis, le format email et l'email prérempli du formulaire.
- [ ] Tester la section Contact à 390 x 844 sans débordement, titre tronqué ni chevauchement du pied de page.

## Règle de mise à jour

Lorsqu'une fonctionnalité est ajoutée ou retirée, mettre à jour dans la même modification :

- la documentation technique si le comportement ou une dépendance change ;
- la structure si la responsabilité d'un fichier change ;
- ce suivi si l'état d'une tâche change ;
- le README si l'installation, les fonctionnalités publiques ou les limitations changent.
