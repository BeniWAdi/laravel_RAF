<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
        <router-link v-for="item in items"
        :key="item.title"
        :to="item.to"
        :hidden ="!item.show">
        <v-btn text>{{item.title}}</v-btn>
        </router-link>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {title:'forum', to:'/forum', show:true},
                {title:'Ask question', to:'/ask', show:User.loggedIn()},
                {title:'Category', to:'/category', show:User.loggedIn()},
                {title:'Login', to:'/login', show:!User.loggedIn()},
                {title:'Logout', to:'/logout', show:User.loggedIn()}

            ]
        }
    },
    created(){
        EventBus.$on('logout', () => {
            User.logOut()
        })
    }
}
</script>

<style>

</style>
