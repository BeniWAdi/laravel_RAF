<template>
  <div>
  <v-form @submit.prevent="store">
      <v-text-field
          name="title"
          label="Title"
          id="title"
          v-model="form.title"
      ></v-text-field>
      <v-select
          :items="categories"
          item-text="name"
          item-value="id"
          v-model="form.category_id"
          label="Category"
          autocomplete
      ></v-select>
      <vue-simplemde
      label="Body"
      v-model="form.body"
      ref="markdownEditor" />
      <v-btn color="success" type="submit">Submit</v-btn>
  </v-form>
  </div>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
export default {
    components:{
        VueSimplemde
    },
    data(){
        return{
            form:{
                title:null,
                category_id:null,
                body:null
            },
            categories:[]
        }
    },
    created(){
        this.setCategories()
    },
    methods:{
        store(){
            axios.post('/api/question', this.form)
            .then(res=> {
                this.$router.push(res.data.path)
            })
            .catch(error => console.log(error.response.data))
        },
        setCategories(){
            axios.get('/api/category')
            .then(res => this.categories = res.data.data)
            .catch(error => console.log(error.response.data))
        }
    }
}
</script>

<style>

</style>
