<script setup lang="ts">
import {IVehicle} from "~/types/vehicle";
import TheCollapsedText from "~/components/common/TheCollapsedText.vue";

defineProps<{
  vehicleData: IVehicle
}>();

</script>

<template>
  <TheCollapsedText :detailed-text="vehicleData.specifications_text" />
  <h2 class="section-heading">
    {{ $t("detailedPage.subHeadings.features") }}:
  </h2>
  <div>
    <div class="section-element icon-container">
      <nuxt-icon class="icon" name="goblet" filled />
    </div>

  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/pages/sections.scss";

.icon {
  width: 32px;
  &-container {
    width: 64px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>