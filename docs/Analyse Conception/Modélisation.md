# Modélisation — [Nom du projet]

## 1. Identification

| Information | À compléter |
| --- | --- |
| Nom du projet | [Nom du projet] |
| Client / commanditaire | [Nom, organisation] |
| Analyste(s) | [Noms] |
| Date | [AAAA-MM-JJ] |
| Version | [Version] |
| Document d’analyse lié | [Lien vers l’analyse des besoins] |

## 2. Objectif et périmètre de la modélisation

**Objectif :** [Quelles données et quels processus le système doit-il représenter ?]

**Périmètre couvert :**

- [Fonctionnalité ou processus inclus]

**Hypothèses et contraintes :**

- [Hypothèse ou contrainte]

## 3. Modélisation des données

### 3.1 Entités et attributs

Une entité représente un objet à gérer. Ses attributs décrivent ses caractéristiques.

| Entité | Description | Attributs principaux |
| --- | --- | --- |
| [Entité] | [Ce que l’entité représente] | [Liste des attributs] |

#### Détail des attributs

| Entité | Attribut | Type de donnée | Obligatoire ? | Identifiant / remarque |
| --- | --- | --- | --- | --- |
| [Entité] | [Attribut] | [Texte, nombre, date…] | [Oui / non] | [Clé, unicité, règle…] |

### 3.2 Relations et cardinalités

Indiquer les cardinalités minimales et maximales, ainsi que le caractère obligatoire ou optionnel de chaque participation.

| Entité A | Relation / description | Entité B | Type | Cardinalités et optionalité |
| --- | --- | --- | --- | --- |
| [Entité] | [Verbe décrivant la relation] | [Entité] | [1:1 / 1:N / N:N] | [Ex. : 1 obligatoire à 0..N] |

**Rappel de notation :** `1` = exactement un ; `0..1` = zéro ou un ; `1..*` = un ou plusieurs ; `0..*` = zéro ou plusieurs.

### 3.3 Modèle entité-relation (MER)

[Insérer ou joindre le MER. Représenter les entités, attributs, relations, cardinalités et participations obligatoires ou optionnelles.]

### 3.4 Modèle logique — tables et clés

Transformer chaque entité en table et chaque attribut en colonne. Ajouter une clé primaire à chaque table. Pour une relation 1:N, placer la clé étrangère du côté N ; pour une relation N:N, créer une table de liaison.

| Table | Colonne | Type | Clé primaire ? | Clé étrangère / référence | Obligatoire ? |
| --- | --- | --- | --- | --- | --- |
| [Table] | [Colonne] | [Type] | [Oui / non] | [Table.colonne ou —] | [Oui / non] |

#### Tables de liaison

| Table de liaison | Entités reliées | Clés étrangères | Attributs propres éventuels |
| --- | --- | --- | --- |
| [Table] | [Entité A et Entité B] | [Clés étrangères] | [Attributs] |

### 3.5 Diagramme de classes UML

Pour chaque classe, préciser son nom, ses attributs et ses méthodes principales.

| Classe | Attributs (nom et type) | Méthodes principales |
| --- | --- | --- |
| [Classe] | [attribut : type] | [méthode(paramètres) : retour] |

#### Relations entre classes

| Classe A | Relation | Classe B | Multiplicités | Justification |
| --- | --- | --- | --- | --- |
| [Classe] | [Association / agrégation / composition] | [Classe] | [Ex. : 1 — 0..*] | [Règle métier] |

### Diagramme de classes

[Insérer ou joindre le diagramme UML des classes avec attributs, méthodes et multiplicités.]

## 4. Modélisation des processus

Un processus transforme des éléments d’entrée en éléments de sortie au moyen d’activités. Il peut être métier, de support ou de pilotage.

### 4.1 Fiche descriptive du processus

| Information | À compléter |
| --- | --- |
| Nom du processus | [Nom sous forme d’action] |
| Type | [Métier / support / pilotage] |
| Objectif / valeur créée | [Résultat attendu] |
| Déclencheur / événement de début | [Événement qui lance le processus] |
| Événement de fin | [Condition de fin] |
| Entrées | [Données, documents, produits…] |
| Sorties | [Résultats, documents, décisions…] |

### 4.2 Acteurs

| Acteur | Principal / secondaire | Rôle dans le processus |
| --- | --- | --- |
| [Personne, service ou système] | [Principal / secondaire] | [Activités ou responsabilité] |

### 4.3 Étapes, décisions et flux

| Ordre | Acteur responsable | Activité / décision / contrôle | Entrée ou information utilisée | Flux / résultat produit |
| --- | --- | --- | --- | --- |
| 1 | [Acteur] | [Action ou décision] | [Entrée] | [Sortie ou destinataire] |

**Règles de décision :**

- [Condition] → [Résultat / prochaine étape]

**Activités en parallèle :**

- [Activités pouvant se dérouler simultanément]

### 4.4 Diagramme d’activités UML

Utiliser le diagramme d’activités pour montrer les actions et leur enchaînement, les décisions, les flux et les éventuelles activités parallèles.

**Repères :** cercle noir = début ; rectangle arrondi = activité ; losange = décision ; flèche = flux ; barre = parallélisme ; cercle final = fin.

[Insérer ou joindre le diagramme d’activités UML.]

### 4.5 Swimlanes (couloirs de nage)

Utiliser un couloir par acteur (personne, service ou système) afin de montrer qui réalise chaque étape et les échanges entre acteurs.

| Couloir / acteur | Événements et activités à représenter |
| --- | --- |
| [Acteur ou système] | [Étapes et échanges] |

[Insérer ou joindre le diagramme avec swimlanes.]

### 4.6 Choix du diagramme

| Diagramme | Adapté au processus ? | Justification |
| --- | --- | --- |
| Diagramme d’activités UML | [Oui / non] | [Actions, enchaînement, décisions, parallélisme] |
| Swimlanes | [Oui / non] | [Responsabilités et interactions entre acteurs] |

## 5. Synthèse et vérification

### Modèles à remettre

- [ ] MER avec entités, attributs, relations et cardinalités
- [ ] Modèle logique avec tables, clés primaires, clés étrangères et tables de liaison nécessaires
- [ ] Diagramme de classes UML avec attributs, méthodes et multiplicités
- [ ] Diagramme d’activités UML pour chaque processus retenu
- [ ] Swimlanes lorsque les responsabilités ou échanges entre acteurs doivent être distingués
- [ ] Synthèse des choix de modélisation

### Points à vérifier

- [ ] Chaque entité et attribut répond à un besoin identifié.
- [ ] Les relations, cardinalités et optionalités correspondent aux règles métier.
- [ ] Les relations 1:N et N:N sont traduites correctement dans le modèle logique.
- [ ] Chaque processus a un début, une fin, des acteurs, des activités, des flux et des événements.
- [ ] Les décisions et activités parallèles sont représentées clairement.

## 6. Historique des versions

| Version | Date | Auteur | Modifications |
| --- | --- | --- | --- |
| 0.1 | [AAAA-MM-JJ] | [Nom] | Création du document |