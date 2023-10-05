const showModal = ref<boolean>(false)

export const useShowModal = () => {

    const handleModal = () => {
        showModal.value = !showModal.value
        document.body.classList.toggle("no-scroll")
    }

    return {
        showModal,
        handleModal
    }
}