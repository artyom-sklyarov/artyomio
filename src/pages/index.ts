import { ContactPage } from './contact';
import { HomePage } from './home';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { transition: 'fade' }
  },
  {
    path: '/contacts',
    component: ContactPage,
    meta: { transition: 'fade' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
]
