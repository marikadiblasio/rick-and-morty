<template>
    <div>
        <div class="container d-flex justify-content-center p-4">
<!-- Alla submit devo avvisare app del cambiamento con emit è sufficiente perché tutti i dati necessari stanno nello store-->
            <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="$emit('searchChange')">
              <div class="col-12">
                <label class="visually-hidden" for="charactername">Search name</label>
                <input type="text" class="form-control" id="charactername" placeholder="Search name"
                  v-model.trim="store.search.name">
              </div>
              <div class="col-12">
                <label class="visually-hidden" for="searchStatus">Search status</label>
                <select class="form-select" id="searchStatus" v-model="store.search.status">
                  <option selected value="">Choose...</option>
                  <option :value="status" v-for="(status, index) in statusOptions" :key="index">{{ status }}</option>
                </select>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Search</button>
              </div>
              <div class="col-12">
                <button @click="resetSearch()" type="reset" class="btn btn-primary">Reset</button>
              </div>
            </form>
        </div>
    </div>
</template>

<script>
import {store} from '../data/store';
    export default {
        name: 'SeachBar',
        data(){
            return{
                store,
                statusOptions: [
                  'alive',
                  'dead',
                  'unknown'
                ]
            }
        },
        methods: {

          resetSearch(){
            store.search.status = '';
            store.search.name = '';
            store.error.show = false;
            this.$emit('searchChange')
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>