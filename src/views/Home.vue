<template>
<main class="h-full w-full bg-no-repeat bg-cover" :style="{ backgroundImage: 'url(' + img + ')' }">
  <section v-bind="place"
  class="flex flex-row justify-center pt-20">
    <Card> 
      <div class="flex flex-row justify-around"> 
        <h1 class="font-extrabold text-9xl font-mono ">{{ place.temperature }}</h1>
        <div class="pl-5 flex flex-col justify-center">
          <h3 class=""> {{ place.name }} </h3>
          <h3> {{ place.season }} </h3>
        </div>
      </div>
    </Card>
  </section>
</main>
</template>

<script>
import Database from "../database/Database.vue"
import Card from "../components/Card.vue"
import { response } from "../Weather"

export default {
  components: {
    Card
  },
  data(){
    return{
      places: Database.data(),
      img: this.CurrentImage(),
      place: this.CurrentPlace()
    }
  },
  methods: {
    CurrentImage(){
      return "https://wallpaperaccess.com/full/897502.png"
    },
    CurrentPlace(){
      // Checks weather with database and returns place
      console.log(response)
      return Database.data().ZetaHalo
    }
  }
}
</script>

