<template>
  <h1>{{ title }}</h1>
  <QuestionsComponent :jsonData="questions" @push-item="saveAndReroute" />
</template>

<script>
import QuestionsComponent from "../components/QuestionsComponent.vue";
export default {
  name: "Moment",
  components: {QuestionsComponent},
  data() {
    return{
      title:"Moment",
      questions : [
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
    }
  },
  methods: {
    saveAndReroute(data){
      console.log("THE RESULT TO BE SAVED SOMEWHERE SOON:", data)
      this.$router.push('/mainMenu')
    }
  }
}
</script>

<style scoped>

</style>