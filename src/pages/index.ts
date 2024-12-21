import { ContactPage } from './contact';
import { HomePage } from './home';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { transition: 'fade', title: 'Artyom Sklyarov | Web developer' }
  },
  {
    path: '/contacts',
    component: ContactPage,
    meta: { transition: 'fade', title: 'Contact Me | Artyom Sklyarov' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
]
