<template>
  <v-form @submit.prevent="login">
      <v-text-field
          name="email"
          label="email"
          id="email"
          type="email"
          v-model="form.email"
          required
      ></v-text-field>
      <v-text-field
          name="password"
          label="password"
          id="password"
          type="password"
          v-model="form.password"
          required
      ></v-text-field>
      <v-btn color="success" type="submit">Login</v-btn>
      <router-link to="/signup">
            <v-btn color="success">Signup</v-btn>
      </router-link>
  </v-form>
</template>

<script>
    export default{
        data(){
            return{
                form:{
                    email:null,
                    password:null
                }
            }
        },
        created(){
            if(User.loggedIn()){
                this.$router.push({name:'forum'})
            }
        },
        methods : {
            login(){
                console.log('Form data : '+this.form.email);
                User.login(this.form);
            }
        }

    }

</script>

<style>

</style>
