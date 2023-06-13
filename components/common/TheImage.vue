<script setup lang="ts">
import { Skeletor } from 'vue-skeletor';
import 'vue-skeletor/dist/vue-skeletor.css';

const isImageLoaded = ref(false)
const onImageLoad = () => {
  setTimeout(() => {
    isImageLoaded.value = true
  }, 5000)

  // console.log("check")

}

</script>

<template>
  <div class="image__container">
    <img class="image__container__image" src="~/assets/images/face.jpg" @load="onImageLoad" />
    <Skeletor v-show="!isImageLoaded" class="image__container__skeleton" />
  </div>
</template>

<style scoped lang="scss">
  .image__container {
    position: relative;

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      border-radius: inherit;

    }
    &__skeleton {
      width: 100%;
      height: 100%;
    }
  }

</style>