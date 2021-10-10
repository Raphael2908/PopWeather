<template>
  <div class="p-8">
  <div class="bg-white rounded-full shadow-xl">
    <input class="rounded-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
    type="text" 
    placeholder="Search"
    :value="modelvalue"  
    @input="(event) => $emit('update:modelValue', event.target.value)"/>
    </div>
    <div><h3>dwanmdkam ois {{ modelValue }}</h3></div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String
  }
}
</script>