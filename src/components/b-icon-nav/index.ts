import { App } from 'vue'
import BIconNav from './b-icon-nav.vue'

BIconNav.install = (app: App) => {
  app.component(BIconNav.name, BIconNav)
}
export default BIconNav