<template>
  <v-form @submit.prevent="signup">
      <v-text-field
          name="name"
          label="name"
          id="name"
          v-model="form.name"
          required
      ></v-text-field>
      <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>
      <v-text-field
          name="email"
          label="email"
          id="email"
          v-model="form.email"
          type="email"
          required
      ></v-text-field>
      <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
      <v-text-field
          name="password"
          label="password"
          id="password"
          v-model="form.password"
          type="password"
          required
      ></v-text-field>
      <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>
      <v-text-field
          name="password_confirmation"
          label="Confirmation password"
          id="password_confirmation"
          type="password"
          v-model="form.password_confirmation"
          required
      ></v-text-field>
      <v-btn color="success" type="submit">Signup</v-btn>
      <router-link to="/login">
            <v-btn color="success">Login</v-btn>
      </router-link>
  </v-form>
</template>

<script>
export default {
    data(){
        return{
            form:{
                name:null,
                email:null,
                password:null,
                password_confirmation:null

            },
            errors:{}
        }
    },
    created(){
        if(User.loggedIn()){
            this.$router.push({name:'forum'})
        }
    },
    methods:{
        signup(){
            axios.post('/api/auth/signup', this.form)
            .then(res => {
                User.responseAffterLogin(res)
                this.$router.push({name:'forum'})
                })
            .catch(error => {
                console.log(error.response.data);
                return this.errors = error.response.data.errors;

                });
        }
    }
}
</script>

<style>

</style>
