<script setup lang="ts">
import TheHeader from "~/components/common/TheHeader.vue";

</script>

<template>
  
  <NuxtLayout>
    <div class="content">
      <TheHeader/>
      <div class="page">
        <NuxtPage/>
      </div>

    </div>
  </NuxtLayout>

</template>

<style scoped lang="scss">


  .content {
    width: 1312px;
    margin: 0 auto;
    padding: 48px 64px;
  }
  .page {
    padding-top: 20px;
  }


</style>