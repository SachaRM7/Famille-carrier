// MyFiqh - Base de données de tes notes de Fiqh

const fiqhDatabase = {
    kitabs: [
        {
            id: "tahara",
            name: "Kitab At-Tahara (الطهارة)",
            description: "La Pureté - Ablution, ghusl et comportements",
            icon: "💧",
            portes: [
                {
                    id: "tahara-eau",
                    name: "L'eau (الماء) et ses types",
                    description: "Classification de l'eau: tahour, tahir, najis",
                    notes: [
                        {
                            id: "note-1",
                            title: "Types d'eau purifiant",
                            date: "2026-02-28",
                            author: "Sacha",
                            tags: ["eau", "tahour", "tahir", "najis"],
                            content: `# Types d'eau purifiant

## L'eau pure et purifiante (الماء الطهور)
L'eau qui n'a pas changé en couleur, goût ou odeur à cause de quelque chose d'impur.

### Caractéristiques:
- L'eau du ciel garde sa nature d'eau pure
- Avec elle on peut se purifier
- Même si des choses (ex: algues) altèrent légèrement le goût/odeur/couleur

## L'eau pure mais non-purifiante (طاهر)
L'eau mélangée avec quelque chose de propre qui change sa nature.

### Exemples:
- Café, thé, jus
- Se consomme mais ne purifie pas

## L'eau impure (نجس)
L'eau mélangée à une impureté.

### Condition:
- Au moins UN des 3 attributs est altéré:
  1. L'odeur
  2. Le goût
  3. L'apparence/couleur

## Classification rapide
- **Transformation (الاستحالة)** → Parle du moment où l'eau impure devient pure
- **Changement (التغيير)** → L'eau change de nature
- **Distinction (الفرق)** → La différence entre types d'eau`
                        }
                    ]
                },
                {
                    id: "tahara-recipients",
                    name: "Les récipients (الآنية)",
                    description: "Récipients autorisés et interdits",
                    notes: [
                        {
                            id: "note-3",
                            title: "Les récipients en or, argent et autres matériaux",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["récipients", "or", "argent", "interdit"],
                            content: `# Les récipients (الآنية)

## Récipients interdits
Les récipients en **or** et **argent** sont **interdits** d'utilisation.

### Raison:
- Orgueil, luxe, ostentation
- Éloignement de la modestie

## Récipients permis
- Tous les autres matériaux
- Récipients des non-musulmans (permis sauf si utilisés pour l'impur)

## Matériaux purs après tannage (الدباغة)
### Les peaux d'animaux:
- Peau de tous les animaux → **pure après tannage**
- Sauf: **chien** et **porc** (restent impurs même tannés)

## Os, cornes, poils, plumes:
- **Pure (طاهرة)** après l'abattage rituel
- Peuvent être utilisés`
                        }
                    ]
                },
                {
                    id: "tahara-besoins",
                    name: "Les besoins naturels",
                    description: "Règles des toilettes, endroits autorisés et interdits",
                    notes: [
                        {
                            id: "note-4",
                            title: "Le Guss (toilettes) - Ce qui est interdit",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["toilettes", "interdit", "makruh"],
                            content: `# Le Guss (الغسل) - Les besoins naturels

## Ce qui est INTERDIT (حرام):
1. Faire face à la Qibla (القبلة)
2. Dans l'eau stagnante (piscine, lac)
3. Dans les mosquées
4. Se nettoyer avec os/plumes/nourriture

## Ce qui est DÉCONSEILLÉ (مكروه - Makruh):
1. Parler pendant les besoins
2. Uriner face au vent
3. Apporter quelque chose avec le nom d'Allah
4. Se nettoyer avec la main droite
5. Excéder le temps passé

## Ce qui est RECOMMANDÉ (مستحب - Mustahab):
1. Dire "Bismillah" en entrant aux toilettes
2. Entrer du pied gauche
3. Sortir du pied droit
4. Dire "Ghoufranak" (pardon) à Allah`
                        }
                    ]
                },
                {
                    id: "tahara-siwak",
                    name: "Siwak (السواك) - Le brossage des dents",
                    description: "L'objet et les moments recommandés",
                    notes: [
                        {
                            id: "note-6",
                            title: "Siwak et ses moments recommandés",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["siwak", "dents", "hygiène", "sunna"],
                            content: `# Siwak (السواك) - Le brossage des dents

## Définition:
- **Siwak (السواك)** = L'action du brossage
- **Misswak (المسواك)** = L'objet utilisé (bâton)

## Moments recommandés (مستحب - Mustahhab):
1. **Pendant l'ablution (الوضوء)**
2. **Avant la prière (الصلاة)**
3. **Au réveil**
4. **Pour lire le Coran (القرآن)**
5. **En rentrant chez soi**
6. **Quand une odeur sort de la bouche**

## Promesse du Prophète:
Si on applique ces conseils = **jamais de caries**

## Impact:
- Hygiène bucco-dentaire optimale
- Sunnah (سنة) fortement encouragée`
                        }
                    ]
                },
                {
                    id: "tahara-wudhu",
                    name: "L'ablution (الوضوء)",
                    description: "Conditions, obligations et sunnahs du wudhu",
                    notes: [
                        {
                            id: "note-7",
                            title: "Al-Wudhu: Conditions, Farads et Sunan",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["wudhu", "ablutions", "fard", "condition"],
                            content: `# L'ablution (الوضوء)

## Terminologie Juridique:

### Shart (الشرط) - Condition:
- Récompense si tu fais ✓
- Pas de péché si condition naturelle

### Fard (الفرض) - Obligation:
- Péché si tu ne fais pas ✗

### Wajib (الواجب) - Obligatoire:
- Quand il y a peu de dalil (preuve)

### Mustahab (المستحب) - Recommandé:
- Tu fais bien, pas de péché si tu ne fais pas

### Mubah (المباح) - Permis:
- Récompense si bonne intention = habitude

### Haram (الحرام) - Interdit
### Makrouh (المكروه) - Détesté

---

## Les FARD (الفرائض) du Wudhu:
1. Rincer la bouche et aspirer avec le nez
2. Passer sur les cheveux
3. Faire masah (المسح) sur les oreilles
4. Laver les mains puis les pieds jusqu'au coude
5. **Suivre l'ordre (الترتيب - Tartib)** - IMPORTANT
6. **Ne pas faire de pause** - c'est Fard

---

## Les SHART (الشروط) du Wudhu:
1. Se débarrasser de ce qui annule l'ablution
2. Être musulman
3. Avoir l'intention (النية - Niyyah) - Malik dit que c'est automatique
4. Être conscient (positif)
5. Avoir toutes ses facultés mentales
6. Eau pure et purifiante (الماء الطهور)
7. Retirer tout ce qui empêche l'eau d'atteindre la peau
   - Bagues, vernis, plâtre, etc.`
                        }
                    ]
                },
                {
                    id: "tahara-khuffayn",
                    name: "Masah (المسح) sur Khuffayn (الخفين)",
                    description: "Passer les mains sur les chaussettes en cuir",
                    notes: [
                        {
                            id: "note-8",
                            title: "Masah sur les chaussettes en cuir (Khuffayn)",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["khuffayn", "chaussettes", "masah"],
                            content: `# Masah (المسح) sur Khuffayn (الخفين)

## 3 CONDITIONS pour faire Masah:
1. **Porter immédiatement après ablutions complètes**
   - ⚠️ PAS accepté si Tayammum (التيمم) ⚠️

2. **Le Khuff doit couvrir**
   - Toute la partie du pied
   - Jusqu'aux chevilles

3. **Doit être pur**
   - Pas sale
   - Pas fabriqué en cuir de chien/porc

---

## 3 ANNULATIONS du Masah (المبطلات):

1. **Si Djanaba (جنابة)** (ce qui oblige le Ghusl)
   - Perte de sperme = Ghusl (الغسل) obligatoire
   - Masah invalide

2. **Si la durée s'écoule (المدة)**
   - Voyageur = 3 jours + 3 nuits (72h)
   - Non-Voyageur = 1 jour + 1 nuit (24h)

3. **Si tu retires ton Khuff**
   - ⚠️ OBLIGÉ de refaire ablutions complètes ⚠️

---

## Décompte de la durée:
- Début: dès le moment où on "perd" (annule) l'ablution
- Exemple: Ablution Fajr → Port Khuff → Ablution Dhor → DÉBUT COMPTAGE

**Important:** Si avant la fin de la durée on a une djanaba = Ghusl obligatoire, masah annulé`
                        }
                    ]
                },
                {
                    id: "tahara-annulation",
                    name: "Ce qui annule l'ablution (نواقض الوضوء)",
                    description: "Les choses qui invalident le wudhu",
                    notes: [
                        {
                            id: "note-ce-qui-annule",
                            title: "Ce qui annule l'ablution (Nawaqid Al-Wudhu)",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["ablution", "annulation", "wudhu"],
                            content: `# Ce qui annule l'ablution (نواقض الوضوء)

## Choses qui annulent l'ablution (الوضوء):
1. Selles (البراز) - urine, selles
2. Gaz (الريح) - pet
3. Écoulement du sang en grande quantité
4. Perte de conscience
5. Sommeil profond
6. Folie temporaire
7. Relations conjugales (pénétration)
8. Consommation d'aliments contenant une substance stupéfiante

## Après annulation:
- Impossible de faire la Prière (الصلاة)
- Impossible de faire Tawaf (الطواف)
- Impossible de toucher le Mushaf (المصحف)
- Nécessité de refaire les ablutions complètes`
                        }
                    ]
                },
                {
                    id: "tahara-ghusl",
                    name: "Le Ghusl (الغسل) - Grandes ablutions",
                    description: "Les ablutions majeures et leurs conditions",
                    notes: [
                        {
                            id: "note-10",
                            title: "Ghusl: 5 nécessités, 7 conditions, 1 obligation",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["ghusl", "janaba", "ablutions", "majeures"],
                            content: `# Le Ghusl (الغسل) - Les grandes ablutions

## 5 CHOSES NÉCESSITANT le Ghusl (الوجوب):

1. **La sortie du sperme (الإنزال)**
   - Éjaculation = Ghusl obligatoire

2. **Le rapport conjugal (الجماع)**
   - Pénétration = Ghusl obligatoire
   - ⚠️ MÊME SANS ÉJACULATION ⚠️

3. **La sortie des menstrues (الحيض)**
   - Fin de période menstruelle = Ghusl

4. **La sortie des lochies (النفاس)**
   - Après l'accouchement = Ghusl

5. **En entrant dans l'Islam (الإسلام)**
   - Conversion = Ghusl obligatoire

---

## 7 CONDITIONS (الشروط) pour faire Ghusl:

1. Se débarrasser de ce qui nécessite le ghusl
2. Mettre l'intention (النية)
3. Être musulman
4. Avoir toutes ses facultés mentales
5. Être conscient
6. Utiliser eau Pure (ماء طهور)
7. Retirer tout ce qui empêche l'eau d'atteindre la peau

---

## 1 SEULE OBLIGATION (الفرض):
### Mouiller **TOUT** le corps (تعميم الماء)
- Pas un cheveu qui reste sec
- Chaque millimètre du corps

---

## 7 SUNNAHS (السنن) (Recommandé):
1. Laver d'abord la partie souillée
2. Faire les ablutions complètes pendant le ghusl
3. Mouiller 3 fois chaque membre
4. Commencer par la droite, finir par la gauche
5. Ne pas faire de pauses
6. Frotter tous les membres
7. Laver les pieds dans un autre endroit

---

## NOTE IMPORTANTE:
**On peut prier après le Ghusl SANS refaire l'ablution (الوضوء)**
- Le ghusl inclut les ablutions
- Pas besoin de wudhu supplémentaire`
                        }
                    ]
                },
                {
                    id: "tahara-najasa",
                    name: "L'élimination des impuretés (إزالة النجاسات)",
                    description: "Comment nettoyer ce qui est souillé",
                    notes: [
                        {
                            id: "note-11",
                            title: "Élimination des impuretés (إزالة النجاسات)",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["najasa", "impureté", "nettoyage", "eau"],
                            content: `# L'élimination des impuretés (إزالة النجاسات)

## POINT IMPORTANT (en rouge):
**L'impureté (النجاسة) doit être VISIBLE ET/OU ODORANTE**

---

## RÈGLES DE NETTOYAGE:

### 1. Moyens de nettoyage:
- L'eau (الماء) (principal moyen)
- Transformation chimique
- Autres moyens appropriés

### 2. Nombre de lavages:
- **AUCUN nombre exigé en général**
- **SAUF**: Si chien bave dans un récipient
  - Laver **7 fois** obligatoire

---

## CAS PARTICULIERS:

### Urine de bébé garçon non-sevré:
- **JUSTE** jeter de l'eau dessus
- Pas nécessaire de frotter

### Urine de bébé fille non-sevrée:
- **LAVER** à l'eau complètement
- Frotter nécessaire

**Note**: "Bébé" = ne boit que du lait/eau (pas d'aliments solides)

---

## HIÉRARCHIE DES IMPURETÉS:
1. Impureté visible/odorante = à nettoyer
2. Impureté sans signe = débat entre écoles
3. Transformation de l'impureté = elle devient pure`
                        }
                    ]
                },
                {
                    id: "tahara-tayammum",
                    name: "Tayammum (التيمم) - Ablution sèche",
                    description: "Quand on n'a pas d'eau",
                    notes: [
                        {
                            id: "note-9",
                            title: "Tayammum: Conditions et annulations",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["tayammum", "ablution", "sèche", "pas-eau"],
                            content: `# Tayammum (التيمم) - Ablution sèche

## Quand on pratique Tayammum:
- Pas d'eau disponible
- Eau existe mais on ne peut pas l'utiliser (blessure, maladie)

---

## 7 CONDITIONS pour faire Tayammum:
1. Mettre l'intention (النية)
2. Être musulman
3. Avoir toutes ses facultés mentales
4. Avoir le discernement
5. Tu n'as pas d'eau ou ne peut pas l'utiliser
6. Le sol soit pur (إن كان نظيفاً)
7. Pas d'eau salée ou stagnante

---

## 3 OBLIGATIONS (الفرائض):
1. Frotter le visage avec le sol pur
2. Frotter les mains jusqu'aux poignets
3. Sans pause (الترتيب)

---

## 3 choses qui ANNULENT le Tayammum:
1. **Tout ce qui annule l'ablution (الوضوء)**
   - Selles, urine, gaz

2. **Tu trouves de l'eau (الماء)**
   - L'eau apparaît = tayammum invalide

3. **Tu n'es plus malade/blessé**
   - La condition disparaît = tayammum annulé`
                        }
                    ]
                },
                {
                    id: "tahara-hayd",
                    name: "Les menstrues (الحيض)",
                    description: "Règles de vie pendant les menstrues et lochies",
                    notes: [
                        {
                            id: "note-12",
                            title: "Al-Hayd: Types, interdits et permissions",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["hayd", "menstrues", "femme", "haram"],
                            content: `# Les menstrues (الحيض)

## 3 TYPES DE SAIGNEMENT:

### 1. Les menstrues (الحيض - Al-Hayd):
- Durée maximale: **15 jours**
- Saignement normal de la femme

### 2. Les lochies (النفاس - An-Nifas):
- Après l'accouchement
- Durée max: **40 jours** (ou 60 selon autres avis)

### 3. Le sang anormal (الاستحاضة - Istihadah):
- À partir du **16ème jour**
- Saignement continu ou irrégulier

---

## 7 INTERDITS (محرمات) pendant menstrues/lochies:

1. ❌ Avoir des rapports conjugaux (الجماع)
2. ❌ Se faire répudier (الطلاق)
3. ❌ Faire la prière (الصلاة)
4. ❌ Jeûner (الصيام)
5. ❌ Faire Tawaf (الطواف) - autour de la Kaaba
6. ❌ Rester dans la mosquée (المسجد)
7. ❌ **Toucher le Coran (المصحف)** ⚠️

---

## 3 PERMISSIONS après fin saignement, avant purification majeure:

1. ✅ Jeûner (الصيام)
2. ✅ Rester dans la mosquée (المسجد)
   - ⚠️ MAIS avec ablution (الوضوء) obligatoire ⚠️
3. ✅ Lire le Coran (القرآن) (sans le toucher)

---

## CAS PARTICULIERS:

### Al-Mu'tadah (المعتادة) - "L'habituée":
- Si habituellement 6-5 jours de règles
- Mais un jour ça change: dès le 7ème jour elle peut faire ses actes
- Son cas = **Mu'tadah** (habitude)

### At-Tamyiz (التمييز) - "La distinction":
- Si elle distingue le sang des règles du sang anormal
- Elle se rattache à ses actes dès qu'elle a distingué
- Cas = **Tamyiz** (discernement)

### Al-Mutahayyirah (المتحيرة) - "La confuse":
Elle ne connaît ni jours fixes, ni état du sang

#### **Al-Mubtadi'ah** (المبتدئة) - Cas 1:
- Compte selon la durée générale des femmes de sa famille

#### **Nassiyah** (ناسية) - Cas 2:
- Celle qui a oublié ses jours réguliers
- Suit l'avis de l'école juridique`
                        }
                    ]
                }
            ]
        }
    ]
};

