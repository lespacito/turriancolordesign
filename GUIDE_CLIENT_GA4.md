# Guide Google Analytics 4 - Turrian Color & Design

Ce guide explique comment configurer et utiliser Google Analytics pour suivre les statistiques de votre site web.

---

## 🎯 Deux Options Possibles

### Option 1: Vous créez votre propre compte (RECOMMANDÉ)

**Avantages:**
- ✅ Vous possédez vos données
- ✅ Contrôle total de votre compte
- ✅ Pas de transfert nécessaire plus tard
- ✅ Vous pouvez ajouter d'autres personnes

**Ce que vous devez faire:**
1. Créer le compte Google Analytics (10 minutes)
2. Donner accès à votre développeur
3. Envoyer votre ID de mesure à votre développeur

### Option 2: Votre développeur crée le compte pour vous

**Avantages:**
- ✅ Aucune configuration de votre part
- ✅ Tout est configuré par le développeur
- ✅ Vous recevez juste un email d'invitation

**Ce que vous devez faire:**
1. Fournir votre adresse email professionnelle
2. Accepter l'invitation par email
3. C'est tout!

---

## 📋 OPTION 1: Créer Votre Compte (Guide Pas à Pas)

### Étape 1: Accéder à Google Analytics

1. Allez sur **[https://analytics.google.com/](https://analytics.google.com/)**
2. Connectez-vous avec votre **compte Google professionnel**
   - Si vous n'en avez pas, créez-en un avec votre email professionnel
3. Cliquez sur **"Commencer à mesurer"** ou **"Démarrer"**

### Étape 2: Créer un Compte

1. **Nom du compte:** `Turrian Color & Design`
2. **Paramètres de partage des données:**
   - Laissez les cases cochées (recommandé pour améliorer le service)
3. Cliquez sur **"Suivant"**

### Étape 3: Créer une Propriété

1. **Nom de la propriété:** `Site Web Turrian` ou `turrian-colordesign.ch`
2. **Fuseau horaire:** `(GMT+01:00) Europe/Zurich`
3. **Devise:** `Franc suisse (CHF)`
4. Cliquez sur **"Suivant"**

### Étape 4: Détails de l'Entreprise

1. **Secteur d'activité:** Sélectionnez `"Construction et bâtiment"` ou `"Services professionnels"`
2. **Taille de l'entreprise:** Choisissez la taille appropriée (ex: `"Petite - 1 à 10 employés"`)
3. **Objectifs d'utilisation:** Cochez:
   - ✅ Mesurer l'engagement des utilisateurs
   - ✅ Examiner le comportement des utilisateurs
4. Cliquez sur **"Créer"**

### Étape 5: Conditions d'Utilisation

1. Sélectionnez votre pays: **"Suisse"**
2. Acceptez les **Conditions d'utilisation**
3. Acceptez les **Conditions du traitement des données**
4. (Optionnel) Décochez "Recevoir des e-mails" si vous ne voulez pas de notifications
5. Cliquez sur **"J'accepte"**

### Étape 6: Configurer le Flux de Données

1. Sélectionnez **"Web"** (icône globe)
2. **URL du site Web:**
   - Entrez votre URL (ex: `turrian-colordesign.ch`)
   - Sans `https://` ni `www`
3. **Nom du flux:** `Site Web Turrian` ou `Site Principal`
4. Cliquez sur **"Créer un flux"**

### Étape 7: Récupérer Votre ID de Mesure ⭐

Vous verrez maintenant une page avec vos **détails du flux de données**.

**IMPORTANT:** En haut de la page, vous verrez votre **ID de mesure**:
- Format: **`G-XXXXXXXXXX`** (exemple: `G-ABC1234DEF`)
- **Copiez cet ID!** Vous devrez l'envoyer à votre développeur

### Étape 8: Donner Accès à Votre Développeur

Pour que votre développeur puisse configurer les événements et rapports:

1. Cliquez sur **"Admin"** (icône engrenage en bas à gauche)
2. Colonne **"Compte"** → **"Gestion de l'accès au compte"**
3. Cliquez sur le bouton **"+"** puis **"Ajouter des utilisateurs"**
4. Entrez l'**adresse email de votre développeur**
5. **Rôle:** Sélectionnez **"Administrateur"**
   - Cela permet à votre développeur de tout configurer
6. Cliquez sur **"Ajouter"**

Votre développeur recevra un email et pourra accéder à votre compte Analytics.

### Étape 9: Envoyer l'ID à Votre Développeur

Envoyez un email à votre développeur avec:
```
Bonjour,

J'ai créé mon compte Google Analytics 4.

Voici mon ID de mesure: G-XXXXXXXXXX

Je vous ai également donné accès administrateur avec votre email.

Cordialement,
[Votre nom]
```

**Remplacez `G-XXXXXXXXXX` par votre vrai ID de mesure!**

---

## 📋 OPTION 2: Le Développeur Crée le Compte

Si vous préférez cette option:

1. **Fournissez votre email professionnel** à votre développeur
2. **Attendez l'invitation** par email de Google Analytics
3. **Cliquez sur le lien** dans l'email pour accepter l'invitation
4. **Connectez-vous** sur [analytics.google.com](https://analytics.google.com)
5. C'est tout! Vos statistiques seront visibles immédiatement

---

## 📊 Comment Consulter Vos Statistiques

### Accéder à Google Analytics

1. Allez sur **[https://analytics.google.com/](https://analytics.google.com/)**
2. Connectez-vous avec votre compte Google
3. Sélectionnez votre propriété **"Site Web Turrian"**

### Rapports Principaux

#### 📍 **Temps Réel** - Qui visite votre site maintenant

- Menu: **Rapports** → **Temps réel**
- Vous verrez:
  - Nombre de visiteurs actifs en ce moment
  - Pages qu'ils consultent
  - Leur localisation géographique
  - Les actions qu'ils effectuent

#### 📊 **Acquisition** - D'où viennent vos visiteurs

- Menu: **Rapports** → **Acquisition** → **Acquisition de trafic**
- Sources de trafic:
  - **Direct:** Visiteurs qui tapent votre URL directement
  - **Organic Search:** Visiteurs venant de Google/Bing
  - **Social:** Visiteurs venant des réseaux sociaux
  - **Referral:** Visiteurs venant d'autres sites web

#### 🎯 **Engagement** - Que font vos visiteurs

- Menu: **Rapports** → **Engagement** → **Événements**
- Vous verrez les actions importantes:
  - **service_click:** Clics sur vos prestations
  - **contact_click:** Clics sur téléphone/email/adresse
  - **navigation_click:** Utilisation du menu de navigation
  - **page_view:** Pages consultées

#### 👥 **Utilisateurs** - Qui sont vos visiteurs

- Menu: **Rapports** → **Utilisateurs** → **Données démographiques**
- Informations sur vos visiteurs:
  - Ville et pays
  - Type d'appareil (ordinateur, mobile, tablette)
  - Navigateur utilisé
  - Nouveaux visiteurs vs visiteurs récurrents

### Créer un Rapport Personnalisé

1. **Rapports** → **Bibliothèque**
2. Cliquez sur **"Créer un rapport"**
3. Sélectionnez **"Rapport détaillé"**
4. Ajoutez les dimensions et métriques qui vous intéressent
5. Enregistrez le rapport

---

## 🎯 Événements Personnalisés de Votre Site

Votre site web track automatiquement ces événements importants:

| Événement | Quand il se déclenche | Ce qu'il mesure |
|-----------|----------------------|-----------------|
| **page_view** | Chargement d'une page | Pages visitées, temps passé |
| **service_click** | Clic sur une icône de prestation | Quels services intéressent les visiteurs |
| **contact_click** | Clic sur téléphone/email/adresse | Comment les visiteurs vous contactent |
| **navigation_click** | Clic sur le menu de navigation | Quelle section intéresse le plus |

### Voir les Détails d'un Événement

1. **Rapports** → **Engagement** → **Événements**
2. Cliquez sur le nom de l'événement (ex: `service_click`)
3. Vous verrez les détails:
   - Nombre total de clics
   - Quels services sont les plus cliqués
   - À quel moment de la journée

---

## ⚙️ Configuration Recommandée

### Ajuster la Rétention des Données (Vie Privée)

Pour respecter le RGPD et la loi suisse (FADP):

1. **Admin** (engrenage en bas à gauche)
2. Colonne **"Propriété"** → **"Paramètres des données"** → **"Rétention des données"**
3. **Rétention des données d'événement:** Sélectionnez **"2 mois"**
   - C'est le plus respectueux de la vie privée
   - Conforme aux réglementations suisses
4. Cliquez sur **"Enregistrer"**

### Activer le Mode Consentement

Pour être conforme avec votre bannière de cookies:

1. **Admin** → **"Collecte de données"** → **"Collecte des données"**
2. Activez **"Mode de consentement"**
3. **Comportement du consentement:** Sélectionnez **"Modélisation"**
   - GA4 estimera les données manquantes des utilisateurs qui refusent les cookies
4. **Enregistrer**

---

## 🔒 Confidentialité et Conformité RGPD

Votre site web est entièrement conforme aux lois suisses et européennes:

### ✅ Ce qui est en place:

1. **Bannière de consentement**
   - Les visiteurs doivent accepter explicitement
   - Bouton "Refuser" aussi visible que "Accepter"
   - Pas de cases pré-cochées

2. **Anonymisation des adresses IP**
   - GA4 n'enregistre jamais les adresses IP complètes
   - Automatique, pas besoin de configuration

3. **Rétention limitée des données**
   - Données conservées 2 mois maximum
   - Suppression automatique après ce délai

4. **Droit de refus**
   - Les visiteurs peuvent refuser le tracking
   - Le site fonctionne normalement même sans cookies

### 📋 Lois Respectées:

- ✅ **FADP** - Loi fédérale suisse sur la protection des données
- ✅ **RGPD** - Règlement général sur la protection des données (UE)
- ✅ **Directives FDPIC** - Préposé fédéral suisse (octobre 2025)

---

## 📱 Application Mobile Google Analytics

Consultez vos statistiques depuis votre smartphone:

### iOS (iPhone/iPad)
[Télécharger sur l'App Store](https://apps.apple.com/app/google-analytics/id881599038)

### Android
[Télécharger sur Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.giant)

**Utilisation:**
1. Téléchargez l'application
2. Connectez-vous avec votre compte Google
3. Sélectionnez votre propriété "Site Web Turrian"
4. Consultez vos stats en temps réel depuis n'importe où

---

## 💡 Conseils pour Utiliser Google Analytics

### 1. Consultez les Rapports Régulièrement

**Fréquence recommandée:**
- **Hebdomadaire:** Vue d'ensemble rapide (5 minutes)
- **Mensuel:** Analyse approfondie (30 minutes)
- **Trimestriel:** Tendances et ajustements stratégiques

### 2. Comparez les Périodes

Pour voir l'évolution:
1. En haut à droite, sélectionnez la période (ex: "7 derniers jours")
2. Cochez **"Comparer à"** → Période précédente
3. Vous verrez les % d'augmentation ou de diminution

### 3. Suivez les Conversions Importantes

Créez un objectif pour suivre:
- Nombre de clics sur "Contact"
- Clics sur le numéro de téléphone
- Visites de la galerie photo

### 4. Identifiez Vos Meilleures Sources de Trafic

Dans **Acquisition** → **Acquisition de trafic**:
- Quels canaux amènent le plus de visiteurs?
- Concentrez vos efforts marketing sur ces canaux

---

## 🆘 Questions Fréquentes

### ❓ Les données ne s'affichent pas

**Solutions:**
1. Attendez 24-48h après la configuration initiale
2. Vérifiez que votre développeur a bien intégré l'ID de mesure
3. Allez dans **Admin** → **Flux de données** et vérifiez que le flux est actif

### ❓ Comment ajouter un autre utilisateur?

1. **Admin** → **Gestion de l'accès au compte**
2. **"+"** → Ajouter un utilisateur
3. Entrez l'email et sélectionnez le rôle:
   - **Lecteur:** Peut seulement voir les rapports
   - **Administrateur:** Peut tout modifier

### ❓ Comment exporter des données?

1. Ouvrez n'importe quel rapport
2. En haut à droite, cliquez sur **"Partager ce rapport"**
3. Sélectionnez:
   - **Télécharger le fichier:** PDF ou CSV
   - **Envoyer par email:** Planifier des rapports automatiques

### ❓ Puis-je voir les données en temps réel?

Oui! **Rapports** → **Temps réel**

Vous verrez qui visite votre site en ce moment même.

### ❓ Comment supprimer mon compte Google Analytics?

1. **Admin** (engrenage)
2. Colonne **"Compte"** → **"Paramètres du compte"**
3. Scroll en bas → **"Déplacer le compte vers la corbeille"**
4. Confirmez

**Attention:** Les données sont supprimées définitivement après 35 jours.

---

## 📞 Support et Ressources

### Aide Officielle Google

- **Centre d'aide GA4:** [support.google.com/analytics](https://support.google.com/analytics)
- **Formation gratuite:** [Analytics Academy](https://analytics.google.com/analytics/academy/)
- **Communauté:** [Google Analytics Help Community](https://support.google.com/analytics/community)

### Contacter Votre Développeur

Pour toute question technique sur votre site web ou la configuration de Google Analytics, contactez votre développeur web.

---

## ✅ Checklist de Configuration

Cochez au fur et à mesure:

- [ ] Compte Google Analytics créé
- [ ] Propriété GA4 configurée (fuseau horaire, devise)
- [ ] ID de mesure copié et envoyé au développeur
- [ ] Accès administrateur donné au développeur
- [ ] Rétention des données définie à 2 mois
- [ ] Mode consentement activé
- [ ] Application mobile installée (optionnel)
- [ ] Premier rapport consulté
- [ ] Rapport temps réel vérifié

---

**Félicitations!** 🎉

Votre site web Turrian Color & Design est maintenant équipé de Google Analytics 4.
Vous pouvez suivre vos visiteurs, comprendre leur comportement et améliorer votre présence en ligne.

**Date de création de ce guide:** Janvier 2026
**Version:** 1.0
