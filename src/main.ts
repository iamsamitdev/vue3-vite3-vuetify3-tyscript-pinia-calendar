import { createApp } from 'vue'

// Vuetify
import { vuetify } from './plugins/vuetify'

// Date Picker
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// Import Root Component
import App from './App.vue'

// Import Pinia
import { createPinia } from 'pinia'

// Import Router
import router from './router/index'

const app = createApp(App)

app.component('Datepicker', Datepicker)

app.use(vuetify)
app.use(createPinia())
app.use(router)
app.mount('#app')