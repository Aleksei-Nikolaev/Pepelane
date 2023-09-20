<script setup lang="ts">
import TheHeader from "~/components/common/TheHeader.vue";

</script>

<template>
  <NuxtLayout>
    <div class="content">
      <TheHeader/>
      <div class="page">
        <NuxtLayout>
          <NuxtPage
            :transition="{
              name: 'page',
              mode: 'out-in'
            }"
          />
        </NuxtLayout>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
.content {
  width: 1440px;
  margin: 0 auto;
  padding: 48px 64px;
}
.page {
  padding-top: 40px;
}
</style>
