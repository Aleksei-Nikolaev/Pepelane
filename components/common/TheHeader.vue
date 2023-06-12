<script setup lang="ts">
import TheColorModeSwitcher from "~/components/common/TheColorModeSwitcher.vue";

</script>

<template>
  <header class="header">
    <nuxt-icon name="Logo" filled />
    <h1>Pepelane</h1>
    <h2>{{ $t('header.slogan') }}</h2>
    <TheColorModeSwitcher />
    <nuxt-icon name="Chat" filled />
    <nuxt-icon name="Bell" filled />


  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
}
</style>