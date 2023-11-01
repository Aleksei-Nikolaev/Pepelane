<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useShowModal } from '~/composables/useVehicleWrapper/useCases/useShowModal'
import { Modals } from '~/types/Modals'

const { closeModal, modal } = useShowModal()

const modals = {
  [Modals.ADD_VEHICLE]: defineAsyncComponent(
    () => import('~/components/common/modal/TheAddVehicleModal.vue')
  )
}

const modalComponent = computed(() => {
  if (!modal.value) { return }

  return modals[modal.value]
})
</script>

<template>
  <div class="modal-overlay">
    <Transition name="modal-window">
      <Component :is="modalComponent" @close-modal="closeModal" />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 1;
}

.modal-window-enter-active,
.modal-window-leave-active {
  transition: all 0.2s linear;
}

.modal-window-leave-to,
.modal-window-enter-from {
  transform: translateX(700px);
  @include sm {
    transform: translateY(700px);
  }
}
</style>
