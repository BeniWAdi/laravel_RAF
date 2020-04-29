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
        methods : {
            login(){
                axios.post('/api/auth/login', this.form)
                .then(res => console.log(res.data))
                .catch(error => console(error.response.data))
            }
        }

    }

</script>

<style>

</style>
