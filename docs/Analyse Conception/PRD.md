# Product Requirements Document (PRD) - PGDigital

> Ce document décrit le produit, ses utilisateurs, les problèmes à résoudre et les résultats attendus. Remplacez les indications entre crochets et supprimez les sections facultatives qui ne s'appliquent pas.
>
> Considérez ce PRD comme un document de travail évolutif. Il complète le backlog produit sans le remplacer et ne constitue pas un artefact formel de Scrum. Identifiez clairement les hypothèses et validez les décisions avec les parties prenantes concernées.

## Document Information

| Information | Value |
| --- | --- |
| Product name | PGDigital |
| Document status | [Draft / In review / Approved] |
| Version | [0.1] |
| Last updated | [YYYY-MM-DD] |
| Product Owner | [Name or role] |
| Sponsor / client | [Name or organization] |
| Product type | [Software / Application] |
| Delivery approach | Agile / Scrum |
| Intended audience | [Roles or teams] |
| Target release | [Date, milestone, or To be determined] |
| Related documents | [Links] |

## 1. Résumé exécutif

[En quelques paragraphes, présentez le produit, ses utilisateurs, le problème traité, la valeur attendue et le périmètre prévu pour cette version.]

### Résultats attendus

- [Résultat et bénéficiaire visé]
- [Résultat et bénéficiaire visé]
- [Résultat et bénéficiaire visé]

## 2. Contexte, problème et éléments de preuve

### Contexte

