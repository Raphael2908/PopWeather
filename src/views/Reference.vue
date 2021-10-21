<template>
  <section class="h-full w-full bg-gray-600">
    <h1 class="text-center mb-10 text-white text-lg">References</h1>
    <div class="flex justify-center">
    <div 
    class="grid md:grid-cols-3 col-span-1 gap-5 justify-items-center place-content-center mb-10">
      <!-- <router-link 
      v-for="data in Database" :key="data.name"
      :to="{name: 'specific', params:{ name: data.name, location: data} }"> -->
        <DisplayCard v-for="data in Database" :key="data.name" :img="data.img">
        <div class="flex flex-col gap-1">
          <h1 class="text-lg font-semibold"> {{ data.name }} </h1>
          <h1>Origin: {{ data.origin }} </h1>
          <h3 class="h-36 overflow-ellipsis overflow-hidden"> {{ data.description }} </h3>
        </div>
      </DisplayCard>
      <!-- </router-link> -->
    </div>
    </div>
  </section>
</template>

<script>
import { Database }  from "../database/Database"
import DisplayCard from "../components/DisplayCard.vue"


export default {
  components:{
    DisplayCard
  },
  data(){
    return{
      Database: Database,
      Visible: [],
      currentPageId: Number
    }
  },
  mounted(){
  },
  method: {
    Next(){
      
    }
  }
}
</script>