// Helpers (même code que avant)
function getKitab(kitabId) {
    return fiqhDatabase.kitabs.find(k => k.id === kitabId);
}

function getPorte(kitabId, porteId) {
    const kitab = getKitab(kitabId);
    if (!kitab) return null;
    return kitab.portes.find(p => p.id === porteId);
}

function getNote(kitabId, porteId, noteId) {
    const porte = getPorte(kitabId, porteId);
    if (!porte) return null;
    return porte.notes.find(n => n.id === noteId);
}

function searchNotes(query) {
    const results = [];
    const q = query.toLowerCase();

    fiqhDatabase.kitabs.forEach(kitab => {
        kitab.portes.forEach(porte => {
            porte.notes.forEach(note => {
                const matchesTitle = note.title.toLowerCase().includes(q);
                const matchesTags = note.tags.some(tag => tag.toLowerCase().includes(q));
                const matchesContent = note.content.toLowerCase().includes(q);

                if (matchesTitle || matchesTags || matchesContent) {
                    results.push({
                        kitab,
                        porte,
                        note,
                        relevance: matchesTitle ? 3 : matchesTags ? 2 : 1
                    });
                }
            });
        });
    });

    return results.sort((a, b) => b.relevance - a.relevance);
}

function filterByKitab(kitabId) {
    if (!kitabId) return fiqhDatabase.kitabs;
    return [getKitab(kitabId)].filter(Boolean);
}

