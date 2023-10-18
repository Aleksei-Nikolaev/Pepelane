<script setup lang="ts">
import {IVehicle} from "~/types/vehicle";
import TheCollapsedText from "~/components/common/TheCollapsedText.vue";
import TheImage from "~/components/common/TheImage.vue";
import {staffMembers} from "~/constants/staffMembers";

defineProps<{
  vehicleData: IVehicle
}>();

</script>

<template>
  <TheCollapsedText :detailed-text="vehicleData.team_text" />
  <h2 class="section__heading">
    {{ $t("detailedPage.subHeadings.specialists") }}
  </h2>
  <div class="team__member-grid">
    <div
        v-for="member in staffMembers"
        :key="member.id"
        class="team__member-box"
    >
      <TheImage
          class="team__member-photo"
          :url="`/img/${member.id}.png`"
      />
      <p class="section__text-bold">{{ member.name }}</p>
      <p class="section__text">{{ member.title }}</p>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/pages/sections.scss";

.section {
  &__text {
    font-size: var(--font_size_smallest);
    &-bold {
      margin-bottom: 8px;
      font-size: var(--font_size_default);
    }
  }
}

.team__member {
  &-grid {
    display: flex;
    gap: 24px;
  }

  &-box {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  &-photo {
    height: 96px;
    border-radius: var(--border_radius_tiny);
  }
}


</style>