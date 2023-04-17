<template>
  <div>
    <HeaderComponent title="Rick e Morty"/>
    <main>
      <CharactersList />
      <!-- {{ store.CharacterList[0].name }} -->
    </main>
  </div>
</template>

<script>
// import {characters} from './data/store'; ma non è reattivo -non è un proxy non lo posso usare
                                            // perché i cambiamenti non si ripercuotono sul template vue
import {store}  from './data/store';
import axios from 'axios'; //per chiamata API
import HeaderComponent from './components/HeaderComponent.vue';
import CharactersList from './components/CharactersList.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      CharactersList
    },
    data(){
      return{
        store
       // characterList: characters // ma con l'import è un oggetto proxato, mentre quello che importo non lo è
      }
    },
    methods: {
      getCharacters(){
        const url = store.baseUrl + store.endpoint;
        axios.get(url).then((res)=> {
          console.log(res.data.results);
          store.CharacterList = res.data.results;
        })
      }
    },
    mounted(){
      //se ho endpoint = ''; in mounted
      //store.endpoint = 'character';
      this.getCharacters();
    }
  }
</script>

<style lang="scss" scoped>

</style>