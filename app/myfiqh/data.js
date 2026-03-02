// MyFiqh - Base de données des Kitabs et Portes

const fiqhDatabase = {
    kitabs: [
        {
            id: "tahara",
            name: "Al-Tahara",
            description: "La Pureté - Ablution, ghusl et comportements",
            icon: "💧",
            portes: [
                {
                    id: "tahara-eau",
                    name: "L'eau et ses types",
                    description: "Les différentes catégories d'eau",
                    notes: [
                        {
                            id: "tahara-eau-1",
                            title: "Types d'eau purifiant",
                            date: "2026-02-28",
                            author: "Sacha",
                            tags: ["eau", "pureté", "ablution"],
                            content: `# Types d'eau purifiant

## L'eau pure (Al-Ma'u at-Tahour)
L'eau qui n'a pas changé en couleur, goût ou odeur à cause de quelque chose d'impur.

## Catégories principales
- **Eau de pluie** - pure et purifiante
- **Eau de mer** - pure mais diffère sur le ghusl complet  
- **Eau de source** - généralement pure
- **Eau de robinet** - traitement moderne, généralement pure

## Références
- Coran 25:48 - "Et c'est Lui qui envoie les vents..."
- Sahih Al-Bukhari 345`
                        }
                    ]
                },
                {
                    id: "tahara-ablution",
                    name: "L'ablution (Wudu)",
                    description: "Les étapes et conditions du wudu",
                    notes: []
                }
            ]
        },
        {
            id: "salat",
            name: "As-Salat",
            description: "La Prière - Conditions, piliers et obligations",
            icon: "🕌",
            portes: [
                {
                    id: "salat-times",
                    name: "Les temps de prière",
                    description: "Horaires et conditions",
                    notes: []
                },
                {
                    id: "salat-pillars",
                    name: "Les piliers de la Salat",
                    description: "Les éléments obligatoires",
                    notes: []
                }
            ]
        },
        {
            id: "zakat",
            name: "Az-Zakat",
            description: "L'aumône obligatoire",
            icon: "🤲",
            portes: [
                {
                    id: "zakat-conditions",
                    name: "Conditions et catégories",
                    description: "Qui verse la zakat et comment",
                    notes: []
                }
            ]
        }
    ]
};

// Helper pour accéder aux données
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

// Recherche par mots-clés
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

    // Trier par pertinence
    return results.sort((a, b) => b.relevance - a.relevance);
}

// Filtrer par Kitab
function filterByKitab(kitabId) {
    if (!kitabId) return fiqhDatabase.kitabs;
    return [getKitab(kitabId)].filter(Boolean);
}

// Ajouter une nouvelle note
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

// Mettre à jour une note
function updateNote(kitabId, porteId, noteId, noteData) {
    const note = getNote(kitabId, porteId, noteId);
    if (!note) return false;

    Object.assign(note, noteData);
    return note;
}

// Supprimer une note
function deleteNote(kitabId, porteId, noteId) {
    const porte = getPorte(kitabId, porteId);
    if (!porte) return false;

    const index = porte.notes.findIndex(n => n.id === noteId);
    if (index === -1) return false;

    porte.notes.splice(index, 1);
    return true;
}

// Ajouter une nouvelle porte
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

// Ajouter un nouveau kitab
function addKitab(kitabData) {
    const newKitab = {
        id: kitabData.id || `kitab-${Date.now()}`,
        portes: [],
        ...kitabData
    };

    fiqhDatabase.kitabs.push(newKitab);
    return newKitab;
}

// Exporter les données (pour sauvegarde)
function exportDatabase() {
    return JSON.stringify(fiqhDatabase, null, 2);
}

// Importer les données
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

// Sauvegarder en localStorage (optionnel)
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
