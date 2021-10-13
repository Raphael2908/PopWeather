<template>
  <div class="p-8">
  <div class="rounded-full">
    <input class=" bg-white bg-opacity-10 rounded-full w-full py-4 px-6 text-gray-400 leading-tight focus:outline-none
    hover:bg-opacity-20 transition duration-100" 
    type="text" 
    placeholder="Search a location"
    @input="(event)=> {this.$emit('search', event.target.value)}"/>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["search"]
}
</script>

<style >
</style>