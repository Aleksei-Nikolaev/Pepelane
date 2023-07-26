<script setup lang="ts">
import {$api} from "~/plugins/api";
import TheImage from "~/components/common/TheImage.vue";
import TheSectionSelection from "~/components/common/vehicleDetailedPage/TheSectionSelection.vue";
import {infoSections} from "~/constants/infoSections";

const route = useRoute()
const router = useRouter()

const { id } = route.params

const { data: vehicleData } = useAsyncData("vehicle",
    async () => {
      const {data} = await $api.vehicleService.getVehicleById(id as string)
      return data
    },
)

const sectionName = ref<string>(infoSections[0].value)

const changeSection = async (event: any) => {
  // router.push({ path: `/${event.target?.value}` });
  await navigateTo(`/${event.target?.value}`)
  console.log(event.target?.value)
}

</script>

<template>
  <div class="vehicle-page__container" v-if="vehicleData">
    <TheImage :url="vehicleData.image" class="vehicle-page__image" />
    <div class="vehicle-page__info">
      <h1 class="vehicle-page__info-name">{{ vehicleData.name }}</h1>
      <TheSectionSelection
          :section-name="sectionName"
          @change="changeSection"
      />
      <NuxtPage
          :vehicle-data="vehicleData"
      />
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