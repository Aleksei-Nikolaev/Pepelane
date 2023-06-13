<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <h1 class="color__mode__active">{{ colorMode.value }}</h1>
  <select v-model="colorMode.preference">
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
</template>

<style scoped lang="scss">

    .color__mode__active {
      color: var(--base_300);
      font-size: var(--font_size_default);
      font-weight: var(--font_weight_medium);
    }
</style>