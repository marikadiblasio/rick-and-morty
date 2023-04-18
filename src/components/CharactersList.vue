<template>
    <section class="container">
        <div class="row" v-if="!store.loading">
             <!-- //v-if= "!store.error.show">  -->
             <!--oppure //v-if="store.characterList.length >0"> -->
            <CardComponent v-for="(character, index) in store.CharacterList" :key="character.id" :character="character" />
        </div>
        <ApiLoader v-else />
        <!-- <div v-else> -- lo metto in un componente
            <i class="fa-solid fa-sync fa-spin"></i>
        </div> -->
        <!-- <div v-if="store.error.show">{{ store.error.message }}</div> -->

        <!-- <button @click="changeName">Cambia nomr</button> -->
    </section>
</template>

<script>
    import {store} from '../data/store';
    import CardComponent from './CardComponent.vue';
    import ApiLoader from './ApiLoader.vue';
    export default {
        name: 'CharactersList',
        components: {
            CardComponent,
            ApiLoader
        },
        data(){
            return{
                store
            }
        },
        methods: {
            // changeName(){
            //     store.CharacterList[0].name = 'pippo';
            // }
        }
    }
</script>

<style lang="scss" scoped>

</style>