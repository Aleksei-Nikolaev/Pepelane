export const useShowModal = () => {
    const showModal = ref<boolean>(false)

    const handleModal = () => {
        showModal.value = !showModal.value
        document.body.classList.toggle("no-scroll")
    }

    return {
        showModal,
        handleModal
    }
}