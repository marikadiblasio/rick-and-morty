<template>
    <h1 class="text-center">
        {{title}}
    </h1>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        props: {
            title: String
        }
    }
</script>

<style lang="scss" scoped>

</style>