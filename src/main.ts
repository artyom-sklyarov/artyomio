import '@/app/styles/global.scss'

import { createApp } from 'vue'
import { App } from '@/app'
import router from '@/app/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
