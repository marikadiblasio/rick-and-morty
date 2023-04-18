<template>
  <div>
    <HeaderComponent title="Rick e Morty"/>
    <main>
      <SearchBar @searchChange="getCharacters"/>
      <CharactersList />
      <div v-if="store.error.show">{{ store.error.message }}</div>
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
      // getCharacters(){
      //   store.error.show= false;
      //   store.error.meggage='';
      //   store.CharacterList = [];
      //   let url = store.baseUrl + store.endpoint;
        // if(this.characterStatus) {
          // const params = `?status=${this.characterStatus}`;
          // url += params;
          // const options = {
          //   params: {
          //     status: this.characterStatus
           // }
          // }
          getCharacters() {
              store.loading=true;
              store.error.show = false;
              store.error.message = '';
              // store.characterList = [];
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
                store.error.message = error;
              }).finally(()=> {
              store.loading=false;
            });
            }
},
        // axios.get(url).then((res)=> {
        //   console.log(res.data.results);
        //   store.CharacterList = res.data.results;
        // })
      //   axios.get(url, option).then((res)=> {
      //     console.log(res.data.results);
      //     store.CharacterList = res.data.results;
      //   }).catch((error) =>{
      //   console.log(error) //axios ritorna oggetto inconsole.
      //   store.error.show = true;
      //   store.error.message = error.response.store //---> da reinizializzare a inizio chiamata
      // }) 
    mounted(){
      //se ho endpoint = ''; in mounted
      //store.endpoint = 'character';
      this.getCharacters();
    }
  }
</script>

<style lang="scss" scoped>

</style>