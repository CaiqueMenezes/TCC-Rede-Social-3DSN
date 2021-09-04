import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-database';

// Importando configurações do app firebase
import firebaseConfig from './firebaseConfig';

// Inicialização do FIrebase pegando as configurações do APP
const FirebaseApp = firebase.initializeApp(firebaseConfig);

export default {FirebaseApp}
