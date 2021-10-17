<template>
  <div class="h-96 w-64 bg-white overflow-ellipsis overflow-hidden bg-opacity-10 rounded-xl shadow-2xl text-white transform hover:scale-105 cursor-pointer duration-500 broder-white border-t border-l border-opacity-50">
  <img class="rounded-t-xl" :src="img" alt="">
  <div class="py-3 px-5">
    <slot></slot>
  </div>
  </div>
</template>

<script>
export default {
  props:{
    img: String
  }
}
</script>