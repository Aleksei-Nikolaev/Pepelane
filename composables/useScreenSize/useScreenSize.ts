import { useMediaQuery } from '@vueuse/core'

export const useScreenSize = () => {
  const sm = useMediaQuery('(max-width: 768px)')
  const lg = useMediaQuery('(max-width: 1200px)')

  return {
    sm,
    lg
  }
}
