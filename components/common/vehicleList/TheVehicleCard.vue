<script setup lang="ts">
import type {IVehicle} from "~/types/vehicle";
import TheImage from "~/components/common/TheImage.vue";


defineProps<{
  vehicle: IVehicle;
}>()


</script>

<template>
  <div class="card-container">
    <TheImage :url="vehicle.preview" class="card-container__image"/>
    <div class="card-container__info">
      <p class="card-container__info__name">{{ vehicle.name }}</p>
      <p class="card-container__info__description">{{ capitalizeFirstLetter(vehicle.description) }}</p>
      <p class="card-container__info__rent">{{ vehicle.rent + " $/h" }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

.card-container {
  width: calc((100% - 2*var(--margin_card_horizontal)) / 3);
  height: 164px;
  background: var(--base_0);
  border-radius: var(--border_radius_medium);
  margin-bottom: var(--margin_card_vertical);
  display: flex;
  padding: 24px 32px;
  box-sizing: border-box;


  &:not(:last-child) {
    margin-right: var(--margin_card_horizontal);
  }

  &__image {
    width: 88px;
    height: 88px;
    border-radius: var(--border_radius_small);
  }

  &__info {
    margin-left: 24px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 16px;


    &__name {
      color: var(--base_500);
      font-size: var(--font_size_default);
      font-weight: var(--font_weight_bold);
      margin-bottom: 12px;
    }

    &__description {
      color: var(--base_300);
      font-size: var(--font_size_smallest);
      font-weight: var(--font_weight_medium);
      height:2.4em;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    &__rent {
      color: var(--secondary_400);
      font-size: var(--font_size_tiny);
      font-weight: var(--font_weight_bold);
      margin-top: auto;
    }
  }
}

</style>