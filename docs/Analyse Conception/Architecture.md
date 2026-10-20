# Architecture — [Nom du projet]

## 1. Identification

| Information | À compléter |
| --- | --- |
| Nom du projet | [Nom du projet] |
| Client / commanditaire | [Nom, organisation] |
| Architecte(s) / auteur(s) | [Noms] |
| Date | [AAAA-MM-JJ] |
| Version | [Version] |
| Documents de référence | [Analyse des besoins, modélisation, autres] |

## 2. Contexte et objectifs d’architecture

### Contexte du système

[Résumé du besoin, des utilisateurs et du périmètre couvert par cette architecture.]

### Objectifs et contraintes

| Objectif ou contrainte | Description | Priorité / impact |
| --- | --- | --- |
| [Performance, disponibilité, sécurité, coût, délai, conformité…] | [Cible ou contrainte] | [Priorité / impact] |

## 3. Architecture de solution

Cette vue d’ensemble montre comment les composants du système et les acteurs collaborent.

### 3.1 Composants applicatifs

| Application / interface | Utilisateurs | Rôle et fonctionnalités principales |
| --- | --- | --- |
| [Application web, mobile, back-office, reporting…] | [Profils] | [Rôle] |

### 3.2 Composants des données

| Donnée / ensemble de données | Type | Stockage prévu | Utilisation / sensibilité |
| --- | --- | --- | --- |
| [Donnée] | [Structurée / non structurée / temps réel] | [Base de données, fichiers, cache, entrepôt…] | [Usage et niveau de sensibilité] |

### 3.3 Composants d’intégration

| Système / composant source | Système / composant cible | Méthode | Données échangées / déclencheur |
| --- | --- | --- | --- |
| [Source] | [Cible] | [API, file de messages, base partagée, webhook…] | [Échange] |

### 3.4 Composants d’infrastructure

| Élément | Choix envisagé | Rôle / justification |
| --- | --- | --- |
| Hébergement | [Sur site / cloud / hybride] | [Justification] |
| Serveurs / calcul | [À préciser] | [Rôle] |
| Réseau | [À préciser] | [Rôle / besoins de connectivité] |
| Stockage et sauvegardes | [À préciser] | [Données couvertes et approche] |

### 3.5 Composants de sécurité

| Domaine | Mesure prévue | Risque ou besoin couvert |
| --- | --- | --- |
| Authentification et accès | [À préciser] | [Besoin] |
| Protection / chiffrement des données | [À préciser] | [Besoin] |
| Réseau et filtrage | [À préciser] | [Besoin] |
| Sauvegardes et reprise | [À préciser] | [Besoin] |
| Conformité | [Règles applicables] | [Besoin] |

### 3.6 Composants humains et opérationnels

| Profil / équipe | Interaction avec le système | Responsabilité opérationnelle |
| --- | --- | --- |
| [Utilisateur, support, maintenance…] | [Interaction] | [Responsabilité] |

### 3.7 Schéma d’architecture de solution

[Insérer ou joindre un schéma lisible par une personne non technique. Montrer les utilisateurs, les blocs principaux, les flux de données et les services cloud. Garder le schéma simple (environ 7 blocs maximum) et ajouter une légende.]

## 4. Architecture logicielle

Décrire les composants logiciels principaux, leurs responsabilités, leurs communications, le stockage des données et la gestion de la charge.

### 4.1 Composants logiciels

| Composant / module | Responsabilité | Interfaces / dépendances |
| --- | --- | --- |
| [Composant] | [Responsabilité unique et claire] | [Composants ou API utilisés] |

### 4.2 Communication entre composants

| Émetteur | Destinataire | Protocole / mécanisme | Échange et comportement en cas d’échec |
| --- | --- | --- | --- |
| [Composant] | [Composant] | [Appel local, API, message…] | [Données échangées / gestion d’erreur] |

### 4.3 Données et persistance

| Données | Composant responsable | Stockage | Règles d’accès / cohérence |
| --- | --- | --- | --- |
| [Données] | [Composant] | [Base, stockage de fichiers…] | [Règles] |

### 4.4 Charge et évolution

- **Charge attendue / pics :** [Utilisateurs, requêtes, périodes de pointe]
- **Éléments susceptibles de changer d’échelle :** [Composants]
- **Réponse prévue :** [Augmenter les ressources d’un serveur / ajouter des instances / autre]
- **Disponibilité attendue :** [Cible et moyens prévus]

### 4.5 Type d’architecture logicielle

Comparer les options pertinentes pour le projet. Évaluer leurs avantages et inconvénients dans ce contexte précis.

| Option | Avantages pour ce projet | Inconvénients / risques | Adéquation |
| --- | --- | --- | --- |
| Monolithique | [À compléter] | [Évolution, déploiement, collaboration…] | [Faible / moyenne / forte] |
| En couches (présentation, métier, données) | [À compléter] | [Complexité, latence, rigidité…] | [Faible / moyenne / forte] |
| Microservices | [Autonomie, évolutivité, résilience…] | [Gestion, réseau, cohérence, tests, coûts…] | [Faible / moyenne / forte] |

