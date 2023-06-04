<template>
  <h2>{{ data.title }}</h2>
  <div class="col-6 button-menu">
    <Button @click="$emit('push-item', 'moment')" label="Nuevo Momento" severity="secondary" text raised />
  </div>
  <div class="col-6 button-menu">
    <Button @click="$emit('push-item', 'mainMenu')" label="Mis Momentos" text raised />
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import {reactive} from "vue";
let data = reactive({title:'Bienvenido, escoje una opción.'})
</script>

<style scoped>
.button-menu {
  padding-bottom: 8px;
}
</style>