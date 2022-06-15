<template>
  <div class="flex justify-between items-center py-3 px-8 bg-white">
      
      <!-- left -->
      <div class="relative" @blur="clear">
        <form class="flex items-center border focus-within:border-slate-600 rounded-full">
            <div class="flex px-5 py-1 pr-0 rounded-full rounded-r-none items-center text-slate-400">
                <icon :size="16" name="search" class="mr-2" />
                <input type="search" v-model="searchText" class="py-1 px-2 focus:outline-none" placeholder="Search..." @keyup="search" @focus="searchResultShow = true">
            </div>
            <div class="rounded-full rounded-l-none px-5 py-2 border-l">
                <select name="type" class="focus:outline-none text-slate-500">
                    <option value="filter">Filter</option>
                    <option value="serach">search</option>
                </select>
            </div>
        </form>
        <div v-show="searchResultShow" class="bg-white mx-5 absolute left-0 right-0 bg-opacity-90 shadow-md">
            <div class="text-blue-500 px-3 py-1 hover:bg-blue-200 cursor-pointer" v-for="(result, index) in searchResults" :key="index" @click.="select(result)">
                <span >{{ result }}</span>
            </div>
        </div>
      </div>

      <!-- right -->
      <div class="flex gap-x-3 items-center">
            <button class="text-[#93B0C8] bg-blue-50 hover:bg-blue-100  border-white hover:text-blue-600 w-8 h-8 rounded-full flex items-center justify-center">
                <icon :size="20" name="bell" />
            </button>
            <button class="flex items-center py-2 px-4 bg-blue-50 hover:bg-blue-100 gap-x-2 rounded-xl">
                <img class="w-10 h-10 rounded-full" :src="user.avatar" alt="">
                <div class="flex flex-col items-start">
                    <strong class="capitalize">{{ user.name }}</strong>
                    <small class="capitalize text-gray-400">{{ user.type }}</small>
                </div>
            </button>
      </div>
  </div>
</template>

<script>
import { SearchAPI } from '../../api'
import _ from 'lodash';
export default {
    data() {
        return {
            user: {
                id: 1,
                name: 'Asaduzzaman Shishir',
                avatar: 'https://www.w3schools.com/w3images/avatar2.png',
                type: ['admin', 'manager'].join(' ')
            },
            searchResults: [],
            searchText: '',
            searchResultShow: false
        }
    },
    methods: {
        search: _.debounce(function () {
            this.clear();
            let q = {
                q : this.searchText
            }
            SearchAPI(q).then(res => {
                this.searchResults = res.results;
            })
        }, 500),
        clear(){
            this.searchResults = [];
        },
        select(result){
            this.searchText = result;
            this.searchResultShow = false;
            this.clear();
        }
    }
}
</script>

<style scoped>
.search:focus-within .list{
    display: block;
}

</style>