**Architecture retenue :** [Monolithique / en couches / microservices / combinaison]  
**Justification et compromis acceptés :** [Pourquoi ce choix est adapté à la taille, à l’équipe, aux besoins et à l’évolution prévue.]

### 4.6 Schéma d’architecture logicielle

[Insérer ou joindre un schéma des composants logiciels et de leurs communications. Indiquer les zones de stockage des données et les flux principaux.]

## 5. Hébergement et cloud

### 5.1 Modèle de déploiement

| Option | Avantages pour le projet | Inconvénients / contraintes | Évaluation |
| --- | --- | --- | --- |
| Sur site (on-premise) | [Contrôle, localisation…] | [Coûts, maintenance, expertise…] | [À compléter] |
| Cloud public | [Élasticité, services disponibles…] | [Dépendance, localisation, coûts récurrents…] | [À compléter] |
| Cloud privé | [Contrôle, personnalisation…] | [Coûts, capacité, compétences…] | [À compléter] |
| Cloud hybride | [Répartition des charges et des données…] | [Complexité d’intégration et de sécurité…] | [À compléter] |

**Modèle retenu :** [Sur site / cloud public / cloud privé / hybride]  
**Région ou localisation souhaitée :** [À préciser]  
**Justification :** [À compléter]

### 5.2 Modèle de service cloud

| Modèle | Fournisseur gère | Client gère | Service envisagé / justification |
| --- | --- | --- | --- |
| IaaS | Infrastructure physique et ressources virtualisées | Système d’exploitation, applications, données et configuration | [À compléter] |
| PaaS | Infrastructure et plateforme d’exécution | Applications et données | [À compléter] |
| SaaS | Application et infrastructure du service | Comptes, configuration et usage des données | [À compléter] |

**Modèle(s) retenu(s) et justification :** [À compléter]

## 6. Décisions architecturales

### 6.1 Registre des décisions

| ID | Décision | Date | Statut | Participants |
| --- | --- | --- | --- | --- |
| ADR-01 | [Intitulé bref] | [AAAA-MM-JJ] | [Proposée / acceptée / rejetée / remplacée] | [Noms ou rôles] |

### 6.2 Fiche de décision

**ID et titre :** [ADR-XX — Titre]  
**Date :** [AAAA-MM-JJ]  
**Statut :** [Proposée / acceptée / rejetée / remplacée]  
**Participants :** [Noms ou rôles]

**Contexte / problème :** [Pourquoi une décision est nécessaire.]

**Décision :** [Choix explicite retenu.]

**Alternatives considérées :**

- [Option et raison de l’avoir considérée]

**Conséquences positives et négatives :**

- **Positives :** [Conséquences]
- **Négatives / risques :** [Conséquences]
- **Mesures de réduction des risques :** [Actions]

## 7. Critères de décision et compromis

Évaluer les choix d’architecture selon les sept critères du cours. Indiquer les priorités, contraintes et décision associée.

| Critère | Priorité | Exigence / contrainte | Choix ou compromis retenu |
| --- | --- | --- | --- |
| Performance | [1–5] | [Cible] | [Décision] |
| Scalabilité | [1–5] | [Cible] | [Décision] |
| Disponibilité | [1–5] | [Cible] | [Décision] |
| Sécurité | [1–5] | [Cible] | [Décision] |
| Coût | [1–5] | [Limite] | [Décision] |
| Maintenabilité | [1–5] | [Cible] | [Décision] |
| Conformité | [1–5] | [Règle applicable] | [Décision] |

## 8. Guide de déploiement et d’exploitation

### Environnements et hébergement

- **Environnements prévus :** [Développement, test, production…]
- **Lieu d’hébergement :** [Fournisseur, région, site…]
- **Dépendances à configurer :** [Services, intégrations, données…]

### Déploiement

1. [Préparation et prérequis]
2. [Étapes de déploiement]
3. [Vérifications après déploiement]

### Gestion des incidents et contacts

- **Procédure en cas de problème :** [Étapes de diagnostic, retour arrière ou reprise]
- **Contacts d’urgence :** [Nom / rôle / moyen de contact]
- **Sauvegardes et restauration :** [Fréquence, rétention et procédure]

## 9. Synthèse et validation

### Synthèse des choix

[Résumer la solution, le type d’architecture logicielle, l’hébergement retenu et les compromis principaux.]

### Vérifications avant validation

- [ ] Le schéma de solution montre les utilisateurs, composants, flux et services externes.
- [ ] Le schéma logiciel montre les composants, leurs communications et le stockage des données.
- [ ] Les choix d’architecture sont comparés et justifiés par rapport au contexte du projet.
- [ ] Les sept critères de décision sont évalués.
- [ ] Les décisions importantes, alternatives et conséquences sont documentées.
- [ ] Le guide de déploiement indique l’hébergement, les étapes, la gestion des incidents et les contacts.

| Validateur | Rôle | Date | Remarques / approbation |
| --- | --- | --- | --- |
| [Nom] | [Client / responsable technique / autre] | [AAAA-MM-JJ] | [À compléter] |

## 10. Historique des versions

| Version | Date | Auteur | Modifications |
| --- | --- | --- | --- |
| 0.1 | [AAAA-MM-JJ] | [Nom] | Création du document |