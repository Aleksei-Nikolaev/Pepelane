<script setup lang="ts">
import { $api } from '~/plugins/api'
import TheImage from '~/components/common/reusable/TheImage.vue'
import { useVehicleDetailedPageRoutes } from '~/useCases/pages/useVehicleDetailedPage/useCases/useVehicleDetailedPageRoutes.'
import TheRentPlate from '~/components/common/pages/vehicleDetailedPage/components/TheRentPlate.vue'

const route = useRoute()

const { id } = route.params

const { data: vehicleData } = useAsyncData(`vehicle-${id}`, async () => {
  const { data } = await $api.vehicleService.getVehicleById(id as string)
  return data
})

const { sections } = useVehicleDetailedPageRoutes()
</script>

<template>
  <div v-if="vehicleData" class="vehicle-page__container">
    <TheImage :url="vehicleData.image" class="vehicle-page__image" />
    <div class="vehicle-page__info">
      <h1 id="name" class="vehicle-page__info-name">
        {{ vehicleData.name }}
      </h1>
      <div class="vehicle-page__navigation">
        <NuxtLink
          v-for="section in sections"
          :key="section.value"
          :to="{ path: `/vehicles/${id}/${section.value}` }"
          :rel="section.value"
          active-class="router-link-active"
          class="vehicle-page__navigation-link"
        >
          {{ section.label }}
        </NuxtLink>
      </div>
      <Transition name="page__nested" mode="out-in">
        <div :key="route.fullPath" class="vehicle-page__info-box">
          <NuxtPage :vehicle-data="vehicleData" />
          <TheRentPlate :price="vehicleData.rent" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.vehicle-page {
  &__container {
    display: flex;
    width: 100%;

    @include sm {
      flex-direction: column;
      padding: 0 var(--padding-mobile-content);
    }
  }

  &__navigation {
    display: flex;
    flex-direction: row;

    &-link {
      font-weight: var(--font_weight_bold);
      font-size: var(--font_size_default);
      color: var(--base_300);
      margin-bottom: 32px;

      @include md {
        margin-bottom: 16px;
      }
    }

    &-link:not(:last-child) {
      margin-right: var(--margin_detailed_sections_vertical);
    }
  }

  &__image {
    width: 36vw;
    height: 36vw;
    border-radius: var(--border_radius_small);
    margin-right: 64px;

    @include md {
      width: 35vw;
      height: 35vw;
      margin-right: 40px;
    }

    @include sm {
      width: 100%;
      height: calc(100vw - 2 * var(--padding-mobile-content));
      margin-right: 0;
      margin-bottom: 22px;
    }
  }

  &__info {
    &-name {
      color: var(--base_500);
      font-size: var(--font_size_largest);
      font-weight: var(--font_weight_bold);
      margin-bottom: 32px;
      height: 48px;

      @include md {
        font-size: calc(var(--font_size_largest) * 0.8);
      }

      @include sm {
        font-size: var(--font_size_big);
        margin-bottom: 16px;
        height: 30px;
      }
    }
  }
}

.rent-form {
  margin-top: var(--margin_detailed_sections_vertical);
}

.router-link-active {
  color: var(--main_400);
}
</style>
