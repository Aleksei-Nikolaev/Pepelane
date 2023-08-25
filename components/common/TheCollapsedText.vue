<script setup lang="ts">
import {DownOutlined} from "@ant-design/icons-vue";

defineProps<{
  detailedText: string
}>();

const collapsed = ref(true)

const collapseHandle = () => {
  collapsed.value = !collapsed.value
}

</script>

<template>
  <div
      class="text-container"
      :class="{ collapsed: collapsed }"
  >
    <p class="section__text">{{detailedText}}</p>
    <div v-show="collapsed" class="blur"></div>
  </div>
  <div class="collapsed__icon-container">
    <DownOutlined
        @click="collapseHandle"
        class="collapsed__icon-arrow"
        :class="{ rotated: !collapsed}"
    />
  </div>


</template>

<style scoped lang="scss">
@import "assets/styles/pages/sections.scss";

.text {
  &-container {
    margin-top: var(--margin_specification_medium);
    display: flex;
    position: relative;
    transition: max-height 0.2s ease-in-out;
    overflow: hidden;
    max-height: 500px;
  }
}

.collapsed {
  max-height: 4.8em;
  overflow: hidden;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));

  &__icon {
    &-container {
      display: flex;
      justify-content: center;
    }

    &-arrow {
      color: var(--main_400);
      font-size: 32px;
    }
  }
}

.rotated {
  transform: rotateX(180deg);
}

.blur {
  width: 100%;
  height: 4.8em;
  z-index: 1;
  position: absolute;
  left: 0px;
  bottom: 0px;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));
}


</style>