import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Configuración del proyecto Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAGQfvsMtRPicefOB-ocH6Sjd-XMNGNFlE",
    authDomain: "cpu-finder-583be.firebaseapp.com",
    projectId: "cpu-finder-583be",
    storageBucket: "cpu-finder-583be.firebasestorage.app",
    messagingSenderId: "666155005263",
    appId: "1:666155005263:web:be7e67782b1cb377fb013a",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Auth para usar en Entrar.js y Registrar.js
export const auth = getAuth(app);
