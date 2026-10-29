# API Web3Forms

Web3Forms est une API qui vous permet de gérer facilement les envois de formulaires. Vous pouvez l'intégrer à vos applications web afin de collecter et de gérer efficacement les données des formulaires.

## Fonctionnalités  principales

- Intégration facile des formulaires
- Collecte efficace des données des formulaires
- Gestion simple des envois
- Prise en charge de différents types de formulaires
- API sécurisée et fiable
- Protection contre le spam
- Statistiques détaillées sur les envois
- Intégration facile avec les frameworks et bibliothèques populaires
- Prise en charge des webhooks pour les notifications en temps réel
- Champs de formulaire et règles de validation personnalisables
- Intégration avec des services de marketing par e-mail
- Prise en charge du téléversement de fichiers dans les formulaires
- Gestion et signalement détaillés des erreurs
- Prise en charge de plusieurs langues pour les utilisateurs internationaux

## Pour commencer

Pour commencer avec Web3Forms, suivez ces étapes :

1. Créez un compte sur le site Web3Forms : [https://web3forms.com](https://web3forms.com)
2. Créez un formulaire et configurez les champs et paramètres souhaités.
3. Récupérez votre clé API unique dans le tableau de bord Web3Forms.
4. Intégrez le formulaire à votre application web à l'aide du code HTML fourni ou des points de terminaison de l'API.
5. Gérez les envois depuis le tableau de bord Web3Forms ou à l'aide de webhooks.

## Exemple d'intégration

Voici un exemple simple d'intégration d'un formulaire Web3Forms à votre application web :

```html
<form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="apikey" value="YOUR_API_KEY">
  <input type="text" name="name" placeholder="Votre nom" required>
  <input type="email" name="email" placeholder="Votre adresse e-mail" required>
  <textarea name="message" placeholder="Votre message" required></textarea>
  <button type="submit">Envoyer</button>
</form>
```

## Gestion des envois

Une fois le formulaire intégré, vous pouvez gérer les envois depuis le tableau de bord Web3Forms ou configurer des webhooks pour recevoir des notifications en temps réel. Vous pouvez ainsi traiter les données du formulaire, envoyer des e-mails de confirmation ou déclencher d'autres actions en fonction des envois.

### Configuration d'un webhook

Pour configurer un webhook, suivez ces étapes :

1. Accédez au tableau de bord Web3Forms, puis ouvrez la section « Webhooks ».
2. Cliquez sur « Ajouter un webhook » et saisissez l'URL du point de terminaison de votre serveur qui traitera les données reçues.
3. Configurez les paramètres supplémentaires, comme l'authentification ou les déclencheurs propres à un formulaire.
4. Enregistrez la configuration du webhook.

Votre point de terminaison serveur doit pouvoir recevoir des requêtes POST contenant les données du formulaire au format JSON. Vous pourrez ensuite traiter ces données selon les besoins de votre application.

### Exemple de point de terminaison pour un webhook

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const formData = req.body;
  console.log('Envoi de formulaire reçu :', formData);
  // Traiter les données du formulaire selon les besoins
  res.status(200).send('Webhook reçu avec succès');
});

app.listen(3000, () => {
  console.log('Le serveur fonctionne sur le port 3000');
});
```

## Integration PGDigital

Cette accessKey est celle de Web3Forms (le service configuré dans endpoint). Procédure :

Aller sur https://web3forms.com
Saisir l'adresse de réception (patrickgagli@yahoo.co.uk) dans le champ « Create Access Key » — pas de compte requis.
Valider l'email reçu : la clé (un UUID du type a1b2c3d4-....) arrive par email.
La coller dans contact-form.json :

Points à savoir :

Cette clé est publique par conception (elle transite dans le JavaScript côté client). Elle ne donne accès à rien d'autre qu'à l'envoi de messages vers votre adresse — il n'y a donc pas de secret exposé. C'est pour cela que le champ piège company est présent dans le formulaire.
Le plan gratuit est limité (250 envois/mois).
Tant que le champ reste vide, le formulaire garde le repli mailto:.

Si vous préférez un autre service, il suffit de changer endpoint : tout endpoint acceptant un POST JSON avec CORS fonctionne (Formspree, Getform, une fonction serverless…). Pour Formspree par exemple, l'endpoint devient https://formspree.io/f/VOTRE_ID et accessKey peut recevoir n'importe quelle valeur non vide, puisque le code s'en sert uniquement comme indicateur « service configuré ».

