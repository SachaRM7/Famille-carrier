# 📖 MyFiqh — Notes de Fiqh Islamique

Application web pour organiser, rechercher et consulter vos notes de cours de Fiqh par **Kitab** (livre), **Porte** (chapitre) et **mots-clés**.

## 🎯 Features

✅ **Organisation hiérarchique**
- Kitabs (livres de fiqh)
- Portes (chapitres dans chaque Kitab)
- Notes (détail des cours)

✅ **Recherche avancée**
- Recherche par mots-clés
- Recherche dans le contenu, tags, titres
- Filtrage par Kitab

✅ **Tags & Catégorisation**
- Chaque note peut avoir des tags
- Tags visibles et cliquables
- Facilite la découverte

✅ **Design Responsive**
- Mobile-friendly
- PWA (installable sur home screen)
- Parfait pour Safari iOS

✅ **Hors ligne**
- Données sauvegardées localement (localStorage)
- Fonctionne sans connexion internet

---

## 📱 Accès

**URL:** `https://sacharm7.github.io/Famille-carrier/app/myfiqh/`

### Installation sur iOS (Safari)
1. Ouvrir l'URL dans Safari
2. Bouton partage (↗️) → "Sur l'écran d'accueil"
3. Ajouter → ✅ Installée

---

## 📝 Structure des Notes

### Format Markdown
Les notes supportent le markdown basique:

```markdown
# Titre Principal
## Sous-titre
### Titre 3

**Gras** et *italique*

- Point de liste
- Autre point

1. Point numéroté
2. Autre point

> Citation ou bloc important
```

### Exemple de Note
```javascript
{
    id: "tahara-eau-1",
    title: "Types d'eau purifiant",
    date: "2026-02-28",
    author: "Sacha",
    tags: ["eau", "pureté", "ablution"],
    content: `# Types d'eau purifiant
    
## L'eau pure (Al-Ma'u at-Tahour)
...`
}
```

---

## 🔧 Comment Ajouter des Notes

### 1. Directement dans `data.js`
Ouvrir `data.js` et ajouter une note dans la porte correspondante:

```javascript
{
    id: "unique-id",
    title: "Titre de votre note",
    date: new Date().toISOString().split('T')[0],
    author: "Sacha",
    tags: ["tag1", "tag2"],
    content: `# Votre contenu
    
Écrivez en markdown...`
}
```

### 2. Via la fonction `addNote()`
Dans le navigateur (console):

```javascript
addNote('tahara', 'tahara-eau', {
    title: "Ma nouvelle note",
    tags: ["test"],
    content: "# Contenu"
});
saveToLocalStorage();
```

### 3. Ajouter une Porte ou Kitab
```javascript
// Ajouter une porte
addPorte('tahara', {
    id: "tahara-new",
    name: "Nouvelle porte",
    description: "Description",
    notes: []
});

// Ajouter un kitab
addKitab({
    id: "new-kitab",
    name: "Nouveau Kitab",
    description: "Description",
    icon: "📖",
    portes: []
});
```

---

## 💾 Sauvegarde & Import

### Sauvegarder en localStorage
```javascript
saveToLocalStorage();
```

### Charger depuis localStorage
```javascript
loadFromLocalStorage();
```

### Exporter en JSON
```javascript
const json = exportDatabase();
console.log(json); // Copier-coller pour sauvegarder
```

### Importer depuis JSON
```javascript
const jsonData = '{ ... }'; // Votre JSON
importDatabase(jsonData);
saveToLocalStorage();
```

---

## 🏗️ Architecture

```
myfiqh/
├── index.html          # Page principale
├── styles.css          # Design responsive
├── data.js             # Base de données + helpers
├── app.js              # Logique UI + navigation
├── manifest.json       # PWA manifest
└── README.md           # Ce fichier
```

### Fichier `data.js`
- Structure de données `fiqhDatabase`
- Fonctions d'accès (getKitab, getPorte, getNote)
- Recherche et filtrage
- Gestion CRUD (add, update, delete)
- localStorage (save/load)

### Fichier `app.js`
- Gestion d'état (currentState)
- Navigation entre vues
- Rendu des UI (render functions)
- Handlers d'événements
- Recherche en temps réel

---

## 🔍 Fonctionnalités de Recherche

### Critères de Recherche
1. **Titre** de la note (poids: 3)
2. **Tags** (poids: 2)
3. **Contenu** (poids: 1)

Les résultats sont triés par pertinence.

### Exemples
```
"tahara"       → Toutes les notes contenant "tahara"
"eau"          → Notes avec tag "eau" ou contenant "eau"
"ablution"     → Recherche dans les titres, tags, contenu
```

---

## 📊 Exemple de Kitabs (Template)

Actuellement inclus:
1. **Al-Tahara** (La Pureté) - l'eau, l'ablution
2. **As-Salat** (La Prière) - horaires, piliers
3. **Az-Zakat** (L'aumône) - conditions, catégories

À remplir avec vos propres notes!

---

## 🎨 Customization

### Thème
Modifier les variables CSS dans `styles.css`:

```css
:root {
    --primary: #1a472a;        /* Couleur principale */
    --accent: #d4af37;         /* Accent (or) */
    --bg: #f5f3f0;             /* Fond */
    --text: #2c2416;           /* Texte */
    /* ... */
}
```

### Icons
Chaque Kitab a un emoji configurable:

```javascript
icon: "📖"  // Changer l'emoji
```

---

## 📋 Roadmap

- [x] Navigation Kitab → Porte → Note
- [x] Recherche par mots-clés
- [x] Filtrage par Kitab
- [x] Tags pour chaque note
- [ ] Ajouter/Éditer notes via UI
- [ ] Export PDF
- [ ] Sync Firebase (optionnel)
- [ ] Darkmode
- [ ] Multilangue (FR/EN/AR)

---

## 🚀 Déploiement

Automatiquement disponible sur:
```
https://sacharm7.github.io/Famille-carrier/app/myfiqh/
```

Les modifications dans `data.js` apparaissent après un `git push`.

---

## 📞 Support

### Problèmes courants

**Les notes ne s'affichent pas?**
- Vérifier que `data.js` est correctement chargé
- Ouvrir DevTools → Console → taper `fiqhDatabase`

**Mes modifications ne persistent pas?**
- Appeler `saveToLocalStorage()` après chaque modification
- Vérifier que localStorage n'est pas disabled

**Recherche ne fonctionne pas?**
- S'assurer que les notes ont un `content`
- Vérifier les `tags` (doit être un array)

---

## 📚 Références

Structure inspirée de **MyIslamHub** (MyArabic):
- Hiérarchie claire (Kitab → Porte)
- Navigation fluide
- Recherche performante

---

*Créé pour tes cours de Fiqh hebdomadaires 🤲*

**Dernière mise à jour:** 2026-03-02
