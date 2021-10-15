<template>
  <section class="w-full h-screen flex flex-row justify-center">
    <div class="text-white text-3xl font-bold">
      <h1 class="text-center">References</h1>
      <section class="grid md:grid-cols-3 sm:grid-cols-1 gap-7 mt-10 grid-rows-2 ">
        <article
        class="bg-opacity-10 bg-white h-64 rounded-xl" 
        v-for="Data in Visible" :key="Data.name">
          <img class="w-full h-1/2 rounded-t-xl"  :src="Data.img" alt="">
          <div class="flex flex-col pl-2">
            <h3 class="text-base font-light"> {{ Data.name }}</h3>
          </div>
        </article>
      </section>
      
      <div class="flex justify-around">
        <button @click="Next()">Next</button>
        <button>Previous</button>
      </div>
    </div>
  </section>
</template>

<script>
import { Database }  from "../database/Database"

export default {
  data(){
    return{
      Database: Database,
      Visible: [],
      currentPageId: Number
    }
  },
  mounted(){
    for (let index = 0; index < 3; index++) {
      const element = Object.values(Database)[index];
      this.Visible.push(element)
      console.log(this.Visible.length)
    }
  },
  method: {
    Next(){

    }
  }
}
</script>