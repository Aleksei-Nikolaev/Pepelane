<script setup lang="ts">
import { Skeletor } from "vue-skeletor";
import "vue-skeletor/dist/vue-skeletor.css";

defineProps<{
  url: string;
}>();

const isImageLoaded = ref(false);

const onImageLoad = () => {
  isImageLoaded.value = true;
};

</script>

<template>
  <div class="image__container">
    <img :src=url class="image__container__image"  @load="onImageLoad" />
    <Skeletor v-show="!isImageLoaded" class="image__container__skeleton" />
  </div>
</template>

<style scoped lang="scss">
.image__container {
  position: relative;
  flex-shrink: 0;

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
    border-radius: inherit;
  }
}
</style>
