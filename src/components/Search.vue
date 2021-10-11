<template>
  <div class="p-8">
  <div class="bg-white rounded-full shadow-xl">
    <input class="rounded-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
    type="text" 
    placeholder="Search"
    @input="(event)=> {this.$emit('search', event.target.value)}"/>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["search"]
}
</script>