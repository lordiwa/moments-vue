<template>
  <IntroButtonsComponent @push-item="manageRoute" />
</template>

<script>
import IntroButtonsComponent from "../components/IntroButtonsComponent.vue";

export default {
  name: "Intro",
  components: {IntroButtonsComponent},
  data() {
    return{
    }
  },
  methods: {
    manageRoute(route){
      this.$router.push('/'+route)
    }
  }
}
</script>

<style scoped>

</style>