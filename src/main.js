import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App)
    .use(VueGoogleMaps, {
        load: {
            key: 'API_KEY',
        },
    })
    .mount('#app')
