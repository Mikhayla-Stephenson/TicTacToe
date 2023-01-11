/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import './main.scss'

// Composables
import { createApp } from 'vue'
import { createStore } from 'vuex'

// Plugins
import { registerPlugins } from '@/plugins'

const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

const app = createApp(App)
app.use(store)

registerPlugins(app)

app.mount('#app')
