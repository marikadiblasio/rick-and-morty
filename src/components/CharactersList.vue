<template>
    <section class="container">
        <div class="row">
            <CardComponent v-for="(character, index) in store.CharacterList" :key="character.id" :character="character" />
        </div>
        <!-- <button @click="changeName">Cambia nomr</button> -->
    </section>
</template>

<script>
    import {store} from '../data/store';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'CharactersList',
        components: {
            CardComponent
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