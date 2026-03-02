// FamilyHealth App
let currentProfile = 'sacha';
let appState = {
    sacha: { water: 0, poids: null, steps: 0, repas: [], seances: [], seanceActive: null },
    femme: { water: 0, poids: null, steps: 0, repas: [] },
    bebe: { sommeil: [], biberon: [], activites: [], repas: [] }
};

let seanceTimers = {};

// ===== Init =====
document.addEventListener('DOMContentLoaded', async () => {
    updateDate();
    setInterval(updateDate, 60000);
    
    // Load data
    await loadAllData();
    updateUI();
    
    // Register service worker (PWA)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(err => console.log('SW error:', err));
    }
});

async function loadAllData() {
    for (let profile of ['sacha', 'femme', 'bebe']) {
        const today = new Date().toISOString().split('T')[0];
        const data = await getFromFirebase(`logs/${today}`, profile);
        if (data) {
            appState[profile] = { ...appState[profile], ...data };
        }
    }
}

// ===== Profile Switching =====
function switchProfile(profile) {
    currentProfile = profile;
    
    // Update UI
    document.querySelectorAll('.profile-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-profile="${profile}"]`).classList.add('active');
    
    document.querySelectorAll('.profile-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${profile}-content`).classList.add('active');
    
    // Update header
    const titles = {
        sacha: "Aujourd'hui - Sacha 💪",
        femme: "Aujourd'hui - Femme 👩",
        bebe: "Aujourd'hui - Bébé 👶"
    };
    document.getElementById('profileTitle').textContent = titles[profile];
    
    updateUI();
}

function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const dateStr = now.toLocaleDateString('fr-FR', options);
    document.getElementById('profileDate').textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
}

// ===== SACHA ACTIONS =====

// Eau
function addWater(profile) {
    if (appState[profile].water < 10) {
        appState[profile].water++;
        updateUI();
        saveData();
    }
}

function undo(profile, action) {
    if (action === 'water' && appState[profile].water > 0) {
        appState[profile].water--;
        updateUI();
        saveData();
    }
}

// Poids
function logPoids(profile) {
    const input = document.getElementById(`${profile}-poids-input`);
    const value = parseFloat(input.value);
    
    if (isNaN(value) || value <= 0) {
        alert('Veuillez entrer un poids valide');
        return;
    }
    
    appState[profile].poids = {
        value: value,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    };
    
    input.value = '';
    updateUI();
    saveData();
}

// Repas
function logRepas(profile) {
    const input = document.getElementById(`${profile}-repas`);
    if (!input.value.trim()) return;
    
    appState[profile].repas.push({
        name: input.value,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    });
    
    input.value = '';
    updateUI();
    saveData();
}

// Séances Sport
function startSeance(profile) {
    const input = document.getElementById(`${profile}-seance-name`);
    if (!input.value.trim()) {
        alert('Entrez un nom de séance');
        return;
    }
    
    const seanceId = `seance-${Date.now()}`;
    const seance = {
        id: seanceId,
        name: input.value,
        startTime: new Date(),
        duration: 0
    };
    
    appState[profile].seanceActive = seance;
    appState[profile].seances.push(seance);
    
    // Timer
    let seconds = 0;
    seanceTimers[seanceId] = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        document.getElementById(`${profile}-seance-timer`).textContent = 
            `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }, 1000);
    
    input.value = '';
    updateUI();
}

function stopSeance(profile) {
    if (!appState[profile].seanceActive) return;
    
    const seance = appState[profile].seanceActive;
    const duration = Math.floor((new Date() - seance.startTime) / 1000 / 60); // minutes
    seance.duration = duration;
    
    clearInterval(seanceTimers[seance.id]);
    delete seanceTimers[seance.id];
    
    appState[profile].seanceActive = null;
    updateUI();
    saveData();
}

// ===== BÉBÉ ACTIONS =====

// Sommeil
function logSommeil(profile) {
    const input = document.getElementById(`${profile}-sommeil-minutes`);
    const minutes = parseInt(input.value);
    
    if (isNaN(minutes) || minutes <= 0) {
        alert('Veuillez entrer une durée valide');
        return;
    }
    
    appState[profile].sommeil.push({
        minutes: minutes,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    });
    
    input.value = '';
    updateUI();
    saveData();
}

// Biberon
function logBiberon(profile) {
    const input = document.getElementById(`${profile}-biberon-ml`);
    const ml = parseInt(input.value);
    
    if (isNaN(ml) || ml <= 0) {
        alert('Veuillez entrer un volume valide');
        return;
    }
    
    appState[profile].biberon.push({
        ml: ml,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    });
    
    input.value = '';
    updateUI();
    saveData();
}

// Activités
function logActivite(profile) {
    const input = document.getElementById(`${profile}-activite`);
    if (!input.value.trim()) return;
    
    appState[profile].activites.push({
        name: input.value,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    });
    
    input.value = '';
    updateUI();
    saveData();
}

// DME / Repas bébé
function logBebeRepas(profile) {
    const input = document.getElementById(`${profile}-repas`);
    if (!input.value.trim()) return;
    
    appState[profile].repas.push({
        name: input.value,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    });
    
    input.value = '';
    updateUI();
    saveData();
}

// ===== UI Update =====
function updateUI() {
    const profile = currentProfile;
    const state = appState[profile];
    
    if (profile === 'sacha') {
        updateUIField('sacha', 'water', state.water);
        updateProgressBar('sacha', 'water', state.water, 8);
        updateUIField('sacha', 'poids', state.poids ? `${state.poids.value} kg` : '--');
        updateUIField('sacha', 'steps', state.steps);
        updateProgressBar('sacha', 'steps', state.steps, 10000);
        updateRepasLog('sacha', state.repas);
        updateSeanceLog('sacha', state.seances);
        
        // Seance active UI
        const seanceActive = document.getElementById('sacha-seance-active');
        if (state.seanceActive) {
            seanceActive.classList.remove('hidden');
        } else {
            seanceActive.classList.add('hidden');
        }
    } else if (profile === 'femme') {
        updateUIField('femme', 'water', state.water);
        updateProgressBar('femme', 'water', state.water, 8);
        updateUIField('femme', 'poids', state.poids ? `${state.poids.value} kg` : '--');
        updateUIField('femme', 'steps', state.steps);
        updateProgressBar('femme', 'steps', state.steps, 10000);
        updateRepasLog('femme', state.repas);
    } else if (profile === 'bebe') {
        updateSommeilLog('bebe', state.sommeil);
        updateBiberonLog('bebe', state.biberon);
        updateActiviteLog('bebe', state.activites);
        updateRepasLog('bebe', state.repas);
    }
}

function updateUIField(profile, field, value) {
    const element = document.getElementById(`${profile}-${field}`);
    if (element) {
        element.textContent = value;
    }
}

function updateProgressBar(profile, type, current, max) {
    const percent = Math.min((current / max) * 100, 100);
    document.getElementById(`${profile}-${type}-bar`).style.width = percent + '%';
}

function updateRepasLog(profile, repas) {
    const container = document.getElementById(`${profile}-repas-log`);
    if (!container) return;
    
    if (repas.length === 0) {
        container.innerHTML = '<p class="empty">Aucun repas enregistré</p>';
        return;
    }
    
    container.innerHTML = repas.map((r, i) => `
        <div class="log-item">
            <div>
                <span class="log-value">${r.name}</span>
                <span class="log-time"> · ${r.time}</span>
            </div>
            <button class="btn-quick" onclick="removeRepas('${profile}', ${i})">✕</button>
        </div>
    `).join('');
}

function updateSeanceLog(profile, seances) {
    const container = document.getElementById(`${profile}-seance-log`);
    if (!container) return;
    
    if (seances.length === 0) {
        container.innerHTML = '<p class="empty">Aucune séance enregistrée</p>';
        return;
    }
    
    container.innerHTML = seances.map((s, i) => `
        <div class="log-item">
            <div>
                <span class="log-value">${s.name}</span>
                <span class="log-time"> · ${s.duration} min</span>
            </div>
            <button class="btn-quick" onclick="removeSeance('${profile}', ${i})">✕</button>
        </div>
    `).join('');
}

function updateSommeilLog(profile, sommeil) {
    const container = document.getElementById(`${profile}-sommeil-log`);
    if (!container) return;
    
    if (sommeil.length === 0) {
        container.innerHTML = '<p class="empty">Aucun sommeil enregistré</p>';
        return;
    }
    
    container.innerHTML = sommeil.map((s, i) => `
        <div class="log-item">
            <div>
                <span class="log-value">${s.minutes} min</span>
                <span class="log-time"> · ${s.time}</span>
            </div>
            <button class="btn-quick" onclick="removeSommeil('${profile}', ${i})">✕</button>
        </div>
    `).join('');
}

function updateBiberonLog(profile, biberon) {
    const container = document.getElementById(`${profile}-biberon-log`);
    if (!container) return;
    
    if (biberon.length === 0) {
        container.innerHTML = '<p class="empty">Aucun biberon enregistré</p>';
        return;
    }
    
    container.innerHTML = biberon.map((b, i) => `
        <div class="log-item">
            <div>
                <span class="log-value">${b.ml} ml</span>
                <span class="log-time"> · ${b.time}</span>
            </div>
            <button class="btn-quick" onclick="removeBiberon('${profile}', ${i})">✕</button>
        </div>
    `).join('');
}

function updateActiviteLog(profile, activites) {
    const container = document.getElementById(`${profile}-activite-log`);
    if (!container) return;
    
    if (activites.length === 0) {
        container.innerHTML = '<p class="empty">Aucune activité enregistrée</p>';
        return;
    }
    
    container.innerHTML = activites.map((a, i) => `
        <div class="log-item">
            <div>
                <span class="log-value">${a.name}</span>
                <span class="log-time"> · ${a.time}</span>
            </div>
            <button class="btn-quick" onclick="removeActivite('${profile}', ${i})">✕</button>
        </div>
    `).join('');
}

// ===== Delete Actions =====
function removeRepas(profile, index) {
    appState[profile].repas.splice(index, 1);
    updateUI();
    saveData();
}

function removeSeance(profile, index) {
    appState[profile].seances.splice(index, 1);
    updateUI();
    saveData();
}

function removeSommeil(profile, index) {
    appState[profile].sommeil.splice(index, 1);
    updateUI();
    saveData();
}

function removeBiberon(profile, index) {
    appState[profile].biberon.splice(index, 1);
    updateUI();
    saveData();
}

function removeActivite(profile, index) {
    appState[profile].activites.splice(index, 1);
    updateUI();
    saveData();
}

// ===== Save Data =====
async function saveData() {
    const today = new Date().toISOString().split('T')[0];
    
    for (let profile of ['sacha', 'femme', 'bebe']) {
        const data = {
            ...appState[profile],
            lastUpdated: new Date()
        };
        await saveToFirebase(`logs/${today}`, profile, data);
    }
}
