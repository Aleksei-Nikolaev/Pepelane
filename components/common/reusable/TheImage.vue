<script setup lang="ts">
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'

type TheImageProps = {
  url: string;
  alt: string;
};

defineProps<TheImageProps>()

const img = ref<HTMLImageElement | null>(null)

const isImageLoaded = ref(false)

onMounted(() => {
  const { complete } = img.value as HTMLImageElement
  if (complete) { isImageLoaded.value = true }
})

const imageLoaded = () => {
  isImageLoaded.value = true
}
</script>

<template>
  <div class="image__container">
    <img
      v-show="isImageLoaded"
      ref="img"
      :src="url"
      :alt="alt"
      class="image__container__image"
      @load="imageLoaded"
    >
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
