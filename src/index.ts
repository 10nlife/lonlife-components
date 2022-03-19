import { App } from 'vue'

import BIconNav from './components/b-icon-nav'

const components = [
  BIconNav
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  BIconNav,
  install
}
export default {
  install
}