function addNote(kitabId, porteId, noteData) {
    const porte = getPorte(kitabId, porteId);
    if (!porte) return false;

    const newNote = {
        id: `note-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        author: "Sacha",
        ...noteData
    };

    porte.notes.push(newNote);
    return newNote;
}

function updateNote(kitabId, porteId, noteId, noteData) {
    const note = getNote(kitabId, porteId, noteId);
    if (!note) return false;

    Object.assign(note, noteData);
    return note;
}

function deleteNote(kitabId, porteId, noteId) {
    const porte = getPorte(kitabId, porteId);
    if (!porte) return false;

    const index = porte.notes.findIndex(n => n.id === noteId);
    if (index === -1) return false;

    porte.notes.splice(index, 1);
    return true;
}

function addPorte(kitabId, porteData) {
    const kitab = getKitab(kitabId);
    if (!kitab) return false;

    const newPorte = {
        id: `porte-${Date.now()}`,
        notes: [],
        ...porteData
    };

    kitab.portes.push(newPorte);
    return newPorte;
}

function addKitab(kitabData) {
    const newKitab = {
        id: kitabData.id || `kitab-${Date.now()}`,
        portes: [],
        ...kitabData
    };

    fiqhDatabase.kitabs.push(newKitab);
    return newKitab;
}

function exportDatabase() {
    return JSON.stringify(fiqhDatabase, null, 2);
}

function importDatabase(jsonData) {
    try {
        const imported = JSON.parse(jsonData);
        fiqhDatabase.kitabs = imported.kitabs;
        return true;
    } catch (e) {
        console.error('Import error:', e);
        return false;
    }
}

function saveToLocalStorage() {
    localStorage.setItem('myFiqhDatabase', JSON.stringify(fiqhDatabase));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('myFiqhDatabase');
    if (saved) {
        const imported = JSON.parse(saved);
        fiqhDatabase.kitabs = imported.kitabs;
        return true;
    }
    return false;
}
