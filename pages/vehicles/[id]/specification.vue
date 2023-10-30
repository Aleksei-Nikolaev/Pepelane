<script setup lang="ts">
import { IVehicle } from "~/types/vehicle";
import TheCollapsedText from "~/components/common/TheCollapsedText.vue";
import { textPlaceHolders } from "~/constants/textPlaceHolders";

defineProps<{
  vehicleData: IVehicle;
}>();
</script>

<template>
  <TheCollapsedText :detailed-text="vehicleData.specifications_text" />
  <h2 class="section__heading">
    {{ $t("detailedPage.subHeadings.features") }}:
  </h2>
  <div class="section__grid">
    <div class="section__box">
      <div class="section__element icon-container">
        <client-only>
          <nuxt-icon class="icon" name="goblet" filled />
        </client-only>
      </div>
      <div class="section__box-info">
        <h2 class="section__subHeading">
          {{ $t("detailedPage.specification.customerSlogan") }}
        </h2>
        <p class="section__text">{{ textPlaceHolders.medium }}</p>
      </div>
    </div>
    <div class="section__box">
      <div class="section__element icon-container">
        <client-only>
          <nuxt-icon class="icon" name="pilot" filled />
        </client-only>
      </div>
      <div class="section__box-info">
        <h2 class="section__subHeading">
          {{ $t("detailedPage.specification.pilotSlogan") }}
        </h2>
        <p class="section__text">{{ textPlaceHolders.medium }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/pages/sections.scss";
</style>
