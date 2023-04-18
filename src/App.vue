<template>
  <div>
    <HeaderComponent title="Rick e Morty"/>
    <main>
      <SearchBar @searchChange="getCharacters"/>
      <CharactersList />
      <div class="alert alert-danger" v-if="store.error.show">{{ store.error.message }}</div>
    </main>
  </div>
</template>

<script>
import {store}  from './data/store';
import axios from 'axios'; //per chiamata API
import HeaderComponent from './components/HeaderComponent.vue';
import SearchBar from './components/SearchBar.vue';
import CharactersList from './components/CharactersList.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      SearchBar,
      CharactersList
    },
    data(){
      return{
        store,      
      }
    },
    methods: {
          getCharacters() {
              store.loading=true;
              store.error.show = false;
              store.error.message = '';
              const url = store.baseUrl + store.endpoint;
              let options = {}
              let params = {}
              for (let key in store.search) {
                if (store.search[key]) {
                  params[key] = store.search[key]
                }
              }
              console.log(params);
              if (Object.keys(params).length > 0) {
                options.params = params;
              }
              console.log(options);
              axios.get(url, options).then((res) => {
                store.CharacterList = res.data.results;
                //setTimeout(() => {
                  //store.loading=false;
                //}, 3000)
              }).catch((error) => {
                //store.loading=false;
                store.CharacterList.length = 0; //modo + efficiente di svuotare array
                store.error.show = true;
                store.error.message = error.request.responseText;
              }).finally(()=> {
              store.loading=false;
            });
            }
},
    mounted(){
      this.getCharacters();
    }
  }
</script>
<style lang="scss" scoped>
</style>