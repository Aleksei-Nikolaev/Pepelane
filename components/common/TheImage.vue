<script setup lang="ts">
// import Skeletor from 'vue-skeletor';
// import 'vue-skeletor/dist/vue-skeletor.css';
//
// const isImageLoaded = ref(false)
// const onImageLoad = () => {
//   isImageLoaded.value = true
// }

</script>

<template>
  <div>
    <nuxt-img v-if="isImageLoaded" src="face.jpg" height="200" @load="onImageLoad" />
<!--    <Skeletor v-else height="200" width="400" />-->
  </div>
</template>

<style scoped lang="scss">

</style>