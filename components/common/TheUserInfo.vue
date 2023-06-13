<script setup lang="ts">
    import TheImage from "~/components/common/TheImage.vue";
</script>

<template>
<div class="user__container">
  <span class="">User Name</span>
  <client-only>
    <TheImage />
  </client-only>
</div>
</template>

<style scoped lang="scss">

    .user__container {
      width: 200px;
      height: 100px;
    }
    .image__container {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
</style>