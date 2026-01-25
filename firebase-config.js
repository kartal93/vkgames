// ===== Firebase Configuration =====
// IMPORTANT: Remplace ces valeurs par celles de ton projet Firebase
// Va sur https://console.firebase.google.com pour créer un projet gratuit

const firebaseConfig = {
    apiKey: "AIzaSyA5UMIzHApGOqvtlQ1dtYYO1LP29uAkOaw",
    authDomain: "vkgames-253ef.firebaseapp.com",
    databaseURL: "https://vkgames-253ef-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vkgames-253ef",
    storageBucket: "vkgames-253ef.firebasestorage.app",
    messagingSenderId: "476860194525",
    appId: "1:476860194525:web:a178274f9b88de696bc534"
};

// Initialize Firebase
let firebaseApp = null;
let firebaseDB = null;
let firebaseAuth = null;

try {
    firebaseApp = firebase.initializeApp(firebaseConfig);
    firebaseDB = firebase.database();
    firebaseAuth = firebase.auth();

    // Set persistence to LOCAL (survives browser restart)
    firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    console.log('Firebase connecté !');
} catch (error) {
    console.warn('Firebase non configuré. Mode hors-ligne activé.');
}

// Export for use in app.js
window.firebaseDB = firebaseDB;
window.firebaseAuth = firebaseAuth;
