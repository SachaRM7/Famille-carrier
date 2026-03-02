// MyFiqh - Data Loader
// Combine tous les kitabs en une seule base de données

const fiqhDatabase = {
    kitabs: []
};

// Charger tous les kitabs
function loadKitabs() {
    // Pour l'instant, ajouter At-Tahara
    if (typeof KITAB_TAHARA !== 'undefined') {
        fiqhDatabase.kitabs.push(KITAB_TAHARA);
    }
    
    // Futurs kitabs à ajouter:
    // if (typeof KITAB_SALAT !== 'undefined') { fiqhDatabase.kitabs.push(KITAB_SALAT); }
    // if (typeof KITAB_ZAKAT !== 'undefined') { fiqhDatabase.kitabs.push(KITAB_ZAKAT); }
    // if (typeof KITAB_SIHAM !== 'undefined') { fiqhDatabase.kitabs.push(KITAB_SIHAM); }
    // etc...
    
    console.log('✅ Kitabs chargés:', fiqhDatabase.kitabs.map(k => k.name).join(', '));
}

// ===== Helpers =====
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
        try {
            const imported = JSON.parse(saved);
            fiqhDatabase.kitabs = imported.kitabs;
            return true;
        } catch (e) {
            console.warn('LocalStorage load error:', e);
            return false;
        }
    }
    return false;
}

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', () => {
    loadKitabs();
    loadFromLocalStorage();
});
