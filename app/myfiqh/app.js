// MyFiqh - Application principale

let currentState = {
    view: 'kitabs',
    selectedKitab: null,
    selectedPorte: null,
    selectedNote: null,
    searchQuery: ''
};

// ===== Initialisation =====
document.addEventListener('DOMContentLoaded', () => {
    // Charger les données depuis localStorage si disponibles
    loadFromLocalStorage();

    // Initialiser
    initializeUI();
    renderKitabsList();
    
    // Event listeners
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    document.getElementById('kitabFilter').addEventListener('change', handleFilterChange);
});

// ===== Initialisation UI =====
function initializeUI() {
    const kitabFilter = document.getElementById('kitabFilter');
    
    fiqhDatabase.kitabs.forEach(kitab => {
        const option = document.createElement('option');
        option.value = kitab.id;
        option.textContent = kitab.name;
        kitabFilter.appendChild(option);
    });
}

// ===== Navigation =====
function showView(viewName) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(viewName).classList.add('active');
    currentState.view = viewName;
}

function backToKitabs() {
    currentState.selectedKitab = null;
    currentState.selectedPorte = null;
    currentState.selectedNote = null;
    showView('kitabsListView');
    renderKitabsList();
}

function backToPortes() {
    currentState.selectedPorte = null;
    currentState.selectedNote = null;
    showView('portesView');
    renderPortes();
}

function backToNotes() {
    currentState.selectedNote = null;
    showView('notesView');
    renderNotes();
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    currentState.searchQuery = '';
    backToKitabs();
}

// ===== Recherche =====
function handleSearch(event) {
    const query = event.target.value.trim();
    currentState.searchQuery = query;

    if (!query) {
        showView('kitabsListView');
        renderKitabsList();
        return;
    }

    showView('searchResultsView');
    renderSearchResults(query);
}

function handleFilterChange(event) {
    const kitabId = event.target.value;
    
    if (!kitabId) {
        document.getElementById('searchInput').value = '';
        currentState.searchQuery = '';
        showView('kitabsListView');
        renderKitabsList();
    } else {
        showView('portesView');
        currentState.selectedKitab = kitabId;
        renderPortes();
    }
}

// ===== Render Functions =====

// Afficher la liste des Kitabs
function renderKitabsList() {
    const container = document.getElementById('kitabsList');
    container.innerHTML = '';

    const kitabsToShow = currentState.searchQuery 
        ? fiqhDatabase.kitabs.filter(k => searchNotes(currentState.searchQuery).some(r => r.kitab.id === k.id))
        : fiqhDatabase.kitabs;

    if (kitabsToShow.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <div class="empty-state-icon">📖</div>
                <p>Aucun kitab disponible</p>
            </div>
        `;
        return;
    }

    kitabsToShow.forEach(kitab => {
        const totalNotes = kitab.portes.reduce((sum, p) => sum + p.notes.length, 0);
        
        const card = document.createElement('div');
        card.className = 'kitab-card';
        card.innerHTML = `
            <div class="kitab-icon">${kitab.icon}</div>
            <h3>${kitab.name}</h3>
            <p>${kitab.description}</p>
            <div class="kitab-count">
                🚪 ${kitab.portes.length} porte${kitab.portes.length > 1 ? 's' : ''} • 📝 ${totalNotes} note${totalNotes > 1 ? 's' : ''}
            </div>
        `;
        card.onclick = () => selectKitab(kitab.id);
        container.appendChild(card);
    });
}

// Sélectionner un Kitab
function selectKitab(kitabId) {
    currentState.selectedKitab = kitabId;
    showView('portesView');
    renderPortes();
}

// Afficher les Portes d'un Kitab
function renderPortes() {
    const kitab = getKitab(currentState.selectedKitab);
    if (!kitab) return;

    const container = document.getElementById('portesContent');
    container.innerHTML = `
        <div class="portes-header">
            <h2>${kitab.icon} ${kitab.name}</h2>
            <p style="color: var(--text-light);">${kitab.description}</p>
        </div>
        <div class="portes-list" id="portesList"></div>
    `;

    const portesList = document.getElementById('portesList');

    if (kitab.portes.length === 0) {
        portesList.innerHTML = `
            <div class="empty-state">
                <p>Aucune porte disponible</p>
            </div>
        `;
        return;
    }

    kitab.portes.forEach(porte => {
        const item = document.createElement('div');
        item.className = 'porte-item';
        item.innerHTML = `
            <h4>${porte.name}</h4>
            <p>${porte.description}</p>
            <div class="porte-count">📝 ${porte.notes.length} note${porte.notes.length > 1 ? 's' : ''}</div>
        `;
        item.onclick = () => selectPorte(porte.id);
        portesList.appendChild(item);
    });
}

// Sélectionner une Porte
function selectPorte(porteId) {
    currentState.selectedPorte = porteId;
    showView('notesView');
    renderNotes();
}

// Afficher les Notes d'une Porte
function renderNotes() {
    const kitab = getKitab(currentState.selectedKitab);
    const porte = getPorte(currentState.selectedKitab, currentState.selectedPorte);
    if (!kitab || !porte) return;

    const container = document.getElementById('notesContent');
    container.innerHTML = `
        <div class="notes-header">
            <h2>${porte.name}</h2>
            <p style="color: var(--text-light);">${kitab.name} → ${porte.name}</p>
        </div>
        <div class="notes-list" id="notesList"></div>
    `;

    const notesList = document.getElementById('notesList');

    if (porte.notes.length === 0) {
        notesList.innerHTML = `
            <div class="empty-state">
                <p>Aucune note dans cette porte</p>
            </div>
        `;
        return;
    }

    porte.notes.forEach(note => {
        const item = document.createElement('div');
        item.className = 'note-item';
        item.innerHTML = `
            <h4>${note.title}</h4>
            <p>${note.content.split('\n')[0].substring(0, 150)}...</p>
            <div class="note-meta">
                <span>📅 ${note.date}</span>
                <span>✍️ ${note.author}</span>
            </div>
            ${note.tags ? `<div class="note-tags">${note.tags.map(tag => `<span class="note-tag">${tag}</span>`).join('')}</div>` : ''}
        `;
        item.onclick = () => selectNote(note.id);
        notesList.appendChild(item);
    });
}

// Sélectionner une Note
function selectNote(noteId) {
    currentState.selectedNote = noteId;
    showView('noteDetailView');
    renderNoteDetail();
}

// Afficher le détail d'une Note
function renderNoteDetail() {
    const note = getNote(currentState.selectedKitab, currentState.selectedPorte, currentState.selectedNote);
    const kitab = getKitab(currentState.selectedKitab);
    const porte = getPorte(currentState.selectedKitab, currentState.selectedPorte);

    if (!note) return;

    const container = document.getElementById('noteDetailContent');
    container.innerHTML = `
        <div class="note-detail">
            <h2>${note.title}</h2>
            <div class="note-detail-meta">
                <div class="meta-item">📅 ${note.date}</div>
                <div class="meta-item">✍️ ${note.author}</div>
                <div class="meta-item">📂 ${kitab.name} / ${porte.name}</div>
            </div>
            ${note.tags ? `<div style="margin-bottom: 15px;">${note.tags.map(tag => `<span class="note-tag">${tag}</span>`).join('')}</div>` : ''}
            <div class="note-content" id="noteMarkdown"></div>
        </div>
    `;

    // Afficher le contenu (markdown basique)
    renderMarkdown(note.content, 'noteMarkdown');
}

// Rendu du contenu des résultats de recherche
function renderSearchResults(query) {
    const results = searchNotes(query);
    const container = document.getElementById('searchResults');

    if (results.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <p>Aucun résultat pour "${query}"</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `<p style="color: var(--text-light); margin-bottom: 15px;">${results.length} résultat${results.length > 1 ? 's' : ''}</p>`;

    results.forEach(result => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
            <div class="search-result-breadcrumb">${result.kitab.name} → ${result.porte.name}</div>
            <div class="search-result-title">${result.note.title}</div>
            <div class="search-result-excerpt">${result.note.content.split('\n')[0].substring(0, 200)}...</div>
            <div style="font-size: 0.85rem; color: var(--text-light);">📅 ${result.note.date}</div>
        `;
        item.onclick = () => {
            currentState.selectedKitab = result.kitab.id;
            currentState.selectedPorte = result.porte.id;
            currentState.selectedNote = result.note.id;
            showView('noteDetailView');
            renderNoteDetail();
        };
        container.appendChild(item);
    });
}

