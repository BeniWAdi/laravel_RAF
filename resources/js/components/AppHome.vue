<template>
    <div>
        <app-toolbar></app-toolbar>
        <v-container>
            <router-view></router-view>
        </v-container>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppToolbar from './layouts/AppToolbar'
import AppFooter from './layouts/AppFooter'
import AppLogin from './login/AppLogin'
import AppCreateQuestion from './forum/AppCreateQuestion'

export default {
    components:{
        AppToolbar,
        AppFooter,
        AppLogin,
        AppCreateQuestion
    }

}
</script>

<style>

</style>
