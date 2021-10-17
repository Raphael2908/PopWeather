<template>  
    <div class="arrow flex flex-row justify-start w-36 fixed transform transition duration-300 opacity-30 ">
      <button v-if="!btnHidden" @click="toggleBar()"><fa class="fa-2x text-white" icon="chevron-left"/></button>
      <button v-if="btnHidden" @click="toggleBar()"><fa class="fa-2x text-white" icon="chevron-right"/></button>
    </div>
    
    <section class="sideBar absolute w-36 bg-white bg-opacity-20 inset-y-0 left-0 transform -translate-x-full transition duration-300 ease-in-out h-full">
    <div class="flex flex-col text-white text-lg mt-5">
      <router-link to="/">
        <button class="p-1 pl-5 w-full text-left rounded-xl hover:bg-gray-100 hover:bg-opacity-20 font-medium" >Home</button>
      </router-link>
      <router-link to="/reference">
        <button class="p-1 pl-5 w-full text-left rounded-xl hover:bg-gray-100 hover:bg-opacity-20 font-medium" >Reference</button>
      </router-link>
    </div>
  </section>
  <router-view></router-view>
</template>

<script>
export default {
  data(){
    return {
      btnHidden: true
    }
  },
  methods:{
    toggleBar(){
      const sideBar = document.querySelector('.sideBar')
      const btn = document.querySelector('.arrow')
      sideBar.classList.toggle('-translate-x-full')
      btn.classList.toggle('translate-x-full')
      this.btnHidden = !this.btnHidden
    }
  }
}
</script>