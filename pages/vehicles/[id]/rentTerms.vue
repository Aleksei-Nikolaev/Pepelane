<script setup lang="ts">
import { IVehicle } from '~/types/vehicle'
import TheCollapsedText from '~/components/common/TheCollapsedText.vue'
import { textPlaceHolders } from '~/constants/textPlaceHolders'

defineProps<{
  vehicleData: IVehicle;
}>()
</script>

<template>
  <TheCollapsedText :detailed-text="vehicleData.term_text" />
  <h2 class="section__text-bold heading">
    {{ $t("detailedPage.subHeadings.conditions") }}:
  </h2>
  <li
    v-for="text in textPlaceHolders"
    :key="text"
    class="section__text list_item"
  >
    {{ text }}
  </li>
</template>

<style scoped lang="scss">
@import "assets/styles/pages/sections.scss";

.heading {
  margin-top: 24px;
}

.list_item::marker {
  color: var(--secondary_400);
}
</style>