// ===== Markdown Rendering =====
function renderMarkdown(markdown, containerId) {
    let lines = markdown.split('\n');
    let html = '';
    let inList = false;
    let inOrderedList = false;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // H1 (titre principal)
        if (line.startsWith('# ')) {
            html += '<h2 style="color: var(--primary); margin-top: 20px; margin-bottom: 10px;">' + line.substring(2) + '</h2>';
        }
        // H2 (sous-titre)
        else if (line.startsWith('## ')) {
            html += '<h3 style="color: var(--primary); margin-top: 15px; margin-bottom: 8px;">' + line.substring(3) + '</h3>';
        }
        // H3 (sous-sous-titre)
        else if (line.startsWith('### ')) {
            html += '<h4 style="color: var(--text-light); margin-top: 12px; margin-bottom: 6px;">' + line.substring(4) + '</h4>';
        }
        // Bullet list
        else if (line.startsWith('- ')) {
            if (!inList) {
                html += '<ul style="margin-left: 20px; margin-bottom: 12px;">';
                inList = true;
            }
            html += '<li style="margin-bottom: 6px;">' + line.substring(2) + '</li>';
        }
        // Ordered list
        else if (line.match(/^\d+\. /)) {
            if (!inOrderedList) {
                html += '<ol style="margin-left: 20px; margin-bottom: 12px;">';
                inOrderedList = true;
            }
            html += '<li style="margin-bottom: 6px;">' + line.replace(/^\d+\.\s/, '') + '</li>';
        }
        // Bold + Italic + basic formatting
        else if (line.trim() !== '') {
            if (inList) {
                html += '</ul>';
                inList = false;
            }
            if (inOrderedList) {
                html += '</ol>';
                inOrderedList = false;
            }
            
            let text = line
                .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/____(.*?)____/g, '<u>$1</u>')
                .replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" style="color: var(--primary);">$1</a>')
                .replace(/`([^`]+)`/g, '<code style="background: var(--light); padding: 2px 6px; border-radius: 3px;">$1</code>');
            
            html += '<p style="margin-bottom: 12px; line-height: 1.8;">' + text + '</p>';
        }
        // Empty line
        else if (line.trim() === '') {
            // Skip empty lines (they're handled by markdown structure)
        }
    }

    if (inList) html += '</ul>';
    if (inOrderedList) html += '</ol>';

    document.getElementById(containerId).innerHTML = html;
}
