// MyFiqh - Base de données de tes notes de Fiqh

const fiqhDatabase = {
    kitabs: [
        {
            id: "tahara",
            name: "Kitab At-Tahara",
            description: "La Pureté - Ablution, ghusl et comportements",
            icon: "💧",
            portes: [
                {
                    id: "tahara-eau",
                    name: "L'eau et ses types",
                    description: "Classification de l'eau: tahour, tahir, najis",
                    notes: [
                        {
                            id: "note-1",
                            title: "Types d'eau purifiant",
                            date: "2026-02-28",
                            author: "Sacha",
                            tags: ["eau", "tahour", "tahir", "najis"],
                            content: `# Types d'eau purifiant

## L'eau pure et purifiante (Al-Ma'u at-Tahour)
L'eau qui n'a pas changé en couleur, goût ou odeur à cause de quelque chose d'impur.

### Caractéristiques:
- L'eau du ciel garde sa nature d'eau pure
- Avec elle on peut se purifier
- Même si des choses (ex: algues) altèrent légèrement le goût/odeur/couleur

## L'eau pure mais non-purifiante (Tahir)
L'eau mélangée avec quelque chose de propre qui change sa nature.

### Exemples:
- Café, thé, jus
- Se consomme mais ne purifie pas

## L'eau impure (Najis)
L'eau mélangée à une impureté.

### Condition:
- Au moins UN des 3 attributs est altéré:
  1. L'odeur
  2. Le goût
  3. L'apparence/couleur

## Classification rapide
- **Istihala = Transformation** → Parle du moment où l'eau impure devient pure
- **Bisar = Changement** → L'eau change de nature
- **Fark = Distinction** → La différence entre types d'eau`
                        }
                    ]
                },
                {
                    id: "tahara-musta-mala",
                    name: "L'eau utilisée (Musta'mala)",
                    description: "L'eau qui a servi aux ablutions",
                    notes: [
                        {
                            id: "note-2",
                            title: "L'eau utilisée et ses statuts",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["eau", "purification", "ablutions", "musta'mala"],
                            content: `# L'eau utilisée (Musta'mala)

## Définition
L'eau qui a déjà servi pour les ablutions ou le lavage rituel.

## Statut de Musta'mala
- Devient **tahir** (pure) mais pas **tahour** (purifiante)
- Ne peut pas être utilisée pour se purifier à nouveau

## Utilisations possibles:
- Nettoyer les vêtements
- Nettoyer la maison
- Usages domestiques

## Note importante
Même si l'eau a été "utilisée", elle reste propre pour des usages non rituels.`
                        }
                    ]
                },
                {
                    id: "tahara-recipients",
                    name: "Les récipients",
                    description: "Récipients autorisés et interdits",
                    notes: [
                        {
                            id: "note-3",
                            title: "Les récipients en or, argent et autres matériaux",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["récipients", "or", "argent", "interdit"],
                            content: `# Les récipients (Al-Aniya)

## Récipients interdits
Les récipients en **or** et **argent** sont **interdits** d'utilisation.

### Raison:
- Orgueil, luxe, ostentation
- Éloignement de la modestie

## Récipients permis
- Tous les autres matériaux
- Récipients des non-musulmans (permis sauf si utilisés pour l'impur)

## Matériaux purs après tannage
### Les peaux d'animaux:
- Peau de tous les animaux → **pure après tannage**
- Sauf: **chien** et **porc** (restent impurs même tannés)

## Os, cornes, poils, plumes:
- **Tahir** (propres) après l'abattage rituel
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
                            content: `# Le Guss (Les besoins naturels) - Règles

## Ce qui est INTERDIT (Haram):
1. Faire face à la Qibla
2. Dans l'eau stagnante (piscine, lac)
3. Dans les mosquées
4. Se nettoyer avec os/plumes/nourriture

## Ce qui est DÉCONSEILLÉ (Makruh):
1. Parler pendant les besoins
2. Uriner face au vent
3. Apporter quelque chose avec le nom d'Allah
4. Se nettoyer avec la main droite
5. Excéder le temps passé

## Ce qui est RECOMMANDÉ (Mustahab):
1. Dire "Bismillah" en entrant aux toilettes
2. Entrer du pied gauche
3. Sortir du pied droit
4. Dire "Ghoufranak" (pardon) à Allah`
                        }
                    ]
                },
                {
                    id: "tahara-fitra",
                    name: "Al-Fitra - La nature saine",
                    description: "Hygiène et sunnah naturelle",
                    notes: [
                        {
                            id: "note-5",
                            title: "Al-Fitra - Les 5 éléments de la Sunna",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["fitra", "hygiène", "sunna", "circoncision"],
                            content: `# Al-Fitra (La nature saine de l'homme)

## Les 5 éléments de la Sunna (Sunnah):

### 1. La circoncision
- Entre 7 jours et 80 ans
- Acte de Sunna fortement recommandé

### 2. Raser les poils pubiens
### 3. Épiler les aisselles
### 4. Couper les moustaches (tailler)
### 5. Laisser pousser la barbe

## RÈGLE IMPORTANTE:
Ne pas dépasser **40 jours** au maximum pour ces actes.

## Interdictions alimentaires:
Tous les animaux qui tuent avec leurs **ongles (griffes)** sont interdits à la consommation.

**Exemples:** Lion, tigre, chat sauvage, etc.`
                        }
                    ]
                },
                {
                    id: "tahara-siwak",
                    name: "Siwak - Le brossage des dents",
                    description: "L'objet et les moments recommandés",
                    notes: [
                        {
                            id: "note-6",
                            title: "Siwak et ses moments recommandés",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["siwak", "dents", "hygiène", "sunna"],
                            content: `# Siwak (Le brossage des dents)

## Définition:
- **Siwak** = L'action du brossage
- **Misswak** = L'objet utilisé (bâton)

## Moments recommandés (Mustahhab):
1. **Pendant les ablutions** (Wudhu)
2. **Avant la prière**
3. **Au réveil**
4. **Pour lire le Coran**
5. **En rentrant chez soi**
6. **Quand une odeur sort de la bouche**

## Promesse du Prophète:
Si on applique ces conseils = **jamais de caries**

## Impact:
- Hygiène bucco-dentaire optimale
- Sunnah fortement encouragée`
                        }
                    ]
                },
                {
                    id: "tahara-wudhu",
                    name: "Al-Wudhu - Les ablutions",
                    description: "Conditions, obligations et sunnahs du wudhu",
                    notes: [
                        {
                            id: "note-7",
                            title: "Al-Wudhu: Conditions, Farads et Sunan",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["wudhu", "ablutions", "fard", "condition"],
                            content: `# Al-Wudhu (Les ablutions)

## Terminologie Juridique:

### Shart (شرط) - Condition:
- Récompense si tu fais ✓
- Pas de péché si condition naturelle

### Fard (فرض) - Obligation:
- Péché si tu ne fais pas ✗

### Wajib (واجب) - Obligatoire:
- Quand il y a peu de dalil (preuve)

### Mustahab (مستحب) - Recommandé:
- Tu fais bien, pas de péché si tu ne fais pas

### Mubah (مباح) - Permis:
- Récompense si bonne intention = habitude

### Haram (حرام) - Interdit
### Makrouh (مكروه) - Détesté

---

## Les FARD (Obligations) du Wudhu:
1. Rincer la bouche et aspirer avec le nez
2. Passer sur les cheveux
3. Faire masah sur les oreilles
4. Laver les mains puis les pieds jusqu'au coude
5. **Suivre l'ordre (tartib)** - IMPORTANT
6. **Ne pas faire de pause** - c'est Fard

---

## Les SHART (Conditions) du Wudhu:
1. Se débarrasser de ce qui annule l'ablution
2. Être musulman
3. Avoir l'intention (Malik dit que c'est automatique)
4. Être conscient (positif)
5. Avoir toutes ses facultés mentales
6. Eau pure et purifiante (tahour)
7. Retirer tout ce qui empêche l'eau d'atteindre la peau
   - Bagues, vernis, plâtre, etc.`
                        }
                    ]
                },
                {
                    id: "tahara-khuffayn",
                    name: "Masah sur Khuffayn",
                    description: "Passer les mains sur les chaussettes en cuir",
                    notes: [
                        {
                            id: "note-8",
                            title: "Masah sur les chaussettes en cuir (Khuffayn)",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["khuffayn", "chaussettes", "masah"],
                            content: `# Masah sur Khuffayn (Chaussettes en cuir)

## 3 CONDITIONS pour faire Masah:
1. **Porter immédiatement après ablutions complètes**
   - ⚠️ PAS accepté si Tayammum ⚠️

2. **Le Khuff doit couvrir**
   - Toute la partie du pied
   - Jusqu'aux chevilles

3. **Doit être pur**
   - Pas sale
   - Pas fabriqué en cuir de chien/cochon

---

## 3 ANNULATIONS du Masah (Mubtilat):

1. **Si Djanaba** (ce qui oblige le Ghusl)
   - Perte de sperme = Ghusl obligatoire
   - Masah invalide

2. **Si la durée s'écoule**
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
                    id: "tahara-tayammum",
                    name: "Tayammum - Ablution sèche",
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
1. Mettre l'intention
2. Être musulman
3. Avoir toutes ses facultés mentales
4. Avoir le discernement
5. Tu n'as pas d'eau ou ne peut pas l'utiliser
6. Le sol soit propre (si malade)
7. Pas d'eau salée ou stagnante

---

## 3 OBLIGATIONS (Fard):
1. Frotter le visage avec le sol pur
2. Frotter les mains jusqu'aux poignets
3. Sans pause (tartib)

---

## 3 choses qui ANNULENT le Tayammum:
1. **Tout ce qui annule le Wudhu**
   - Selles, urine, gaz

2. **Tu trouves de l'eau**
   - L'eau apparaît = tayammum invalide

3. **Tu n'es plus malade/blessé**
   - La condition disparaît = tayammum annulé`
                        }
                    ]
                },
                {
                    id: "tahara-ghusl",
                    name: "Al-Ghusl - Grandes ablutions",
                    description: "Les ablutions majeures et leurs conditions",
                    notes: [
                        {
                            id: "note-10",
                            title: "Ghusl: 5 nécessités, 7 conditions, 1 obligation",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["ghusl", "janaba", "ablutions", "majeures"],
                            content: `# Al-Ghusl (الغسل) - Les grandes ablutions

## 5 CHOSES NÉCESSITANT le Ghusl (Wujûb):

1. **La sortie du sperme**
   - Éjaculation = Ghusl obligatoire

2. **Le rapport conjugal**
   - Pénétration = Ghusl obligatoire
   - ⚠️ MÊME SANS ÉJACULATION ⚠️

3. **La sortie des menstrues**
   - Fin de période menstruelle = Ghusl

4. **La sortie des lochies**
   - Après l'accouchement = Ghusl

5. **En entrant dans l'Islam**
   - Conversion = Ghusl obligatoire

---

## 7 CONDITIONS (Shart) pour faire Ghusl:

1. Se débarrasser de ce qui nécessite le ghusl
2. Mettre l'intention
3. Être musulman
4. Avoir toutes ses facultés mentales
5. Être conscient
6. Utiliser eau Tahur (pure & purifiante)
7. Retirer tout ce qui empêche l'eau d'atteindre la peau

---

## 1 SEULE OBLIGATION (Fard):
### Mouiller **TOUT** le corps
- Pas un cheveu qui reste sec
- Chaque millimètre du corps

---

## 7 SUNNAHS (Recommandé):
1. Laver d'abord la partie souillée
2. Faire les ablutions complètes pendant le ghusl
3. Mouiller 3 fois chaque membre
4. Commencer par la droite, finir par la gauche
5. Ne pas faire de pauses
6. Frotter tous les membres
7. Laver les pieds dans un autre endroit

---

## NOTE IMPORTANTE:
**On peut prier après le Ghusl SANS refaire le Wudhu**
- Le ghusl inclut les ablutions
- Pas besoin de wudhu supplémentaire`
                        }
                    ]
                },
                {
                    id: "tahara-najasa",
                    name: "L'élimination des impuretés",
                    description: "Comment nettoyer ce qui est souillé",
                    notes: [
                        {
                            id: "note-11",
                            title: "Élimination des impuretés (Najasa)",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["najasa", "impureté", "nettoyage", "eau"],
                            content: `# L'élimination des impuretés (إزالة النجاسات)

## POINT IMPORTANT (en rouge):
**L'impureté doit être VISIBLE ET/OU ODORANTE**

---

## RÈGLES DE NETTOYAGE:

### 1. Moyens de nettoyage:
- L'eau (principal moyen)
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
                    id: "tahara-hayd",
                    name: "Al-Hayd - Les menstrues",
                    description: "Règles de vie pendant les menstrues et lochies",
                    notes: [
                        {
                            id: "note-12",
                            title: "Al-Hayd: Types, interdits et permissions",
                            date: "2026-03-01",
                            author: "Sacha",
                            tags: ["hayd", "menstrues", "femme", "haram"],
                            content: `# Al-Hayd (الحيض) - Les menstrues

## 3 TYPES DE SAIGNEMENT:

### 1. Les menstrues (Al-Hayd):
- Durée maximale: **15 jours**
- Saignement normal de la femme

### 2. Les lochies (Al-Nifas):
- Après l'accouchement
- Durée max: **40 jours** (ou 60 selon autres avis)

### 3. Le sang anormal (Istihadah):
- À partir du **16ème jour**
- Saignement continu ou irrégulier

---

## 7 INTERDITS pendant menstrues/lochies (HARAM):

1. ❌ Avoir des rapports conjugaux
2. ❌ Se faire répudier
3. ❌ Faire la prière
4. ❌ Jeûner
5. ❌ Faire Tawaf (autour de la Kaaba)
6. ❌ Rester dans la mosquée
7. ❌ **Toucher le Coran** ⚠️

---

## 3 PERMISSIONS après fin saignement, avant purification majeure:

1. ✅ Jeûner
2. ✅ Rester dans la mosquée
   - ⚠️ MAIS avec Wudhu obligatoire ⚠️
3. ✅ Lire le Coran (sans le toucher)

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
