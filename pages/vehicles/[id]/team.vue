<script setup lang="ts">
import { IVehicle } from '~/types/vehicle'
import TheCollapsedText from '~/components/common/TheCollapsedText.vue'
import TheImage from '~/components/common/TheImage.vue'
import { staffMembers } from '~/constants'

defineProps<{
  vehicleData: IVehicle;
}>()
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
      <TheImage class="team__member-photo" :url="`/img/${member.id}.png`" />
      <div class="team__member-info">
        <p class="section__text-bold team__member-info-name">
          {{ member.name }}
        </p>
        <p class="section__text team__member-description">
          {{ member.title }}
        </p>
      </div>
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

      @include lg {
        white-space: pre-wrap;
        display: inline;
        width: 10%;
      }

      @include sm {
        width: 100%;
      }
    }
  }
}

.team__member {
  &-grid {
    display: flex;
    gap: 24px;

    @include sm {
      flex-direction: column;
    }
  }

  &-box {
    display: flex;
    flex: 1;
    flex-direction: column;

    @include sm {
      flex-direction: row;
    }
  }

  &-photo {
    aspect-ratio: 16 / 9;
    border-radius: var(--border_radius_tiny);

    @include sm {
      height: 80px;
      margin-right: 16px;
    }
  }

  &-info {
    @include sm {
      display: flex;
      flex-direction: column;
      justify-content: center;

      &-name,
      &-description {
        margin: 0;
      }
    }
  }
}
</style>
