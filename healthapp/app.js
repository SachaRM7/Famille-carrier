// HealthApp - Gestion de données
class HealthApp {
    constructor() {
        this.water = 0;
        this.steps = 0;
        this.weights = [];
        this.loadData();
        this.updateUI();
    }

    // ===== Eau =====
    addWater() {
        if (this.water < 10) {
            this.water++;
            this.saveData();
            this.updateUI();
            this.celebrate('water');
        }
    }

    removeWater() {
        if (this.water > 0) {
            this.water--;
            this.saveData();
            this.updateUI();
        }
    }

    resetWater() {
        if (confirm('Réinitialiser l\'eau ?')) {
            this.water = 0;
            this.saveData();
            this.updateUI();
        }
    }

    // ===== Poids =====
    addPoids() {
        const input = document.getElementById('poidsInput');
        const value = parseFloat(input.value);

        if (isNaN(value) || value <= 0) {
            alert('Veuillez entrer un poids valide');
            return;
        }

        const now = new Date();
        this.weights.unshift({
            value: value,
            date: now.toLocaleString('fr-FR', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        });

        // Garder les 30 derniers enregistrements
        if (this.weights.length > 30) {
            this.weights = this.weights.slice(0, 30);
        }

        input.value = '';
        this.saveData();
        this.updateUI();
        this.celebrate('poids');
    }

    // ===== Pas =====
    addSteps(amount) {
        this.steps += amount;
        if (this.steps > 100000) this.steps = 100000; // Limite raisonnable
        this.saveData();
        this.updateUI();
        this.celebrate('steps');
    }

    removeSteps() {
        if (this.steps >= 100) {
            this.steps -= 100;
            this.saveData();
            this.updateUI();
        }
    }

    resetSteps() {
        if (confirm('Réinitialiser les pas ?')) {
            this.steps = 0;
            this.saveData();
            this.updateUI();
        }
    }

    // ===== UI Update =====
    updateUI() {
        // Water
        document.getElementById('waterCount').textContent = this.water;
        const waterPercent = Math.min((this.water / 8) * 100, 100);
        const waterBar = document.getElementById('waterProgress');
        waterBar.style.width = waterPercent + '%';
        waterBar.setAttribute('data-percent', Math.round(waterPercent) + '%');

        // Steps
        document.getElementById('stepsCount').textContent = this.steps.toLocaleString('fr-FR');
        const stepsPercent = Math.min((this.steps / 10000) * 100, 100);
        const stepsBar = document.getElementById('stepsProgress');
        stepsBar.style.width = stepsPercent + '%';
        stepsBar.setAttribute('data-percent', Math.round(stepsPercent) + '%');

        // Poids List
        this.updatePoidsList();

        // Resume
        document.getElementById('resumeWater').textContent = this.water + '/8';
        document.getElementById('resumeSteps').textContent = this.steps.toLocaleString('fr-FR') + '/10000';
        
        if (this.weights.length > 0) {
            document.getElementById('resumePoids').textContent = this.weights[0].value + ' kg';
        } else {
            document.getElementById('resumePoids').textContent = '--';
        }
    }

    updatePoidsList() {
        const list = document.getElementById('poidsList');
        
        if (this.weights.length === 0) {
            list.innerHTML = '<p class="empty">Aucun enregistrement</p>';
            return;
        }

        list.innerHTML = this.weights
            .slice(0, 10) // Afficher les 10 derniers
            .map((w, i) => `
                <div class="history-item">
                    <div>
                        <span class="history-value">${w.value} kg</span>
                        <div class="history-date">${w.date}</div>
                    </div>
                    <button class="btn btn-reset btn-sm" onclick="app.removePoids(${i})" style="flex: 0 0 auto; width: auto; padding: 4px 8px; font-size: 0.75rem;">✕</button>
                </div>
            `)
            .join('');
    }

    removePoids(index) {
        this.weights.splice(index, 1);
        this.saveData();
        this.updateUI();
    }

    // ===== Data Persistence =====
    saveData() {
        const data = {
            water: this.water,
            steps: this.steps,
            weights: this.weights,
            lastUpdate: new Date().toISOString()
        };
        localStorage.setItem('healthapp_data', JSON.stringify(data));
    }

    loadData() {
        const today = new Date().toDateString();
        const stored = localStorage.getItem('healthapp_data');
        const lastUpdate = localStorage.getItem('healthapp_lastDate');

        // Reset quotidien (eau et pas)
        if (lastUpdate !== today) {
            localStorage.setItem('healthapp_lastDate', today);
            this.water = 0;
            this.steps = 0;
            this.weights = [];
            return;
        }

        if (stored) {
            const data = JSON.parse(stored);
            this.water = data.water || 0;
            this.steps = data.steps || 0;
            this.weights = data.weights || [];
        }
    }

    // ===== Utils =====
    celebrate(type) {
        // Animation simple
        const element = type === 'water' 
            ? document.getElementById('waterCount')
            : type === 'poids'
            ? document.getElementById('resumePoids')
            : document.getElementById('stepsCount');

        if (element) {
            element.style.transform = 'scale(1.2)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
    }

    exportData() {
        const data = {
            date: new Date().toLocaleString('fr-FR'),
            eau: this.water + '/8 verres',
            pas: this.steps + '/10000',
            poids: this.weights.map(w => `${w.value} kg (${w.date})`).join('\n')
        };

        const text = `EXPORT HEALTHAPP
================
Date: ${data.date}

💧 EAU: ${data.eau}
👟 PAS: ${data.pas}
⚖️ POIDS:
${data.poids || 'Aucun enregistrement'}

Généré par HealthApp`;

        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `healthapp-${new Date().toISOString().split('T')[0]}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    }

    clearAllData() {
        if (confirm('⚠️ Ceci va supprimer TOUTES les données. Êtes-vous sûr ?')) {
            localStorage.removeItem('healthapp_data');
            localStorage.removeItem('healthapp_lastDate');
            this.water = 0;
            this.steps = 0;
            this.weights = [];
            this.updateUI();
            alert('✅ Toutes les données ont été supprimées');
        }
    }
}

// Init
const app = new HealthApp();

// Event listeners (pour Enter dans input)
document.getElementById('poidsInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        app.addPoids();
    }
});

// Export functions globales pour onclick
function addWater() { app.addWater(); }
function removeWater() { app.removeWater(); }
function resetWater() { app.resetWater(); }
function addPoids() { app.addPoids(); }
function addSteps(amount) { app.addSteps(amount); }
function removeSteps() { app.removeSteps(); }
function resetSteps() { app.resetSteps(); }
function exportData() { app.exportData(); }
function clearAllData() { app.clearAllData(); }
