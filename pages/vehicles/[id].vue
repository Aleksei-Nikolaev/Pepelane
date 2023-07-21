<script setup lang="ts">
import {$api} from "~/plugins/api";
import TheImage from "~/components/common/TheImage.vue";
import TheDetailedSpec from "~/components/common/vehicleDetailedPage/TheDetailedSpec.vue";

const route = useRoute()

const { id } = route.params

const { data: vehicleData } = useAsyncData("vehicle",
    async () => {
      const {data} = await $api.vehicleService.getVehicleById(id as string)
      return data
    }
)


</script>

<template>
  <div class="vehicle-page__container">
    <TheImage :url="vehicleData.image" class="vehicle-page__image" />
    <div class="vehicle-page__info">
      <h1 class="vehicle-page__info-name">{{ vehicleData.name }}</h1>
      <TheDetailedSpec :vehicle-data="vehicleData" />

<!--      Dynamic component-->
    </div>
  </div>


</template>

<style scoped lang="scss">

.vehicle-page {
  &__container {
    display: flex;
    width: 100%;
  }

  &__image {
    width: 700px;
    height: 700px;
    border-radius: var(--border_radius_small);
    margin-right: 64px;
  }

  &__info {
    &-name {
      color: var(--base_500);
      font-size: var(--font_size_largest);
      font-weight: var(--font_weight_bold);
      margin-top: 56px;
    }
  }
}



</style>