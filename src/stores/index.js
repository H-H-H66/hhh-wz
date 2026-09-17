import {createPinia} from 'pina'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const store = createPinia()
store.use(piniaPluginPersistedstate)

export const setupStore = (app) => {
  app.use(store)
}

export { store }