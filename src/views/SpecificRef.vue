<template>
    <section class="h-full w-full bg-blue-800">
        hello {{ $route.params.name }}
    </section>
</template>

<script>
export default {
    computed:{
        ReferenceName(){
        return this.$route.param.name
        }
    }
}
</script>