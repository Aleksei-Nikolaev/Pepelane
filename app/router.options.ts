import type { RouterConfig } from '@nuxt/schema'
import { RouteLocationNormalized } from 'vue-router'

const includedRoutes = ['/vehicles/:id()']
const checkForBehaviour = (route: RouteLocationNormalized) => {
  return route.matched.some((e) => {
    return includedRoutes.includes(e.path)
  })
}

export default <RouterConfig>{
  scrollBehavior (_to, _from) {
    if (checkForBehaviour(_to) && checkForBehaviour(_from)) { return { x: false, y: false, behavior: 'smooth' } }
  }
}
