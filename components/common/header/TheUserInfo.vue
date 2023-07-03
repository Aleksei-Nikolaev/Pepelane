<script setup lang="ts">
    import TheImage from "~/components/common/TheImage.vue";
    const image = "/assets/images/face.jpg"

</script>

<template>
  <client-only>
    <div class="user-info__container">
      <span class="user-info__name">Alexey Nikolaev</span>
      <TheImage class="user-info__image" :url="image" />
    </div>
  </client-only>
</template>

<style scoped lang="scss">

    .user-info {
      &__container {
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: 60px;
      }

      &__image {
        max-width: 56px;
        width: 100vh;
        height: 100%;
        border-radius: 50%;
        margin-left: 16px;
      }
    }



</style>