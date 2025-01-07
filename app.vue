<script setup lang="ts">
import TheHeader from '~/components/common/pageSections/header/TheHeader.vue'
import TheModal from '~/components/common/modals/TheModal.vue'
import { useShowModal } from '~/useCases/modals/useShowModal'

const { showModal } = useShowModal()
</script>

<template>
  <NuxtLayout>
    <div class="content">
      <TheHeader />
      <div class="page">
        <NuxtLayout>
          <NuxtPage
              :show-modal="showModal"
              :transition="{
              name: 'page',
              mode: 'out-in',
            }"
          />
          <Transition name="modal-overlay">
            <TheModal
              v-if="showModal"
              :show-modal="showModal"
              @close-modal-window="showModal = false"
            />
          </Transition>
        </NuxtLayout>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
.content {
  width: 1440px;
  margin: 0 auto;
  padding: 48px 64px;

  @include xl {
    width: 100%;
  }
  @include sm {
    padding: 10px 10px;
  }
}
.page {
  padding-top: 40px;
  @include sm {
    padding: 16px 0;
  }
}

.modal-overlay-enter-active,
.modal-overlay-leave-active {
  transition: all 0.2s ease-out;
}

.modal-overlay-leave-to,
.modal-overlay-enter-from {
  opacity: 0.5;
}
</style>
