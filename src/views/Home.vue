<template>
<main class="h-screen bg-no-repeat bg-cover " :style="{ backgroundImage: 'url(' + img + ')' }">
  <section class="flex flex-row justify-center content-center">

    <div class="flex flex-col gap-10 p-10">
      <search
      class="shadow-2xl" 
      @search="doSearch"></search>
      <Card v-if="clock" @click="clock = !clock">
        <h1 class="font-extrabold text-8xl sm:text-9xl font-mono ">{{ locationTime }}</h1>
        <h3 class="pl-3">{{ locationDate }}</h3>
        </Card> 
      <Card v-if="!clock" @click="clock = !clock" > 
        <div class="flex flex-row justify-center flex-wrap"> 
            <h1 class="font-extrabold text-8xl sm:text-9xl font-mono ">{{ actualWeather.temp_c }}°C </h1>
          <div class="pl-5 flex flex-col justify-center text-left">
            <h3 class="font-semibold"> {{ Searchedlocation }} </h3>
            <p>feels like {{ place.name }},</p>
            <h3> {{ actualWeatherCon.text }}? </h3>
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
      clock: false,
      place: Object,
      actualWeather: Object,
      actualWeatherCon:Object,
      locationTime: String,
      locationDate: String
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
            this.actualWeather = weatherData.current
            this.actualWeatherCon = weatherData.current.condition
            this.locationTime = new Date(weatherData.location.localtime).toLocaleTimeString(
              'en-us',{ hour: '2-digit', minute: '2-digit' }
            )
            this.locationDate = new Date(weatherData.location.localtime).toLocaleDateString(
              'en-us',{ weekday: 'short', month: 'short', day:'numeric'}
            )
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

