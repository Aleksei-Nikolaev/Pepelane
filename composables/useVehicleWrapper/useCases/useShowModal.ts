import { IModal } from '~/types/modal'

const showModal = ref<boolean>(false)
const modal = ref<IModal>(null)

export const useShowModal = () => {
  const openModal = (modalName: IModal) => {
    showModal.value = !showModal.value
    setTimeout(() => {
      modal.value = modalName
    }, 100)
    document.body.classList.toggle('no-scroll')
  }

  const closeModal = () => {
    modal.value = null
    setTimeout(() => {
      showModal.value = !showModal.value
      document.body.classList.toggle('no-scroll')
    }, 200)
  }

  return {
    showModal,
    modal,
    openModal,
    closeModal
  }
}
