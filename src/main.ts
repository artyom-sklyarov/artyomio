import '@/app/styles/global.scss'

import { createApp } from 'vue'
import { App } from '@/app'
import router from '@/app/router'

const app = createApp(App)

router.afterEach((to) => {
  document.title = to.meta.title as string || 'Default Title';
});

app.use(router)

app.mount('#app')
