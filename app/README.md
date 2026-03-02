# FamilyHealth — MVP Complet

App PWA pour le suivi santé de la famille: Sacha, Femme, Bébé.

## 🎯 Features

### Tous les profils
- ✅ Switch rapide (tabs)
- ✅ "Aujourd'hui" avec reset quotidien
- ✅ Données sauvegardées (Firebase + localStorage fallback)
- ✅ Responsive design (Safari iOS, mobile, desktop)
- ✅ Offline support (Service Worker)

### Sacha (Homme) 💪
- 💧 Eau (log + objectif 8/jour)
- ⚖️ Poids (manuel + historique)
- 👟 Pas (objectif 10K, prêt pour Apple Santé)
- 🏃 Séance Sport (timer + durée)
- 🍽️ Repas (log rapide)

### Femme 👩
- 💧 Eau (log + objectif)
- ⚖️ Poids (manuel)
- 👟 Pas (prêt pour Apple Santé)
- 🍽️ Repas (log rapide)

### Bébé 👶
- 😴 Sommeil (durée en minutes)
- 🍼 Biberon (ml)
- 🎨 Activités (log rapide)
- 🥕 DME / Repas (aliments essayés)

---

## 🔧 Setup Firebase (REQUIS)

### 1. Créer un projet Firebase
1. Go: https://console.firebase.google.com
2. Créer un nouveau projet → nom: `famille-carrier`
3. Enable Firestore Database
4. Security Rules (mode test pour dev):
```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

### 2. Récupérer les credentials
1. Firebase Console → Settings (⚙️) → Project Settings
2. Scroll down → "SDK setup and configuration" → Web
3. Copier la config:
```javascript
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

### 3. Ajouter à `firebase-config.js`
Remplacer le contenu de `firebaseConfig` dans `firebase-config.js`

### 4. Ajouter Firebase SDK (dans `index.html`)
Ajouter avant `</body>`:
```html
<!-- Firebase -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"></script>
```

---

## 📱 Installation iOS (Safari)

### V1: Navigateur (sans installer)
1. Ouvrir Safari
2. URL: `https://sacharm7.github.io/Famille-carrier/app/`
3. Utiliser normalement

### V2: App home screen (recommandé)
1. Safari → le site
2. Bouton partage (↗️) → "Sur l'écran d'accueil"
3. Ajouter → ✅ Installée

---

## 💾 Données

**Lieu:** Firestore → Collection `logs/{YYYY-MM-DD}` → Documents: `sacha`, `femme`, `bebe`

**Structure:**
```json
{
  "water": 5,
  "poids": { "value": 75.5, "time": "10:30" },
  "steps": 5000,
  "repas": [
    { "name": "Déjeuner", "time": "12:15" }
  ],
  "seances": [
    { "name": "30min running", "duration": 32 }
  ],
  "lastUpdated": "2026-03-02T05:50:00.000Z"
}
```

**Reset:** Eau et Pas reset à minuit chaque jour. Poids/Repas/Séances persistent.

---

## 📋 Roadmap

### Phase 1 ✅ (MVP — cette semaine)
- [x] 3 profils + switch
- [x] "Aujourd'hui" par profil
- [x] Actions rapides (eau, repas, seance, etc)
- [x] Firebase Firestore
- [x] PWA (installable Safari)

### Phase 2 ⏭️ (Semaine 2)
- [ ] Bibliothèques: Exos (Sacha) / Recettes (Femme) / Activités (Bébé)
- [ ] Graphe poids (progression)

### Phase 3 ⏭️ (Semaine 3)
- [ ] Apple HealthKit (poids Renpho, pas)
- [ ] Intégration Santé Apple

### Later
- [ ] Partage données (e2e encrypted?)
- [ ] Export PDF / CSV
- [ ] Notifications push

---

## 🚀 Deploy sur GitHub Pages

```bash
# Dans le dossier projet
cd /tmp/famille-carrier

# Commit + push
git add app/
git commit -m "🎯 Ajouter FamilyHealth MVP complet"
git push origin main

# L'app sera disponible sur:
# https://sacharm7.github.io/Famille-carrier/app/
```

**Note:** GitHub Pages sert directement depuis `main` branch.

---

## 🛠️ Troubleshoot

### Firebase pas chargé?
- Vérifier que la config est correcte dans `firebase-config.js`
- Vérifier que Firebase SDK CDN est dans `index.html` (before `</body>`)
- Fallback: données se sauvegardent en localStorage automatiquement

### Pas de données après rechargement?
- Vérifier que Firestore database existe et Security Rules sont en mode test
- Ou utiliser localStorage (marche sans Firebase)

### Service Worker pas activé?
- App doit être en HTTPS (GitHub Pages l'est automatiquement)
- Aller dans DevTools → Application → Service Workers

---

## 📞 Support

En cas de souci:
1. Ouvrir DevTools (Cmd+Option+I)
2. Console: check erreurs
3. Application → Firestore → verify données sauvegardées

---

*Créé pour la famille Carrier 👨‍👩‍👧 | v1.0 MVP*
