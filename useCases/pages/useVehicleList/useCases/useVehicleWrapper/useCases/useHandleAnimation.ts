import { LoadingStatus } from '~/useCases/pages/useVehicleList/types/loadingStatus'

export const useHandleListAppearance = () => {
  const loadingStatus = ref<LoadingStatus>({
    dataIsLoaded: true,
    elementIsRemoved: true
  })

  const renderItems = computed(() => {
    return (
      loadingStatus.value.dataIsLoaded && loadingStatus.value.elementIsRemoved
    )
  })

  const resetStatus = () => {
    loadingStatus.value.dataIsLoaded = false
    loadingStatus.value.elementIsRemoved = false
  }

  const elementIsRemoved = () => (loadingStatus.value.elementIsRemoved = true)

  return {
    resetStatus,
    elementIsRemoved,
    loadingStatus,
    renderItems
  }
}
