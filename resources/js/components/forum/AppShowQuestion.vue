<template>
  <v-card>
      <v-card-title>
          <div>
              <div class="headline">{{data.title}}</div>
            <span class="grey--text">{{data.user}}</span>
            <span class="grey--text">{{data.created_at}}</span>
          </div>
      </v-card-title>
      <v-card-text v-html="body">
      </v-card-text>
      <v-card-actions v-if="own">
          <v-btn text color="primary" @click="edit">
              <v-icon>E</v-icon>
          </v-btn>

          <v-btn text icon color="primary" @click="destroy">
              <v-icon>D</v-icon>
          </v-btn>

      </v-card-actions>
  </v-card>
</template>

<script>
import md from 'marked'
export default {
    props:['data'],
    data(){
        return{
            own : User.own(this.data.user_id)
        }
    },
    computed:{
        body(){
            return md.parse(this.data.body)
        }

    },
    methods:{
        destroy(){
            axios.delete('/api'+this.data.path)
            .then(res => {
                this.$router.push({name:'forum'})
            })
            .catch(error => console.log(error.response.data))
        },
        edit(){
            EventBus.$emit('startEditing')
        },
    }
}
</script>

<style>

</style>