[Décrivez l'organisation, les utilisateurs, le processus actuel ou la situation en lien avec le produit.]

### Énoncé du problème

[Décrivez le problème sans prescrire de solution. Expliquez qui le rencontre et quelles en sont les conséquences.]

### Éléments de preuve

| Constat ou observation | Source | Date / échantillon | Niveau de confiance ou limite |
|---|---|---|---|
| [Constat] | [Entretien, données, observation, etc.] | [Détails] | [Limites connues] |

### Conséquences si le problème n'est pas résolu

- [Conséquence]
- [Conséquence]

## 3. Hypothèses et décisions à valider

| ID | Hypothèse ou décision en suspens | Importance | Méthode de validation | Responsable / échéance | Statut |
|---|---|---|---|---|---|
| A-01 | [Hypothèse ou décision] | [Impact] | [Entretien, prototype, analyse des données, etc.] | [Responsable / date] | [À valider / Validé] |

Ne présentez pas les hypothèses comme des faits confirmés. Consignez les décisions susceptibles de modifier le périmètre, la sécurité, la confidentialité, l'architecture, les coûts ou la livraison.

## 4. Vision produit et objectifs

### Vision

[Décrivez le changement à long terme que le produit doit permettre.]

### Principes produit

- [Principe guidant les décisions produit]
- [Principe guidant les décisions produit]

### Objectifs

| ID | Objectif | Résultat visé | Méthode de mesure |
|---|---|---|---|
| OBJ-01 | [Objectif] | [Résultat] | [Mesure ou lien vers un indicateur clé] |

### Hors objectifs

- [Capacité ou résultat explicitement exclu de cette version]
- [Capacité ou résultat explicitement exclu de cette version]

## 5. Utilisateurs et parties prenantes

### Personas utilisateurs

#### [Nom du persona / rôle]

- **Contexte :** [Responsabilités, environnement et expérience pertinente]
- **Objectifs :** [Ce que l'utilisateur souhaite accomplir]
- **Besoins :** [Informations, capacités ou assistance nécessaires]
- **Difficultés :** [Difficultés connues ; distinguez les preuves des hypothèses]
- **Autorisations ou contraintes :** [Limites d'accès pertinentes]

[Répétez pour chaque groupe d'utilisateurs principal.]

### Parties prenantes et responsables des décisions

| Partie prenante / rôle | Domaine de responsabilité | Décisions ou contributions attendues |
|---|---|---|
| [Nom ou rôle] | [Responsabilité] | [Décision ou contribution] |

## 6. Périmètre

### Inclus dans cette version

- [Capacité ou processus]
- [Capacité ou processus]

### Exclu de cette version

- [Exclusion explicite et, le cas échéant, justification]
- [Exclusion explicite et, le cas échéant, justification]

### Limites de la version

[Définissez ce qui doit impérativement être inclus dans la version et ce qui peut être reporté.]

## 7. Parcours utilisateurs et processus

### Parcours : [Nom]

**Utilisateur et objectif :** [Qui fait quoi, et pourquoi ?]

1. [Condition de départ ou action de l'utilisateur]
2. [Réponse du système ou action suivante de l'utilisateur]
3. [Résultat attendu]

**Exceptions et parcours alternatifs :**

- [Échec de validation, refus d'autorisation, dépendance indisponible ou autre exception]
- [Récupération attendue ou aide à fournir à l'utilisateur]

[Répétez pour les parcours utilisateurs les plus importants.]

## 8. Exigences fonctionnelles

Utilisez des identifiants stables et formulez des exigences précises et vérifiables. Définissez les priorités selon MoSCoW : **Indispensable (Must)**, **Important (Should)**, **Facultatif (Could)** ou **Exclu de cette version (Won't)**.

| ID | Exigence | Besoin utilisateur / justification | Priorité | Critères d'acceptation ou vérification |
|---|---|---|---|---|
| FR-001 | [Le système doit ...] | [Besoin utilisateur ou objectif] | [Indispensable] | [Résultat observable et testable] |
| FR-002 | [Le système doit ...] | [Besoin utilisateur ou objectif] | [Important] | [Résultat observable et testable] |

### Définitions des priorités

- **Indispensable (Must) :** nécessaire pour que la version convenue soit utilisable ou respecte une obligation critique.
- **Important (Should) :** important, mais une version sûre et utile reste possible sans cette exigence.
- **Facultatif (Could) :** souhaitable si la capacité de l'équipe le permet.
- **Exclu de cette version (Won't) :** explicitement exclu de la version actuelle.

## 9. Exigences non fonctionnelles

Définissez des objectifs mesurables et la méthode de vérification de chacun. Présentez les objectifs non décidés comme des propositions, et non comme des engagements.

| ID | Domaine | Exigence / objectif | Méthode de vérification | Priorité / statut |
|---|---|---|---|---|
| NFR-001 | Performance | [Charge de travail et objectif mesurable de temps de réponse] | [Test ou mesure] | [Indispensable / proposé] |
| NFR-002 | Sécurité | [Contrôles requis et périmètre d'autorisation] | [Revue ou test] | [Indispensable / proposé] |
| NFR-003 | Confidentialité | [Minimisation des données, finalité, conservation ou droits] | [Revue ou test] | [Indispensable / proposé] |
| NFR-004 | Accessibilité | [Norme visée et parcours utilisateurs concernés] | [Évaluation automatisée et manuelle] | [Important / proposé] |
| NFR-005 | Disponibilité | [Objectif de disponibilité et exclusions] | [Rapport de supervision] | [Important / proposé] |
| NFR-006 | Récupération | [Objectifs de point et de délai de reprise, le cas échéant] | [Exercice de restauration] | [Important / proposé] |
| NFR-007 | Compatibilité | [Plateformes, navigateurs ou appareils pris en charge] | [Matrice de tests] | [Important / proposé] |
| NFR-008 | Maintenabilité | [Exigences de qualité, documentation ou assistance] | [Revue ou contrôles d'intégration continue] | [Important / proposé] |

### Considérations relatives à la sécurité et à la confidentialité

- [Exigences d'authentification et d'autorisation côté serveur]
- [Données sensibles, minimisation, durée de conservation et suppression]
- [Contraintes d'audit, de journalisation et de supervision]
- [Revue réglementaire ou politique applicable à mener]
- [Revue de sécurité ou condition de mise en production]

## 10. Récits utilisateurs et critères d'acceptation

### Épopée [ID] : [Nom]

**US-001 — En tant que [utilisateur], je veux [capacité], afin de [bénéfice].**

**Priorité :** [Indispensable / Important / Facultatif / Exclu de cette version]
**Exigences associées :** [ID FR/NFR]

Critères d'acceptation :

- **Étant donné** [contexte initial], **lorsque** [action], **alors** [résultat observable].
- **Étant donné** [exception ou contexte non autorisé], **lorsque** [action], **alors** [résultat sûr et compréhensible].
- **Étant donné** [état pertinent], **lorsque** [action terminée], **alors** [persistance, confirmation ou résultat d'audit].

[Répétez pour les récits les plus importants. Liez les tâches d'implémentation détaillées au backlog produit plutôt que de les dupliquer ici.]

## 11. Règles métier et données

### Règles métier

| ID | Règle | Justification / responsable | Exigences associées |
|---|---|---|---|
| BR-001 | [Règle, y compris les conditions et exceptions pertinentes] | [Justification / responsable] | [IDs] |

### Exigences relatives aux données

| Entité ou catégorie de données | Finalité | Source / responsable | Sensibilité ou accès | Conservation / suppression |
|---|---|---|---|---|
| [Entité ou catégorie de données] | [Finalité] | [Source / responsable] | [Classification / rôles] | [Politique ou décision à prendre] |

### Qualité et cycle de vie des données

- **Validation :** [Champs obligatoires, formats et contraintes métier]
- **Responsabilité :** [Qui maintient les données et résout les conflits]
- **Import / export :** [Formats requis, autorisations et mesures de protection]
- **Conservation / suppression :** [Règles applicables ou décisions en suspens]
- **Traçabilité :** [Modifications qui doivent pouvoir être retracées]

## 12. Intégrations et dépendances

| Intégration ou dépendance | Finalité | Responsable | Données échangées / périmètre | Statut ou risque |
|---|---|---|---|---|
| [Système, service, équipe ou décision] | [Finalité] | [Responsable] | [Données et périmètre d'accès] | [Statut / risque] |

## 13. Exigences UX/UI

- **Navigation et écrans principaux :** [Décrivez-les ou ajoutez un lien vers les maquettes]
- **Comportement adaptatif :** [Appareils, mises en page ou contraintes requises]
- **Accessibilité :** [Clavier, focus, libellés, contraste, technologies d'assistance, etc.]
- **Formulaires et validation :** [Indication des champs obligatoires et comportement en cas d'erreur]
- **États de chargement, vide, succès et erreur :** [Retour attendu]
- **Informations sensibles :** [Restrictions sur les informations affichées dans les écrans, notifications, titres ou URL]
- **Validation de l'utilisabilité :** [Utilisateurs représentatifs, tâches et critères d'approbation]

## 14. Contraintes techniques

Consignez les contraintes obligatoires ou confirmées. Distinguez-les des suggestions qui nécessitent encore une validation.

| Contrainte ou proposition | Type | Justification / source | Responsable / statut |
|---|---|---|---|
| [Plateforme, architecture, hébergement, technologie ou politique] | [Obligatoire / proposé] | [Justification] | [Responsable / statut] |

### Exigences opérationnelles

- **Environnements et déploiement :** [Développement, test, préproduction, production]
- **Configuration et secrets :** [Gestion requise]
- **Supervision et assistance :** [Contrôles d'état, alertes, responsabilités]
- **Sauvegarde et récupération :** [Approche et vérification]
- **Migrations et retour arrière :** [Considérations relatives aux données et au déploiement]

## 15. Indicateurs de réussite

Définissez une valeur de référence, un objectif, un responsable et une fréquence de mesure. Évitez de collecter des données personnelles inutiles à l'indicateur.

| ID | Indicateur | Définition | Valeur de référence | Objectif et échéance | Source / fréquence | Responsable |
|---|---|---|---|---|---|---|
| KPI-01 | [Indicateur] | [Numérateur, dénominateur et exclusions exacts] | [Valeur / inconnue] | [Objectif / date] | [Source / fréquence] | [Responsable] |

## 16. Priorisation du MVP et plan de livraison

### Éléments indispensables au MVP

- [Identifiants d'exigences ou capacités]
- [Identifiants d'exigences ou capacités]

### Éléments reportés

- [Identifiants d'exigences ou capacités et justification]
- [Identifiants d'exigences ou capacités et justification]

### Jalons

| Jalon | Échéance indicative | Périmètre / résultat | Dépendances | Critères de sortie |
|---|---|---|---|---|
| [Jalon] | [Date ou période] | [Résultat] | [Dépendances] | [Preuves requises] |

Les dates et estimations sont des hypothèses de planification tant qu'elles n'ont pas été réévaluées au regard de la capacité de l'équipe, des dépendances et des résultats de livraison.

## 17. Accord de travail Agile / Scrum

[Décrivez l'approche de livraison et sa cadence, le cas échéant.]

- **Responsable produit (Product Owner) :** [Responsabilités et disponibilité pour les décisions]
- **Scrum Master / facilitateur :** [Responsabilités, le cas échéant]
- **Développeurs / équipe de livraison :** [Rôles ou périmètre de l'équipe]
- **Cadence des Sprints :** [Durée ou « sans objet »]
- **Emplacement du backlog produit :** [Lien]
- **Définition de terminé (Definition of Done) :** [Lien ou résumé]
- **Revue et retours :** [Comment les utilisateurs et les parties prenantes inspectent les incréments]

Le responsable produit est redevable de la gestion efficace du backlog produit. Ce PRD ne remplace ni le backlog produit, ni l'objectif de Sprint, ni l'incrément.

## 18. Risques et mesures d'atténuation

| ID | Risque | Probabilité / impact | Mesure d'atténuation ou réponse | Responsable | Statut |
|---|---|---|---|---|---|
| R-01 | [Incertitude ou événement susceptible d'affecter les résultats] | [Faible / Moyen / Élevé] | [Action ou mesure de contingence] | [Responsable] | [Ouvert / suivi] |

## 19. Stratégie de test et de qualité

| Domaine de test | Périmètre | Critères d'acceptation / de sortie | Responsable |
|---|---|---|---|
| Tests unitaires et d'intégration | [Règles, frontières et comportement des données] | [Critères] | [Responsable] |
| Tests de bout en bout | [Parcours utilisateurs critiques] | [Critères] | [Responsable] |
| Sécurité et autorisations | [Menaces et limites d'accès] | [Critères] | [Responsable] |
| Accessibilité et utilisabilité | [Parcours et utilisateurs concernés] | [Critères] | [Responsable] |
| Performance et fiabilité | [Charge représentative et objectifs] | [Critères] | [Responsable] |
| Migration / récupération des données | [Le cas échéant] | [Critères de rapprochement et de restauration] | [Responsable] |

### Liste de contrôle d'acceptation de la version

- [ ] Les exigences indispensables satisfont leurs critères d'acceptation.
- [ ] Les parcours utilisateurs critiques ont été testés.
- [ ] Les revues requises de sécurité, de confidentialité et d'autorisations sont terminées.
- [ ] Aucun défaut bloquant pour la livraison ne subsiste au regard de la politique convenue.
- [ ] Les responsabilités opérationnelles, d'assistance et de récupération sont clairement définies.
- [ ] L'approbation des parties prenantes ou du responsable produit est consignée.

## 20. Déploiement, assistance et exploitation

- **Approche de déploiement :** [Projet pilote, déploiement progressif ou mise à disposition générale]
- **Formation et documentation :** [Public et supports]
- **Responsable de l'assistance et escalade :** [Contact ou processus]
- **Supervision et réponse aux incidents :** [Signaux et responsabilités]
- **Limites connues :** [Limites communiquées aux utilisateurs]
- **Retour arrière ou récupération :** [Déclencheur et procédure]
- **Revue après livraison :** [Date ou moment de l'examen des résultats et retours]

## 21. Questions en suspens

| ID | Question | Responsable de la décision | Échéance | Impact si non résolue |
|---|---|---|---|---|
| Q-01 | [Question nécessitant une décision] | [Responsable] | [Date / jalon] | [Impact] |

## 22. Traçabilité, approbations et historique des modifications

Maintenez la traçabilité lorsque cela est utile :

**Objectif → exigence → récit utilisateur → critère d'acceptation → test → version**

### Approbations

| Relecteur / rôle | Décision | Date | Notes ou conditions |
|---|---|---|---|
| [Nom / rôle] | [Approuvé / modifications demandées / en attente] | [AAAA-MM-JJ] | [Notes] |

### Historique des modifications

| Version | Date | Auteur | Résumé des modifications |
|---|---|---|---|
| 0.1 | [AAAA-MM-JJ] | [Nom / rôle] | Première version |

---

**Fin du document**

Faites évoluer ce PRD au fil des éléments de preuve et de la compréhension des parties prenantes. Mettez à jour les priorités, les hypothèses et les décisions selon le processus de changement convenu ; conservez les tâches d'implémentation et leur ordre actuel dans le backlog produit.