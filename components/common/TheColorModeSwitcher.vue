<script setup lang="ts">
const colorMode = useColorMode()
// let colorModeLabel = "Night mode"
const switchColor = () => {
  console.log(colorMode.preference)
  colorMode.preference === "dark" ? colorMode.preference = "light" : colorMode.preference = "dark";

}

</script>

<template>
  <div class="color-mode__container" @click="switchColor()">
    <h1 class="color-mode__container__status">{{ colorMode.value }}</h1>
  </div>

</template>

<style scoped lang="scss">

    .color-mode__container {
      display: flex;

      &__status {
        color: var(--base_300);
        font-size: var(--font_size_default);
        font-weight: var(--font_weight_medium);
      }
    }


</style>