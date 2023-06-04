<script setup>
import QuestionsComponent from './components/QuestionsComponent.vue'
const questions = [
  {
    'id': 1,
    'question':'¿Cómo te sientes?'
  },
  {
    'id': 2,
    'question':'¿Cuéntame más sobre este momento? (Preguntas sobre el momento)'
  },
  {
    'id': 3,
    'question':'¿Cuándo fue la última vez que esto no fue un problema?'
  },
  {
    'id': 4,
    'question':'Aquí se deben identificar los momentos importantes'
  },
  {
    'id': 5,
    'question':'¿Cómo te sientes ahora?'
  },
  {
    'id': 6,
    'question':'Aqui se entregan herramientas'
  }
]

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMjWGS-VyT-GBsu32--v2hzzEpElB95i0",
  authDomain: "moments-vue.firebaseapp.com",
  projectId: "moments-vue",
  storageBucket: "moments-vue.appspot.com",
  messagingSenderId: "945176305364",
  appId: "1:945176305364:web:30fb6ccc9782f127ee2541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


</script>

<template>
  <QuestionsComponent :jsonData="questions" />
</template>

<style scoped>

</style>
