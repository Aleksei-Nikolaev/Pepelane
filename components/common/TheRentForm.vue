<script setup lang="ts">
import {IVehicle} from "~/types/vehicle";


defineProps<{
  price: IVehicle["rent"]
}>()

</script>

<template>
  <div class="rent__container">
    <h2 class="rent__text">Rent for <span class="rent__price">{{ price }}$</span></h2>
    <a-button
        type="primary"
        size="large"
        class="rent__button"
    >Rent now
    </a-button>

  </div>
</template>

<style scoped lang="scss">

.rent {
  &__container {
    border-radius: var(--border_radius_tiny);
    background: var(--base_50);
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 32px;
  }

  &__text {
    font-size: var(--font_size_medium_increase);
    font-weight: var(--font_weight_bold);
    color: var(--base_500);
    margin: 0;
  }

  &__price {
    color: var(--secondary_400);
  }
}

:deep(.rent__button) {
  margin-left: auto;
  font-size: var(--font_size_default);
  font-weight: var(--font_weight_bold);
  border-radius: var(--border_radius_mini);
  width: 136px;
  height: 48px;
}


</style>