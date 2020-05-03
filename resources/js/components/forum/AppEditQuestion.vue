<template>
  <div>
  <v-form @submit.prevent="update">
      <v-text-field
          name="title"
          label="Title"
          id="title"
          v-model="form.title"
      ></v-text-field>
      <vue-simplemde
      label="Body"
      v-model="form.body"
      ref="markdownEditor" />
      <v-btn color="success" type="submit">Submit</v-btn>
      <v-btn color="warning" @click="cancelEdit">Cancel</v-btn>
  </v-form>
  </div>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
export default {
    props:['data'],
    components:{
        VueSimplemde
    },
    data(){
        return{
            form:{
                id:null,
                body:null
            }
        }
    },
    created(){
        this.form = this.data
    },
    methods:{
        cancelEdit(){
            EventBus.$emit('cancelEdit')
        },
        update(){
            axios.put('/api'+this.data.path, this.form)
            .then(res => {
                EventBus.$emit('cancelEdit')
            })
            .catch(error => console.log(error.reponse.data))
        }
    }
}
</script>

<style>

</style>
