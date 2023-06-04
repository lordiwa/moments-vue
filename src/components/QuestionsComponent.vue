<script setup>
import {reactive, ref} from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
const props = defineProps({
  jsonData: {
    type: Array,
    required: true
  }
})

const saveAnswers = ref((answer)=>{
  data.answers.push({'id':data.currentQuestionId, 'question':data.questions[data.currentQuestionId].question, 'answer':answer})
  data.questions.length > data.currentQuestionId + 1 ? data.currentQuestionId ++ : data.readyToSave = true
  data.currentAnswer = '';
  console.log(data.answers)
})

let data = reactive({
  questions: props.jsonData,
  currentQuestionId: 0,
  answers:[],
  currentAnswer:'',
  readyToSave: false
})

</script>

<template>
        <Card style="width: 25em">
          <template #header>
            {{ data.currentQuestionId }}
          </template>
          <template #title> {{ data.questions[data.currentQuestionId].question }} </template>
          <template #subtitle> Responde aquí: </template>
          <template #content>
            <p>
              <Textarea v-model="data.currentAnswer" rows="5" cols="30" />
            </p>
          </template>
          <template #footer>
            <Button v-if="!data.readyToSave" icon="pi pi-check" label="Siguiente" @click="saveAnswers(data.currentAnswer)" />
            <Button v-if="data.readyToSave" icon="pi pi-check" label="Guardar" @click="$emit('push-item', data.answers)" />
          </template>
        </Card>
</template>

