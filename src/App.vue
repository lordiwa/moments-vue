<script setup>

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
  <div class="grid">
    <div class="col-12" style="max-height: 50px">
      <div id="nav" style="max-height: 50px">
        <router-link to="/intro">Intro</router-link> |
        <router-link to="/mainMenu">Main Menu</router-link> |
        <router-link to="/moment">Moment</router-link>
      </div>
    </div>
    <div class="col-12">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>
