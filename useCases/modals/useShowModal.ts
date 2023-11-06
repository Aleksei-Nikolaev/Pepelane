import { IModal } from '~/useCases/modals/types/modal'

const showModal = ref<boolean>(false)
const modal = ref<IModal>(null)

export const useShowModal = () => {
  const toggleScrollClass = () => {
    document.body.classList.toggle('no-scroll')
  }

  const openModal = (modalName: IModal) => {
    showModal.value = true
    setTimeout(() => {
      modal.value = modalName
    }, 100)
    toggleScrollClass()
  }

  const closeModal = () => {
    modal.value = null
    setTimeout(() => {
      showModal.value = false
      toggleScrollClass()
    }, 200)
  }

  return {
    showModal,
    modal,
    openModal,
    closeModal
  }
}
