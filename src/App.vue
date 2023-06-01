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

</script>

<template>
  <QuestionsComponent :jsonData="questions" />
</template>

<style scoped>

</style>
