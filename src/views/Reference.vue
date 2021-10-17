<template>
  <section class="h-full w-full bg-gray-600 ">
    <h1 class="text-center mb-10 text-white text-lg">References</h1>
    <div class="flex justify-center">
    <div 
    class="grid md:grid-cols-3 col-span-1 gap-5 justify-items-center place-content-center">
      <DisplayCard v-for="data in Database" :key="data.name"
      :img="data.img">
        <h1 class="text-lg font-semibold"> {{ data.name }} </h1>
        <h3 class=""> {{ data.description }} </h3>
      </DisplayCard>
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