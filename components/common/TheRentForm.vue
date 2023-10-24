<script setup lang="ts">
import {IVehicle} from "~/types/vehicle";


defineProps<{
  price: IVehicle["rent"]
}>()

</script>

<template>
  <div class="rent__container-blur"></div>
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
    margin-top: 40px;

    @include md {
      padding: 0 16px;
    }

    @include sm {
      height: 68px;
      z-index: 2;
      position: fixed;
      bottom: 32px;
      left: 16px;
      right: 16px;
      width: calc(100% - 32px);
      box-shadow: 0 50px var(--base_0), 0 -10px 15px var(--base_0);
    }
  }



  &__text {
    font-size: var(--font_size_medium_increase);
    font-weight: var(--font_weight_bold);
    color: var(--base_500);
    margin: 0;

    @include sm {
     font-size: var(--font_size_default);
    }
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

  @include sm {
    font-size: var(--font_size_tiny);
    width: 110px;
    height: 44px;
  }

}


</style>