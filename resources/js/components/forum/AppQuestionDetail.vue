<template>
    <div>
        <app-edit-question v-if="editing" :data = question></app-edit-question>
        <app-show-question
        :data = question
        v-if="question && !editing"
        ></app-show-question>
    </div>
</template>

<script>
import AppShowQuestion from './AppShowQuestion'
import AppEditQuestion from './AppEditQuestion'
export default {
    components:{
        AppShowQuestion,
        AppEditQuestion
    },
    data(){
        return{
            question:null,
            editing:false
        }
    },
    created(){
        this.listen()
        this.setQuestion()

    },
    methods:{
        listen(){
            EventBus.$on('startEditing', () => {
                this.editing = true
            })
            EventBus.$on('cancelEdit', () =>{
                this.editing = false
            })
        },

        setQuestion(){
            const slug = this.$route.params.slug
            axios.get('/api/question/'+slug)
            .then(res => {
                this.question = res.data.data
                })
            .catch(error => console.log(error.response.data))
        }
    }
}
</script>

<style>

</style>
