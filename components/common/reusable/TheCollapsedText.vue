<script setup lang="ts">
import { DownOutlined } from '@ant-design/icons-vue'

const props = defineProps<{
  detailedText: string;
}>()

const collapsed = ref(true)

const longText = props.detailedText.length > 250
if (!longText) collapsed.value = false

const collapseHandle = () => {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <div class="text-container" :class="{ collapsed: collapsed }">
    <p class="section__text">
      {{ detailedText }}
    </p>
    <div
      v-if="longText"
      class="blur"
      :class="{ hided: !collapsed }"
    />
  </div>
  <div class="collapsed__icon-container">
    <DownOutlined
      v-if="longText"
      class="collapsed__icon-arrow"
      :class="{ rotated: !collapsed }"
      @click="collapseHandle"
    />
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/pages/sections.scss";

.text {
  &-container {
    display: flex;
    position: relative;
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
    max-height: 500px;
  }
}

.collapsed {
  max-height: 4.8em;
  overflow: hidden;
  background-image: linear-gradient(rgba(255, 255, 255, 0), var(--base_0));

  &__icon {
    &-container {
      display: flex;
      justify-content: center;
    }

    &-arrow {
      color: var(--main_400);
      font-size: 32px;
      @include sm {
        font-size: 24px;
      }
    }
  }
}

.rotated {
  transform: rotateX(180deg);
}

.hided {
  opacity: 0;
}

.blur {
  width: 100%;
  height: 4.8em;
  z-index: 1;
  position: absolute;
  left: 0px;
  bottom: 0px;
  background-image: linear-gradient(rgba(255, 255, 255, 0), var(--base_0));
  transition: opacity 0.2s ease-in-out;
}
</style>
