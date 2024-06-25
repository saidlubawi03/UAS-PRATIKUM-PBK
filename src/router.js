import { createRouter, createWebHistory } from 'vue-router';
import Weather from './pages/Weather.vue';

const routes = [
  {
    path: '/',
    name: 'weather', // Nama rute untuk halaman Weather.vue
    component: Weather,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
