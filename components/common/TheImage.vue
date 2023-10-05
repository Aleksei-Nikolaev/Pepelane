<script setup lang="ts">
import { Skeletor } from "vue-skeletor";
import "vue-skeletor/dist/vue-skeletor.css";
type TheImageProps = {
  url: string;
}

const props = defineProps<TheImageProps>()

const img = ref<HTMLImageElement | null>(null);

const isImageLoaded = ref(false);

onMounted(() => {
  isImageLoaded.value = false
  const element = img.value as HTMLImageElement
  if (element.complete) isImageLoaded.value = true
})

onUnmounted(() => {
  isImageLoaded.value = false
})
const imageLoaded = () => {
  isImageLoaded.value = true
}

</script>

<template>
  <div class="image__container">
    <img
        ref="img"
        :src="url"
        @load="imageLoaded"
        class="image__container__image"
        v-show="isImageLoaded"
    />

      <Skeletor v-show="!isImageLoaded" class="image__container__skeleton"/>
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
