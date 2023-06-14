<script setup lang="ts">
import TheHeader from "~/components/common/TheHeader.vue";
import TheVehiclesList from "~/components/common/TheVehiclesList.vue";
</script>

<template>
  <NuxtLayout>
    <div class="content">
      <TheHeader />
      <NuxtPage />
    </div>
  </NuxtLayout>

</template>

<style scoped lang="scss">
  .content {
    width: 1312px;
    margin: 0 auto;
    padding: 48px 64px;
  }

</style>