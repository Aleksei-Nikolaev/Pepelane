<script setup lang="ts">

</script>

<template>
  <header class="header">
    <nuxt-icon name="Logo" filled />
    <h1>Pepelane</h1>
    <h2>{{ $t('header.slogan') }}</h2>
  </header>
</template>

<style scoped lang="scss">
  .header {
    display: flex;
  }
</style>