<script setup lang="ts">
import {$api} from "~/plugins/api";
import TheImage from "~/components/common/TheImage.vue";
import { useDetailedPageRoutes } from "~/composables/useDetailedPage/useCases/useDetailedPageRoutes.";
import TheRentForm from "~/components/common/TheRentForm.vue";

const route = useRoute()
const router = useRouter()


const { id } = route.params

const { data: vehicleData } = useAsyncData("vehicle",
    async () => {
      const {data} = await $api.vehicleService.getVehicleById(id as string)
      return data
    },
)

const { sections } = useDetailedPageRoutes()

</script>

<template>
  <div class="vehicle-page__container" v-if="vehicleData">
    <TheImage :url="vehicleData.image" class="vehicle-page__image"/>
    <div class="vehicle-page__info">
      <h1 class="vehicle-page__info-name">{{ vehicleData.name }}</h1>
      <div class="vehicle-page__navigation">
        <NuxtLink
            v-for="(section) in sections"
            :to="{ path: `/vehicles/${id}/${section.value}`}"
            :rel="section.value"
            active-class="router-link-active"
            class="vehicle-page__navigation-link"
        >
          {{ section.label }}
        </NuxtLink>
      </div>
      <Transition name="page__nested" mode="out-in">
        <div
            class="vehicle-page__info-box"
            :key="route.fullPath"
        >
          <NuxtPage
              :vehicle-data="vehicleData"
          />
          <TheRentForm
              :price="vehicleData.rent"
              class="rent-form"
          />
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
  }

  &__navigation {
    display: flex;
    flex-direction: row;

    &-link {
      font-weight: var(--font_weight_bold);
      font-size: var(--font_size_default);
      color: var(--base_300);
    }

    &-link:not(:last-child) {
      margin-right: var(--margin_specification_medium);
    }
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
    }
  }
}

.rent-form {
  margin-top: 40px;
}

.router-link-active {
  color: var(--main_400);
}

</style>

