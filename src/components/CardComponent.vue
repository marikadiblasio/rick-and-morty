<template>
    <div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3" >
            <img :src="character.image" :alt="character.name">
            <h4>{{ character.name }}</h4>
            <div>{{ character.status }}</div>
            <div>{{ character.species }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: ['character']
    }
</script>

<style lang="scss" scoped>

</style>