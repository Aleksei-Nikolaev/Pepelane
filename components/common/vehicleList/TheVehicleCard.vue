<script setup lang="ts">
import type { IVehicle } from "~/types/vehicle";
import TheImage from "~/components/common/TheImage.vue";
import { useDetailedPageRoutes } from "~/composables/useDetailedPage/useCases/useDetailedPageRoutes.";

defineProps<{
  vehicle: IVehicle;
}>();

const { defaultRoute } = useDetailedPageRoutes();
</script>

<template>
  <NuxtLink
    :to="`vehicles/${vehicle.id}/${defaultRoute}`"
    :rel="vehicle.id"
    class="link-wrapper"
  >
    <div class="card-container">
      <TheImage :url="vehicle.preview" class="card-container__image" />
      <div class="card-container__info">
        <p class="card-container__info__name">{{ vehicle.name }}</p>
        <p class="card-container__info__description">
          {{ capitalizeFirstLetter(vehicle.description) }}
        </p>
        <p class="card-container__info__rent">{{ vehicle.rent + " $/h" }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.link-wrapper {
  width: calc((100% - 2 * var(--gap)) / 3);
  height: 164px;
  background: var(--base_0);
  border-radius: var(--border_radius_medium);

  @include lg {
    width: calc((100% - var(--gap)) / 2);
    border-radius: var(--border_radius_small);
  }

  @include sm {
    width: 100%;
    min-width: 200px;
  }
}

.card-container {
  width: 100%;
  height: 100%;
  padding: 24px 32px;
  display: flex;

  &__image {
    width: 88px;
    height: 88px;
    border-radius: var(--border_radius_small);
    overflow: hidden;
  }

  &__info {
    margin-left: 24px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    pointer-events: none;
    overflow: hidden;

    &__name {
      color: var(--base_500);
      font-size: var(--font_size_default);
      font-weight: var(--font_weight_bold);
      margin-bottom: 12px;
      overflow: hidden;
      display: -webkit-box;
      scroll: none;
    }

    &__description {
      color: var(--base_300);
      font-size: var(--font_size_smallest);
      font-weight: var(--font_weight_medium);
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
      margin-bottom: 0;
    }
  }
}
</style>
