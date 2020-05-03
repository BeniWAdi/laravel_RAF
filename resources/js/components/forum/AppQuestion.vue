<template>
<v-card>
    <v-card-title primary-title>
        <div>
            <router-link :to="data.path">
            <h3>{{data.title}}</h3>
            </router-link>
            <span class="grey--text">{{data.user}}</span>
            <span class="grey--text">{{data.created_at}}</span>
        </div>
    </v-card-title>
    <v-card-text>
        {{data.body}}
    </v-card-text>

</v-card>
</template>

<script>
export default {
    props:['data']
}
</script>

<style>

</style>
