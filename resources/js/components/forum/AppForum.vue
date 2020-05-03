<template>
  <v-layout row wrap>
      <v-flex xs8>
          <app-question v-for="question in questions"
          :key="question.path"
          :data=question
          ></app-question>
      </v-flex>
      <v-flex xs4>
          category
      </v-flex>
  </v-layout>
</template>

<script>
import AppQuestion from './AppQuestion'
export default {
    components:{
        AppQuestion
    },
    data(){
        return{
            questions:{}
        }
    },
    created(){
        axios.get('api/question')
        .then(res => this.questions = res.data.data)
        .catch(error => console.log(error.response.data))
    }
}
</script>

<style>

</style>
