import { filterFactory } from '~/factories/filterFactory'

export const useDevicePageSize = () => {
  const { $device } = useNuxtApp()
  const { createFilter } = filterFactory()
  let pageSize = 9

  if ($device.isMobile) {
    pageSize = 4
  }

  if ($device.isTablet) {
    pageSize = 8
  }

  return createFilter({ pageSize })
}
