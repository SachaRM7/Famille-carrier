// Firebase Configuration
// TODO: Replace with your Firebase credentials from Firebase Console
// https://console.firebase.google.com/

const firebaseConfig = {
    apiKey: "AIzaSyDemoKeyChangeMe123456789ABCDEF",
    authDomain: "famille-carrier.firebaseapp.com",
    projectId: "famille-carrier",
    storageBucket: "famille-carrier.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123def456ghi789"
};

// Initialize Firebase
let db = null;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Check if Firebase is loaded from CDN
    if (typeof firebase !== 'undefined') {
        try {
            firebase.initializeApp(firebaseConfig);
            db = firebase.firestore();
            console.log('✅ Firebase initialized');
        } catch (error) {
            console.warn('Firebase init error:', error);
            // Fallback to localStorage if Firebase fails
            useLocalStorage = true;
        }
    } else {
        console.warn('Firebase SDK not loaded - using localStorage fallback');
        useLocalStorage = true;
    }
});

// Fallback to localStorage
let useLocalStorage = false;

// Utils
async function saveToFirebase(collection, docId, data) {
    if (!db) return saveToLocalStorage(collection, docId, data);
    
    try {
        await db.collection(collection).doc(docId).set(data, { merge: true });
        console.log('✅ Saved:', collection, docId);
    } catch (error) {
        console.error('Firebase save error:', error);
        saveToLocalStorage(collection, docId, data);
    }
}

async function getFromFirebase(collection, docId) {
    if (!db) return getFromLocalStorage(collection, docId);
    
    try {
        const doc = await db.collection(collection).doc(docId).get();
        return doc.exists ? doc.data() : null;
    } catch (error) {
        console.error('Firebase get error:', error);
        return getFromLocalStorage(collection, docId);
    }
}

async function addToFirebase(collection, data) {
    if (!db) return addToLocalStorage(collection, data);
    
    try {
        const ref = await db.collection(collection).add({
            ...data,
            createdAt: new Date()
        });
        return ref.id;
    } catch (error) {
        console.error('Firebase add error:', error);
        return addToLocalStorage(collection, data);
    }
}

// localStorage Fallback
function saveToLocalStorage(collection, docId, data) {
    const key = `${collection}/${docId}`;
    localStorage.setItem(key, JSON.stringify(data));
    console.log('💾 Saved to localStorage:', key);
}

function getFromLocalStorage(collection, docId) {
    const key = `${collection}/${docId}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function addToLocalStorage(collection, data) {
    const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    saveToLocalStorage(collection, id, data);
    return id;
}
