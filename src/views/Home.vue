<template>
<main class="h-full w-full bg-no-repeat bg-cover " :style="{ backgroundImage: 'url(' + img + ')' }">
   
  <section class="flex flex-row justify-center">
    <div class="flex flex-col">
      <search @search="doSearch"></search>
      <Card> 
        <div class="flex flex-row justify-around"> 
          <h1 class="font-extrabold text-9xl font-mono ">{{ actualWeather.temp_c }}°C </h1>
          <div class="pl-5 flex flex-col justify-center">
            <h3 class=""> {{ place.name }} </h3>
            <h3> {{ place.season }} </h3>
            <h3>{{ Searchedlocation }}</h3>
          </div>
        </div>
      </Card>
    </div>
  </section>
</main>
</template>

<script>
import Card from "../components/Card.vue"
import Search from "../components/Search.vue"

import { Database }  from "../database/Database"
import { getResponse } from "../Weather"

export default {
  components: {
    Card,
    Search
  },
  data(){
    return{
      Searchedlocation: "Singapore",
      places: Database,
      img: "",
      place: Object,
      actualLocation: Object,
      actualWeather: Object
    }
  },
  mounted(){
    this.CurrentPlace();
  },
  methods: {
    CurrentPlace(){
      getResponse(this.Searchedlocation).then(data => {
        // Variables
        console.log("Data Loaded" + data)
        let weatherData = data;
        let temp = weatherData.current.temp_c;
        let dbTemps = []
        let closestTemp = 0
        let popLocation = ""
        
        // Get all the temperature from database
        for (const item in this.places) {
          dbTemps.push(this.places[item].temperature)
        }

        dbTemps.reduce((a,b)=>{
          return closestTemp = Math.abs(b - temp) < Math.abs(a - temp)? b : a 
        })

        for (const item in this.places) {
          if(this.places[item].temperature == closestTemp){
            popLocation = this.places[item]
            // Return Importan Variables
            this.place = popLocation
            this.img = popLocation.img
            this.actualLocation = weatherData.location
            this.actualWeather = weatherData.current
            return
          }
          else {
            continue
          }
        }

      });
    }, 
    doSearch(event){
      this.Searchedlocation = event
      this.CurrentPlace()
    }
  },
}
</script>

